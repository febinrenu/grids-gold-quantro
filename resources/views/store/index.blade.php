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
  <div class="container py-5 grid grid-cols-2 md:grid-cols-4 gap-5">
    <div class="flex items-center gap-2.5">
      <x-store.icon name="shield-check" class="w-5 h-5 shrink-0 text-accent-500" />
      <div><p class="font-semibold text-xs md:text-sm text-fg-primary">Certified Diamonds</p><p class="text-[10px] md:text-xs text-fg-muted">100% Genuine</p></div>
    </div>
    <div class="flex items-center gap-2.5">
      <x-store.icon name="truck" class="w-5 h-5 shrink-0 text-accent-500" />
      <div><p class="font-semibold text-xs md:text-sm text-fg-primary">Insured Delivery</p><p class="text-[10px] md:text-xs text-fg-muted">Safe &amp; Discreet</p></div>
    </div>
    <div class="flex items-center gap-2.5">
      <x-store.icon name="clock" class="w-5 h-5 shrink-0 text-accent-500" />
      <div><p class="font-semibold text-xs md:text-sm text-fg-primary">Lifetime Service</p><p class="text-[10px] md:text-xs text-fg-muted">Polish &middot; Resize</p></div>
    </div>
    <div class="flex items-center gap-2.5">
      <x-store.icon name="refresh" class="w-5 h-5 shrink-0 text-accent-500" />
      <div><p class="font-semibold text-xs md:text-sm text-fg-primary">Easy Returns</p><p class="text-[10px] md:text-xs text-fg-muted">30-Day Policy</p></div>
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
                 radial-gradient(900px 480px at 12% 20%, rgb(var(--color-accent-500) / .12) 0%, transparent 60%),
                 radial-gradient(700px 420px at 90% 80%, rgb(var(--color-accent-500) / .08) 0%, transparent 60%),
                 rgb(var(--color-bg-surface));">
        <div class="absolute inset-0 opacity-[0.35] pointer-events-none"
             style="background-image: radial-gradient(rgb(var(--color-accent-500) / .5) 1px, transparent 1px);
                    background-size: 22px 22px;
                    mask-image: radial-gradient(ellipse 60% 90% at 15% 30%, black 0%, transparent 70%);"></div>

        <div class="container relative py-20 lg:py-28">
          <div class="max-w-2xl {{ $heroUrl ? '' : 'text-center mx-auto' }}">
            <div class="flex items-center gap-3 mb-5 {{ $heroUrl ? '' : 'justify-center' }}">
              <span class="h-px w-10" style="background: rgb(var(--color-accent-500));"></span>
              <span class="section-kicker">{{ __('messages.Shop') ?: 'Fine Jewelry' }}</span>
            </div>
            <h1 class="mb-5 text-5xl lg:text-6xl text-fg-primary">
              {{ $block['title'] ?? $s->hero_title ?? 'Crafted for the moments that matter' }}
            </h1>
            <p class="section-subtitle mb-8 {{ $heroUrl ? 'max-w-lg' : 'max-w-xl mx-auto' }} text-base lg:text-lg">
              {{ $block['subtitle'] ?? $s->hero_subtitle ?? 'Ethically sourced gold, hand-finished settings, and a lifetime of care behind every piece.' }}
            </p>
            <div class="flex items-center gap-3 flex-wrap {{ $heroUrl ? '' : 'justify-center' }}">
              <a href="{{ route('store.shop') }}" class="btn btn-primary btn-lg">
                {{ __('messages.ShopNow') ?: 'Explore the Collection' }}
                <x-store.icon name="arrow-right" class="w-4 h-4" />
              </a>
              <a href="{{ route('store.contact') }}" class="btn btn-outline btn-lg">
                {{ __('messages.Support') ? __('messages.Support') : 'Book a Private Viewing' }}
              </a>
            </div>
          </div>
        </div>

        @if($heroUrl)
          <div class="hidden lg:block absolute top-0 right-0 h-full w-[42%]">
            <div class="absolute inset-0" style="background: linear-gradient(90deg, rgb(var(--color-bg-surface)) 0%, transparent 18%);"></div>
            <img class="w-full h-full object-cover" src="{{ $heroUrl }}" alt="{{ $s->store_name ?? 'Featured' }}">
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
      <section class="py-10 lg:py-14">
        <div class="container">
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <div>
              <span class="section-kicker">{{ __('messages.Collection') }}</span>
              <h2 class="section-title mt-1">{{ $title }}</h2>
            </div>
            <a class="text-sm font-medium text-accent-500 hover:underline inline-flex items-center gap-1"
               href="{{ route('store.shop', ['collection' => $col->slug]) }}">
              {{ __('messages.ViewAll') }}
              <x-store.icon name="arrow-right" class="w-4 h-4" />
            </a>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      <section class="py-10 lg:py-14">
        <div class="container">
          <div class="rounded-xl border border-line-subtle p-8 lg:p-10"
               style="background: linear-gradient(135deg, rgb(var(--color-accent-500) / .06), rgb(var(--color-bg-surface)));">
            <div class="grid lg:grid-cols-5 gap-6 items-center">
              <div class="lg:col-span-2">
                <h3 class="text-2xl font-bold mb-2">{{ $nlTitle }}</h3>
                <p class="text-fg-secondary text-sm">{{ $nlSubtitle }}</p>
              </div>
              <div class="lg:col-span-3">
                <form id="newsletterForm" class="flex flex-col md:flex-row gap-2">
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
  <section class="py-10 lg:py-14">
    <div class="container">
      <div class="flex flex-col items-center text-center mb-6">
        <span class="section-kicker">{{ __('messages.Shop') }}</span>
        <h2 class="section-title mt-1">Shop by Category</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        @foreach($categories->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group relative rounded-lg overflow-hidden aspect-square flex items-end justify-center pb-3"
             style="background: rgb(var(--color-bg-muted));">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"></div>
              <span class="relative z-10 text-white text-[11px] md:text-xs font-semibold text-center px-2">{{ $cat->name }}</span>
            @else
              <x-store.icon name="tag" class="absolute top-1/3 -translate-y-1/2 w-8 h-8 text-accent-500/70" />
              <span class="relative z-10 text-fg-primary text-[11px] md:text-xs font-semibold text-center px-2">{{ $cat->name }}</span>
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
