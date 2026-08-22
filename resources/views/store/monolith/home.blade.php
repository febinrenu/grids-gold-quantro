@extends('store.monolith.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-monolith" style="background:#0A0A09; color:#F3F0EA;">

  <!-- ============ HERO — full-height, single image, bottom-left oversized type ============ -->
  <section class="m-hero">
    <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80"
         alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.55;" loading="eager">
    <div class="m-hero-inner relative">
      <p class="m-label mb-6" style="color:#C7A97A;">Object N°001 — {{ now()->format('Y') }} Collection</p>
      <h1 class="m-hero-title">{{ $s->hero_title ?? 'Form Follows Material' }}</h1>
      <p class="text-sm mt-6 max-w-md" style="color:#C4BDB0;">{{ $s->hero_subtitle ?? 'A single collection of considered objects. Nothing extraneous.' }}</p>
      <a href="{{ route('store.shop') }}" class="m-btn mt-8">View The Index</a>
    </div>
  </section>

  <!-- ============ ASYMMETRIC MOSAIC — categories as an irregular gallery grid ============ -->
  <section class="py-16">
    <div class="max-w-[110rem] mx-auto">
      <div class="flex items-baseline justify-between px-8 mb-6">
        <p class="m-label" style="color:#C4BDB0;">Departments</p>
        <a href="{{ route('store.shop') }}" class="m-label hover:opacity-60 transition" style="color:#9C7A54;">All →</a>
      </div>
      @php $cats = ($categories ?? collect())->take(4); @endphp
      <div class="m-mosaic {{ $cats->isEmpty() ? 'm-mosaic-empty' : '' }}">
        @forelse($cats as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="m-tile">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}">
            @endif
            <span class="m-tile-cap">{{ $cat->name }}</span>
          </a>
        @empty
          <div class="m-tile" style="grid-area: a;"><span class="m-tile-cap">The Index</span></div>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ CATALOG LISTING — numbered rows, not a card grid (real products) ============ -->
  <section class="max-w-4xl mx-auto px-8 py-10">
    <p class="m-label mb-2" style="color:#C4BDB0;">The Collection</p>
    <p class="m-serif" style="font-size:2.2rem; color:#F3F0EA;">Recently Catalogued</p>
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
            <p class="m-label mt-1" style="color:#9C7A54;">{{ $p->metalType->name ?? '' }} {{ $p->karat->name ?? '' }}</p>
          </div>
          <div class="text-right">
            <p class="m-serif" style="font-size:1.15rem; color:#C7A97A;">{{ $currency }}{{ number_format($price, 2) }}</p>
          </div>
        </div>
      @empty
        <p class="text-sm" style="color:#C4BDB0;">The index is currently empty.</p>
      @endforelse
    </div>
    <div class="mt-10">
      <a href="{{ route('store.shop') }}" class="m-btn m-btn-solid">View Full Index</a>
    </div>
  </section>

  <!-- ============ EDITORIAL SPLIT — real product cards for the shared cart/quickview wiring ============ -->
  <section class="max-w-7xl mx-auto px-8 py-16" style="border-top:1px solid rgba(243,240,234,.08);">
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

  <!-- ============ CLOSING STATEMENT ============ -->
  <section class="max-w-3xl mx-auto px-8 py-24 text-center">
    <p class="m-serif" style="font-size:clamp(1.6rem,4vw,2.6rem); line-height:1.3; color:#F3F0EA;">"{{ $s->footer_text ?? 'We make fewer things, and we make them properly.' }}"</p>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
