@extends('layouts.store')

@section('content')

@php
  /** @var \App\Models\StoreSetting $s */
  $currency = $s->currency_code ?? '$';
  $nlBtn    = __('messages.Subscribe');
  /** @var \Illuminate\Support\Collection $banners */
  $byPos = collect($banners ?? [])->groupBy('position');
  $printedCenter = false;
  $printedHero = false;

  $renderBanners = function($list, $wrapClass = 'block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow') {
      foreach ($list ?? collect() as $b) {
          $src  = $b->image_url ?? ($b->image ? global_asset($b->image) : global_asset(upload_path('banners') . '/no-image.png'));
          $href = $b->link ?: route('store.shop');
          echo '<a href="'.e($href).'" class="'.e($wrapClass).'"><img src="'.e($src).'" class="w-full h-auto object-cover" alt="'.e($b->title ?? __('messages.Banner')).'"></a>';
      }
  };

  // Real category photography for the hero collage — never a single fragile
  // uploaded "hero image" that can go stale or low-quality. Falls back
  // gracefully to fewer tiles (or none) if the catalog has few photographed
  // categories yet, rather than ever showing a broken/placeholder graphic.
  $heroTiles = ($categories ?? collect())
      ->filter(fn ($c) => !empty($c->cover_image_url))
      ->take(4)
      ->values();
@endphp

{{-- ===== TOP ===== --}}
@if(($byPos['top_left'] ?? collect())->count() || ($byPos['top_right'] ?? collect())->count())
  <section class="py-6">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{!! $renderBanners($byPos['top_left'] ?? collect()) !!}</div>
        <div>{!! $renderBanners($byPos['top_right'] ?? collect()) !!}</div>
      </div>
    </div>
  </section>
@endif

