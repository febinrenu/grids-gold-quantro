@extends('store.facet.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-facet bg-white text-brand-ink">

  <!-- ============ HERO ============ -->
  <section class="relative overflow-hidden bg-brand-paper">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div class="relative z-10">
        <span class="inline-flex items-center gap-1.5 bg-brand-indigo/10 text-brand-indigo text-[11px] font-bold px-3 py-1.5 rounded-full mb-5">
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>
          NEW ARRIVALS 2026
        </span>
        <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-[56px] leading-[1.05] mb-5 text-brand-ink">
          {{ $s->hero_title ?? 'Cut Different.' }}
        </h1>
        <p class="text-brand-ink/60 max-w-md mb-7 text-sm md:text-base leading-relaxed">{{ $s->hero_subtitle ?? 'Precision-engineered diamonds, modern settings, and a build-your-own studio — fine jewelry made for how you actually live.' }}</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-brand-indigo hover:bg-brand-indigoDark transition text-white font-semibold px-6 py-3.5 rounded-xl text-sm">
            Shop New Arrivals
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 border-2 border-brand-ink/15 text-brand-ink font-semibold px-6 py-3.5 rounded-xl text-sm hover:border-brand-ink/30 transition">Build Your Ring</a>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-2xl overflow-hidden aspect-[4/5] shadow-cardHover">
          <img src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80"
               alt="Modern diamond ring macro" class="w-full h-full object-cover" loading="eager">
        </div>
        <div class="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white border border-brand-ink/10 rounded-2xl px-5 py-4 shadow-card">
          <span class="w-10 h-10 rounded-lg bg-brand-mint/15 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-brand-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l4 4L19 6"/></svg>
          </span>
          <div>
            <p class="font-display font-bold text-sm text-brand-ink leading-none">Lab &amp; Mined Certified</p>
            <p class="text-[10px] text-brand-ink/50 mt-1">GIA / IGI Graded</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP ============ -->
  <section class="border-y border-brand-ink/[.06]">
    <div class="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
      @php
        $trust = [
          ['title' => 'Free Shipping', 'sub' => 'On orders $150+', 'icon' => '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>'],
          ['title' => 'Secure Payments', 'sub' => '256-bit encrypted', 'icon' => '<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 118 0v3"/>'],
          ['title' => 'Lifetime Warranty', 'sub' => 'Every piece, forever', 'icon' => '<path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"/><path d="M9 10l2 2 4-4"/>'],
          ['title' => '30-Day Returns', 'sub' => 'No questions asked', 'icon' => '<path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0013.9 3.5M18.5 9A8 8 0 004.6 5.5"/>'],
        ];
      @endphp
      @foreach($trust as $t)
        <div class="flex items-center gap-3 justify-center md:justify-start">
          <svg class="w-7 h-7 text-brand-indigo shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">{!! $t['icon'] !!}</svg>
          <div>
            <p class="font-semibold text-sm text-brand-ink">{{ $t['title'] }}</p>
            <p class="text-xs text-brand-ink/50">{{ $t['sub'] }}</p>
          </div>
        </div>
      @endforeach
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex items-end justify-between mb-6">
      <h2 class="font-display font-bold text-2xl text-brand-ink">Shop by Category</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-indigo hover:opacity-70 transition">View All Categories →</a>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
      @php
        $catIcons = [
          '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/>',
          '<path d="M12 3v6M8 9h8l-4 12z"/>',
          '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
          '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
          '<circle cx="7" cy="12" r="3"/><circle cx="12" cy="8" r="3"/><circle cx="17" cy="12" r="3"/>',
          '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
        ];
      @endphp
      @forelse(($categories ?? collect())->take(6) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group flex flex-col items-center gap-2.5 text-center">
          <span class="relative w-full aspect-square rounded-2xl overflow-hidden bg-brand-paper border border-brand-ink/[.06] flex items-center justify-center group-hover:border-brand-indigo/40 transition">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
            @else
              <svg class="w-8 h-8 md:w-10 md:h-10 text-brand-indigo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">{!! $catIcons[$i % count($catIcons)] !!}</svg>
            @endif
          </span>
          <span class="text-xs md:text-sm font-semibold text-brand-ink">{{ $cat->name }}</span>
        </a>
      @empty
        <p class="col-span-full text-brand-ink/40 text-sm text-center">No categories yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ FEATURED / DEALS BANNERS ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-12">
    <div class="grid md:grid-cols-3 gap-4">
      <div class="rounded-2xl p-6 bg-gradient-to-br from-brand-indigo to-brand-violet text-white flex flex-col justify-between min-h-[160px]">
        <div>
          <p class="font-display font-bold text-xl mb-1">Engagement Edit</p>
          <p class="text-xs text-white/75">Up to 25% off select settings</p>
        </div>
        <a href="{{ route('store.shop') }}" class="text-xs font-bold inline-flex items-center gap-1 mt-4 w-fit">Shop Now →</a>
      </div>
      <div class="rounded-2xl p-6 bg-brand-ink text-white flex flex-col justify-between min-h-[160px]">
        <div>
          <p class="font-display font-bold text-xl mb-1">Everyday Diamonds</p>
          <p class="text-xs text-white/60">Stackable, wearable, effortless</p>
        </div>
        <a href="{{ route('store.shop') }}" class="text-xs font-bold inline-flex items-center gap-1 mt-4 w-fit text-brand-mint">Explore →</a>
      </div>
      <div class="rounded-2xl p-6 bg-brand-paper border border-brand-ink/[.06] flex flex-col justify-between min-h-[160px]">
        <div>
          <p class="font-display font-bold text-xl mb-1 text-brand-ink">Gift Guide</p>
          <p class="text-xs text-brand-ink/60">Curated picks under $500</p>
        </div>
        <a href="{{ route('store.shop') }}" class="text-xs font-bold inline-flex items-center gap-1 mt-4 w-fit text-brand-indigo">Discover →</a>
      </div>
    </div>
  </section>

  <!-- ============ BESTSELLERS (real products) ============ -->
  <section class="bg-brand-paper py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-end justify-between mb-5">
        <h2 class="font-display font-bold text-2xl text-brand-ink">Bestsellers</h2>
        <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-indigo hover:opacity-70 transition flex items-center gap-1">View All
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
        </a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
        @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(5); @endphp
        @forelse($bestsellers as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-brand-ink/40 text-sm">No products available yet.</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ NEW ARRIVALS (real products, horizontal scroll) ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-display font-bold text-2xl text-brand-ink">New Arrivals</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-indigo hover:opacity-70 transition">View All</a>
    </div>
    <div class="relative">
      <button id="fcNaPrev" class="hidden md:flex absolute -left-4 top-1/3 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-brand-ink/10 shadow-card items-center justify-center hover:bg-brand-paper transition text-brand-ink"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg></button>
      <div id="fcNaScroll" class="flex gap-3 md:gap-4 overflow-x-auto pb-2" style="scroll-behavior:smooth; scrollbar-width:none;">
        @php $newArrivals = ($products ?? collect())->slice(5, 6); @endphp
        @forelse($newArrivals as $p)
          <div class="shrink-0 w-40 sm:w-44">
            @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
          </div>
        @empty
          @foreach($bestsellers->take(4) as $p)
            <div class="shrink-0 w-40 sm:w-44">
              @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
            </div>
          @endforeach
        @endforelse
      </div>
      <button id="fcNaNext" class="hidden md:flex absolute -right-4 top-1/3 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-brand-ink/10 shadow-card items-center justify-center hover:bg-brand-paper transition text-brand-ink"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button>
    </div>
  </section>

  <!-- ============ STATS BAR ============ -->
  <section class="bg-brand-ink py-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div><p class="font-display font-bold text-2xl md:text-3xl text-white">15K+</p><p class="text-xs text-white/50 mt-1">Pieces Sold</p></div>
      <div><p class="font-display font-bold text-2xl md:text-3xl text-white">60K+</p><p class="text-xs text-white/50 mt-1">Happy Customers</p></div>
      <div><p class="font-display font-bold text-2xl md:text-3xl text-white">4.9/5</p><p class="text-xs text-white/50 mt-1">Customer Rating</p></div>
      <div><p class="font-display font-bold text-2xl md:text-3xl text-white">100%</p><p class="text-xs text-white/50 mt-1">Certified Diamonds</p></div>
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="font-display font-bold text-2xl text-brand-ink text-center mb-6">What Our Customers Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      @php
        $reviews = [
          ['n' => 'Maya T.', 'q' => 'The ring configurator made proposing so much less stressful — exactly what I designed, delivered fast.'],
          ['n' => 'Daniel K.', 'q' => 'Best-in-class packaging and the diamond cert was right there in the box. Zero doubts.'],
          ['n' => 'Sophia L.', 'q' => 'Modern, clean pieces that don\'t look like everything else out there. Already ordered twice.'],
        ];
      @endphp
      @foreach($reviews as $r)
        <div class="bg-brand-paper rounded-2xl p-5 border border-brand-ink/[.06]">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-full bg-brand-indigo/15 flex items-center justify-center text-brand-indigo font-bold text-sm">{{ substr($r['n'], 0, 1) }}</div>
            <p class="text-sm font-semibold text-brand-ink">{{ $r['n'] }}</p>
          </div>
          <div class="text-amber-500 text-xs mb-2">★★★★★</div>
          <p class="text-sm text-brand-ink/60">"{{ $r['q'] }}"</p>
        </div>
      @endforeach
    </div>
  </section>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var scroller = document.getElementById('fcNaScroll');
    var prev = document.getElementById('fcNaPrev');
    var next = document.getElementById('fcNaNext');
    if (scroller && prev && next) {
      prev.addEventListener('click', function () { scroller.scrollBy({ left: -260, behavior: 'smooth' }); });
      next.addEventListener('click', function () { scroller.scrollBy({ left: 260, behavior: 'smooth' }); });
    }
  });
</script>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
