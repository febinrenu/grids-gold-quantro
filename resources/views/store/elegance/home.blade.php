@extends('store.elegance.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-elegance bg-white text-[#171310]">

  <!-- ============ FULL-BLEED EDITORIAL HERO ============ -->
  <section class="relative h-[92vh] min-h-[560px] max-h-[900px] overflow-hidden">
    <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1800&q=80"
         alt="Model wearing a delicate pearl pendant necklace" class="absolute inset-0 w-full h-full object-cover" loading="eager">
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30"></div>
    <div class="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-16 md:pb-20">
      <span class="eyebrow text-[11px] text-white/80 font-semibold mb-4">THE SIGNATURE EDIT — AUTUMN COLLECTION</span>
      <h1 class="font-logo text-4xl sm:text-6xl md:text-7xl text-white leading-[1.05] mb-5 max-w-3xl">
        {{ $s->hero_title ?? 'Define Your Signature Style' }}
      </h1>
      <p class="text-white/80 max-w-lg mb-8 text-sm md:text-base">{{ $s->hero_subtitle ?? 'Elevate every look with fine jewelry that speaks elegance.' }}</p>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="#newin" class="inline-flex items-center gap-2 bg-white hover:bg-gray-100 transition text-black font-semibold px-8 py-3.5 text-sm">SHOP NEW IN</a>
        <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-transparent border border-white text-white font-semibold px-8 py-3.5 text-sm hover:bg-white/10 transition">SHOP BRIDAL</a>
      </div>
    </div>
    <div class="hidden md:flex absolute top-8 right-8 flex-col items-center justify-center text-center w-24 h-24 rounded-full bg-white/95 text-[#171310] shadow-2xl">
      <span class="text-[9px] font-semibold">UP TO</span>
      <span class="font-logo text-2xl text-brand-gold leading-none">30%</span>
      <span class="text-[9px] font-semibold">OFF</span>
    </div>
  </section>

  <!-- ============ TRUST STRIP ============ -->
  <section class="border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>
        <div><p class="font-semibold text-xs md:text-sm">Free Insured Shipping</p><p class="text-[10px] md:text-xs text-gray-500">On all orders</p></div>
      </div>
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l7 4v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V7z"/><path d="M9 12l2 2 4-4"/></svg>
        <div><p class="font-semibold text-xs md:text-sm">Certified Gemstones</p><p class="text-[10px] md:text-xs text-gray-500">IGI / GIA graded</p></div>
      </div>
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0013.9 3.5M18.5 9A8 8 0 004.6 5.5"/></svg>
        <div><p class="font-semibold text-xs md:text-sm">Easy Returns</p><p class="text-[10px] md:text-xs text-gray-500">30-day policy</p></div>
      </div>
      <div class="hidden md:flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 16v-3a8 8 0 0116 0v3"/><rect x="2.5" y="15" width="5" height="6" rx="2"/><rect x="16.5" y="15" width="5" height="6" rx="2"/></svg>
        <div><p class="font-semibold text-sm">Styling Concierge</p><p class="text-xs text-gray-500">We're here to help</p></div>
      </div>
    </div>
  </section>

  <!-- ============ SHOP THE EDIT — editorial index bar (distinct from tile grids) ============ -->
  <section class="border-b border-gray-100 bg-[#FAF8F4]">
    <div class="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
      <div class="flex items-center gap-8 whitespace-nowrap text-sm">
        <span class="eyebrow text-[10px] text-gray-400 font-semibold shrink-0">SHOP THE EDIT</span>
        @forelse(($categories ?? collect())->take(10) as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="flex items-center gap-1.5 font-medium text-[#171310] hover:text-brand-gold transition shrink-0">
            <span class="text-[10px] text-brand-gold font-mono">{{ sprintf('%02d', $i + 1) }}</span> {{ $cat->name }}
          </a>
        @empty
          <span class="text-gray-400 text-sm">No categories yet.</span>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL SPREAD (asymmetric magazine layout) ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex items-end justify-between mb-6">
      <h2 class="font-logo text-2xl md:text-3xl">The Editorial</h2>
      <a href="{{ route('store.shop') }}" class="text-xs md:text-sm font-semibold text-brand-gold hover:opacity-70 transition">View the Story →</a>
    </div>
    <div class="grid md:grid-cols-3 gap-3 md:gap-4">
      <a href="{{ route('store.shop') }}" class="group relative md:row-span-2 rounded-lg overflow-hidden aspect-[4/5] md:aspect-auto">
        <img src="https://images.unsplash.com/photo-1600721391689-2564bb8055de?auto=format&fit=crop&w=900&q=80"
             alt="Model wearing layered necklaces" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent"></div>
        <div class="absolute bottom-5 left-5 text-white">
          <p class="eyebrow text-[10px] text-white/70 mb-1">CHAPTER ONE</p>
          <p class="font-logo text-xl">Layered &amp; Luminous</p>
        </div>
      </a>
      <a href="{{ route('store.shop') }}" class="group relative rounded-lg overflow-hidden aspect-[4/5] md:aspect-[16/11]">
        <img src="https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&w=700&q=80"
             alt="Close-up pearl pendant necklace" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <p class="eyebrow text-[10px] text-white/70 mb-1">CHAPTER TWO</p>
          <p class="font-logo text-lg">The Pearl Edit</p>
        </div>
      </a>
      <a href="{{ route('store.shop') }}" class="group relative rounded-lg overflow-hidden aspect-[4/5] md:aspect-[16/11] bg-[#0d0d0d]">
        <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80"
             alt="Gold twisted hoop earrings" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <p class="eyebrow text-[10px] text-white/70 mb-1">CHAPTER THREE</p>
          <p class="font-logo text-lg">Statement Gold</p>
        </div>
      </a>
    </div>
  </section>

  <!-- ============ NEW IN (real products) ============ -->
  <section id="newin" class="max-w-7xl mx-auto px-4 pb-12">
    <div class="flex items-center justify-between mb-5">
      <h2 class="eyebrow text-sm md:text-base font-bold flex items-center gap-2">NEW IN <span class="w-8 h-px bg-brand-gold"></span></h2>
      <a href="{{ route('store.shop') }}" class="text-xs md:text-sm font-semibold text-[#171310] hover:text-brand-gold transition flex items-center gap-1">View All Jewelry
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
      @php $currency = $s->currency_code ?? '$'; $elProducts = ($products ?? collect()); @endphp
      @forelse($elProducts->take(6) as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-gray-400 text-sm">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ GIFT / BRIDAL BANNER (real photo) ============ -->
  <section class="relative overflow-hidden min-h-[320px] flex items-center">
    <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1600&q=80"
         alt="Gold rings on a cream gift box" class="absolute inset-0 w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-14 w-full">
      <div class="max-w-sm">
        <p class="eyebrow text-[10px] text-brand-gold font-semibold mb-2">THE GIFT EDIT</p>
        <h3 class="font-logo text-3xl mb-3">Gifting, Beautifully Done</h3>
        <p class="text-sm text-[#5a4a3a] mb-6">Complimentary gift wrapping and a handwritten note with every order — because presentation matters as much as the piece.</p>
        <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-brand-black hover:bg-black transition text-white font-semibold px-7 py-3 text-xs eyebrow">SHOP GIFTS</a>
      </div>
    </div>
  </section>

  <!-- ============ BESTSELLERS (real products) ============ -->
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex items-center justify-between mb-5">
      <h2 class="eyebrow text-sm md:text-base font-bold flex items-center gap-2">BESTSELLERS <span class="w-8 h-px bg-brand-gold"></span></h2>
      <a href="{{ route('store.shop') }}" class="text-xs md:text-sm font-semibold text-[#171310] hover:text-brand-gold transition">View All</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
      @forelse($elProducts->slice(6, 6) as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        @foreach($elProducts->take(6) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      @endforelse
    </div>
  </section>

  <!-- ============ PRESS / PULL-QUOTE STRIP ============ -->
  <section class="bg-[#FAF8F4] py-14 border-y border-gray-100">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <svg class="w-8 h-8 text-brand-gold mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11a4 4 0 014-4V5a6 6 0 00-6 6v6h6v-6H7zm10 0a4 4 0 014-4V5a6 6 0 00-6 6v6h6v-6h-4z"/></svg>
      <p class="font-logo text-2xl md:text-3xl leading-snug mb-4">"Élan has quietly become the go-to for jewelry that feels personal, modern, and made to last."</p>
      <p class="eyebrow text-[10px] text-gray-400 font-semibold">— THE STYLE JOURNAL</p>
      <div class="flex items-center justify-center gap-8 mt-8 text-gray-400 text-xs eyebrow font-semibold flex-wrap">
        <span>VOGUE STYLE</span>
        <span>HARPER'S EDIT</span>
        <span>THE CUT</span>
        <span>MODERN BRIDE</span>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER / MEMBERSHIP ============ -->
  <section class="max-w-7xl mx-auto px-4 py-14">
    <div class="bg-brand-black rounded-2xl p-8 md:p-14 text-center">
      <p class="eyebrow text-[10px] text-brand-gold font-semibold mb-3">JOIN THE ÉDITION</p>
      <h2 class="font-logo text-3xl md:text-4xl text-white mb-3">Be First to Know</h2>
      <p class="text-sm text-white/60 max-w-md mx-auto mb-6">New collections, private sales, and styling notes — straight to your inbox.</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        @csrf
        <input type="email" name="email" required placeholder="Enter your email address" class="flex-1 min-w-0 px-4 py-3 border border-white/15 bg-white/5 outline-none text-sm text-white placeholder:text-white/40" />
        <button type="submit" class="bg-brand-gold hover:bg-brand-goldDark transition text-black font-semibold px-7 py-3 text-xs eyebrow shrink-0">SUBSCRIBE</button>
      </form>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