@forelse($blocks ?? [] as $block)
  @switch($block['type'])

    @case('hero')
      @php $printedHero = true; @endphp
      <section class="relative overflow-hidden border-b border-line-subtle"
               style="background:
                 radial-gradient(1100px 560px at 8% 15%, rgb(var(--color-accent-500) / .10) 0%, transparent 62%),
                 radial-gradient(800px 480px at 92% 85%, rgb(var(--color-accent-500) / .07) 0%, transparent 62%),
                 rgb(var(--color-bg-surface));">
        <div class="absolute inset-0 opacity-[0.28] pointer-events-none"
             style="background-image: radial-gradient(rgb(var(--color-accent-500) / .5) 1px, transparent 1px);
                    background-size: 26px 26px;
                    mask-image: radial-gradient(ellipse 55% 85% at 12% 25%, black 0%, transparent 72%);"></div>

        <div class="container relative py-20 lg:py-28">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div class="{{ $heroTiles->count() ? '' : 'text-center lg:text-left max-w-2xl mx-auto lg:mx-0' }}">
              <div class="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <span class="h-px w-12" style="background: rgb(var(--color-accent-500));"></span>
                <span class="section-kicker">{{ __('messages.Shop') ?: 'Fine Jewelry' }}</span>
              </div>
              <h1 class="mb-6 text-5xl lg:text-6xl leading-[1.05] text-fg-primary" style="text-wrap: balance; letter-spacing: -0.01em;">
                {{ $block['title'] ?? $s->hero_title ?? __('messages.Default_HeroTitle') }}
              </h1>
              <p class="section-subtitle mb-9 max-w-lg mx-auto lg:mx-0 text-base lg:text-lg">
                {{ $block['subtitle'] ?? $s->hero_subtitle ?? __('messages.Default_HeroSubtitle') }}
              </p>
              <div class="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
                <a href="{{ route('store.shop') }}" class="btn btn-primary btn-lg">
                  {{ __('messages.ShopNow') ?: __('messages.Default_ExploreCollection') }}
                  <x-store.icon name="arrow-right" class="w-4 h-4" />
                </a>
                <a href="{{ route('store.contact') }}" class="btn btn-outline btn-lg">
                  {{ __('messages.Support') ? __('messages.Support') : __('messages.Default_BookPrivateViewing') }}
                </a>
              </div>

              {{-- Inline credibility strip — real, specific claims, not generic filler --}}
              <div class="hidden lg:flex items-center gap-6 mt-10 pt-8 border-t border-line-subtle">
                <div>
                  <p class="text-2xl font-bold text-fg-primary" style="font-family: var(--font-display);">{{ __('messages.Default_HallmarkedGold') }}</p>
                  <p class="text-xs text-fg-muted mt-0.5">{{ __('messages.Default_EveryPiece') }}</p>
                </div>
                <span class="h-10 w-px bg-line-subtle"></span>
                <div>
                  <p class="text-2xl font-bold text-fg-primary" style="font-family: var(--font-display);">{{ __('messages.Default_LifetimePolicy') }}</p>
                  <p class="text-xs text-fg-muted mt-0.5">{{ __('messages.Default_PolishAndResize') }}</p>
                </div>
              </div>
            </div>

            @if($heroTiles->count())
              <div class="relative h-[420px] lg:h-[520px]">
                @foreach($heroTiles as $i => $tile)
                  @php
                    // Deliberately asymmetric placement — no two tiles the
                    // same size/offset, so this never reads as a generic
                    // even grid regardless of how many photos are available.
                    $pos = [
                      0 => 'top:0; left:8%; width:52%; height:62%;',
                      1 => 'top:6%; right:0; width:40%; height:44%;',
                      2 => 'bottom:0; left:0; width:38%; height:46%;',
                      3 => 'bottom:4%; right:6%; width:44%; height:48%;',
                    ][$i] ?? 'top:0; left:0; width:50%; height:50%;';
                  @endphp
                  <a href="{{ route('store.shop', ['category' => $tile->id]) }}"
                     class="group absolute rounded-lg overflow-hidden shadow-lg ring-1 ring-black/5"
                     style="{{ $pos }}">
                    <img src="{{ $tile->cover_image_url }}" alt="{{ $tile->name }}"
                         class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span class="absolute bottom-3 left-3 text-white text-xs font-semibold uppercase tracking-wide">{{ $tile->name }}</span>
                  </a>
                @endforeach
              </div>
            @endif

          </div>
        </div>
      </section>

      {{-- ===== CENTER ===== --}}
      @if(!$printedCenter && ( ($byPos['center_left'] ?? collect())->count() || ($byPos['center_right'] ?? collect())->count() ))
        <section class="py-6">
          <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>{!! $renderBanners($byPos['center_left'] ?? collect()) !!}</div>
              <div>{!! $renderBanners($byPos['center_right'] ?? collect()) !!}</div>
            </div>
          </div>
        </section>
        @php $printedCenter = true; @endphp
      @endif
      @break

    @case('collection')
      @php
        $col   = $block['collection'];
        $prods = $block['products'] ?? collect();
        $title = $block['title'] ?? ($col->title ?? $col->name ?? __('messages.Collection'));
      @endphp

      @if($prods->count())
      <section class="py-14 lg:py-20">
        <div class="container">
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <span class="section-kicker">{{ __('messages.Collection') }}</span>
              <h2 class="section-title mt-1.5">{{ $title }}</h2>
            </div>
            <a class="text-sm font-medium text-accent-500 hover:underline inline-flex items-center gap-1 transition-transform hover:translate-x-0.5"
               href="{{ route('store.shop', ['collection' => $col->slug]) }}">
              {{ __('messages.ViewAll') }}
              <x-store.icon name="arrow-right" class="w-4 h-4" />
            </a>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            @foreach($prods as $p)
              @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
            @endforeach
          </div>
        </div>
      </section>
      @endif
      @break

    @case('newsletter')
      @break

  @endswitch
@empty
  @if(!$printedCenter && ( ($byPos['center_left'] ?? collect())->count() || ($byPos['center_right'] ?? collect())->count() ))
    <section class="py-6">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>{!! $renderBanners($byPos['center_left'] ?? collect()) !!}</div>
          <div>{!! $renderBanners($byPos['center_right'] ?? collect()) !!}</div>
        </div>
      </div>
    </section>
    @php $printedCenter = true; @endphp
  @endif
@endforelse

