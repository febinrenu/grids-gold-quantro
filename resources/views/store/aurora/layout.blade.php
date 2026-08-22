@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  document.documentElement.classList.add('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Unbounded"', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          brand: {
            void: '#0B0714',
            panel: '#170F27',
            magenta: '#E93DBA',
            violet: '#7C3AED',
            orange: '#FF7A45',
            mint: '#3DE9C3',
          },
        },
        boxShadow: {
          card: '0 4px 20px -6px rgba(233,61,186,0.18)',
          cardHover: '0 20px 44px -10px rgba(124,58,237,0.45)',
        },
      },
    },
  };
</script>
<style>
  .theme-aurora {
    --color-bg-base: 11 7 20;
    --color-bg-surface: 23 15 39;
    --color-bg-elevated: 32 21 52;
    --color-bg-muted: 23 15 39;
    --color-border-subtle: 54 38 82;
    --color-border-strong: 82 58 118;
    --color-fg-primary: 245 240 255;
    --color-fg-secondary: 196 184 224;
    --color-fg-muted: 150 138 180;
    --color-accent-400: 236 105 195;
    --color-accent-500: 233 61 186;
    --color-accent-600: 189 42 149;
    color-scheme: dark;
    font-family: 'Inter', sans-serif;
  }
  .theme-aurora .font-display { font-family: 'Unbounded', sans-serif; }
  .theme-aurora .eyebrow { letter-spacing: .1em; }
  .theme-aurora .grad-text {
    background: linear-gradient(90deg, #E93DBA, #7C3AED 55%, #FF7A45);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .theme-aurora .product-card { background: #170F27; border-color: rgba(255,255,255,.08); }
  .theme-aurora .product-card:hover { box-shadow: 0 20px 44px -10px rgba(124,58,237,0.45); }
  .theme-aurora .product-card .product-title { color: #F5F0FF; }
  .theme-aurora .card { background: #170F27; color: #F5F0FF; border-color: rgba(255,255,255,.08); }
</style>
@endpush

@section('header')
<div class="theme-aurora">
  <div class="bg-gradient-to-r from-brand-magenta via-brand-violet to-brand-orange text-white text-[11.5px] font-semibold">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">
      <span>{{ $s->topbar_text_left ?? 'DROP ALERT — new statement pieces just landed' }}</span>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-brand-void/90 backdrop-blur border-b border-white/[.06]">
    <div class="max-w-7xl mx-auto px-4 py-3.5 flex items-center gap-4">
      <button id="au-menuBtn" class="md:hidden p-1 -ml-1 text-white" aria-label="Open menu">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-magenta to-brand-violet flex items-center justify-center shrink-0 rotate-3">
          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>
        </span>
        <span class="font-display font-bold text-lg md:text-xl text-white tracking-tight">{{ $s->store_name ?? 'AURORA' }}</span>
      </a>

      <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-white/70 ml-4">
        <a href="{{ route('store.shop') }}" class="hover:text-white transition">Shop All</a>
        @foreach(($categories ?? collect())->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-white transition">{{ $cat->name }}</a>
        @endforeach
      </nav>

      <div class="flex items-center gap-4 ml-auto text-white">
        <a href="{{ route('account') }}" aria-label="Account" class="hover:text-brand-magenta transition"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
        <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:text-brand-magenta transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-magenta text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </a>
      </div>
    </div>

    <div id="au-mobileNav" class="lg:hidden hidden flex-col px-4 py-2 text-sm font-semibold text-white divide-y divide-white/10 border-t border-white/10">
      <a href="{{ route('store.shop') }}" class="py-2.5">Shop All</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('au-menuBtn');
    var mobileNav = document.getElementById('au-mobileNav');
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
<footer class="theme-aurora bg-brand-void text-white/55 pt-12 pb-6 border-t border-white/[.06]">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10 text-sm">
      <div class="col-span-2">
        <span class="font-display font-bold text-lg text-white">{{ $s->store_name ?? 'AURORA' }}</span>
        <p class="text-xs text-white/35 mt-2 max-w-xs">{{ $s->footer_text ?? 'Statement jewelry for people who don\'t blend in. New drops weekly.' }}</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-xs eyebrow uppercase">Shop</h4>
        <ul class="space-y-2 text-white/45">
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">All Jewelry</a></li>
          @foreach(($categories ?? collect())->take(3) as $cat)
            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-white transition">{{ $cat->name }}</a></li>
          @endforeach
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-xs eyebrow uppercase">Never Miss a Drop</h4>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Email address" class="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/15 outline-none text-xs text-white placeholder:text-white/40" />
          <button type="submit" class="w-9 h-9 shrink-0 bg-gradient-to-br from-brand-magenta to-brand-violet rounded-lg flex items-center justify-center text-white font-bold">→</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-white/25">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Aurora' }}. All rights reserved.</p>
    </div>
  </div>
</footer>
@endsection
