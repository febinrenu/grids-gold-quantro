<?php
// Task 1.9 — copied exactly in structure from the real
// app/Policies/CurrencyPolicy.php (confirmed by reading it directly).
// Real permission-check pattern in this codebase is NOT $user->can('x') —
// it's: look up the Permission row by name, then check $user->hasRole()
// against that permission's assigned roles.

namespace App\Policies;

use App\Models\Permission;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class GoldRatePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user)
    {
        $permission = Permission::where('name', 'gold_rates_view')->first();

        return $permission && $user->hasRole($permission->roles);
    }

    public function create(User $user)
    {
        $permission = Permission::where('name', 'gold_rates_manage')->first();

        return $permission && $user->hasRole($permission->roles);
    }

    public function approve(User $user)
    {
        $permission = Permission::where('name', 'gold_rates_approve')->first();

        return $permission && $user->hasRole($permission->roles);
    }

    public function update(User $user)
    {
        //  Not applicable — gold_rates is insert-only, there is no "edit a rate."
        return false;
    }

    public function delete(User $user)
    {
        //
    }

    public function restore(User $user)
    {
        //
    }

    public function forceDelete(User $user)
    {
        //
    }
}
