@extends('store.monolith.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-monolith" style="background:var(--mono-paper); color:var(--mono-ink);">

  <!-- ============ HERO — asymmetric image collage, not a single full-bleed photo ============ -->
  <section class="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-16">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p class="m-label mb-5" style="color:var(--mono-rust);">{{ __('messages.Monolith_ObjectYear', ['year' => now()->format('Y')]) }}</p>
        <h1 class="m-serif" style="font-weight:480; font-size:clamp(2.6rem,6vw,4.6rem); line-height:1.02; color:var(--mono-ink);">{{ $s->hero_title ?? __('messages.Monolith_HeroTitle') }}</h1>
        <p class="text-sm mt-6 max-w-sm" style="color:var(--mono-moss);">{{ $s->hero_subtitle ?? __('messages.Monolith_HeroSubtitle') }}</p>
        <div class="flex flex-wrap gap-3 mt-8">
          <a href="{{ route('store.shop') }}" class="m-btn m-btn-solid">{{ __('messages.Monolith_ViewTheIndex') }}</a>
          <a href="{{ route('store.contact') }}" class="m-btn">{{ __('messages.Monolith_VisitTheStudio') }}</a>
        </div>
      </div>
      <div class="relative" style="padding-bottom:1.5rem;">
        <div style="border-radius:8px; overflow:hidden; aspect-ratio:4/5;">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80" alt="{{ __('messages.Monolith_AltGoldNecklace') }}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="hidden md:block absolute -bottom-2 -left-10" style="width:44%; border-radius:8px; overflow:hidden; aspect-ratio:1; box-shadow:0 20px 40px -12px rgba(35,48,31,.35); border:6px solid var(--mono-paper);">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80" alt="{{ __('messages.Monolith_AltRingDetail') }}" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
    </div>
  </section>

  <!-- ============ ASYMMETRIC MOSAIC — categories as an irregular gallery grid, real photos ============ -->
  <section class="py-14">
    <div class="max-w-[100rem] mx-auto">
      <div class="flex items-baseline justify-between px-6 md:px-8 mb-6">
        <p class="m-label" style="color:var(--mono-moss);">{{ __('messages.Monolith_Departments') }}</p>
        <a href="{{ route('store.shop') }}" class="m-label hover:opacity-60 transition" style="color:var(--mono-rust);">{{ __('messages.Monolith_All') }} →</a>
      </div>
      @php $cats = ($categories ?? collect())->take(4); @endphp
      <div class="m-mosaic {{ $cats->isEmpty() ? 'm-mosaic-empty' : '' }}">
        @forelse($cats as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="m-tile">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}">
            @else
              @php
                $fallbacks = ['1611652022419-a9419f74343d','1605100804763-247f67b3557e','1599643478518-a784e5dc4c8f','1616401784845-180882ba9ba8'];
              @endphp
              <img src="https://images.unsplash.com/photo-{{ $fallbacks[$i % count($fallbacks)] }}?auto=format&fit=crop&w=700&q=80" alt="{{ $cat->name }}">
            @endif
            <span class="m-tile-cap">{{ $cat->name }}</span>
          </a>
        @empty
          <div class="m-tile" style="grid-area: a;">
            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80" alt="">
            <span class="m-tile-cap">{{ __('messages.Monolith_TheIndex') }}</span>
          </div>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL STRIP — full-width image break with a quote ============ -->
  <section class="relative" style="height:22rem; overflow:hidden;">
    <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1600&q=80" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
    <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(35,48,31,.15), rgba(35,48,31,.75));"></div>
    <div class="relative h-full flex items-center justify-center px-6 text-center">
      <p class="m-serif" style="font-style:italic; font-size:clamp(1.4rem,3.5vw,2.4rem); color:var(--mono-paper); max-width:38rem;">"{{ $s->footer_text ?? __('messages.Monolith_FooterQuote') }}"</p>
    </div>
  </section>

  <!-- ============ CATALOG LISTING — numbered rows, not a card grid (real products) ============ -->
  <section class="max-w-4xl mx-auto px-6 md:px-8 py-14">
    <p class="m-label mb-2" style="color:var(--mono-moss);">{{ __('messages.Monolith_TheCollection') }}</p>
    <p class="m-serif" style="font-size:2.2rem; color:var(--mono-ink);">{{ __('messages.Monolith_RecentlyCatalogued') }}</p>
    <div class="mt-8">
      @php $currency = $s->currency_code ?? '$'; $items = ($products ?? collect())->take(6); @endphp
      @forelse($items as $i => $p)
        @php
          $primaryFile = $p->primaryProductImageFilename();
          $imgUrl = $primaryFile ? global_asset(upload_path('products') . '/' . $primaryFile) : global_asset(upload_path('products') . '/no-image.png');
          $price = (float) ($p->display_price ?? ($p->price ?? 0));
        @endphp
        <div class="m-catalog-row">
          <span class="m-catalog-index">{{ str_pad($i + 1, 2, '0', STR_PAD_LEFT) }}</span>
          <img src="{{ $imgUrl }}" alt="{{ $p->name }}" class="m-catalog-thumb">
          <div>
            <p class="m-catalog-name">{{ $p->name }}</p>
            <p class="m-label mt-1" style="color:var(--mono-rust);">{{ $p->metalType->name ?? '' }} {{ $p->karat->name ?? '' }}</p>
          </div>
          <div class="text-right">
            <p class="m-serif" style="font-size:1.15rem; color:var(--mono-rust);">{{ $currency }}{{ number_format($price, 2) }}</p>
          </div>
        </div>
      @empty
        <p class="text-sm" style="color:var(--mono-moss);">{{ __('messages.Monolith_IndexEmpty') }}</p>
      @endforelse
    </div>
    <div class="mt-10">
      <a href="{{ route('store.shop') }}" class="m-btn m-btn-solid">{{ __('messages.Monolith_ViewFullIndex') }}</a>
    </div>
  </section>

  <!-- ============ ATELIER GALLERY — 3-image strip, more content ============ -->
  <section class="max-w-7xl mx-auto px-6 md:px-8 pb-14">
    <p class="m-label mb-6" style="color:var(--mono-moss);">{{ __('messages.Monolith_FromTheStudio') }}</p>
    <div class="grid md:grid-cols-3 gap-4">
      <div style="border-radius:8px; overflow:hidden; aspect-ratio:3/4;">
        <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=700&q=80" alt="{{ __('messages.Monolith_AltHandFinishing') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:8px; overflow:hidden; aspect-ratio:3/4;">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80" alt="{{ __('messages.Monolith_AltWorkbench') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:8px; overflow:hidden; aspect-ratio:3/4;">
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80" alt="{{ __('messages.Monolith_AltFinishedRing') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL SPLIT — real product cards for the shared cart/quickview wiring ============ -->
  <section class="max-w-7xl mx-auto px-6 md:px-8 pb-16" style="border-top:1px solid rgba(35,48,31,.1); padding-top:3.5rem;">
    <div class="flex items-end justify-between mb-6">
      <p class="m-serif" style="font-size:2rem; color:var(--mono-ink);">{{ __('messages.Monolith_MoreFromTheIndex') }}</p>
      <a href="{{ route('store.shop') }}" class="m-label hover:opacity-60 transition" style="color:var(--mono-rust);">{{ __('messages.ViewAll') }} →</a>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      @php $more = ($products ?? collect())->slice(6, 3); @endphp
      @forelse($more as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        @foreach($items->take(3) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      @endforelse
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