{{-- ===== TRUST BAR ===== --}}
<section class="border-y border-line-subtle" style="background: rgb(var(--color-bg-surface));">
  <div class="container py-6">
    <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-line-subtle">
      <div class="flex items-center gap-3 px-0 md:px-5 first:pl-0">
        <span class="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
          <x-store.icon name="shield-check" class="w-4 h-4 text-accent-500" />
        </span>
        <div><p class="font-semibold text-xs md:text-sm text-fg-primary leading-tight">{{ __('messages.Store_CertifiedDiamonds') }}</p><p class="text-[10px] md:text-xs text-fg-muted mt-0.5">{{ __('messages.Store_100PercentGenuine') }}</p></div>
      </div>
      <div class="flex items-center gap-3 px-4 md:px-5">
        <span class="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
          <x-store.icon name="truck" class="w-4 h-4 text-accent-500" />
        </span>
        <div><p class="font-semibold text-xs md:text-sm text-fg-primary leading-tight">{{ __('messages.Store_InsuredDelivery') }}</p><p class="text-[10px] md:text-xs text-fg-muted mt-0.5">{{ __('messages.Store_SafeAndDiscreet') }}</p></div>
      </div>
      <div class="flex items-center gap-3 px-4 md:px-5">
        <span class="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
          <x-store.icon name="clock" class="w-4 h-4 text-accent-500" />
        </span>
        <div><p class="font-semibold text-xs md:text-sm text-fg-primary leading-tight">{{ __('messages.Store_LifetimeService') }}</p><p class="text-[10px] md:text-xs text-fg-muted mt-0.5">{{ __('messages.Store_PolishResize') }}</p></div>
      </div>
      <div class="flex items-center gap-3 px-4 md:px-5">
        <span class="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
          <x-store.icon name="refresh" class="w-4 h-4 text-accent-500" />
        </span>
        <div><p class="font-semibold text-xs md:text-sm text-fg-primary leading-tight">{{ __('messages.Store_EasyReturns') }}</p><p class="text-[10px] md:text-xs text-fg-muted mt-0.5">{{ __('messages.Store_30DayPolicy') }}</p></div>
      </div>
    </div>
  </div>
</section>

