@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  // Facet is a fixed light/indigo palette — pin light mode before paint so
  // shared components don't briefly inherit a visitor's dark preference.
  document.documentElement.classList.remove('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Space Grotesk"', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          brand: {
            ink: '#12141F',
            paper: '#F6F7FC',
            indigo: '#4F46E5',
            indigoDark: '#3730A3',
            violet: '#7C3AED',
            mint: '#10B981',
          },
        },
        boxShadow: {
          card: '0 2px 14px -4px rgba(18,20,31,0.10)',
          cardHover: '0 20px 40px -12px rgba(79,70,229,0.28)',
        },
      },
    },
  };
</script>
<style>
  /* Fixed light/indigo palette expressed as real CSS custom-property
     overrides so every shared storefront component (.price, .chip,
     .stock-dot, .btn, .card, .product-card) resolves the right color. */
  .theme-facet {
    --color-bg-base: 255 255 255;
    --color-bg-surface: 245 246 251;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 238 240 250;
    --color-border-subtle: 227 230 245;
    --color-border-strong: 199 204 234;
    --color-fg-primary: 18 20 31;
    --color-fg-secondary: 75 79 102;
    --color-fg-muted: 130 133 160;
    --color-accent-400: 99 102 241;
    --color-accent-500: 79 70 229;
    --color-accent-600: 55 48 163;
    color-scheme: light;
    font-family: 'Inter', sans-serif;
  }
  .theme-facet .font-display { font-family: 'Space Grotesk', sans-serif; }
  .theme-facet .eyebrow { letter-spacing: .14em; }
  .theme-facet .product-card { background: #fff; border-color: #E3E6F5; box-shadow: 0 2px 14px -4px rgba(18,20,31,0.10); }
  .theme-facet .product-card:hover { box-shadow: 0 20px 40px -12px rgba(79,70,229,0.28); }
  .theme-facet .product-card .product-title { color: #12141F; }
  .theme-facet .card { background: #fff; color: #12141F; border-color: #E3E6F5; }
</style>
@endpush

@section('header')
<div class="theme-facet">
  <div class="bg-brand-ink text-white text-[11.5px]">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
      <span class="font-semibold">{{ $s->topbar_text_left ?? 'New Season Edit — Up to 30% Off Select Diamonds' }}</span>
      <div class="hidden md:flex items-center gap-4 text-white/70">
        <span>{{ $s->topbar_text_right ?? 'Free 2-Day Shipping' }}</span>
        <a href="{{ route('account.orders') }}" class="hover:text-white transition">Track Order</a>
      </div>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-brand-ink/[.06]">
    <div class="max-w-7xl mx-auto px-4 py-3.5 flex items-center gap-4">
      <button id="fc-menuBtn" class="md:hidden p-1 -ml-1 text-brand-ink" aria-label="Open menu">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18M9 3l3 6-3 12M15 3l-3 6 3 12"/></svg>
        </span>
        <span class="font-display font-bold text-xl md:text-2xl text-brand-ink tracking-tight">{{ $s->store_name ?? 'FACET' }}</span>
      </a>

      <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-brand-ink/75 ml-4">
        <a href="{{ route('store.shop') }}" class="hover:text-brand-indigo transition">Shop All</a>
        @foreach(($categories ?? collect())->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-brand-indigo transition">{{ $cat->name }}</a>
        @endforeach
      </nav>

      <div class="flex items-center gap-4 ml-auto text-brand-ink">
        <a href="{{ route('account') }}" aria-label="Account" class="hover:text-brand-indigo transition"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
        <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:text-brand-indigo transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-indigo text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </a>
      </div>
    </div>

    <div id="fc-mobileNav" class="lg:hidden hidden flex-col px-4 py-2 text-sm font-semibold text-brand-ink divide-y divide-brand-ink/10 border-t border-brand-ink/10">
      <a href="{{ route('store.shop') }}" class="py-2.5">Shop All</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('fc-menuBtn');
    var mobileNav = document.getElementById('fc-mobileNav');
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
      });
    }
  });
</script>
@endsection

@section('footer')
<footer class="theme-facet bg-brand-ink text-white/60 pt-12 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-8 border-b border-white/10 text-sm">
      <div class="col-span-2">
        <span class="font-display font-bold text-lg text-white">{{ $s->store_name ?? 'FACET' }}</span>
        <p class="text-xs text-white/40 mt-2 max-w-xs">{{ $s->footer_text ?? 'Precision-cut diamonds and modern fine jewelry, engineered for everyday brilliance.' }}</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-xs eyebrow uppercase">Shop</h4>
        <ul class="space-y-2 text-white/50">
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">All Jewelry</a></li>
          @foreach(($categories ?? collect())->take(3) as $cat)
            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-white transition">{{ $cat->name }}</a></li>
          @endforeach
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-xs eyebrow uppercase">Support</h4>
        <ul class="space-y-2 text-white/50">
          <li><a href="{{ route('store.contact') }}" class="hover:text-white transition">Contact Us</a></li>
          <li><a href="{{ route('account.orders') }}" class="hover:text-white transition">Track Order</a></li>
          <li><a href="{{ route('account') }}" class="hover:text-white transition">My Account</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-xs eyebrow uppercase">Stay Sharp</h4>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Email address" class="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/15 outline-none text-xs text-white placeholder:text-white/40" />
          <button type="submit" class="w-9 h-9 shrink-0 bg-brand-indigo hover:bg-brand-indigoDark transition rounded-lg flex items-center justify-center text-white font-bold">→</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-white/35">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Facet' }}. All rights reserved.</p>
    </div>
  </div>
</footer>
@endsection
