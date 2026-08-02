<?php
// Task 1.9 — not tied to an Eloquent model, so it gets no line in
// AuthServiceProvider's $policies array. Person B's JewelryPricingController
// checks it directly, e.g.:
//   $this->authorizeForUser($request->user('api'), 'override', [\App\Policies\JewelryPricingPolicy::class]);
// or via Gate::forUser($user)->allows('jewelry_pricing_override').
// Flag this note to Person B so they don't go looking for a model mapping
// that isn't supposed to exist.

namespace App\Policies;

use App\Models\Permission;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class JewelryPricingPolicy
{
    use HandlesAuthorization;

    public function override(User $user)
    {
        $permission = Permission::where('name', 'jewelry_pricing_override')->first();

        return $permission && $user->hasRole($permission->roles);
    }
}
