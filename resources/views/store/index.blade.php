@extends('layouts.store')

@section('content')

@php
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

{{-- ===== TRUST BAR (always shown) ===== --}}
<section class="border-b border-line-subtle" style="background: rgb(var(--color-bg-surface));">
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

@forelse($blocks ?? [] as $block)
  @switch($block['type'])

    @case('hero')
      @php
        // Prefer the tenant's own uploaded hero photo; fall back to a
        // curated, verified real jewelry photograph (never a crude
        // SVG/gradient placeholder) so the homepage is never bare.
        $heroImg = $block['image'] ?? $s->hero_image_path;
        $heroUrl = null;
        if (!empty($heroImg) && is_string($heroImg) && !\Illuminate\Support\Str::startsWith($heroImg, ['http://', 'https://']) && file_exists(public_path($heroImg))) {
            $heroUrl = global_asset($heroImg);
        }
        $heroUrl = $heroUrl ?: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80';
      @endphp
      <section class="relative overflow-hidden border-b border-line-subtle"
               style="background:
                 radial-gradient(1100px 560px at 8% 15%, rgb(var(--color-accent-500) / .10) 0%, transparent 62%),
                 radial-gradient(800px 480px at 92% 85%, rgb(var(--color-accent-500) / .07) 0%, transparent 62%),
                 rgb(var(--color-bg-surface));">
        <div class="absolute inset-0 opacity-[0.28] pointer-events-none"
             style="background-image: radial-gradient(rgb(var(--color-accent-500) / .5) 1px, transparent 1px);
                    background-size: 26px 26px;
                    mask-image: radial-gradient(ellipse 55% 85% at 12% 25%, black 0%, transparent 72%);"></div>

        <div class="container relative py-24 lg:py-32">
          <div class="max-w-2xl {{ $heroUrl ? '' : 'text-center mx-auto' }}">
            <div class="flex items-center gap-3 mb-6 {{ $heroUrl ? '' : 'justify-center' }}">
              <span class="h-px w-12" style="background: rgb(var(--color-accent-500));"></span>
              <span class="section-kicker">{{ __('messages.Shop') ?: 'Fine Jewelry' }}</span>
            </div>
            <h1 class="mb-6 text-5xl lg:text-7xl leading-[1.05] text-fg-primary" style="text-wrap: balance; letter-spacing: -0.01em;">
              {{ $block['title'] ?? $s->hero_title ?? __('messages.Default_HeroTitle') }}
            </h1>
            <p class="section-subtitle mb-9 {{ $heroUrl ? 'max-w-lg' : 'max-w-xl mx-auto' }} text-base lg:text-lg">
              {{ $block['subtitle'] ?? $s->hero_subtitle ?? __('messages.Default_HeroSubtitle') }}
            </p>
            <div class="flex items-center gap-4 flex-wrap {{ $heroUrl ? '' : 'justify-center' }}">
              <a href="{{ route('store.shop') }}" class="btn btn-primary btn-lg">
                {{ __('messages.ShopNow') ?: __('messages.Default_ExploreCollection') }}
                <x-store.icon name="arrow-right" class="w-4 h-4" />
              </a>
              <a href="{{ route('store.contact') }}" class="btn btn-outline btn-lg">
                {{ __('messages.Support') ? __('messages.Support') : __('messages.Default_BookPrivateViewing') }}
              </a>
            </div>
          </div>
        </div>

        @if($heroUrl)
          <div class="hidden lg:block absolute top-0 right-0 h-full w-[45%]">
            <div class="absolute inset-0 z-10" style="background: linear-gradient(90deg, rgb(var(--color-bg-surface)) 0%, transparent 22%);"></div>
            <div class="absolute inset-0 z-10" style="background: linear-gradient(0deg, rgb(var(--color-bg-surface) / .35) 0%, transparent 30%);"></div>
            <img class="w-full h-full object-cover" src="{{ $heroUrl }}" alt="{{ $s->store_name ?? __('messages.Store') }} — {{ __('messages.Default_HeroTitle') }}">
          </div>
        @endif
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
      @php
        $nlTitle       = $s->newsletter_title       ?? __('messages.GetFreshDealsTitle');
        $nlSubtitle    = $s->newsletter_subtitle    ?? __('messages.GetFreshDealsSubtitle');
        $nlPlaceholder = $s->newsletter_placeholder ?? __('messages.NewsletterEmailPlaceholder');
      @endphp
      <section class="py-14 lg:py-20">
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

{{-- ===== SHOP BY CATEGORY (real product photos, always shown) ===== --}}
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
