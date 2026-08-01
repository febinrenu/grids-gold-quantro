<?php $__env->startSection('content'); ?>

<?php
  /** @var \App\Models\StoreSetting $s */
  $currency = $s->currency_code ?? '$';
  $nlBtn    = __('messages.Subscribe');
  /** @var \Illuminate\Support\Collection $banners */
  $byPos = collect($banners ?? [])->groupBy('position');
  $printedCenter = false;

  $renderBanners = function($list, $wrapClass = 'block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow') {
      foreach ($list ?? collect() as $b) {
          $src  = $b->image_url ?? ($b->image ? global_asset($b->image) : global_asset(upload_path('banners') . '/no-image.png'));
          $href = $b->link ?: route('store.shop');
          echo '<a href="'.e($href).'" class="'.e($wrapClass).'"><img src="'.e($src).'" class="w-full h-auto object-cover" alt="'.e($b->title ?? __('messages.Banner')).'"></a>';
      }
  };
?>


<?php if(($byPos['top_left'] ?? collect())->count() || ($byPos['top_right'] ?? collect())->count()): ?>
  <section class="py-6">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div><?php echo $renderBanners($byPos['top_left'] ?? collect()); ?></div>
        <div><?php echo $renderBanners($byPos['top_right'] ?? collect()); ?></div>
      </div>
    </div>
  </section>
<?php endif; ?>

<?php $__empty_1 = true; $__currentLoopData = $blocks ?? []; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $block): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
  <?php switch($block['type']):

    case ('hero'): ?>
      <?php
        $heroImg = $block['image'] ?? $s->hero_image_path;
        $heroUrl = 'https://picsum.photos/seed/hero-store/960/520';
        if (!empty($heroImg) && is_string($heroImg) && !\Illuminate\Support\Str::startsWith($heroImg, ['http://', 'https://']) && file_exists(public_path($heroImg))) {
            $heroUrl = global_asset($heroImg);
        } elseif (file_exists(public_path('store_files/hero_image.jpg'))) {
            $heroUrl = global_asset('store_files/hero_image.jpg');
        }
      ?>
      <section class="py-12 lg:py-16 relative overflow-hidden"
               style="background:
                 radial-gradient(1200px 360px at 15% 50%, rgb(var(--color-accent-500) / .10) 0%, transparent 55%),
                 radial-gradient(900px 280px at 85% 50%, rgb(var(--color-accent-500) / .06) 0%, transparent 55%);">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span class="section-kicker"><?php echo e(__('messages.Shop')); ?></span>
              <h1 class="mt-3 mb-4 text-4xl lg:text-5xl font-bold tracking-tight text-fg-primary">
                <?php echo e($block['title'] ?? $s->hero_title); ?>

              </h1>
              <p class="section-subtitle mb-6 max-w-xl">
                <?php echo e($block['subtitle'] ?? $s->hero_subtitle); ?>

              </p>
              <a href="<?php echo e(route('store.shop')); ?>" class="btn btn-primary btn-lg">
                <?php if (isset($component)) { $__componentOriginal20d0f02a197ba5f09810c743e2b069f7 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal20d0f02a197ba5f09810c743e2b069f7 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.store.icon','data' => ['name' => 'lightning','class' => 'w-5 h-5']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('store.icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['name' => 'lightning','class' => 'w-5 h-5']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal20d0f02a197ba5f09810c743e2b069f7)): ?>
<?php $attributes = $__attributesOriginal20d0f02a197ba5f09810c743e2b069f7; ?>
<?php unset($__attributesOriginal20d0f02a197ba5f09810c743e2b069f7); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal20d0f02a197ba5f09810c743e2b069f7)): ?>
<?php $component = $__componentOriginal20d0f02a197ba5f09810c743e2b069f7; ?>
<?php unset($__componentOriginal20d0f02a197ba5f09810c743e2b069f7); ?>
<?php endif; ?><?php echo e(__('messages.ShopNow')); ?>

              </a>
            </div>
            <div class="relative">
              <div class="rounded-xl overflow-hidden shadow-lg border border-line-subtle">
                <img class="w-full h-auto object-cover max-h-[420px]" src="<?php echo e($heroUrl); ?>" alt="Hero">
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <?php if(!$printedCenter && ( ($byPos['center_left'] ?? collect())->count() || ($byPos['center_right'] ?? collect())->count() )): ?>
        <section class="py-6">
          <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div><?php echo $renderBanners($byPos['center_left'] ?? collect()); ?></div>
              <div><?php echo $renderBanners($byPos['center_right'] ?? collect()); ?></div>
            </div>
          </div>
        </section>
        <?php $printedCenter = true; ?>
      <?php endif; ?>
      <?php break; ?>

    <?php case ('collection'): ?>
      <?php
        $col   = $block['collection'];
        $prods = $block['products'] ?? collect();
        $title = $block['title'] ?? ($col->title ?? $col->name ?? __('messages.Collection'));
      ?>

      <?php if($prods->count()): ?>
      <section class="py-10 lg:py-14">
        <div class="container">
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <div>
              <span class="section-kicker"><?php echo e(__('messages.Collection')); ?></span>
              <h2 class="section-title mt-1"><?php echo e($title); ?></h2>
            </div>
            <a class="text-sm font-medium text-accent-500 hover:underline inline-flex items-center gap-1"
               href="<?php echo e(route('store.shop', ['collection' => $col->slug])); ?>">
              <?php echo e(__('messages.ViewAll')); ?>

              <?php if (isset($component)) { $__componentOriginal20d0f02a197ba5f09810c743e2b069f7 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal20d0f02a197ba5f09810c743e2b069f7 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.store.icon','data' => ['name' => 'arrow-right','class' => 'w-4 h-4']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('store.icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['name' => 'arrow-right','class' => 'w-4 h-4']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal20d0f02a197ba5f09810c743e2b069f7)): ?>
