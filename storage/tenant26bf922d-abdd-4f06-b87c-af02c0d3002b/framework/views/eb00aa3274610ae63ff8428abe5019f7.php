<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="stylesheet" href="/css/master.css">
    <link rel="icon" href="<?php echo e(global_asset(upload_path('settings') . '/' . ($app_settings->favicon ?? 'favicon.ico'))); ?>">
    <title><?php echo e($app_settings->app_name ?? 'Stocky | Ultimate Inventory With POS'); ?></title>

    
    <link rel="manifest" href="/pwa/app.webmanifest">
    <meta name="theme-color" content="#2f3640">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="<?php echo e($app_settings->app_name ?? 'Stocky'); ?>">
    <link rel="apple-touch-icon" href="<?php echo e(pwa_icon_url(192)); ?>">

  </head>

  <body class="text-left">
    <noscript>
      <strong>
        We're sorry but Stocky doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>

    <!-- built files will be auto injected -->
    <div class="loading_wrap" id="loading_wrap">

      <div class="loading"></div>
    </div>
    <div id="app">
      <script src="/assets_setup/js/qrcode.js"></script>

    </div>

    <?php
        $__planSummary = app(\App\Services\TenantLimitsService::class)->getPlanSummary();
    ?>
    <script>
        window.__planSummary = <?php echo json_encode($__planSummary, 15, 512) ?>;
        window.__uploadPath = '<?php echo e(upload_path()); ?>';
        window.__appName = <?php echo json_encode($app_settings->app_name ?? 'Stocky', 15, 512) ?>;
        window.__pageTitleSuffix = <?php echo json_encode($app_settings->page_title_suffix ?? 'Ultimate Inventory With POS', 15, 512) ?>;
    </script>


    <script src="/js/main.min.js?v=1.2&v=<?php echo e(time()); ?>"></script>

    <?php echo $__env->make('partials.plan-upgrade-modal', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('partials.subscription-reminder-banner', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
  </body>
</html>
<?php /**PATH /home/quantrocousr/public_html/resources/views/layouts/master.blade.php ENDPATH**/ ?>