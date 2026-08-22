@extends('store.verdant.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-verdant bg-white text-brand-ink">

  <!-- ============ HERO ============ -->
  <section class="relative overflow-hidden bg-brand-paper">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div class="relative z-10">
        <span class="inline-flex items-center gap-1.5 bg-brand-sage/12 text-brand-sageDark text-[11px] font-bold px-3 py-1.5 rounded-full mb-5 eyebrow">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
          NATURAL BY NATURE
        </span>
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl md:text-[52px] leading-[1.08] mb-5 text-brand-ink">
          {{ $s->hero_title ?? 'Wear Beautifully. Choose Consciously.' }}
        </h1>
        <p class="text-brand-ink/60 max-w-md mb-7 text-sm md:text-base leading-relaxed">{{ $s->hero_subtitle ?? 'Recycled precious metals, lab-grown stones, and full supply-chain transparency — jewelry that\'s as thoughtful as it is beautiful.' }}</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-brand-sage hover:bg-brand-sageDark transition text-white font-semibold px-6 py-3.5 rounded-lg text-sm">
            Shop the Collection
          </a>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 border-2 border-brand-ink/15 text-brand-ink font-semibold px-6 py-3.5 rounded-lg text-sm hover:border-brand-ink/30 transition">Our Sourcing</a>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-2xl overflow-hidden aspect-[4/5] shadow-cardHover">
          <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80"
               alt="Minimal gold jewelry on natural linen" class="w-full h-full object-cover" loading="eager">
        </div>
        <span class="hidden md:flex absolute top-5 right-5 items-center gap-1.5 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 text-[11px] font-bold text-brand-sageDark shadow-card">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
          ECO-CONSCIOUS
        </span>
      </div>
    </div>
  </section>

  <!-- ============ TRUST/CERTIFICATION STRIP ============ -->
  <section class="border-y border-brand-ink/[.06]">
    <div class="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
      @php
        $trust = [
          ['t' => 'Recycled Gold', 's' => '100% traceable', 'icon' => '<path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0013.9 3.5M18.5 9A8 8 0 004.6 5.5"/>'],
          ['t' => 'Lab-Grown Diamonds', 's' => 'Conflict-free, always', 'icon' => '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>'],
          ['t' => 'Carbon-Neutral Shipping', 's' => 'Every order, offset', 'icon' => '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>'],
          ['t' => 'Plastic-Free Packaging', 's' => 'Recyclable &amp; compostable', 'icon' => '<path d="M20 7L9 18l-5-5"/>'],
        ];
      @endphp
      @foreach($trust as $t)
        <div class="flex flex-col items-center gap-2">
          <span class="w-11 h-11 rounded-full bg-brand-sage/10 flex items-center justify-center">
            <svg class="w-5 h-5 text-brand-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">{!! $t['icon'] !!}</svg>
          </span>
          <p class="font-semibold text-xs text-brand-ink">{{ $t['t'] }}</p>
          <p class="text-[11px] text-brand-ink/50">{{ $t['s'] }}</p>
        </div>
      @endforeach
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="font-display font-extrabold text-2xl text-brand-ink mb-6">Shop the Collection</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      @php
        $catIcons = [
          '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/>',
          '<path d="M12 3v6M8 9h8l-4 12z"/>',
          '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
          '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
          '<circle cx="7" cy="12" r="3"/><circle cx="12" cy="8" r="3"/><circle cx="17" cy="12" r="3"/>',
        ];
      @endphp
      @forelse(($categories ?? collect())->take(5) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group text-center">
          <div class="rounded-2xl overflow-hidden aspect-square bg-brand-paper border border-brand-ink/[.06] flex items-center justify-center mb-2 group-hover:border-brand-sage/40 transition">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            @else
              <svg class="w-8 h-8 text-brand-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">{!! $catIcons[$i % count($catIcons)] !!}</svg>
            @endif
          </div>
          <span class="text-xs md:text-sm font-semibold text-brand-ink">{{ $cat->name }}</span>
        </a>
      @empty
        <p class="col-span-full text-brand-ink/40 text-sm text-center">No categories yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ BEST SELLERS (real products) ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-12">
    <div class="flex items-end justify-between mb-5">
      <h2 class="font-display font-extrabold text-2xl text-brand-ink">Best Sellers</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-sageDark hover:opacity-70 transition">View All Products →</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
      @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(6); @endphp
      @forelse($bestsellers as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-brand-ink/40 text-sm">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ MISSION BANNER + BUNDLE TILE ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-12">
    <div class="grid md:grid-cols-[1.3fr_1fr] gap-4">
      <div class="rounded-2xl bg-brand-moss text-white p-7 flex items-center gap-5">
        <span class="hidden sm:flex w-14 h-14 rounded-full border border-white/25 items-center justify-center shrink-0">
          <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
        </span>
        <div>
          <p class="font-display font-bold text-lg mb-1">Better sourced. Better worn.</p>
          <p class="text-xs text-white/70 mb-3 max-w-sm">Join thousands choosing responsibly made jewelry — no compromise on beauty or ethics.</p>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-1 text-xs font-bold text-white border-b border-white/40 pb-0.5">Learn About Our Sourcing →</a>
        </div>
      </div>
      <div class="rounded-2xl bg-brand-kraft/60 border border-brand-ink/[.06] p-7 flex flex-col justify-center">
        <p class="eyebrow text-[10px] text-brand-sageDark font-bold mb-1">BUNDLE &amp; SAVE</p>
        <p class="font-display font-extrabold text-xl text-brand-ink mb-1">Save up to 20%</p>
        <p class="text-xs text-brand-ink/60 mb-4">on responsibly-sourced jewelry sets</p>
        <a href="{{ route('store.shop') }}" class="text-xs font-bold text-brand-sageDark w-fit">Shop Bundles →</a>
      </div>
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="bg-brand-paper py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="font-display font-extrabold text-2xl text-brand-ink text-center mb-6">What Our Customers Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        @php
          $reviews = [
            ['n' => 'Olivia P.', 'q' => 'I love that I can see exactly where the gold and diamonds came from. Gorgeous pieces too.'],
            ['n' => 'Marcus H.', 'q' => 'Finally a jewelry brand that takes sustainability seriously without sacrificing design.'],
            ['n' => 'Aria N.', 'q' => 'The packaging alone made me a customer for life — zero waste and beautifully done.'],
          ];
        @endphp
        @foreach($reviews as $r)
          <div class="bg-white rounded-2xl p-5 border border-brand-ink/[.06]">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-full bg-brand-sage/15 flex items-center justify-center text-brand-sageDark font-bold text-sm">{{ substr($r['n'], 0, 1) }}</div>
              <p class="text-sm font-semibold text-brand-ink">{{ $r['n'] }}</p>
            </div>
            <div class="text-amber-500 text-xs mb-2">★★★★★</div>
            <p class="text-sm text-brand-ink/60">"{{ $r['q'] }}"</p>
          </div>
        @endforeach
      </div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
