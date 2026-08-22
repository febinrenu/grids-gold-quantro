@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  document.documentElement.classList.remove('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Manrope"', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          brand: {
            sage: '#5B7358',
            sageDark: '#445943',
            moss: '#3C4A3A',
            kraft: '#E7E0D0',
            paper: '#F7F5EE',
            ink: '#232821',
          },
        },
        boxShadow: {
          card: '0 2px 12px -4px rgba(35,40,33,0.10)',
          cardHover: '0 16px 32px -10px rgba(91,115,88,0.24)',
        },
      },
    },
  };
</script>
<style>
  .theme-verdant {
    --color-bg-base: 255 255 255;
    --color-bg-surface: 247 245 238;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 231 224 208;
    --color-border-subtle: 224 219 202;
    --color-border-strong: 196 189 168;
    --color-fg-primary: 35 40 33;
    --color-fg-secondary: 80 90 76;
    --color-fg-muted: 128 136 120;
    --color-accent-400: 111 138 106;
    --color-accent-500: 91 115 88;
    --color-accent-600: 68 89 67;
    color-scheme: light;
    font-family: 'Inter', sans-serif;
  }
  .theme-verdant .font-display { font-family: 'Manrope', sans-serif; }
  .theme-verdant .eyebrow { letter-spacing: .13em; }
  .theme-verdant .product-card { background: #fff; border-color: #E0DBCA; box-shadow: 0 2px 12px -4px rgba(35,40,33,0.10); }
  .theme-verdant .product-card:hover { box-shadow: 0 16px 32px -10px rgba(91,115,88,0.24); }
  .theme-verdant .product-card .product-title { color: #232821; }
  .theme-verdant .card { background: #fff; color: #232821; border-color: #E0DBCA; }
</style>
@endpush

@section('header')
<div class="theme-verdant">
  <div class="bg-brand-moss text-white/85 text-[11.5px]">
    <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
      <span class="flex items-center gap-1.5">
        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
        {{ $s->topbar_text_left ?? 'Recycled Gold. Lab-Grown Diamonds. Zero Compromise.' }}
      </span>
      <span class="hidden md:inline">{{ $s->topbar_text_right ?? 'Carbon-neutral shipping on every order' }}</span>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-brand-ink/[.07]">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
      <button id="vd-menuBtn" class="md:hidden p-1 -ml-1 text-brand-ink" aria-label="Open menu">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-full bg-brand-sage/15 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-brand-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
        </span>
        <span class="font-display font-extrabold text-lg md:text-xl text-brand-ink tracking-tight">{{ $s->store_name ?? 'Verdant' }}</span>
      </a>

      <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-brand-ink/70 ml-4">
        <a href="{{ route('store.shop') }}" class="hover:text-brand-sage transition">Shop All</a>
        @foreach(($categories ?? collect())->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-brand-sage transition">{{ $cat->name }}</a>
        @endforeach
      </nav>

      <div class="flex items-center gap-4 ml-auto text-brand-ink">
        <a href="{{ route('account') }}" aria-label="Account" class="hover:text-brand-sage transition"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
        <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:text-brand-sage transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-sage text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </a>
      </div>
    </div>

    <div id="vd-mobileNav" class="lg:hidden hidden flex-col px-4 py-2 text-sm font-semibold text-brand-ink divide-y divide-brand-ink/10 border-t border-brand-ink/10">
      <a href="{{ route('store.shop') }}" class="py-2.5">Shop All</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('vd-menuBtn');
    var mobileNav = document.getElementById('vd-mobileNav');
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
<footer class="theme-verdant bg-brand-moss text-white/60 pt-12 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10 text-sm">
      <div class="col-span-2">
        <span class="font-display font-extrabold text-lg text-white">{{ $s->store_name ?? 'Verdant' }}</span>
        <p class="text-xs text-white/40 mt-2 max-w-xs">{{ $s->footer_text ?? 'Thoughtfully sourced jewelry — recycled metals, lab-grown stones, and a lighter footprint.' }}</p>
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
        <h4 class="text-white font-semibold mb-3 text-xs eyebrow uppercase">Stay in the Loop</h4>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Enter your email" class="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/15 outline-none text-xs text-white placeholder:text-white/40" />
          <button type="submit" class="w-9 h-9 shrink-0 bg-brand-sage hover:bg-brand-sageDark transition rounded-lg flex items-center justify-center text-white font-bold">→</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-white/35">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Verdant' }}. All rights reserved.</p>
    </div>
  </div>
</footer>
@endsection
