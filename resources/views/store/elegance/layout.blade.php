@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  // Élan has its own fixed light editorial palette — it never adapts to the
  // shared light/dark toggle, so pin the mode here before paint (overriding
  // whatever the visitor last chose on the default theme) to avoid unstyled
  // text inheriting the wrong contrast color.
  document.documentElement.classList.remove('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"Work Sans"', 'sans-serif'],
        },
        colors: {
          brand: {
            black: '#111111',
            gold: '#B8654A',
            goldDark: '#96503A',
            cream: '#F6EFE7',
          },
        },
        boxShadow: {
          card: '0 4px 16px -6px rgba(17,17,17,0.10)',
          cardHover: '0 14px 30px -10px rgba(17,17,17,0.20)',
        },
      },
    },
  };
</script>
<style>
  /* Fixed light/terracotta palette, expressed as real CSS custom-property
     overrides (not just a JS dark-mode toggle) so every shared storefront
     component — .price, .chip, .stock-dot, .btn, .card — resolves the
     correct color regardless of the visitor's light/dark preference on
     other themes. */
  .theme-elegance {
    --color-bg-base: 255 255 255;
    --color-bg-surface: 255 255 255;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 246 239 231;
    --color-border-subtle: 240 238 233;
    --color-border-strong: 214 209 199;
    --color-fg-primary: 23 19 16;
    --color-fg-secondary: 90 74 58;
    --color-fg-muted: 140 125 105;
    --color-accent-400: 200 130 105;
    --color-accent-500: 184 101 74;
    --color-accent-600: 150 80 58;
    color-scheme: light;
    font-family: 'Work Sans', sans-serif;
  }
  .theme-elegance .font-logo { font-family: 'Playfair Display', serif; }
  .theme-elegance .eyebrow { letter-spacing: .14em; }
  .theme-elegance .product-card { background: #ffffff; border-color: #f0eee9; }
  .theme-elegance .card { background: #ffffff; color: #171310; }
</style>
@endpush

@section('header')
<div class="theme-elegance">
  <div class="bg-brand-black text-white text-[12px]">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
      <span class="flex items-center gap-2 whitespace-nowrap">
        <span class="hidden sm:inline">EXTRA 20% OFF YOUR FIRST ORDER | USE CODE:</span>
        <span class="sm:hidden">EXTRA 20% OFF | CODE:</span>
        <span class="text-brand-gold font-bold">NEW20</span>
      </span>
      <div class="hidden md:flex items-center gap-4 whitespace-nowrap text-white/80">
        <a href="{{ route('store.contact') }}" class="hover:text-white transition">Help &amp; FAQs</a>
        <span>{{ $s->currency_code ?? 'USD' }}</span>
      </div>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
    <div class="hidden md:flex max-w-7xl mx-auto px-4 py-4 items-center gap-8">
      <a href="{{ route('store.index') }}" class="shrink-0 leading-none">
        <div class="font-logo text-2xl tracking-wide text-[#171310]">{{ $s->store_name ?? 'ÉLAN' }}</div>
        <div class="text-[9px] eyebrow text-[#7a7058] mt-0.5">FINE JEWELRY EDIT</div>
      </a>

      <div class="flex flex-1 max-w-xl mx-auto">
        <form action="{{ route('store.shop') }}" method="get" class="flex w-full border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-black/10">
          <input type="text" name="q" placeholder="Search rings, necklaces, earrings..." class="w-full px-5 py-2.5 text-sm outline-none placeholder:text-gray-400" />
          <button class="bg-brand-black hover:bg-black transition text-white px-5 flex items-center justify-center" aria-label="Search" type="submit">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          </button>
        </form>
      </div>

      <div class="flex items-center gap-6 text-[12px] text-[#171310]">
        <a href="{{ route('account') }}" class="flex flex-col items-center gap-1 hover:text-brand-gold transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
          Account
        </a>
        <a href="{{ route('store.cart') }}" class="relative flex flex-col items-center gap-1 hover:text-brand-gold transition">
          <span class="relative">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
            <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </span>
          Cart
        </a>
      </div>
    </div>

    <div class="md:hidden flex items-center gap-3 px-4 py-3.5">
      <button id="el-menuBtn" class="p-1 -ml-1" aria-label="Open menu">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex-1 flex flex-col items-center leading-none">
        <span class="font-logo text-lg tracking-wide">{{ $s->store_name ?? 'ÉLAN' }}</span>
        <span class="text-[7.5px] eyebrow text-[#7a7058]">FINE JEWELRY EDIT</span>
      </a>
      <a href="{{ route('store.cart') }}" class="relative p-1">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-0.5 -right-0.5 bg-brand-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
      </a>
    </div>
    <div class="md:hidden px-4 pb-3">
      <form action="{{ route('store.shop') }}" method="get" class="flex w-full border border-gray-300 overflow-hidden">
        <input type="text" name="q" placeholder="Search rings, necklaces..." class="w-full px-4 py-2 text-sm outline-none placeholder:text-gray-400" />
        <button class="bg-brand-black text-white px-4 flex items-center justify-center" type="submit">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </button>
      </form>
    </div>

    <div id="el-mobileNav" class="md:hidden hidden flex-col px-4 py-2 text-sm font-medium text-[#171310] divide-y divide-gray-100 border-t border-gray-100">
      <a href="{{ route('store.shop') }}" class="py-2.5">New In</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>

    <nav class="hidden md:block bg-brand-black">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 text-[12px] font-medium text-white/85 eyebrow h-11 flex-wrap">
        <a href="{{ route('store.shop') }}" class="hover:text-brand-gold transition">NEW IN</a>
        @foreach(($categories ?? collect())->take(8) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-brand-gold transition">{{ Str::upper($cat->name) }}</a>
        @endforeach
      </div>
    </nav>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('el-menuBtn');
    var mobileNav = document.getElementById('el-mobileNav');
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
<footer class="theme-elegance bg-brand-black text-white/70 pt-10 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
      <div>
        <a href="{{ route('store.index') }}" class="font-logo text-xl text-white block mb-1">{{ $s->store_name ?? 'ÉLAN' }}</a>
        <p class="text-[9px] eyebrow text-white/40 mb-3">FINE JEWELRY EDIT</p>
        <p class="text-sm text-white/45 leading-relaxed">{{ $s->footer_text ?? 'Elegance is not about being noticed, it\'s about being remembered.' }}</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">SHOP</h4>
        <ul class="space-y-2 text-sm text-white/50">
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">All Jewelry</a></li>
          @foreach(($categories ?? collect())->take(5) as $cat)
            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-white transition">{{ $cat->name }}</a></li>
          @endforeach
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">CUSTOMER CARE</h4>
        <ul class="space-y-2 text-sm text-white/50">
          <li><a href="{{ route('account.orders') }}" class="hover:text-white transition">Track Your Order</a></li>
          <li><a href="{{ route('store.contact') }}" class="hover:text-white transition">Contact Us</a></li>
          <li><a href="{{ route('account') }}" class="hover:text-white transition">My Account</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">BE THE FIRST TO KNOW</h4>
        <p class="text-sm text-white/50 mb-3">Subscribe for special offers and new arrivals.</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Email address" class="flex-1 min-w-0 px-3 py-2 border border-white/15 bg-white/5 outline-none text-xs text-white placeholder:text-white/40" />
          <button type="submit" class="bg-brand-gold hover:bg-brand-goldDark transition text-black font-semibold px-4 py-2 text-xs eyebrow shrink-0">JOIN</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-white/40">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Élan Fine Jewelry' }}. All Rights Reserved.</p>
      <p>{{ $s->contact_email ?? '' }} {{ $s->contact_phone ?? '' }}</p>
    </div>
  </div>
</footer>
@endsection
