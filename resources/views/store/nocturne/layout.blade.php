@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.add('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Prata&family=Albert+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* ============ NOCTURNE v2 — stark black-and-white editorial noir. Full-bleed
     duotone photography (grayscale + a whisper of amber), bold uppercase
     display type, hard-edged geometric accents instead of soft glows.
     A genuinely different composition from the original spotlight/glow take.
     Self-contained CSS, no external runtime CDN. ============ */
  .theme-nocturne {
    --color-bg-base: 10 10 11;
    --color-bg-surface: 17 17 19;
    --color-bg-elevated: 24 24 27;
    --color-bg-muted: 21 21 24;
    --color-border-subtle: 42 42 46;
    --color-border-strong: 68 68 74;
    --color-fg-primary: 245 244 241;
    --color-fg-secondary: 176 174 168;
    --color-fg-muted: 122 120 114;
    --color-accent-400: 212 172 108;
    --color-accent-500: 196 152 82;
    --color-accent-600: 163 123 60;
    color-scheme: dark;
    font-family: 'Albert Sans', system-ui, sans-serif;
  }
  .theme-nocturne .nc-display { font-family: 'Prata', serif; letter-spacing: -.01em; }
  .theme-nocturne .nc-eyebrow { text-transform: uppercase; letter-spacing: .3em; font-size: .68rem; color: rgb(196 152 82); font-weight: 600; }
  .theme-nocturne .nc-label { text-transform: uppercase; letter-spacing: .18em; font-size: .72rem; color: rgb(122 120 114); }
  .theme-nocturne .nc-rule { height: 2px; width: 3.5rem; background: rgb(196 152 82); }

  .theme-nocturne .nc-duotone { filter: grayscale(1) contrast(1.12) brightness(.78) sepia(.18); }
  .theme-nocturne .nc-frame { border: 1px solid rgb(68 68 74); }

  .theme-nocturne .nc-btn { display: inline-flex; align-items: center; gap: .6rem; background: rgb(245 244 241); color: rgb(10 10 11); padding: .95rem 2rem; font-size: .76rem; letter-spacing: .16em; text-transform: uppercase; font-weight: 700; transition: background .2s ease; }
  .theme-nocturne .nc-btn:hover { background: rgb(196 152 82); }
  .theme-nocturne .nc-btn-ghost { background: transparent; color: rgb(245 244 241); border: 1px solid rgb(68 68 74); }
  .theme-nocturne .nc-btn-ghost:hover { border-color: rgb(196 152 82); color: rgb(196 152 82); }

  .theme-nocturne .nc-header { background: rgba(10,10,11,.92); backdrop-filter: blur(8px); border-bottom: 1px solid rgb(42 42 46); }
  .theme-nocturne .nc-nav-link { font-size: .78rem; letter-spacing: .14em; text-transform: uppercase; color: rgb(176 174 168); transition: color .2s ease; }
  .theme-nocturne .nc-nav-link:hover { color: rgb(245 244 241); }

  .theme-nocturne .product-card { background: rgb(17 17 19); border-color: rgb(42 42 46); border-radius: 0; }
  .theme-nocturne .product-card .product-title { color: rgb(245 244 241); font-family: 'Prata', serif; font-weight: 400; }
  .theme-nocturne .product-card .price { color: rgb(196 152 82); }
  .theme-nocturne .card { background: rgb(17 17 19); color: rgb(245 244 241); border-color: rgb(42 42 46); }
</style>
@endpush

@section('header')
<div class="theme-nocturne" x-data="{ open: false }">
  <header class="nc-header sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
      <button type="button" class="md:hidden p-1 -ml-1" style="color:rgb(245 244 241);" @click="open = !open" :aria-expanded="open" aria-label="{{ __('messages.Nocturne_OpenMenu') }}">
        <svg x-show="!open" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        <svg x-show="open" x-cloak class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>

      <a href="{{ route('store.index') }}" class="nc-display text-xl md:text-2xl mx-auto md:mx-0" style="color:rgb(245 244 241); letter-spacing:.02em;">{{ $s->store_name ?? 'Nocturne' }}</a>

      <nav class="hidden md:flex items-center gap-8">
        <a href="{{ route('store.index') }}" class="nc-nav-link">{{ __('messages.Nocturne_NavHome') }}</a>
        <a href="{{ route('store.shop') }}" class="nc-nav-link">{{ __('messages.Nocturne_NavShop') }}</a>
        <a href="{{ route('store.contact') }}" class="nc-nav-link">{{ __('messages.Support') }}</a>
      </nav>

      <div class="flex items-center gap-5">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hidden md:inline-flex" style="color:rgb(176 174 168);">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative" style="color:rgb(245 244 241);">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:rgb(196 152 82); color:rgb(10 10 11);">0</span>
        </a>
      </div>
    </div>

    <div x-show="open" x-cloak x-transition class="md:hidden border-t px-5 py-3 flex flex-col" style="border-color:rgb(42 42 46); background:rgb(10 10 11);">
      <a href="{{ route('store.index') }}" class="nc-nav-link py-2.5 border-b" style="border-color:rgb(42 42 46);">{{ __('messages.Nocturne_NavHome') }}</a>
      <a href="{{ route('store.shop') }}" class="nc-nav-link py-2.5 border-b" style="border-color:rgb(42 42 46);">{{ __('messages.Nocturne_NavShop') }}</a>
      <a href="{{ route('store.contact') }}" class="nc-nav-link py-2.5 border-b" style="border-color:rgb(42 42 46);">{{ __('messages.Support') }}</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nc-nav-link py-2.5 border-b" style="border-color:rgb(42 42 46);">{{ $cat->name }}</a>
      @endforeach
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-nocturne" style="padding: 4rem 1.5rem 2rem; background:rgb(10 10 11); border-top:1px solid rgb(42 42 46);">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b" style="border-color:rgb(42 42 46);">
      <div class="col-span-2">
        <span class="nc-display text-2xl" style="color:rgb(245 244 241);">{{ $s->store_name ?? 'Nocturne' }}</span>
        <p class="text-sm mt-3 max-w-sm" style="color:rgb(122 120 114);">{{ $s->footer_text ?? __('messages.Nocturne_FooterTagline') }}</p>
      </div>
      <div>
        <p class="nc-label mb-4">{{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-2.5" style="color:rgb(176 174 168);">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block mb-2.5" style="color:rgb(176 174 168);">{{ __('messages.Nocturne_TrackOrder') }}</a>
      </div>
      <div>
        <p class="nc-label mb-4">{{ __('messages.Nocturne_Correspondence') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-3 py-2.5 text-xs outline-none" style="background:rgba(245,244,241,.05); border:1px solid rgb(68 68 74); color:rgb(245 244 241);" />
          <button type="submit" class="nc-btn" style="padding:.6rem 1rem;">{{ __('messages.Subscribe') }}</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-6 text-center" style="color:rgb(90 88 84); letter-spacing:.1em;">© {{ date('Y') }} {{ $s->store_name ?? 'Nocturne' }} — {{ __('messages.Nocturne_AllRightsReserved') }}</p>
  </div>
</footer>
@endsection
