<?php

namespace App\Services;

use App\Models\AuditLog;

class AuditLogService
{
    public function log(string $auditableType, int $auditableId, string $action, ?array $oldValues, ?array $newValues, ?int $userId): AuditLog
    {
        return AuditLog::create([
            'auditable_type' => $auditableType,
            'auditable_id' => $auditableId,
            'action' => $action,
            'old_values' => $oldValues,
            'new_values' => $newValues,
            'user_id' => $userId,
        ]);
    }
}
