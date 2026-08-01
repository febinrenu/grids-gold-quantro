<!DOCTYPE html>
<?php
    $isRtl = in_array(app()->getLocale(), ['ar', 'he', 'fa', 'ur']);
    $generalSettings = \App\Models\Central\GeneralSetting::instance();
    $appName = $generalSettings->app_name ?: 'Stocky';
?>
<html lang="<?php echo e(app()->getLocale()); ?>" <?php if($isRtl): ?> dir="rtl" <?php endif; ?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta name="description" content="<?php echo e(__('landing.create_workspace')); ?> — <?php echo e($appName); ?>">
    <title><?php echo e(__('landing.create_workspace')); ?> — <?php echo e($appName); ?></title>
    <?php $faviconUrl = $generalSettings->getFaviconUrl(); ?>
    <link rel="icon" href="<?php echo e($faviconUrl ?: asset('images/super/settings/favicon.ico')); ?>" type="image/x-icon">
    <link href="<?php echo e(asset('assets_super/css/plus-jakarta-sans.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(asset('assets_super/css/register.css')); ?>" rel="stylesheet">
</head>
<body>

    
    <div class="reg-hero">
        <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
        </div>
        <div class="hero-content">
            <div class="hero-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            </div>
            <h2><?php echo e(__('landing.launch_title')); ?></h2>
            <p><?php echo e(__('landing.launch_desc')); ?></p>

            <div class="hero-features">
                <?php $__currentLoopData = [
                    'feat_subdomain',
                    'feat_pos',
                    'feat_warehouse',
                    'feat_ready',
                ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $featKey): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="feat">
                    <div class="feat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                    </div>
                    <span class="feat-text"><?php echo e(__('landing.' . $featKey)); ?></span>
                </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </div>

    
    <div class="reg-panel">
        <div class="reg-form-wrapper">

            <a class="brand-logo" href="<?php echo e(route('central.welcome')); ?>">
                <div class="logo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                </div>
                <span><?php echo e($appName); ?></span>
            </a>

            <div class="form-heading">
                <h1><?php echo e(__('landing.create_workspace')); ?></h1>
                <p><?php echo e(__('landing.reg_subtitle')); ?></p>
            </div>

            <div class="steps-bar">
                <div class="step-dot active"></div>
                <div class="step-dot active"></div>
                <div class="step-dot active"></div>
            </div>

            <?php if($errors->any()): ?>
                <div class="reg-alert">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <div class="reg-alert-body">
                        <ul>
                            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <li><?php echo e($error); ?></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </div>
                </div>
            <?php endif; ?>

            <form method="POST" action="<?php echo e(route('central.register.submit')); ?>" id="register-form" autocomplete="on">
                <?php echo csrf_field(); ?>

                
                <div class="form-group">
                    <label for="subdomain"><?php echo e(__('landing.subdomain')); ?></label>
                    <div class="input-wrapper">
                        <div class="subdomain-preview <?php echo e($errors->has('subdomain') ? 'is-invalid' : ''); ?>">
                            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="2" y1="12" x2="22" y2="12"/>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                            <input
                                id="subdomain"
                                name="subdomain"
                                type="text"
                                value="<?php echo e(old('subdomain')); ?>"
                                required
                                placeholder="your-company"
                                pattern="[a-z0-9][a-z0-9\-]*[a-z0-9]|[a-z0-9]"
                                autocomplete="off"
                            >
                            <span class="subdomain-suffix">.<?php echo e(preg_replace('/^www\./i', '', parse_url(config('app.url'), PHP_URL_HOST) ?? 'localhost')); ?></span>
                        </div>
                    </div>
                    <p class="field-hint"><?php echo e(__('landing.subdomain_hint_reg')); ?></p>
                    <?php $__errorArgs = ['subdomain'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="field-error"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                </div>

                
                <div class="form-group">
                    <label for="company_name"><?php echo e(__('landing.company_name')); ?></label>
                    <div class="input-wrapper">
                        <input
                            id="company_name"
                            name="company_name"
                            type="text"
                            class="<?php echo e($errors->has('company_name') ? 'is-invalid' : ''); ?>"
                            value="<?php echo e(old('company_name')); ?>"
                            required
                            placeholder="Acme Inc."
                        >
                        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                    </div>
                    <?php $__errorArgs = ['company_name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="field-error"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                </div>

                
                <div class="form-group">
                    <label for="admin_email"><?php echo e(__('landing.admin_email')); ?></label>
                    <div class="input-wrapper">
                        <input
                            id="admin_email"
                            name="admin_email"
                            type="email"
                            class="<?php echo e($errors->has('admin_email') ? 'is-invalid' : ''); ?>"
                            value="<?php echo e(old('admin_email')); ?>"
                            required
                            autocomplete="email"
                            placeholder="you@company.com"
                        >
                        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                    </div>
                    <?php $__errorArgs = ['admin_email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="field-error"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                </div>

                
                <div class="form-group">
                    <label for="owner_phone"><?php echo e(__('landing.owner_phone')); ?></label>
                    <div class="input-wrapper">
                        <input
                            id="owner_phone"
                            name="owner_phone"
                            type="tel"
                            class="<?php echo e($errors->has('owner_phone') ? 'is-invalid' : ''); ?>"
                            value="<?php echo e(old('owner_phone')); ?>"
                            autocomplete="tel"
                            placeholder="+1 555 123 4567"
                        >
                        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </div>
                    <p class="field-hint"><?php echo e(__('landing.owner_phone_hint')); ?></p>
                    <?php $__errorArgs = ['owner_phone'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="field-error"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                </div>

                
                <div class="form-row">
                    <div class="form-group">
                        <label for="admin_password"><?php echo e(__('landing.password')); ?></label>
                        <div class="input-wrapper">
                            <input
                                id="admin_password"
                                name="admin_password"
                                type="password"
                                class="<?php echo e($errors->has('admin_password') ? 'is-invalid' : ''); ?>"
                                required
                                minlength="8"
                                autocomplete="new-password"
                                placeholder="<?php echo e(__('landing.min_chars')); ?>"
                            >
                            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            <button type="button" class="toggle-password" data-target="admin_password" aria-label="Toggle password">
                                <svg class="eye-open" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                                <svg class="eye-closed" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                                    <path d="m14.12 14.12a3 3 0 1 1-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            </button>
                        </div>
                        <?php $__errorArgs = ['admin_password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="field-error"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    <div class="form-group">
                        <label for="admin_password_confirmation"><?php echo e(__('landing.confirm_password')); ?></label>
                        <div class="input-wrapper">
                            <input
                                id="admin_password_confirmation"
                                name="admin_password_confirmation"
                                type="password"
                                required
                                autocomplete="new-password"
                                placeholder="<?php echo e(__('landing.repeat')); ?>"
                            >
                            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                    </div>
                </div>

                
                <?php if($plans->isNotEmpty()): ?>
                <?php $starterPlan = $plans->firstWhere('slug', 'starter'); ?>
                <div class="form-group">
                    <label for="plan_id"><?php echo e(__('landing.plan')); ?></label>
                    <div class="input-wrapper">
                        <select
                            id="plan_id"
                            name="plan_id"
                            class="<?php echo e($errors->has('plan_id') ? 'is-invalid' : ''); ?>"
                        >
                            <option value=""
                                    data-free="<?php echo e(!$starterPlan || $starterPlan->isFree() ? '1' : '0'); ?>"
                                    data-price="<?php echo e($starterPlan->price ?? 0); ?>"
                                    data-yearly="<?php echo e($starterPlan ? $starterPlan->getPriceForCycle('yearly') : 0); ?>">
                                <?php if(!$starterPlan || $starterPlan->isFree()): ?>
                                    <?php echo e(__('landing.default_plan')); ?>

                                <?php else: ?>
                                    <?php echo e($starterPlan->name); ?> — <?php echo e($currencySymbol); ?><?php echo e(number_format($starterPlan->price, 2)); ?>/mo
                                <?php endif; ?>
                            </option>
                            <?php $__currentLoopData = $plans->where('slug', '!=', 'starter'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $plan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($plan->id); ?>"
                                        data-free="<?php echo e($plan->isFree() ? '1' : '0'); ?>"
                                        data-price="<?php echo e($plan->price); ?>"
                                        data-yearly="<?php echo e($plan->getPriceForCycle('yearly')); ?>"
                                        <?php echo e(old('plan_id', request('plan')) == $plan->id ? 'selected' : ''); ?>>
                                    <?php echo e($plan->name); ?> — <?php echo e($currencySymbol); ?><?php echo e(number_format($plan->price, 2)); ?>/mo
                                </option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                            <line x1="1" y1="10" x2="23" y2="10"/>
                        </svg>
                    </div>
                    <?php $__errorArgs = ['plan_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="field-error"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                </div>

                
                <div class="form-group cycle-group" id="billing-cycle-group">
                    <label><?php echo e(__('landing.billing_cycle')); ?></label>
                    <div class="cycle-options">
                        <label class="cycle-option">
                            <input type="radio" name="billing_cycle" value="monthly" class="billing-cycle-radio" <?php echo e(old('billing_cycle', 'monthly') === 'monthly' ? 'checked' : ''); ?>>
                            <div class="cycle-card">
                                <span class="cycle-name"><?php echo e(__('landing.monthly')); ?></span>
                                <span class="cycle-price" id="monthly-price"></span>
                            </div>
                        </label>
                        <label class="cycle-option">
                            <input type="radio" name="billing_cycle" value="yearly" class="billing-cycle-radio" <?php echo e(old('billing_cycle') === 'yearly' ? 'checked' : ''); ?>>
                            <div class="cycle-card">
                                <span class="cycle-name"><?php echo e(__('landing.yearly')); ?></span>
                                <span class="cycle-price" id="yearly-price"></span>
                            </div>
                        </label>
                    </div>
                </div>
                <?php endif; ?>

                <button type="submit" class="btn-register" id="btn-register">
                    <span class="btn-text"><?php echo e(__('landing.create_workspace_btn')); ?></span>
                    <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                    </svg>
                    <span class="spinner"></span>
                </button>
            </form>

            <a class="back-home" href="<?php echo e(route('central.welcome')); ?>">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/>
                    <polyline points="12 19 5 12 12 5"/>
                </svg>
                <?php echo e(__('landing.back_to_homepage')); ?>

            </a>

            <div class="reg-footer">
                &copy; <?php echo e(date('Y')); ?> <?php echo e($appName); ?>. All rights reserved.
            </div>
        </div>
    </div>

    <script>window.RegisterConfig = { currencySymbol: <?php echo json_encode($currencySymbol, 15, 512) ?> };</script>
    <script src="<?php echo e(asset('assets_super/js/register.js')); ?>"></script>
</body>
</html>
<?php /**PATH /home/quantrocousr/public_html/resources/views/central/register.blade.php ENDPATH**/ ?>