{{-- ===== FEATURED PIECES — real catalog data, always available ===== --}}
@if(($featuredProducts ?? collect())->count())
  <section class="py-14 lg:py-20">
    <div class="container">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
        <div>
          <span class="section-kicker">{{ __('messages.Default_NewArrivals') }}</span>
          <h2 class="section-title mt-1.5">{{ __('messages.Default_FeaturedPieces') }}</h2>
        </div>
        <a class="text-sm font-medium text-accent-500 hover:underline inline-flex items-center gap-1 transition-transform hover:translate-x-0.5"
           href="{{ route('store.shop') }}">
          {{ __('messages.ViewAll') }}
          <x-store.icon name="arrow-right" class="w-4 h-4" />
        </a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        @foreach($featuredProducts->take(8) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      </div>
    </div>
  </section>
@endif

{{-- ===== SHOP BY CATEGORY ===== --}}
@if(($categories ?? collect())->count())
  <section class="py-14 lg:py-20 border-t border-line-subtle" style="background: rgb(var(--color-bg-surface));">
    <div class="container">
      <div class="flex flex-col items-center text-center mb-9">
        <span class="section-kicker">{{ __('messages.Shop') }}</span>
        <h2 class="section-title mt-1.5">{{ __('messages.Store_ShopByCategory') }}</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 md:gap-4">
        @foreach($categories->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group relative rounded-lg overflow-hidden aspect-square flex items-end justify-center pb-3.5 ring-1 ring-line-subtle transition-shadow hover:shadow-lg"
             style="background: rgb(var(--color-bg-muted));">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>
              <span class="relative z-10 text-white text-[11px] md:text-xs font-semibold uppercase tracking-wide text-center px-2">{{ $cat->name }}</span>
            @else
              <x-store.icon name="tag" class="absolute top-1/3 -translate-y-1/2 w-8 h-8 text-accent-500/70" />
              <span class="relative z-10 text-fg-primary text-[11px] md:text-xs font-semibold uppercase tracking-wide text-center px-2">{{ $cat->name }}</span>
            @endif
          </a>
        @endforeach
      </div>
    </div>
  </section>
@endif

{{-- ===== CRAFTSMANSHIP / WHY US — real substance, not filler ===== --}}
<section class="py-14 lg:py-20">
  <div class="container">
    <div class="grid lg:grid-cols-3 gap-8 lg:gap-10">
      <div class="lg:col-span-1">
        <span class="section-kicker">{{ __('messages.Default_OurCraft') }}</span>
        <h2 class="section-title mt-1.5 mb-4">{{ __('messages.Default_WhyChooseUs') }}</h2>
        <p class="text-fg-secondary text-sm leading-relaxed max-w-sm">{{ __('messages.Default_WhyChooseUsBody') }}</p>
      </div>
      <div class="lg:col-span-2 grid sm:grid-cols-2 gap-6">
        <div class="flex gap-4">
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
            <x-store.icon name="tag" class="w-5 h-5 text-accent-500" />
          </span>
          <div>
            <p class="font-semibold text-fg-primary mb-1">{{ __('messages.Default_TransparentPricing') }}</p>
            <p class="text-sm text-fg-muted leading-relaxed">{{ __('messages.Default_TransparentPricingBody') }}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
            <x-store.icon name="shield-check" class="w-5 h-5 text-accent-500" />
          </span>
          <div>
            <p class="font-semibold text-fg-primary mb-1">{{ __('messages.Default_CertifiedSourcing') }}</p>
            <p class="text-sm text-fg-muted leading-relaxed">{{ __('messages.Default_CertifiedSourcingBody') }}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
            <x-store.icon name="refresh" class="w-5 h-5 text-accent-500" />
          </span>
          <div>
            <p class="font-semibold text-fg-primary mb-1">{{ __('messages.Default_FreeResizing') }}</p>
            <p class="text-sm text-fg-muted leading-relaxed">{{ __('messages.Default_FreeResizingBody') }}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0" style="background: rgb(var(--color-accent-500) / .1);">
            <x-store.icon name="truck" class="w-5 h-5 text-accent-500" />
          </span>
          <div>
            <p class="font-semibold text-fg-primary mb-1">{{ __('messages.Default_InsuredShipping') }}</p>
            <p class="text-sm text-fg-muted leading-relaxed">{{ __('messages.Default_InsuredShippingBody') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{{-- ===== NEWSLETTER ===== --}}
@php
  $nlTitle       = $s->newsletter_title       ?? __('messages.GetFreshDealsTitle');
  $nlSubtitle    = $s->newsletter_subtitle    ?? __('messages.GetFreshDealsSubtitle');
  $nlPlaceholder = $s->newsletter_placeholder ?? __('messages.NewsletterEmailPlaceholder');
@endphp
<section class="py-14 lg:py-20 border-t border-line-subtle">
  <div class="container">
    <div class="relative overflow-hidden rounded-xl border border-line-subtle p-9 lg:p-12"
         style="background: linear-gradient(135deg, rgb(var(--color-accent-500) / .07), rgb(var(--color-bg-surface)));">
      <span class="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none" style="background: rgb(var(--color-accent-500) / .08);"></span>
      <div class="relative grid lg:grid-cols-5 gap-7 items-center">
        <div class="lg:col-span-2">
          <span class="section-kicker">{{ __('messages.Default_StayInTouch') }}</span>
          <h3 class="section-title mt-1.5 text-2xl lg:text-3xl">{{ $nlTitle }}</h3>
          <p class="text-fg-secondary text-sm mt-2">{{ $nlSubtitle }}</p>
        </div>
        <div class="lg:col-span-3">
          <form id="newsletterForm" class="flex flex-col md:flex-row gap-2.5">
            @csrf
            <input name="email" type="email" id="newsletterEmail" class="input flex-1"
                   placeholder="{{ $nlPlaceholder }}" required>
            <button id="newsletterBtn" class="btn btn-primary btn-lg shrink-0" type="submit">
              <x-store.icon name="mail" class="w-5 h-5" />{{ $nlBtn }}
            </button>
          </form>
          <div id="newsletterMsg" class="text-sm mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</section>

@if(!$printedCenter && ( ($byPos['center_left'] ?? collect())->count() || ($byPos['center_right'] ?? collect())->count() ))
  <section class="py-6">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{!! $renderBanners($byPos['center_left'] ?? collect()) !!}</div>
        <div>{!! $renderBanners($byPos['center_right'] ?? collect()) !!}</div>
      </div>
    </div>
  </section>
@endif

@if(($byPos['footer_left'] ?? collect())->count() || ($byPos['footer_right'] ?? collect())->count())
  <section class="py-10">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{!! $renderBanners($byPos['footer_left'] ?? collect()) !!}</div>
        <div>{!! $renderBanners($byPos['footer_right'] ?? collect()) !!}</div>
      </div>
    </div>
  </section>
@endif

{{-- Quick-view + variant-picker + newsletter logic --}}
@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => $nlBtn])

@endsection
