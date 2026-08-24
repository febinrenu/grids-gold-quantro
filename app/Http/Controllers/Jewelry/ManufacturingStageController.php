<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingOrder;
use App\Models\ManufacturingOrderStage;
use App\Models\ManufacturingTimeLog;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManufacturingStageController extends BaseController
{
    /**
     * Get stages and time logs for a manufacturing order.
     */
    public function stages($id)
    {
        $stages = ManufacturingOrderStage::with(['employee', 'timeLogs.employee'])
            ->where('manufacturing_order_id', $id)
            ->orderBy('sequence', 'asc')
            ->get();

        return response()->json($stages);
    }

    /**
     * Assign employee to a stage.
     */
    public function assignWorker(Request $request, $id, $stageId)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
        ]);

        $stage = ManufacturingOrderStage::where('manufacturing_order_id', $id)
            ->findOrFail($stageId);

        $stage->update([
            'assigned_employee_id' => $request->employee_id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Worker successfully assigned to the stage.',
            'stage' => $stage->load('employee')
        ]);
    }

    /**
     * Update the status of a stage with transition rules.
     */
    public function updateStatus(Request $request, $id, $stageId)
    {
        $request->validate([
            'status' => 'required|in:pending,in_progress,completed,rejected',
            'notes' => 'nullable|string',
        ]);

        $stage = ManufacturingOrderStage::where('manufacturing_order_id', $id)
            ->findOrFail($stageId);

        $oldStatus = $stage->status;
        $newStatus = $request->status;

        if ($oldStatus === $newStatus) {
            return response()->json([
                'success' => false,
                'message' => 'Stage is already in status ' . $newStatus
            ], 422);
        }

        // Transition validations
        if ($newStatus === 'in_progress') {
            if ($oldStatus !== 'pending' && $oldStatus !== 'rejected') {
                return response()->json([
                    'success' => false,
                    'message' => "Invalid transition from {$oldStatus} to {$newStatus}."
                ], 422);
            }

            // Sequence validation: previous sequence must be completed
            if ($stage->sequence > 1) {
                $prevStage = ManufacturingOrderStage::where('manufacturing_order_id', $id)
                    ->where('sequence', $stage->sequence - 1)
                    ->first();
                if (!$prevStage || $prevStage->status !== 'completed') {
                    return response()->json([
                        'success' => false,
                        'message' => 'Cannot start this stage before the previous stage is completed.'
                    ], 422);
                }
            }
        } elseif ($newStatus === 'completed') {
            if ($oldStatus !== 'in_progress') {
                return response()->json([
                    'success' => false,
                    'message' => "Invalid transition from {$oldStatus} to {$newStatus}. Stage must be in_progress to complete."
                ], 422);
            }
        } elseif ($newStatus === 'rejected') {
            if ($oldStatus !== 'in_progress') {
                return response()->json([
                    'success' => false,
                    'message' => "Invalid transition from {$oldStatus} to {$newStatus}. Only active stages can be rejected."
                ], 422);
            }
        }

        // Perform update
        $updateData = ['status' => $newStatus];
        if ($request->has('notes')) {
            $updateData['notes'] = $request->notes;
        }

        if ($newStatus === 'in_progress' && !$stage->started_at) {
            $updateData['started_at'] = now();
        } elseif ($newStatus === 'completed') {
            $updateData['completed_at'] = now();

            // Also update order status if all stages completed
            $allStages = ManufacturingOrderStage::where('manufacturing_order_id', $id)->get();
            $allCompleted = true;
            foreach ($allStages as $s) {
                if ($s->id === $stage->id) {
                    continue;
                }
                if ($s->status !== 'completed') {
                    $allCompleted = false;
                }
            }
            if ($allCompleted) {
                ManufacturingOrder::where('id', $id)->update(['status' => 'completed']);
            }
        }

        $stage->update($updateData);

        return response()->json([
            'success' => true,
            'message' => "Stage status updated to {$newStatus}.",
            'stage' => $stage
        ]);
    }

    /**
     * Start a time log timer for the stage.
     */
    public function startTimer(Request $request, $id, $stageId)
    {
        $stage = ManufacturingOrderStage::where('manufacturing_order_id', $id)
            ->findOrFail($stageId);

        // Make sure employee is assigned
        if (!$stage->assigned_employee_id) {
            return response()->json([
                'success' => false,
                'message' => 'No worker is assigned to this stage.'
            ], 422);
        }

        // Prevent duplicate active timer on this stage
        $activeTimer = ManufacturingTimeLog::where('manufacturing_order_stage_id', $stageId)
            ->whereNull('ended_at')
            ->exists();
        if ($activeTimer) {
            return response()->json([
                'success' => false,
                'message' => 'There is already an active timer running on this stage.'
            ], 422);
        }

        // Prevent conflicting active timer for this employee across any stage
        $employeeActiveTimer = ManufacturingTimeLog::where('employee_id', $stage->assigned_employee_id)
            ->whereNull('ended_at')
            ->exists();
        if ($employeeActiveTimer) {
            return response()->json([
                'success' => false,
                'message' => 'This worker already has an active timer running.'
            ], 422);
        }

        // Create time log
        $log = ManufacturingTimeLog::create([
            'manufacturing_order_id' => $id,
            'manufacturing_order_stage_id' => $stageId,
            'employee_id' => $stage->assigned_employee_id,
            'started_at' => now(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Timer started successfully.',
            'log' => $log
        ]);
    }

    /**
     * Stop the active timer for the stage.
     */
    public function stopTimer(Request $request, $id, $stageId)
    {
        $stage = ManufacturingOrderStage::where('manufacturing_order_id', $id)
            ->findOrFail($stageId);

        // Find the active log
        $log = ManufacturingTimeLog::where('manufacturing_order_stage_id', $stageId)
            ->whereNull('ended_at')
            ->first();

        if (!$log) {
            return response()->json([
                'success' => false,
                'message' => 'No active timer found on this stage.'
            ], 422);
        }

        $employee = Employee::findOrFail($log->employee_id);
        $hourlyRate = (double) ($employee->hourly_rate ?? 0);

        $startedAt = $log->started_at;
        $endedAt = now();
        $durationSeconds = $endedAt->timestamp - $startedAt->timestamp;
        if ($durationSeconds < 0) {
            $durationSeconds = 0;
        }

        $durationHours = $durationSeconds / 3600.0;
        $laborCost = $durationHours * $hourlyRate;

        $log->update([
            'ended_at' => $endedAt,
            'duration_seconds' => $durationSeconds,
            'labor_cost' => round($laborCost, 2),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Timer stopped successfully.',
            'log' => $log
        ]);
    }
}
