@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  document.documentElement.classList.remove('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Fraunces"', 'serif'],
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          brand: {
            clay: '#B4623E',
            clayDark: '#8F4A2E',
            sage: '#7C8B6F',
            sageDark: '#5E6B53',
            cream: '#FAF4EB',
            bark: '#2B2521',
          },
        },
        boxShadow: {
          card: '0 4px 16px -6px rgba(43,37,33,0.14)',
          cardHover: '0 16px 32px -10px rgba(43,37,33,0.22)',
        },
      },
    },
  };
</script>
<style>
  .theme-atelier {
    --color-bg-base: 250 244 235;
    --color-bg-surface: 255 255 255;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 242 233 219;
    --color-border-subtle: 231 219 200;
    --color-border-strong: 209 191 165;
    --color-fg-primary: 43 37 33;
    --color-fg-secondary: 92 80 68;
    --color-fg-muted: 138 122 105;
    --color-accent-400: 196 116 79;
    --color-accent-500: 180 98 62;
    --color-accent-600: 143 74 46;
    color-scheme: light;
    font-family: 'Inter', sans-serif;
  }
  .theme-atelier .font-serif { font-family: 'Fraunces', serif; }
  .theme-atelier .eyebrow { letter-spacing: .12em; }
  .theme-atelier .product-card { background: #fff; border-color: #E7DBC8; box-shadow: 0 4px 16px -6px rgba(43,37,33,0.14); }
  .theme-atelier .product-card:hover { box-shadow: 0 16px 32px -10px rgba(43,37,33,0.22); }
  .theme-atelier .product-card .product-title { color: #2B2521; }
  .theme-atelier .card { background: #fff; color: #2B2521; border-color: #E7DBC8; }
</style>
@endpush

@section('header')
<div class="theme-atelier">
  <div class="hidden md:block bg-brand-bark text-brand-cream/70 text-[11.5px]">
    <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
      <span>{{ $s->topbar_text_left ?? 'Handcrafted in small batches — every piece signed by its maker' }}</span>
      <span>{{ $s->topbar_text_right ?? 'Complimentary gift wrap on every order' }}</span>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur border-b border-brand-bark/[.08]">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
      <button id="at-menuBtn" class="md:hidden p-1 -ml-1 text-brand-bark" aria-label="Open menu">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex items-center gap-2">
        <svg class="w-6 h-6 text-brand-clay" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c-2 3-5 4.5-5 8a5 5 0 0010 0c0-3.5-3-5-5-8z"/></svg>
        <span class="font-serif font-semibold text-xl md:text-2xl text-brand-bark">{{ $s->store_name ?? 'Atelier & Co.' }}</span>
      </a>

      <nav class="hidden lg:flex items-center gap-6 text-sm font-medium text-brand-bark/75 ml-4">
        <a href="{{ route('store.shop') }}" class="hover:text-brand-clay transition">All Pieces</a>
        @foreach(($categories ?? collect())->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-brand-clay transition">{{ $cat->name }}</a>
        @endforeach
      </nav>

      <div class="flex items-center gap-4 ml-auto text-brand-bark">
        <a href="{{ route('account') }}" aria-label="Account" class="hover:text-brand-clay transition"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
        <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:text-brand-clay transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-clay text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </a>
      </div>
    </div>

    <div id="at-mobileNav" class="lg:hidden hidden flex-col px-4 py-2 text-sm font-medium text-brand-bark divide-y divide-brand-bark/10 border-t border-brand-bark/10">
      <a href="{{ route('store.shop') }}" class="py-2.5">All Pieces</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('at-menuBtn');
    var mobileNav = document.getElementById('at-mobileNav');
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
<footer class="theme-atelier bg-brand-bark text-brand-cream/55 pt-12 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10 text-sm">
      <div class="col-span-2">
        <span class="font-serif font-semibold text-lg text-brand-cream">{{ $s->store_name ?? 'Atelier & Co.' }}</span>
        <p class="text-xs text-brand-cream/40 mt-2 max-w-xs">{{ $s->footer_text ?? 'Small-batch, hand-finished jewelry — made by real makers, not machines.' }}</p>
      </div>
      <div>
        <h4 class="text-brand-cream font-semibold mb-3 text-xs eyebrow uppercase">Studio</h4>
        <ul class="space-y-2 text-brand-cream/45">
          <li><a href="{{ route('store.contact') }}" class="hover:text-brand-cream transition">Our Story</a></li>
          <li><a href="{{ route('account.orders') }}" class="hover:text-brand-cream transition">Track Order</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-brand-cream font-semibold mb-3 text-xs eyebrow uppercase">Join the Studio List</h4>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Your email" class="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/15 outline-none text-xs text-brand-cream placeholder:text-brand-cream/40" />
          <button type="submit" class="w-9 h-9 shrink-0 bg-brand-clay hover:bg-brand-clayDark transition rounded-lg flex items-center justify-center text-white font-bold">→</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-brand-cream/30">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Atelier & Co.' }}. All rights reserved.</p>
    </div>
  </div>
</footer>
@endsection
