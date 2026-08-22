@extends('store.aurora.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-aurora bg-brand-void text-[#F5F0FF]">

  <!-- ============ HERO ============ -->
  <section class="relative overflow-hidden">
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-magenta/25 rounded-full blur-[100px]"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-violet/25 rounded-full blur-[100px]"></div>
    <div class="relative max-w-7xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
      <div class="relative z-10">
        <span class="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white text-[11px] font-bold px-3 py-1.5 rounded-full mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse"></span>
          NEW DROP LIVE NOW
        </span>
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl md:text-[58px] leading-[1.02] mb-5">
          <span class="grad-text">{{ $s->hero_title ?? 'Loud. Proud.' }}</span><br/>
          <span class="text-white">Unapologetically You.</span>
        </h1>
        <p class="text-white/60 max-w-md mb-7 text-sm md:text-base leading-relaxed">{{ $s->hero_subtitle ?? 'Bold statement jewelry made for main character energy. Stack it, clash it, wear it your way.' }}</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-gradient-to-r from-brand-magenta to-brand-violet hover:opacity-90 transition text-white font-bold px-6 py-3.5 rounded-full text-sm">
            Shop the Drop
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:border-white/40 transition">Get on the List</a>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-3xl overflow-hidden aspect-[4/5] shadow-cardHover ring-1 ring-white/10">
          <img src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80"
               alt="Bold statement jewelry closeup" class="w-full h-full object-cover" loading="eager">
        </div>
        <div class="hidden md:flex absolute -bottom-5 -left-5 items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-magenta rounded-2xl px-5 py-3 shadow-cardHover rotate-[-3deg]">
          <span class="font-display font-extrabold text-white text-sm">SOLD OUT IN 48HRS ⚡</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY (bold tiles) ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex items-end justify-between mb-6">
      <h2 class="font-display font-bold text-2xl md:text-3xl text-white">Shop the Vibe</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-bold text-brand-magenta hover:opacity-70 transition">SEE ALL →</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      @php
        $grads = ['from-brand-magenta to-brand-violet','from-brand-violet to-brand-orange','from-brand-orange to-brand-magenta','from-brand-mint to-brand-violet'];
        $catIcons = [
          '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/>',
          '<path d="M12 3v6M8 9h8l-4 12z"/>',
          '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
          '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
        ];
      @endphp
      @forelse(($categories ?? collect())->take(4) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group relative rounded-2xl overflow-hidden aspect-square flex items-end p-4 bg-gradient-to-br {{ $grads[$i % count($grads)] }}">
          @if($cat->cover_image_url)
            <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition duration-500">
          @else
            <svg class="absolute top-1/3 left-1/2 -translate-x-1/2 w-10 h-10 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">{!! $catIcons[$i % count($catIcons)] !!}</svg>
          @endif
          <span class="relative z-10 text-white text-sm font-display font-bold">{{ $cat->name }}</span>
        </a>
      @empty
        <p class="col-span-full text-white/40 text-sm text-center">No categories yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ TRENDING NOW (real products) ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-12">
    <div class="flex items-end justify-between mb-5">
      <div>
        <p class="eyebrow text-[10px] text-brand-mint font-bold mb-1">TRENDING RIGHT NOW</p>
        <h2 class="font-display font-bold text-2xl md:text-3xl text-white">The Hype List</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="text-xs font-bold text-white/70 hover:text-white transition flex items-center gap-1">VIEW ALL
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
      </a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
      @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(5); @endphp
      @forelse($bestsellers as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-white/40 text-sm">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ 2-COLUMN GRADIENT PROMO BANNER ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-12">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="relative rounded-3xl overflow-hidden min-h-[220px] flex flex-col justify-end p-7 bg-gradient-to-br from-brand-magenta to-brand-violet">
        <p class="font-display font-extrabold text-2xl text-white mb-1">Stack It Up</p>
        <p class="text-xs text-white/80 mb-4">Mix rings, chains &amp; ear cuffs your way</p>
        <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-white text-brand-void font-bold px-5 py-2.5 rounded-full text-xs w-fit">Shop Stacks →</a>
      </div>
      <div class="relative rounded-3xl overflow-hidden min-h-[220px] flex flex-col justify-end p-7 bg-gradient-to-br from-brand-orange to-brand-magenta">
        <p class="font-display font-extrabold text-2xl text-white mb-1">Custom Engraving</p>
        <p class="text-xs text-white/80 mb-4">Make it unmistakably yours</p>
        <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 bg-white text-brand-void font-bold px-5 py-2.5 rounded-full text-xs w-fit">Start Customizing →</a>
      </div>
    </div>
  </section>

  <!-- ============ NEW ARRIVALS (real products, horizontal scroll) ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-12">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-display font-bold text-2xl text-white">Fresh Drops</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-bold text-brand-magenta hover:opacity-70 transition">VIEW ALL</a>
    </div>
    <div class="relative">
      <div id="auNaScroll" class="flex gap-3 md:gap-4 overflow-x-auto pb-2" style="scroll-behavior:smooth; scrollbar-width:none;">
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
    </div>
  </section>

  <!-- ============ STATS BAR ============ -->
  <section class="border-y border-white/[.06] py-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div><p class="font-display font-extrabold text-2xl md:text-3xl grad-text">50K+</p><p class="text-xs text-white/50 mt-1">Pieces Shipped</p></div>
      <div><p class="font-display font-extrabold text-2xl md:text-3xl grad-text">120K+</p><p class="text-xs text-white/50 mt-1">Followers Styled</p></div>
      <div><p class="font-display font-extrabold text-2xl md:text-3xl grad-text">4.8/5</p><p class="text-xs text-white/50 mt-1">Average Rating</p></div>
      <div><p class="font-display font-extrabold text-2xl md:text-3xl grad-text">Weekly</p><p class="text-xs text-white/50 mt-1">New Drops</p></div>
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="font-display font-bold text-2xl text-white text-center mb-6">Real Talk From Real Customers</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      @php
        $reviews = [
          ['n' => 'Kai M.', 'q' => 'These pieces get stopped-on-the-street compliments every single time. Obsessed.'],
          ['n' => 'Zoe R.', 'q' => 'Finally jewelry that actually matches my personality instead of looking like everyone else\'s.'],
          ['n' => 'Theo B.', 'q' => 'Quality is way better than the price suggests. Already planning my next stack.'],
        ];
      @endphp
      @foreach($reviews as $r)
        <div class="bg-brand-panel rounded-2xl p-5 border border-white/[.06]">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-brand-magenta to-brand-violet flex items-center justify-center text-white font-bold text-sm">{{ substr($r['n'], 0, 1) }}</div>
            <p class="text-sm font-semibold text-white">{{ $r['n'] }}</p>
          </div>
          <div class="text-brand-mint text-xs mb-2">★★★★★</div>
          <p class="text-sm text-white/60">"{{ $r['q'] }}"</p>
        </div>
      @endforeach
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
