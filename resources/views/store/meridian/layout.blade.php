@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  /* ============ MERIDIAN — Swiss/international-style grid, cartographic
     index paradigm. Near-monochrome paper + ink with a single hairline
     accent. No serif anywhere. Self-contained, no external runtime CDN. ============ */
  .theme-meridian {
    --color-bg-base: 247 246 243;
    --color-bg-surface: 255 255 255;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 237 235 229;
    --color-border-subtle: 214 211 202;
    --color-border-strong: 24 24 24;
    --color-fg-primary: 24 24 24;
    --color-fg-secondary: 84 82 76;
    --color-fg-muted: 128 125 116;
    --color-accent-400: 200 92 61;
    --color-accent-500: 193 68 42;
    --color-accent-600: 160 54 32;
    color-scheme: light;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    background: #F7F6F3;
    color: #181818;
  }
  .theme-meridian * { box-sizing: border-box; }
  .theme-meridian .md-display { font-family: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif; }
  .theme-meridian .md-unit { --u: 1.25rem; }
  .theme-meridian .md-num { font-family: 'Space Grotesk', monospace; color: #C1442A; font-weight: 600; letter-spacing: .02em; }
  .theme-meridian .md-label {
    text-transform: uppercase; letter-spacing: .16em; font-size: .7rem; font-weight: 600; color: #545249;
    display: flex; align-items: center; gap: .6rem;
  }
  .theme-meridian .md-label .md-num { font-size: .72rem; }
  .theme-meridian .md-hairline { border-top: 1px solid #D6D3CA; }
  .theme-meridian .md-hr-v { border-left: 1px solid #D6D3CA; }
  .theme-meridian .md-grid {
    display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 1.25rem;
  }
  .theme-meridian .md-btn {
    display: inline-flex; align-items: center; gap: .55rem; background: #181818; color: #F7F6F3;
    padding: .85rem 1.6rem; font-size: .8rem; font-weight: 600; letter-spacing: .04em; text-transform: uppercase;
    border: 1px solid #181818; border-radius: 0; transition: background .15s, color .15s;
  }
  .theme-meridian .md-btn:hover { background: #C1442A; border-color: #C1442A; }
  .theme-meridian .md-btn-outline { background: transparent; color: #181818; }
  .theme-meridian .md-btn-outline:hover { background: #181818; color: #F7F6F3; border-color:#181818; }
  .theme-meridian .md-btn-accent { background: #C1442A; border-color: #C1442A; color: #fff; }
  .theme-meridian .md-btn-accent:hover { background: #181818; border-color:#181818; }

  .theme-meridian .md-header {
    background: #F7F6F3; border-bottom: 1px solid #181818; position: sticky; top: 0; z-index: 40;
  }
  .theme-meridian .md-header-inner {
    display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem;
  }
  .theme-meridian .md-word { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.15rem; letter-spacing: -.01em; color: #181818; }
  .theme-meridian .md-word .md-word-dot { color: #C1442A; }
  .theme-meridian .md-nav { display: none; align-items: center; gap: 2rem; }
  @media (min-width: 900px) { .theme-meridian .md-nav { display: flex; } }
  .theme-meridian .md-nav a { font-size: .8rem; font-weight: 500; letter-spacing: .03em; color: #181818; text-transform: uppercase; padding-bottom: 2px; border-bottom: 1px solid transparent; }
  .theme-meridian .md-nav a:hover { border-bottom-color: #C1442A; color: #C1442A; }
  .theme-meridian .md-cats-strip { display: none; }
  @media (min-width: 900px) { .theme-meridian .md-cats-strip { display: flex; } }
  .theme-meridian .md-cats-strip { border-top: 1px solid #D6D3CA; padding: .6rem 1.5rem; gap: 1.6rem; overflow-x: auto; }
  .theme-meridian .md-cats-strip a { font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; color: #545249; white-space: nowrap; }
  .theme-meridian .md-cats-strip a:hover { color: #C1442A; }

  .theme-meridian .md-icon-btn { color: #181818; position: relative; display: inline-flex; }
  .theme-meridian .md-mobile-toggle { display: inline-flex; }
  @media (min-width: 900px) { .theme-meridian .md-mobile-toggle { display: none; } }
  .theme-meridian .md-mobile-panel { border-top: 1px solid #181818; background: #F7F6F3; }

  .theme-meridian .product-card { background: #FFFFFF; border-color: #D6D3CA; border-radius: 0; }
  .theme-meridian .product-card .product-title { color: #181818; font-weight: 500; }
  .theme-meridian .product-card .price { color: #C1442A; font-family:'Space Grotesk',sans-serif; font-weight: 600; }

  .theme-meridian footer.md-footer { background: #181818; color: #D6D3CA; }
  .theme-meridian footer.md-footer .md-word { color: #F7F6F3; }
  .theme-meridian footer.md-footer a { color: #D6D3CA; }
  .theme-meridian footer.md-footer a:hover { color: #C1442A; }
  .theme-meridian footer.md-footer input {
    background: transparent; border: 1px solid rgba(214,211,202,.35); color: #F7F6F3; padding: .7rem .9rem; font-size: .8rem;
  }
  .theme-meridian footer.md-footer input::placeholder { color: #83807a; }
</style>
@endpush

@section('header')
<div class="theme-meridian" x-data="{ mobileOpen: false }">
  <header class="md-header">
    <div class="md-header-inner">
      <a href="{{ route('store.index') }}" class="md-word">{{ $s->store_name ?? 'Meridian' }}<span class="md-word-dot">·</span></a>

      <nav class="md-nav">
        <a href="{{ route('store.index') }}">{{ __('messages.Meridian_Home') }}</a>
        <a href="{{ route('store.shop') }}">{{ __('messages.Meridian_Shop') }}</a>
        <a href="{{ route('store.contact') }}">{{ __('messages.Support') }}</a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="md-icon-btn">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="md-icon-btn">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-2 -right-2 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#C1442A; color:#fff;">0</span>
        </a>
        <button type="button" class="md-mobile-toggle md-icon-btn" @click="mobileOpen = !mobileOpen" aria-label="{{ __('messages.Meridian_MenuLabel') }}">
          <svg x-show="!mobileOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          <svg x-show="mobileOpen" x-cloak class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
    </div>

    <div class="md-cats-strip">
      <a href="{{ route('store.shop') }}" class="md-num">{{ __('messages.Meridian_AllIndex') }}</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}">{{ $cat->name }}</a>
      @endforeach
    </div>

    <div class="md-mobile-panel" x-show="mobileOpen" x-cloak x-transition>
      <nav class="flex flex-col px-6 py-4">
        <a href="{{ route('store.index') }}" class="py-2.5 text-sm border-b" style="border-color:#D6D3CA;">{{ __('messages.Meridian_Home') }}</a>
        <a href="{{ route('store.shop') }}" class="py-2.5 text-sm border-b" style="border-color:#D6D3CA;">{{ __('messages.Meridian_Shop') }}</a>
        <a href="{{ route('store.contact') }}" class="py-2.5 text-sm border-b" style="border-color:#D6D3CA;">{{ __('messages.Support') }}</a>
        @foreach(($categories ?? collect())->take(8) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5 text-sm border-b" style="border-color:#D6D3CA; color:#545249;">{{ $cat->name }}</a>
        @endforeach
      </nav>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-meridian md-footer" style="padding: 3.5rem 1.5rem 2rem;">
  <div class="max-w-6xl mx-auto">
    <div class="md-grid" style="row-gap:2.5rem;">
      <div style="grid-column: span 12 / span 12;" class="md:col-span-4">
        <p class="md-word" style="font-size:1.3rem;">{{ $s->store_name ?? 'Meridian' }}<span class="md-word-dot">·</span></p>
        <p class="text-sm mt-3 max-w-xs" style="opacity:.7;">{{ $s->footer_text ?? __('messages.Meridian_FooterTagline') }}</p>
      </div>
      <div style="grid-column: span 6 / span 6;" class="md:col-span-3">
        <p class="md-label mb-3"><span class="md-num">01</span> {{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-2">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block mb-2">{{ __('messages.Meridian_TrackOrder') }}</a>
      </div>
      <div style="grid-column: span 6 / span 6;" class="md:col-span-2">
        <p class="md-label mb-3"><span class="md-num">02</span> {{ __('messages.Meridian_Index') }}</p>
        <a href="{{ route('store.shop') }}" class="text-sm block mb-2">{{ __('messages.Meridian_Shop') }}</a>
        <a href="{{ route('store.index') }}" class="text-sm block mb-2">{{ __('messages.Meridian_Home') }}</a>
      </div>
      <div style="grid-column: span 12 / span 12;" class="md:col-span-3">
        <p class="md-label mb-3"><span class="md-num">03</span> {{ __('messages.Meridian_Newsletter') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 text-xs outline-none" />
          <button type="submit" class="md-btn md-btn-accent" style="padding:.7rem 1rem;">{{ __('messages.Subscribe') }}</button>
        </form>
      </div>
    </div>
    <div class="md-hairline mt-10 pt-5 flex flex-wrap items-center justify-between gap-3" style="border-color: rgba(214,211,202,.25);">
      <p class="text-xs" style="opacity:.55;">© {{ date('Y') }} {{ $s->store_name ?? 'Meridian' }}. {{ __('messages.Meridian_AllRightsReserved') }}</p>
      <p class="text-xs md-num">{{ __('messages.Meridian_Coordinates') }}</p>
    </div>
  </div>
</footer>
@endsection
