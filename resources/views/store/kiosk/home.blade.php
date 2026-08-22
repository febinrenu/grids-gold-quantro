@extends('store.kiosk.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-kiosk" style="background:#fff; color:#0A0A0A;">

  <!-- ============ HERO — diagonal-cut color block, huge condensed type, photo cutout ============ -->
  <section class="k-hero">
    <div class="max-w-7xl mx-auto relative grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
      <div>
        <span class="k-sticker mb-6" style="display:inline-flex;">✦ New Drop Live</span>
        <h1 class="k-hero-title mt-4">{{ $s->hero_title ?? 'Jewelry That Talks Back' }}</h1>
        <p class="mt-5 max-w-md text-sm" style="color:#1a1a1a;">{{ $s->hero_subtitle ?? 'Statement pieces for people who never blend in. Loud, proud, made to be seen.' }}</p>
        <div class="flex flex-wrap gap-3 mt-8">
          <a href="{{ route('store.shop') }}" class="k-btn">Shop The Drop</a>
          <a href="{{ route('store.contact') }}" class="k-btn k-btn-alt">Get On The List</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <div class="k-block" style="aspect-ratio:4/5; overflow:hidden; transform:rotate(2deg); box-shadow:8px 8px 0 var(--kx-black);">
          <img src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=800&q=80" alt="Bold statement jewelry" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <span class="k-sticker" style="position:absolute; bottom:-1rem; left:-1rem; background:var(--kx-black); transform:rotate(-6deg);">HOT 🔥</span>
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

  <!-- ============ BOLD PROMO BLOCKS — with background photos ============ -->
  <section class="max-w-7xl mx-auto px-6 pb-14">
    <div class="grid md:grid-cols-2 gap-4">
      <a href="{{ route('store.shop') }}" class="k-block relative flex flex-col justify-end p-8" style="min-height:260px; overflow:hidden;">
        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
        <div style="position:absolute; inset:0; background:linear-gradient(0deg, rgba(233,245,42,.9), rgba(233,245,42,.15));"></div>
        <div class="relative">
          <p class="k-display" style="font-size:2rem;">Stack It Up</p>
          <span class="k-btn w-fit mt-3" style="display:inline-flex;">Shop Stacks</span>
        </div>
      </a>
      <a href="{{ route('store.contact') }}" class="k-block relative flex flex-col justify-end p-8" style="min-height:260px; overflow:hidden;">
        <img src="https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=900&q=80" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
        <div style="position:absolute; inset:0; background:linear-gradient(0deg, rgba(10,10,10,.92), rgba(10,10,10,.25));"></div>
        <div class="relative">
          <p class="k-display" style="font-size:2rem; color:var(--kx-yellow);">Custom Engraving</p>
          <span class="k-btn k-btn-alt w-fit mt-3" style="display:inline-flex;">Start Now</span>
        </div>
      </a>
    </div>
  </section>

  <!-- ============ BEHIND THE DROP — photo strip ============ -->
  <section class="max-w-7xl mx-auto px-6 pb-14">
    <p class="k-label mb-6">Behind The Drop</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      @php $gallery = ['1620656798579-1984d9e87df7','1599643478518-a784e5dc4c8f','1587467512961-120760940315','1522312346375-d1a52e2b99b3']; @endphp
      @foreach($gallery as $i => $g)
        <div class="k-block" style="aspect-ratio:1; overflow:hidden; transform: rotate({{ $i % 2 === 0 ? '-1deg' : '1deg' }});">
          <img src="https://images.unsplash.com/photo-{{ $g }}?auto=format&fit=crop&w=500&q=75" alt="" style="width:100%; height:100%; object-fit:cover;">
        </div>
      @endforeach
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
