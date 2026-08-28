@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  /* ============ LUMEN — bright airy luminous minimalism. Near-white
     ivory/champagne palette, one soft gold glow accent, hairline
     dividers instead of boxes, extreme whitespace, radial-glow hero.
     Fraunces italic display serif + Work Sans light body. ============ */
  .theme-lumen {
    --color-bg-base: 253 252 250;
    --color-bg-surface: 250 248 244;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 245 241 233;
    --color-border-subtle: 232 226 214;
    --color-border-strong: 214 204 184;
    --color-fg-primary: 42 38 32;
    --color-fg-secondary: 96 88 76;
    --color-fg-muted: 148 138 122;
    --color-accent-400: 216 179 121;
    --color-accent-500: 212 175 106;
    --color-accent-600: 176 141 80;
    color-scheme: light;
    font-family: 'Work Sans', system-ui, sans-serif;
    font-weight: 300;
  }
  .theme-lumen .lm-serif { font-family: 'Fraunces', serif; }
  .theme-lumen .lm-italic { font-family: 'Fraunces', serif; font-style: italic; font-weight: 400; }
  .theme-lumen .lm-eyebrow { text-transform: uppercase; letter-spacing: .22em; font-size: .68rem; color: #948a7a; font-weight: 500; }
  .theme-lumen .lm-hairline { border-color: #E8E2D6; }
  .theme-lumen .lm-glow {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 35%, rgba(212,175,106,.22), rgba(212,175,106,0) 70%);
  }
  .theme-lumen .lm-btn {
    display: inline-flex; align-items: center; gap: .5rem;
    padding: .85rem 2.1rem; font-size: .78rem; letter-spacing: .08em; text-transform: uppercase;
    font-weight: 500; background: #2A2620; color: #FDFCFA; transition: opacity .2s ease;
    border-radius: 1px;
  }
  .theme-lumen .lm-btn:hover { opacity: .82; }
  .theme-lumen .lm-btn-outline { background: transparent; color: #2A2620; border: 1px solid #2A2620; padding: .8rem 2.05rem; }
  .theme-lumen .lm-btn-gold { background: #D4AF6A; color: #2A2620; }
  .theme-lumen .lm-link-u { text-decoration: underline; text-underline-offset: 4px; text-decoration-color: rgba(212,175,106,.6); }
  .theme-lumen .product-card { background: #FFFFFF; border-color: #E8E2D6; box-shadow: none; border-radius: 2px; }
  .theme-lumen .product-card .price { color: #B08D50; }
  .theme-lumen a { text-decoration: none; }
  .theme-lumen .lm-header { background: rgba(253,252,250,.92); backdrop-filter: blur(6px); }
  .theme-lumen .lm-nav-link { font-size: .82rem; letter-spacing: .03em; color: #605848; transition: color .15s; }
  .theme-lumen .lm-nav-link:hover { color: #2A2620; }
</style>
@endpush

@section('header')
<div class="theme-lumen" x-data="{ mobileOpen: false }">
  <header class="lm-header sticky top-0 z-40 border-b lm-hairline">
    <div class="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
      <a href="{{ route('store.index') }}" class="lm-serif text-2xl tracking-wide" style="color:#2A2620;">{{ $s->store_name ?? 'Lumen' }}</a>

      <nav class="hidden md:flex items-center gap-9">
        <a href="{{ route('store.index') }}" class="lm-nav-link">{{ __('messages.Lumen_Home') }}</a>
        <a href="{{ route('store.shop') }}" class="lm-nav-link">{{ __('messages.Lumen_Shop') }}</a>
        @foreach(($categories ?? collect())->take(8) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="lm-nav-link">{{ $cat->name }}</a>
        @endforeach
        <a href="{{ route('store.contact') }}" class="lm-nav-link">{{ __('messages.Support') }}</a>
      </nav>

      <div class="flex items-center gap-5">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hidden sm:inline-flex" style="color:#2A2620;">
          <svg class="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative" style="color:#2A2620;">
          <svg class="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-2 -right-2 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold" style="background:#D4AF6A; color:#2A2620;">0</span>
        </a>
        <button type="button" class="md:hidden" @click="mobileOpen = !mobileOpen" aria-label="{{ __('messages.Lumen_OpenMenu') }}" style="color:#2A2620;">
          <svg x-show="!mobileOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg x-show="mobileOpen" x-cloak class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
    </div>

    <div x-show="mobileOpen" x-cloak x-transition class="md:hidden border-t lm-hairline px-6 py-4 flex flex-col gap-1">
      <a href="{{ route('store.index') }}" class="lm-nav-link py-2.5 border-b lm-hairline">{{ __('messages.Lumen_Home') }}</a>
      <a href="{{ route('store.shop') }}" class="lm-nav-link py-2.5 border-b lm-hairline">{{ __('messages.Lumen_Shop') }}</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="lm-nav-link py-2.5 border-b lm-hairline">{{ $cat->name }}</a>
      @endforeach
      <a href="{{ route('store.contact') }}" class="lm-nav-link py-2.5">{{ __('messages.Support') }}</a>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-lumen border-t lm-hairline" style="background:#FAF8F4;">
  <div class="max-w-7xl mx-auto px-6 md:px-10 py-16">
    <div class="grid md:grid-cols-[1.3fr_.7fr_.7fr_1.1fr] gap-10 pb-12 border-b lm-hairline">
      <div>
        <p class="lm-serif text-2xl mb-3" style="color:#2A2620;">{{ $s->store_name ?? 'Lumen' }}</p>
        <p class="text-sm max-w-xs" style="color:#8a8272; line-height:1.7;">{{ $s->footer_text ?? __('messages.Lumen_FooterTagline') }}</p>
      </div>
      <div>
        <p class="lm-eyebrow mb-4">{{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-2.5" style="color:#605848;">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block mb-2.5" style="color:#605848;">{{ __('messages.Lumen_TrackOrder') }}</a>
      </div>
      <div>
        <p class="lm-eyebrow mb-4">{{ __('messages.Lumen_Explore') }}</p>
        <a href="{{ route('store.shop') }}" class="text-sm block mb-2.5" style="color:#605848;">{{ __('messages.Lumen_Shop') }}</a>
        <a href="{{ route('account') }}" class="text-sm block mb-2.5" style="color:#605848;">{{ __('messages.Account') }}</a>
      </div>
      <div>
        <p class="lm-eyebrow mb-4">{{ __('messages.Lumen_JoinTheLight') }}</p>
        <p class="text-sm mb-4" style="color:#8a8272;">{{ __('messages.Lumen_NewsletterCopy') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-0 border-b" style="border-color:#D4AF6A;">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 py-2 text-sm outline-none bg-transparent" style="color:#2A2620;" />
          <button type="submit" class="text-xs uppercase tracking-widest font-medium px-2" style="color:#B08D50;">{{ __('messages.Subscribe') }}</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-6 text-center" style="color:#a89e8c;">© {{ date('Y') }} {{ $s->store_name ?? 'Lumen' }}. {{ __('messages.Lumen_MadeWithLight') }}</p>
  </div>
</footer>
@endsection