<?php $attributes = $__attributesOriginal20d0f02a197ba5f09810c743e2b069f7; ?>
<?php unset($__attributesOriginal20d0f02a197ba5f09810c743e2b069f7); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal20d0f02a197ba5f09810c743e2b069f7)): ?>
<?php $component = $__componentOriginal20d0f02a197ba5f09810c743e2b069f7; ?>
<?php unset($__componentOriginal20d0f02a197ba5f09810c743e2b069f7); ?>
<?php endif; ?>
            </a>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <?php $__currentLoopData = $prods; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
              <?php echo $__env->make('store.partials.product-card', ['p' => $p, 'currency' => $currency], array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          </div>
        </div>
      </section>
      <?php endif; ?>
      <?php break; ?>

    <?php case ('newsletter'): ?>
      <?php
        $nlTitle       = $s->newsletter_title       ?? __('messages.GetFreshDealsTitle');
        $nlSubtitle    = $s->newsletter_subtitle    ?? __('messages.GetFreshDealsSubtitle');
        $nlPlaceholder = $s->newsletter_placeholder ?? __('messages.NewsletterEmailPlaceholder');
      ?>
      <section class="py-10 lg:py-14">
        <div class="container">
          <div class="rounded-xl border border-line-subtle p-8 lg:p-10"
               style="background: linear-gradient(135deg, rgb(var(--color-accent-500) / .06), rgb(var(--color-bg-surface)));">
            <div class="grid lg:grid-cols-5 gap-6 items-center">
              <div class="lg:col-span-2">
                <h3 class="text-2xl font-bold mb-2"><?php echo e($nlTitle); ?></h3>
                <p class="text-fg-secondary text-sm"><?php echo e($nlSubtitle); ?></p>
              </div>
              <div class="lg:col-span-3">
                <form id="newsletterForm" class="flex flex-col md:flex-row gap-2">
                  <?php echo csrf_field(); ?>
                  <input name="email" type="email" id="newsletterEmail" class="input flex-1"
                         placeholder="<?php echo e($nlPlaceholder); ?>" required>
                  <button id="newsletterBtn" class="btn btn-primary btn-lg shrink-0" type="submit">
                    <?php if (isset($component)) { $__componentOriginal20d0f02a197ba5f09810c743e2b069f7 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal20d0f02a197ba5f09810c743e2b069f7 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.store.icon','data' => ['name' => 'mail','class' => 'w-5 h-5']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('store.icon'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['name' => 'mail','class' => 'w-5 h-5']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal20d0f02a197ba5f09810c743e2b069f7)): ?>
<?php $attributes = $__attributesOriginal20d0f02a197ba5f09810c743e2b069f7; ?>
<?php unset($__attributesOriginal20d0f02a197ba5f09810c743e2b069f7); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal20d0f02a197ba5f09810c743e2b069f7)): ?>
<?php $component = $__componentOriginal20d0f02a197ba5f09810c743e2b069f7; ?>
<?php unset($__componentOriginal20d0f02a197ba5f09810c743e2b069f7); ?>
<?php endif; ?><?php echo e($nlBtn); ?>

                  </button>
                </form>
                <div id="newsletterMsg" class="text-sm mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <?php break; ?>

  <?php endswitch; ?>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>

  <?php if(!$printedCenter && ( ($byPos['center_left'] ?? collect())->count() || ($byPos['center_right'] ?? collect())->count() )): ?>
    <section class="py-6">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div><?php echo $renderBanners($byPos['center_left'] ?? collect()); ?></div>
          <div><?php echo $renderBanners($byPos['center_right'] ?? collect()); ?></div>
        </div>
      </div>
    </section>
    <?php $printedCenter = true; ?>
  <?php endif; ?>
<?php endif; ?>

<?php if(!$printedCenter && ( ($byPos['center_left'] ?? collect())->count() || ($byPos['center_right'] ?? collect())->count() )): ?>
  <section class="py-6">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div><?php echo $renderBanners($byPos['center_left'] ?? collect()); ?></div>
        <div><?php echo $renderBanners($byPos['center_right'] ?? collect()); ?></div>
      </div>
    </div>
  </section>
<?php endif; ?>

<?php if(($byPos['footer_left'] ?? collect())->count() || ($byPos['footer_right'] ?? collect())->count()): ?>
  <section class="py-10">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div><?php echo $renderBanners($byPos['footer_left'] ?? collect()); ?></div>
        <div><?php echo $renderBanners($byPos['footer_right'] ?? collect()); ?></div>
      </div>
    </div>
  </section>
<?php endif; ?>


<?php echo $__env->make('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => $nlBtn], array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.store', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /home/quantrocousr/public_html/resources/views/store/index.blade.php ENDPATH**/ ?>