@extends('store.kiosk.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-kiosk" style="background:#fff; color:#0A0A0A;">

  <!-- ============ HERO — diagonal-cut color block, huge condensed type ============ -->
  <section class="k-hero">
    <div class="max-w-7xl mx-auto relative">
      <span class="k-sticker mb-6" style="display:inline-flex;">✦ New Drop Live</span>
      <h1 class="k-hero-title mt-4">{{ $s->hero_title ?? 'Jewelry That Talks Back' }}</h1>
      <p class="mt-5 max-w-md text-sm" style="color:#1a1a1a;">{{ $s->hero_subtitle ?? 'Statement pieces for people who never blend in. Loud, proud, made to be seen.' }}</p>
      <div class="flex flex-wrap gap-3 mt-8">
        <a href="{{ route('store.shop') }}" class="k-btn">Shop The Drop</a>
        <a href="{{ route('store.contact') }}" class="k-btn k-btn-alt">Get On The List</a>
      </div>
    </div>
  </section>

  <!-- ============ CATEGORY STICKER GRID — thick-bordered, slightly rotated tiles ============ -->
  <section class="max-w-7xl mx-auto px-6 py-14">
    <p class="k-label mb-6">Shop The Vibe</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      @php
        $rot = ['-1.5deg','1deg','-0.75deg','1.5deg'];
        $bg  = ['k-block-yellow','k-block','k-block-black','k-block-yellow'];
      @endphp
      @forelse(($categories ?? collect())->take(4) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="k-block {{ $bg[$i % count($bg)] }} p-5 flex flex-col justify-between aspect-square" style="transform: rotate({{ $rot[$i % count($rot)] }});">
          <span class="k-label">0{{ $i + 1 }}</span>
          <span class="k-display" style="font-size:1.3rem; line-height:1;">{{ $cat->name }}</span>
        </a>
      @empty
        <p class="col-span-full text-sm">No categories yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ TRENDING — real product cards, sticker-bordered ============ -->
  <section class="max-w-7xl mx-auto px-6 pb-14">
    <div class="flex items-end justify-between mb-6">
      <p class="k-display" style="font-size:2rem;">Trending Now</p>
      <a href="{{ route('store.shop') }}" class="k-label" style="text-decoration:underline;">See All →</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(5); @endphp
      @forelse($bestsellers as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ BOLD PROMO BLOCKS ============ -->
  <section class="max-w-7xl mx-auto px-6 pb-14">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="k-block k-block-yellow p-8 flex flex-col justify-between" style="min-height:200px;">
        <p class="k-display" style="font-size:2rem;">Stack It Up</p>
        <a href="{{ route('store.shop') }}" class="k-btn w-fit mt-4">Shop Stacks</a>
      </div>
      <div class="k-block k-block-black p-8 flex flex-col justify-between" style="min-height:200px;">
        <p class="k-display" style="font-size:2rem; color:var(--kx-yellow);">Custom Engraving</p>
        <a href="{{ route('store.contact') }}" class="k-btn k-btn-alt w-fit mt-4">Start Now</a>
      </div>
    </div>
  </section>

  <!-- ============ MORE DROPS — real products ============ -->
  <section class="max-w-7xl mx-auto px-6 pb-14">
    <p class="k-display mb-6" style="font-size:2rem;">Fresh Drops</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      @php $more = ($products ?? collect())->slice(5, 5); @endphp
      @forelse($more as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        @foreach($bestsellers->take(4) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      @endforelse
    </div>
  </section>

  <!-- ============ STAT STRIP ============ -->
  <section class="k-block-black" style="padding: 2.5rem 1.5rem;">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div><p class="k-display" style="font-size:2rem; color:var(--kx-yellow);">50K+</p><p class="k-label" style="color:#ccc;">Pieces Shipped</p></div>
      <div><p class="k-display" style="font-size:2rem; color:var(--kx-yellow);">4.8/5</p><p class="k-label" style="color:#ccc;">Rating</p></div>
      <div><p class="k-display" style="font-size:2rem; color:var(--kx-yellow);">120K+</p><p class="k-label" style="color:#ccc;">Followers</p></div>
      <div><p class="k-display" style="font-size:2rem; color:var(--kx-yellow);">WEEKLY</p><p class="k-label" style="color:#ccc;">New Drops</p></div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
