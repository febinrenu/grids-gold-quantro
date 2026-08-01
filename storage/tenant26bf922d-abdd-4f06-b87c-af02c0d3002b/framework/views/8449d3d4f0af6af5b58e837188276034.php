<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/css/master.css">
    <link rel="stylesheet" href="<?php echo e(global_asset('css/auth.css')); ?>">
    <link rel="icon" href="<?php echo e(global_asset(upload_path('settings') . '/' . ($app_settings->favicon ?? 'favicon.ico'))); ?>">
    <title><?php echo e($app_settings->app_name ?? 'Stocky | Ultimate Inventory With POS'); ?></title>
  </head>

  <body class="auth-login">
    <div class="auth-page">
      <section class="auth-hero">
        <div class="hero-content">
          <h1 class="hero-title"><?php echo e($app_settings->login_hero_title ?? 'Welcome back!'); ?></h1>
          <p class="hero-subtitle">
            <?php echo e($app_settings->login_hero_subtitle ?? 'Sign in to access your account and keep your operations in sync.'); ?>

          </p>
        </div>
      </section>

      <section class="auth-panel">
        <div class="auth-panel-inner">
          <header>
            <h2 class="panel-title"><?php echo e($app_settings->login_panel_title ?? 'Sign In'); ?></h2>
            <p class="panel-subtitle">
              <?php echo e($app_settings->login_panel_subtitle ?? 'Access your dashboard and manage everything from one place.'); ?>

            </p>
          </header>

          <?php if(session('status')): ?>
          <div class="auth-alert success"><?php echo e(session('status')); ?></div>
          <?php endif; ?>

          <?php if($errors->any()): ?>
          <div class="auth-alert error">
            <ul>
              <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
              <li><?php echo e($error); ?></li>
              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
          </div>
          <?php endif; ?>

          <form id="login_form" method="POST" action="<?php echo e(route('login')); ?>">
            <?php echo csrf_field(); ?>
            <div class="field">
              <label for="email">Email</label>
              <div class="input-shell">
                <span class="input-addon">@</span>
                <input id="email" type="email" name="email" value="<?php echo e(old('email')); ?>" placeholder="you@company.com" required />
              </div>
            </div>

            <div class="field">
              <label for="password">Password</label>
              <div class="input-shell">
                <span class="input-addon">••</span>
                <input id="password" type="password" name="password" placeholder="Enter your password" required />
                <button type="button" class="toggle-password" data-target="password">Show</button>
              </div>
            </div>

            <div class="form-meta">
              <a class="auth-link" href="<?php echo e(route('password.request')); ?>">Forgot password?</a>
            </div>

            <button type="submit" class="auth-btn" id="login_submit_btn">
              <span class="btn-text">Sign In</span>
              <span class="btn-loading"><span class="spinner"></span>Verifying</span>
            </button>
          </form>
        </div>
      </section>
    </div>

    <script src="<?php echo e(global_asset('assets_super/js/auth-login.js')); ?>"></script>
  </body>
</html>
<?php /**PATH /home/quantrocousr/public_html/resources/views/auth/login.blade.php ENDPATH**/ ?>