<?php

namespace App\Policies;

use App\Models\Permission;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * Shared base for the SRS-domain resource policies (app/Policies/Jewelry/*).
 * One Permission row per resource (name = table name) gates all of
 * view/create/update/delete, matching the single-permission-per-resource
 * convention already used by CategoryPolicy/WhatsappTemplatePolicy rather
 * than the older per-verb (users_view/users_edit/...) convention.
 */
abstract class JewelryResourcePolicy
{
    use HandlesAuthorization;

    abstract protected function permissionName(): string;

    protected function allowed(User $user): bool
    {
        $permission = Permission::where('name', $this->permissionName())->first();

        return $permission && $user->hasRole($permission->roles);
    }

    public function viewAny(User $user)
    {
        return $this->allowed($user);
    }

    public function view(User $user)
    {
        return $this->allowed($user);
    }

    public function create(User $user)
    {
        return $this->allowed($user);
    }

    public function update(User $user)
    {
        return $this->allowed($user);
    }

    public function delete(User $user)
    {
        return $this->allowed($user);
    }
}
