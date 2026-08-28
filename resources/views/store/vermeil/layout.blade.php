@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  /* ============ VERMEIL — blush-ivory, rose-gold, ultra-thin serif display
     paired with a light sans body. Extreme negative space, hairline 1px
     accents, no shadows, no heavy borders. Self-contained CSS. ============ */
  .theme-vermeil {
    --color-bg-base: 251 244 241;
    --color-bg-surface: 255 253 252;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 247 234 229;
    --color-border-subtle: 236 220 213;
    --color-border-strong: 201 132 107;
    --color-fg-primary: 74 61 58;
    --color-fg-secondary: 106 89 85;
    --color-fg-muted: 158 138 132;
    --color-accent-400: 201 132 107;
    --color-accent-500: 183 110 121;
    --color-accent-600: 155 87 98;
    color-scheme: light;
    font-family: 'Jost', system-ui, sans-serif;
    font-weight: 300;
  }
  .theme-vermeil .vm-serif { font-family: 'Cormorant', serif; font-weight: 300; }
  .theme-vermeil .vm-word { font-family: 'Cormorant', serif; font-weight: 400; font-size: 1.5rem; letter-spacing: .06em; color: #4A3D3A; }
  .theme-vermeil .vm-label { text-transform: uppercase; letter-spacing: .22em; font-size: .65rem; font-weight: 400; color: #9E8A84; }
  .theme-vermeil .vm-hairline { border: none; border-top: 1px solid #C9846B; opacity: .45; }
  .theme-vermeil .vm-btn {
    display: inline-flex; align-items: center; gap: .55rem;
    background: transparent; color: #4A3D3A; border: 1px solid #C9846B;
    padding: .85rem 2rem; font-size: .72rem; letter-spacing: .16em; text-transform: uppercase;
    font-weight: 400; transition: background .2s ease, color .2s ease;
  }
  .theme-vermeil .vm-btn:hover { background: #C9846B; color: #FFFDFC; }
  .theme-vermeil .vm-btn-solid { background: #C9846B; color: #FFFDFC; border: 1px solid #C9846B; }
  .theme-vermeil .vm-btn-solid:hover { background: #B76E79; border-color: #B76E79; }
  .theme-vermeil .vm-nav-link { font-size: .78rem; letter-spacing: .08em; color: #6A5955; padding: .3rem 0; border-bottom: 1px solid transparent; transition: border-color .2s ease, color .2s ease; }
  .theme-vermeil .vm-nav-link:hover { color: #C9846B; border-color: #C9846B; }
  .theme-vermeil .product-card { background: #FFFDFC; border: 1px solid #ECDCD5; border-radius: 2px; box-shadow: none; }
  .theme-vermeil .product-card .product-title { color: #4A3D3A; font-family: 'Cormorant', serif; font-weight: 500; font-size: 1.05rem; }
  .theme-vermeil .product-card .price { color: #B76E79; font-weight: 400; }
  .theme-vermeil .product-card:hover { box-shadow: 0 6px 24px -14px rgba(183,110,121,.35); }

  .theme-vermeil .vm-header { background: rgba(251,244,241,.92); backdrop-filter: blur(6px); border-bottom: 1px solid #ECDCD5; }
  .theme-vermeil .vm-mobile-panel { background: #FFFDFC; border-top: 1px solid #ECDCD5; }
  .theme-vermeil .vm-footer { background: #F7EAE5; color: #6A5955; border-top: 1px solid #ECDCD5; }
  .theme-vermeil .vm-footer-input { background: #FFFDFC; border: 1px solid #ECDCD5; color: #4A3D3A; }
</style>
@endpush

@section('header')
<div class="theme-vermeil" x-data="{ mobileOpen: false }">
  <header class="vm-header sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-5 md:px-10 py-4 md:py-5 flex items-center justify-between gap-4">
      <button class="md:hidden" @click="mobileOpen = !mobileOpen" aria-label="{{ __('messages.Vermeil_OpenMenu') }}">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#4A3D3A" stroke-width="1.4" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>

      <a href="{{ route('store.index') }}" class="vm-word mx-auto md:mx-0">{{ $s->store_name ?? 'Vermeil' }}</a>

      <nav class="hidden md:flex items-center gap-8 mx-auto">
        <a href="{{ route('store.index') }}" class="vm-nav-link">{{ __('messages.Vermeil_NavHome') }}</a>
        <a href="{{ route('store.shop') }}" class="vm-nav-link">{{ __('messages.Vermeil_NavShop') }}</a>
        @foreach(($categories ?? collect())->take(4) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="vm-nav-link">{{ $cat->name }}</a>
        @endforeach
        <a href="{{ route('store.contact') }}" class="vm-nav-link">{{ __('messages.Support') }}</a>
      </nav>

      <div class="flex items-center gap-5">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hidden sm:inline-flex" style="color:#6A5955;">
          <svg class="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative" style="color:#6A5955;">
          <svg class="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium" style="background:#C9846B; color:#fff;">0</span>
        </a>
      </div>
    </div>

    <div class="vm-mobile-panel md:hidden" x-show="mobileOpen" x-cloak x-transition x-collapse.duration.200ms>
      <nav class="flex flex-col px-6 py-3">
        <a href="{{ route('store.index') }}" class="vm-nav-link py-2.5" style="border-bottom:1px solid #ECDCD5;">{{ __('messages.Vermeil_NavHome') }}</a>
        <a href="{{ route('store.shop') }}" class="vm-nav-link py-2.5" style="border-bottom:1px solid #ECDCD5;">{{ __('messages.Vermeil_NavShop') }}</a>
        @foreach(($categories ?? collect())->take(8) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="vm-nav-link py-2.5" style="border-bottom:1px solid #ECDCD5;">{{ $cat->name }}</a>
        @endforeach
        <a href="{{ route('store.contact') }}" class="vm-nav-link py-2.5">{{ __('messages.Support') }}</a>
      </nav>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-vermeil vm-footer">
  <div class="max-w-7xl mx-auto px-6 md:px-10 py-14">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
      <div class="md:col-span-2">
        <p class="vm-word" style="font-size:1.35rem;">{{ $s->store_name ?? 'Vermeil' }}</p>
        <p class="text-sm mt-3 max-w-xs leading-relaxed" style="opacity:.85;">{{ $s->footer_text ?? __('messages.Vermeil_FooterTagline') }}</p>
      </div>
      <div>
        <p class="vm-label mb-4">{{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-2" style="opacity:.85;">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block mb-2" style="opacity:.85;">{{ __('messages.Vermeil_TrackOrder') }}</a>
      </div>
      <div>
        <p class="vm-label mb-4">{{ __('messages.Vermeil_Newsletter') }}</p>
        <p class="text-sm mb-3" style="opacity:.8;">{{ __('messages.Vermeil_NewsletterFooterHint') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="vm-footer-input flex-1 min-w-0 px-3 py-2.5 text-xs outline-none" />
          <button type="submit" class="vm-btn vm-btn-solid" style="padding:.6rem 1.1rem; font-size:.65rem;">{{ __('messages.Subscribe') }}</button>
        </form>
      </div>
    </div>
    <hr class="vm-hairline">
    <p class="text-xs mt-6" style="opacity:.6;">© {{ date('Y') }} {{ $s->store_name ?? 'Vermeil' }}. {{ __('messages.AllRightsReserved') }}</p>
  </div>
</footer>
@endsection
