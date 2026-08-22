@extends('store.atelier.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-atelier bg-brand-cream text-brand-bark">

  <!-- ============ HERO ============ -->
  <section class="relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div class="relative z-10">
        <p class="eyebrow text-[11px] text-brand-clay font-semibold mb-4">HANDCRAFTED, PIECE BY PIECE</p>
        <h1 class="font-serif font-semibold text-4xl sm:text-5xl md:text-[52px] leading-[1.1] mb-5 text-brand-bark">
          {{ $s->hero_title ?? 'Jewelry, Made by Hand' }}
        </h1>
        <p class="text-brand-bark/60 max-w-md mb-7 text-sm md:text-base leading-relaxed">{{ $s->hero_subtitle ?? 'Every piece is shaped, set, and finished in our small studio — thoughtfully made, meant to be worn every day.' }}</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-brand-clay hover:bg-brand-clayDark transition text-white font-semibold px-6 py-3 rounded-full text-xs eyebrow">
            Shop the Studio
          </a>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 border border-brand-bark/25 text-brand-bark font-semibold px-6 py-3 rounded-full text-xs eyebrow hover:bg-brand-bark/5 transition">Meet the Makers</a>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-3xl overflow-hidden aspect-[4/5] shadow-cardHover">
          <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80"
               alt="Artisan hands shaping a gold ring" class="w-full h-full object-cover" loading="eager">
        </div>
        <div class="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white border border-brand-bark/10 rounded-2xl px-5 py-4 shadow-card">
          <svg class="w-8 h-8 text-brand-sage shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
          <div>
            <p class="font-serif font-semibold text-sm text-brand-bark leading-none">Recycled Metals</p>
            <p class="text-[10px] text-brand-bark/50 mt-1">Responsibly sourced</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY OCCASION ============ -->
  <section class="max-w-7xl mx-auto px-4 py-10">
    <div class="flex items-end justify-between mb-6">
      <h2 class="font-serif font-semibold text-2xl text-brand-bark">Shop by Occasion</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-clay hover:opacity-70 transition">View All →</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      @php
        $catIcons = [
          '<path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/>',
          '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/>',
          '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
          '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
        ];
      @endphp
      @forelse(($categories ?? collect())->take(4) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group relative rounded-2xl overflow-hidden aspect-[4/5] flex items-end p-4 bg-white border border-brand-bark/[.08]">
          @if($cat->cover_image_url)
            <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-bark/70 via-brand-bark/10 to-transparent"></div>
            <span class="relative z-10 text-white text-sm font-serif font-semibold">{{ $cat->name }}</span>
          @else
            <svg class="absolute top-1/3 left-1/2 -translate-x-1/2 w-9 h-9 text-brand-sage/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">{!! $catIcons[$i % count($catIcons)] !!}</svg>
            <span class="relative z-10 text-brand-bark text-sm font-serif font-semibold">{{ $cat->name }}</span>
          @endif
        </a>
      @empty
        <p class="col-span-full text-brand-bark/40 text-sm text-center">No categories yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ FEATURED COLLECTION (real products) ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="flex items-end justify-between mb-5">
      <div>
        <p class="eyebrow text-[10px] text-brand-clay font-semibold mb-1">NEW PIECES, INSPIRED SPACES</p>
        <h2 class="font-serif font-semibold text-2xl md:text-3xl text-brand-bark">Featured Collection</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-bark/70 hover:text-brand-clay transition">View All</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
      @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(5); @endphp
      @forelse($bestsellers as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-brand-bark/40 text-sm">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ NATURAL MATERIALS BANNER + 2 TILES ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="grid md:grid-cols-[1.4fr_1fr] gap-4">
      <div class="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-7">
        <img src="https://images.unsplash.com/photo-1611591437281-460914d6cd52?auto=format&fit=crop&w=1000&q=80"
             alt="Handmade jewelry tools on a wooden workbench" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-brand-bark/85 via-brand-bark/25 to-transparent"></div>
        <div class="relative z-10">
          <p class="eyebrow text-[10px] text-white/70 mb-2">THE ART OF MAKING</p>
          <h3 class="font-serif font-semibold text-2xl text-white mb-3">Honest Materials.<br/>Lasting Craft.</h3>
          <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-white text-brand-bark font-semibold px-6 py-3 rounded-full text-xs eyebrow w-fit">Shop the Studio →</a>
        </div>
      </div>
      <div class="grid gap-4">
        <div class="rounded-2xl bg-brand-sage/15 border border-brand-sage/20 p-6 flex flex-col justify-between">
          <div>
            <p class="font-serif font-semibold text-lg text-brand-bark mb-1">Layer Your Look</p>
            <p class="text-xs text-brand-bark/60">Mix rings, chains &amp; cuffs</p>
          </div>
          <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-sageDark mt-4">Shop Layering →</a>
        </div>
        <div class="rounded-2xl bg-brand-clay/10 border border-brand-clay/20 p-6 flex flex-col justify-between">
          <div>
            <p class="font-serif font-semibold text-lg text-brand-bark mb-1">Gifting, Reimagined</p>
            <p class="text-xs text-brand-bark/60">Complimentary wrap included</p>
          </div>
          <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-clayDark mt-4">Shop Gifts →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ BEST SELLERS (real products) ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <h2 class="font-serif font-semibold text-2xl text-brand-bark mb-1">Best Sellers</h2>
    <p class="text-sm text-brand-bark/50 mb-5">Studio favorites, worn every day.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
      @php $newArrivals = ($products ?? collect())->slice(5, 5); @endphp
      @forelse($newArrivals as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        @foreach($bestsellers->take(4) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @endforeach
      @endforelse
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="font-serif font-semibold text-2xl text-brand-bark text-center mb-6">What Our Customers Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      @php
        $reviews = [
          ['n' => 'Emily R.', 'q' => 'You can feel that these pieces are made by hand — nothing feels mass-produced.'],
          ['n' => 'James T.', 'q' => 'Beautiful pieces, fast delivery, and amazing customer service. Great prices too.'],
          ['n' => 'Sophia L.', 'q' => 'The attention to detail in every piece is unmatched. We\'ll definitely be back.'],
        ];
      @endphp
      @foreach($reviews as $r)
        <div class="bg-white rounded-2xl p-5 border border-brand-bark/[.08]">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-full bg-brand-clay/15 flex items-center justify-center text-brand-clayDark font-bold text-sm">{{ substr($r['n'], 0, 1) }}</div>
            <p class="text-sm font-semibold text-brand-bark">{{ $r['n'] }}</p>
          </div>
          <div class="text-amber-500 text-xs mb-2">★★★★★</div>
          <p class="text-sm text-brand-bark/60">"{{ $r['q'] }}"</p>
        </div>
      @endforeach
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
