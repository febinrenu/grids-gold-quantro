@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Nunito+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* ============ SOLSTICE — warm sun-drenched desert boutique. Wide
     horizontal bands, sunrise gradient hero, generous rounded corners,
     terracotta-tinted shadows. Self-contained CSS, no external CDN. ============ */
  .theme-solstice {
    --color-bg-base: 242 228 212;
    --color-bg-surface: 250 241 229;
    --color-bg-elevated: 255 250 244;
    --color-bg-muted: 237 217 190;
    --color-border-subtle: 226 200 170;
    --color-border-strong: 196 156 116;
    --color-fg-primary: 58 42 30;
    --color-fg-secondary: 96 71 52;
    --color-fg-muted: 141 111 87;
    --color-accent-400: 193 104 59;
    --color-accent-500: 168 82 43;
    --color-accent-600: 138 62 29;
    color-scheme: light;
    font-family: 'Nunito Sans', system-ui, sans-serif;
    background: #F2E4D4;
    color: #3A2A1E;
  }
  .theme-solstice .so-display { font-family: 'Fraunces', Georgia, serif; }
  .theme-solstice .so-eyebrow { text-transform: uppercase; letter-spacing: .18em; font-size: .72rem; font-weight: 700; color: #A8522B; }
  .theme-solstice .so-shadow { box-shadow: 0 18px 40px -14px rgba(168,82,43,.35), 0 4px 14px -6px rgba(168,82,43,.25); }
  .theme-solstice .so-card { background: #FAF1E5; border: 1px solid #E2C8AA; border-radius: 1.75rem; }
  .theme-solstice .so-btn { display: inline-flex; align-items: center; gap: .5rem; background: #A8522B; color: #FAF1E5; padding: .85rem 1.9rem; border-radius: 999px; font-weight: 700; font-size: .88rem; transition: transform .15s, opacity .15s; }
  .theme-solstice .so-btn:hover { opacity: .9; transform: translateY(-1px); }
  .theme-solstice .so-btn-outline { background: transparent; color: #3A2A1E; border: 1.5px solid #3A2A1E; }
  .theme-solstice .so-btn-light { background: #FAF1E5; color: #A8522B; }
  .theme-solstice .so-sunrise {
    background: linear-gradient(120deg, #F6C177 0%, #EE9A56 24%, #DD7A4B 48%, #C1683B 70%, #A8522B 100%);
  }
  .theme-solstice .so-pill { border-radius: 999px; }

  .theme-solstice .so-header { background: rgba(250,241,229,.92); backdrop-filter: blur(8px); border-bottom: 1px solid #E2C8AA; position: sticky; top: 0; z-index: 40; }
  .theme-solstice .so-nav-link { font-weight: 600; font-size: .92rem; color: #604734; }
  .theme-solstice .so-nav-link:hover { color: #A8522B; }
  .theme-solstice .so-logo { font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 1.35rem; color: #3A2A1E; }
  .theme-solstice .so-mobile-panel { border-top: 1px solid #E2C8AA; background: #FAF1E5; }

  .theme-solstice .so-footer { background: #3A2A1E; color: #EAD9C4; }
  .theme-solstice .so-footer a { color: #EAD9C4; }
  .theme-solstice .so-footer .so-label { text-transform: uppercase; letter-spacing: .14em; font-size: .68rem; color: #C9A57E; font-weight: 700; }

  .theme-solstice .product-card { background: #FAF1E5; border-color: #E2C8AA; border-radius: 1.5rem; box-shadow: 0 12px 28px -14px rgba(168,82,43,.3); }
  .theme-solstice .product-card .product-title { color: #3A2A1E; }
  .theme-solstice .product-card .price { color: #A8522B; font-weight: 700; }
  .theme-solstice .card { background: #FAF1E5; border-color: #E2C8AA; border-radius: 1.25rem; }
  .theme-solstice .input, .theme-solstice .select { background: #FFFAF4; border: 1px solid #E2C8AA; border-radius: .85rem; color: #3A2A1E; }
  .theme-solstice .btn-primary { background: #A8522B; border-color: #A8522B; }
</style>
@endpush

@section('header')
<div class="theme-solstice" x-data="{ mobileOpen: false }">
  <header class="so-header">
    <div class="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
      <a href="{{ route('store.index') }}" class="so-logo">{{ $s->store_name ?? 'Solstice' }}</a>

      <nav class="hidden md:flex items-center gap-8">
        <a href="{{ route('store.index') }}" class="so-nav-link">{{ __('messages.Solstice_Home') }}</a>
        <a href="{{ route('store.shop') }}" class="so-nav-link">{{ __('messages.Solstice_Shop') }}</a>
        <a href="{{ route('store.contact') }}" class="so-nav-link">{{ __('messages.Support') }}</a>
        @foreach(($categories ?? collect())->take(4) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="so-nav-link">{{ $cat->name }}</a>
        @endforeach
      </nav>

      <div class="flex items-center gap-4">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hidden sm:inline-flex" style="color:#604734;">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative" style="color:#604734;">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#A8522B; color:#FAF1E5;">0</span>
        </a>
        <button type="button" class="md:hidden so-pill" style="border:1.5px solid #3A2A1E; padding:.4rem .65rem;" @click="mobileOpen = !mobileOpen" aria-label="{{ __('messages.Solstice_MenuLabel') }}">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>

    <div class="so-mobile-panel md:hidden" x-show="mobileOpen" x-cloak x-transition>
      <div class="px-5 py-4 flex flex-col gap-1">
        <a href="{{ route('store.index') }}" class="so-nav-link py-2">{{ __('messages.Solstice_Home') }}</a>
        <a href="{{ route('store.shop') }}" class="so-nav-link py-2">{{ __('messages.Solstice_Shop') }}</a>
        <a href="{{ route('store.contact') }}" class="so-nav-link py-2">{{ __('messages.Support') }}</a>
        @foreach(($categories ?? collect())->take(8) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="so-nav-link py-2">{{ $cat->name }}</a>
        @endforeach
      </div>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-solstice">
 <div class="so-footer">
  <div class="max-w-7xl mx-auto px-5 md:px-10 py-14 grid gap-10 md:grid-cols-4">
    <div class="md:col-span-2">
      <p class="so-display" style="font-size:1.5rem; color:#FAF1E5;">{{ $s->store_name ?? 'Solstice' }}</p>
      <p class="text-sm mt-3 max-w-sm" style="opacity:.75;">{{ $s->footer_text ?? __('messages.Solstice_FooterTagline') }}</p>
    </div>
    <div>
      <p class="so-label mb-3">{{ __('messages.Support') }}</p>
      <a href="{{ route('store.contact') }}" class="text-sm block mb-2" style="opacity:.85;">{{ __('messages.ContactUs') }}</a>
      <a href="{{ route('account.orders') }}" class="text-sm block mb-2" style="opacity:.85;">{{ __('messages.Solstice_TrackOrder') }}</a>
    </div>
    <div>
      <p class="so-label mb-3">{{ __('messages.Solstice_JoinTheGlow') }}</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
        @csrf
        <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none so-pill" style="background:rgba(250,241,229,.08); border:1px solid rgba(250,241,229,.25); color:#FAF1E5;" />
        <button type="submit" class="so-btn" style="padding:.6rem 1.1rem;">{{ __('messages.Subscribe') }}</button>
      </form>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-5 md:px-10 pb-8 pt-6" style="border-top:1px solid rgba(250,241,229,.12);">
    <p class="text-xs" style="opacity:.55;">© {{ date('Y') }} {{ $s->store_name ?? 'Solstice' }} · {{ __('messages.Solstice_MadeUnderTheSun') }}</p>
  </div>
 </div>
</footer>
@endsection
