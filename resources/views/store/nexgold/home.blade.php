@extends('store.nexgold.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-nexgold bg-nx-sand text-nx-ink">

  <!-- ============ HERO: 1 big panel + 2 stacked side panels ============ -->
  <section class="max-w-7xl mx-auto px-4 pt-6">
    <div class="grid md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4" style="min-height: 460px;">
      <div class="md:col-span-2 md:row-span-2 relative rounded-xl2 overflow-hidden min-h-[280px]">
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80"
             alt="Diamond engagement ring on black velvet" class="absolute inset-0 w-full h-full object-cover" loading="eager">
        <div class="absolute inset-0 bg-gradient-to-r from-nx-navy/90 via-nx-navy/40 to-transparent"></div>
        <div class="relative z-10 h-full flex flex-col justify-center p-6 md:p-10 max-w-md">
          <span class="eyebrow text-nx-gold mb-3 block">Est. Trust · Certified Quality</span>
          <h1 class="font-serif italic text-4xl md:text-5xl text-white leading-[1.05] mb-4">{{ $s->hero_title ?? 'Everything in Fine Jewelry' }}</h1>
          <p class="text-white/75 text-sm md:text-base mb-6">{{ $s->hero_subtitle ?? 'Rings, gold coins, gemstones and gifts — beautifully in one store.' }}</p>
          <div class="flex flex-wrap gap-3">
            <a href="{{ route('store.shop') }}" class="bg-nx-gold hover:bg-white transition text-nx-navy font-bold px-6 py-3 rounded-lg text-sm">Shop All Jewelry</a>
            <a href="{{ route('store.contact') }}" class="border border-white/50 text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition">Book Consultation</a>
          </div>
        </div>
      </div>

      <a href="{{ route('store.shop', ['category' => optional(($categories ?? collect())->first())->id]) }}"
         class="relative rounded-xl2 overflow-hidden min-h-[130px] group">
        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
             alt="Faceted gemstone pendant on gold chains" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-nx-navy/85 via-nx-navy/20 to-transparent"></div>
        <div class="relative z-10 h-full flex flex-col justify-end p-5">
          <span class="eyebrow text-nx-gold mb-1 block">Gemstones</span>
          <p class="font-serif italic text-2xl text-white">Rare Colored Stones</p>
        </div>
      </a>

      <a href="{{ route('store.shop') }}" class="relative rounded-xl2 overflow-hidden min-h-[130px] group">
        <img src="https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&w=800&q=80"
             alt="Men's braided bracelet and watch" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"></div>
        <div class="relative z-10 h-full flex flex-col justify-end p-5">
          <span class="eyebrow text-nx-gold mb-1 block">Men's Jewelry</span>
          <p class="font-serif italic text-2xl text-white">Bold &amp; Understated</p>
        </div>
      </a>
    </div>
  </section>

  <!-- ============ DENSE CATEGORY STRIP ============ -->
  <section class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-serif italic text-2xl text-nx-navy">Shop by Category</h2>
      <a href="{{ route('store.shop') }}" class="text-sm font-bold text-nx-navy hover:text-nx-gold transition">View All →</a>
    </div>
    @php
      $catIconPaths = [
        '<circle cx="12" cy="15" r="6"/><path d="M9 9l3-6 3 6"/>',
        '<path d="M12 3v6M8 9h8l-4 12z"/>',
        '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
        '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="4"/>',
        '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
        '<circle cx="7" cy="12" r="3"/><circle cx="12" cy="8" r="3"/><circle cx="17" cy="12" r="3"/>',
        '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
        '<path d="M12 21s-7.5-4.8-10-9.3C.5 8 2 4.5 5.5 4c2-.3 3.8.7 4.9 2.3C11.5 4.7 13.3 3.7 15.3 4c3.5.5 5 4 3.5 7.7C21.5 16.2 12 21 12 21z"/>',
        '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>',
        '<path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z"/>',
      ];
      $catNames = ['Rings','Necklaces','Earrings','Bangles','Bracelets','Pearls','Gemstones','Bridal','Gold Coins','New In'];
    @endphp
    <div class="grid grid-cols-5 md:grid-cols-10 gap-3">
      @for ($i = 0; $i < 10; $i++)
        @php $cat = ($categories ?? collect())->get($i); @endphp
        <a href="{{ $cat ? route('store.shop', ['category' => $cat->id]) : route('store.shop') }}"
           class="flex flex-col items-center gap-2 text-center group">
          <span class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nx-card border border-nx-border flex items-center justify-center text-nx-navy group-hover:border-nx-gold group-hover:text-nx-gold transition shadow-sm overflow-hidden">
            @if($cat && $cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="w-full h-full object-cover">
            @else
              <svg class="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">{!! $catIconPaths[$i] !!}</svg>
            @endif
          </span>
          <span class="text-[10px] md:text-xs font-semibold text-nx-ink leading-tight">{{ $cat->name ?? $catNames[$i] }}</span>
        </a>
      @endfor
    </div>
  </section>

  <!-- ============ NEW ARRIVALS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-4">
      <div>
        <span class="eyebrow text-nx-gold mb-1 block">Just Landed</span>
        <h2 class="font-serif italic text-2xl text-nx-navy">New Arrivals</h2>
      </div>
      <a href="{{ route('store.shop', ['sort' => 'latest']) }}" class="text-sm font-bold text-nx-navy hover:text-nx-gold transition">View All →</a>
    </div>
    @php $currency = $s->currency_code ?? '$'; $all = ($products ?? collect())->values(); @endphp
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
      @forelse($all->slice(0, 6) as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-nx-ink/50 text-sm">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ 2 PROMO BANNERS SIDE BY SIDE ============ -->
  <section class="max-w-7xl mx-auto px-4 py-4">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="relative rounded-xl2 overflow-hidden min-h-[200px] bg-nx-navy p-7 flex flex-col justify-center">
        <span class="eyebrow text-nx-gold mb-2 block">Certified &amp; Insured</span>
        <h3 class="font-serif italic text-2xl md:text-3xl text-white mb-2">Every Piece, Guaranteed</h3>
        <p class="text-white/60 text-sm mb-5 max-w-sm">IGI/GIA certified diamonds, hallmarked gold, and fully insured delivery on every order.</p>
        <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-white text-nx-navy font-bold px-5 py-2.5 rounded-lg text-sm w-fit hover:bg-nx-gold transition">Shop With Confidence</a>
      </div>
      <div class="relative rounded-xl2 overflow-hidden min-h-[200px] bg-gradient-to-br from-nx-gold to-nx-goldDark p-7 flex flex-col justify-center text-nx-navy">
        <span class="eyebrow text-nx-navy/70 mb-2 block">Gifting Made Easy</span>
        <h3 class="font-serif italic text-2xl md:text-3xl mb-2">The Perfect Gift, Boxed</h3>
        <p class="text-nx-navy/70 text-sm mb-5 max-w-sm">Complimentary gift wrapping and a personal note on every order — delivered ready to give.</p>
        <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 bg-nx-navy text-white font-bold px-5 py-2.5 rounded-lg text-sm w-fit hover:bg-black transition">Explore Gift Guide</a>
      </div>
    </div>
  </section>

  <!-- ============ BESTSELLERS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-4">
      <div>
        <span class="eyebrow text-nx-gold mb-1 block">Customer Favorites</span>
        <h2 class="font-serif italic text-2xl text-nx-navy">Bestsellers</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="text-sm font-bold text-nx-navy hover:text-nx-gold transition">View All →</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
      @forelse($all->slice(6, 6) as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        @foreach($all->slice(0, 6) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      @endforelse
    </div>
  </section>

  <!-- ============ GOLD & GIFT IDEAS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-4">
      <div>
        <span class="eyebrow text-nx-gold mb-1 block">For Every Occasion</span>
        <h2 class="font-serif italic text-2xl text-nx-navy">Gold &amp; Gift Ideas</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="text-sm font-bold text-nx-navy hover:text-nx-gold transition">View All →</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
      @forelse($all->slice(12, 6) as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        @foreach($all->slice(0, 6) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      @endforelse
    </div>
  </section>

  <!-- ============ TRUST / SERVICES STRIP ============ -->
  <section class="bg-nx-card border-y border-nx-border py-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-nx-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/></svg>
        <div><p class="font-bold text-xs md:text-sm text-nx-navy">Certified Diamonds</p><p class="text-[10px] md:text-xs text-nx-ink/50">IGI / GIA Graded</p></div>
      </div>
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-nx-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>
        <div><p class="font-bold text-xs md:text-sm text-nx-navy">Insured Shipping</p><p class="text-[10px] md:text-xs text-nx-ink/50">On Every Order</p></div>
      </div>
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-nx-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"/><path d="M9 10l2 2 4-4"/></svg>
        <div><p class="font-bold text-xs md:text-sm text-nx-navy">Lifetime Service</p><p class="text-[10px] md:text-xs text-nx-ink/50">Polish, Resize, Repair</p></div>
      </div>
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-nx-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0013.9 3.5M18.5 9A8 8 0 004.6 5.5"/></svg>
        <div><p class="font-bold text-xs md:text-sm text-nx-navy">Easy Returns</p><p class="text-[10px] md:text-xs text-nx-ink/50">30-Day Policy</p></div>
      </div>
      <div class="hidden md:flex items-center gap-2.5">
        <svg class="w-6 h-6 text-nx-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8V6a2 2 0 114 0v2"/></svg>
        <div><p class="font-bold text-sm text-nx-navy">Secure Payment</p><p class="text-xs text-nx-ink/50">Encrypted Checkout</p></div>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER / MEMBERSHIP ============ -->
  <section class="max-w-7xl mx-auto px-4 py-10">
    <div class="bg-nx-navy rounded-xl2 p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
      <div>
        <span class="eyebrow text-nx-gold mb-2 block">NexGold Insider</span>
        <h2 class="font-serif italic text-2xl md:text-3xl text-white mb-2">Get gold rate alerts &amp; early access</h2>
        <p class="text-white/60 text-sm">Join for weekly gold price updates, new arrivals, and member-only offers.</p>
      </div>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
        @csrf
        <input type="email" name="email" required placeholder="Enter your email" class="flex-1 min-w-0 px-4 py-3 rounded-lg bg-white/10 border border-white/15 outline-none text-sm text-white placeholder:text-white/40" />
        <button type="submit" class="px-6 py-3 rounded-lg bg-nx-gold text-nx-navy font-bold text-sm hover:bg-white transition shrink-0">Subscribe</button>
      </form>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
