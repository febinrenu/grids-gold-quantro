<?php if(session('error') && (str_contains(session('error'), 'not available in your current plan') || str_contains(session('error'), 'allowed by your current plan'))): ?>
<div id="upgrade-prompt-overlay">
    <div class="upgrade-modal-box">
        <div class="upgrade-modal-icon">
            <svg width="32" height="32" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01M5.07 19h13.86c1.5 0 2.47-1.6 1.73-2.88L13.73 4.24c-.74-1.28-2.72-1.28-3.46 0L3.34 16.12C2.6 17.4 3.57 19 5.07 19z"/></svg>
        </div>
        <h2 class="upgrade-modal-title"><?php echo e(__('central.UpgradeRequired')); ?></h2>
        <p class="upgrade-modal-message"><?php echo e(session('error')); ?></p>
        <div class="upgrade-modal-actions">
            <a href="<?php echo e(route('billing.plans')); ?>" class="upgrade-modal-btn-primary">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>
                <?php echo e(__('central.ViewPlans')); ?>

            </a>
            <button id="upgrade-prompt-dismiss" class="upgrade-modal-btn-dismiss">
                <?php echo e(__('central.Dismiss')); ?>

            </button>
        </div>
    </div>
</div>
<?php endif; ?>
<script src="<?php echo e(global_asset('assets_super/js/plan-upgrade-modal.js')); ?>"></script>
<?php /**PATH C:\Users\fkr77\Downloads\gridsgoldcode\resources\views/partials/plan-upgrade-modal.blade.php ENDPATH**/ ?>