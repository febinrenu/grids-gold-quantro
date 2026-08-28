@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* ============ ORBIT — futuristic, spacious, tech-forward luxury with
     circular / orbital motifs. Cool near-white base, deep graphite ink,
     one warm champagne-bronze accent used only in ring shapes and CTAs.
     Self-contained CSS, no external runtime CDN. ============ */
  .theme-orbit {
    --color-bg-base: 245 246 248;
    --color-bg-surface: 255 255 255;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 234 236 240;
    --color-border-subtle: 224 227 232;
    --color-border-strong: 200 204 212;
    --color-fg-primary: 28 30 34;
    --color-fg-secondary: 90 96 107;
    --color-fg-muted: 142 147 157;
    --color-accent-400: 201 165 121;
    --color-accent-500: 184 144 90;
    --color-accent-600: 156 118 69;
    color-scheme: light;
    font-family: 'Sora', system-ui, sans-serif;
    background: #F5F6F8;
    color: #1C1E22;
  }
  .theme-orbit .ob-display { font-family: 'Outfit', system-ui, sans-serif; }
  .theme-orbit .ob-word { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1.15rem; letter-spacing: -.01em; color: #1C1E22; }
  .theme-orbit .ob-label { text-transform: uppercase; letter-spacing: .16em; font-size: .68rem; font-weight: 600; color: #8E939D; }
  .theme-orbit .ob-ring { border-radius: 50%; border: 1px solid rgba(184,144,90,.28); position: absolute; pointer-events: none; }
  .theme-orbit .ob-ring-fill { border-radius: 50%; background: radial-gradient(circle at 35% 30%, rgba(184,144,90,.22), rgba(184,144,90,0) 70%); position: absolute; pointer-events: none; }

  .theme-orbit .ob-btn {
    display: inline-flex; align-items: center; gap: .55rem; background: #1C1E22; color: #F5F6F8;
    padding: .9rem 1.8rem; border-radius: 999px; font-size: .85rem; font-weight: 600;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease; box-shadow: 0 10px 30px -12px rgba(28,30,34,.35);
  }
  .theme-orbit .ob-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 36px -12px rgba(28,30,34,.45); }
  .theme-orbit .ob-btn-accent { background: #B8905A; color: #1C1E22; box-shadow: 0 10px 30px -10px rgba(184,144,90,.55); }
  .theme-orbit .ob-btn-outline { background: transparent; color: #1C1E22; border: 1.5px solid rgba(28,30,34,.18); box-shadow: none; }
  .theme-orbit .ob-btn-outline:hover { border-color: #B8905A; box-shadow: none; }

  .theme-orbit .ob-card {
    background: #fff; border: 1px solid #E7E9ED; border-radius: 28px;
    box-shadow: 0 20px 45px -28px rgba(28,30,34,.18);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .theme-orbit .ob-card:hover { transform: translateY(-4px); box-shadow: 0 28px 55px -24px rgba(28,30,34,.24); }

  .theme-orbit .ob-header {
    position: sticky; top: 0; z-index: 40; background: rgba(245,246,248,.86); backdrop-filter: blur(14px);
    border-bottom: 1px solid #E7E9ED;
  }
  .theme-orbit .ob-nav-link { font-size: .88rem; font-weight: 500; color: #4B5058; padding: .5rem .2rem; position: relative; }
  .theme-orbit .ob-nav-link:hover { color: #1C1E22; }
  .theme-orbit .ob-cat-chip { font-size: .78rem; font-weight: 500; color: #4B5058; padding: .35rem .85rem; border-radius: 999px; border: 1px solid #E7E9ED; background: #fff; white-space: nowrap; }
  .theme-orbit .ob-cat-chip:hover { border-color: #B8905A; color: #1C1E22; }

  .theme-orbit .ob-circle-tile { border-radius: 50%; overflow: hidden; aspect-ratio: 1/1; position: relative; box-shadow: 0 18px 40px -20px rgba(28,30,34,.35); border: 6px solid #fff; }
  .theme-orbit .ob-circle-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
  .theme-orbit .ob-circle-tile:hover img { transform: scale(1.08); }

  .theme-orbit .product-card { background: #fff; border-color: #E7E9ED; border-radius: 24px; box-shadow: 0 16px 36px -24px rgba(28,30,34,.2); overflow: hidden; }
  .theme-orbit .product-card .product-title { color: #1C1E22; }
  .theme-orbit .product-card .price { color: #9C7645; font-weight: 700; }

  .theme-orbit .ob-mobilebtn { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 50%; border: 1px solid #E7E9ED; background: #fff; }

  .theme-orbit .ob-footer { background: #1C1E22; color: #C7CAD1; position: relative; overflow: hidden; }
  .theme-orbit .ob-footer a:hover { color: #fff; }
  .theme-orbit .ob-input { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); color: #F5F6F8; border-radius: 999px; padding: .75rem 1.2rem; font-size: .85rem; outline: none; }
  .theme-orbit .ob-input::placeholder { color: rgba(199,202,209,.6); }
</style>
@endpush

@section('header')
<div class="theme-orbit" x-data="{ mobileOpen: false }">
  <header class="ob-header">
    <div class="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
      <a href="{{ route('store.index') }}" class="ob-word flex items-center gap-2">
        <span style="width:1.7rem; height:1.7rem; border-radius:50%; border:2px solid #B8905A; display:inline-block; position:relative;">
          <span style="position:absolute; inset:5px; border-radius:50%; background:#B8905A;"></span>
        </span>
        {{ $s->store_name ?? 'Orbit' }}
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a href="{{ route('store.index') }}" class="ob-nav-link">{{ __('messages.Orbit_Home') }}</a>
        <a href="{{ route('store.shop') }}" class="ob-nav-link">{{ __('messages.Orbit_Shop') }}</a>
        <a href="{{ route('store.contact') }}" class="ob-nav-link">{{ __('messages.Support') }}</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hidden sm:inline-flex ob-mobilebtn" style="color:#4B5058;">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative ob-mobilebtn" style="color:#4B5058;">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1 -right-1 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#B8905A; color:#1C1E22;">0</span>
        </a>
        <button type="button" class="ob-mobilebtn md:hidden" aria-label="{{ __('messages.Orbit_ToggleMenu') }}" @click="mobileOpen = !mobileOpen">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path x-show="!mobileOpen" d="M4 7h16M4 12h16M4 17h16"/><path x-show="mobileOpen" x-cloak d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-5 md:px-8 pb-3 flex items-center gap-2 overflow-x-auto" style="scrollbar-width:none;">
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="ob-cat-chip">{{ $cat->name }}</a>
      @endforeach
    </div>

    <div x-show="mobileOpen" x-cloak x-transition class="md:hidden border-t" style="border-color:#E7E9ED; background:#fff;">
      <div class="px-5 py-4 flex flex-col gap-1">
        <a href="{{ route('store.index') }}" class="ob-nav-link py-2" @click="mobileOpen=false">{{ __('messages.Orbit_Home') }}</a>
        <a href="{{ route('store.shop') }}" class="ob-nav-link py-2" @click="mobileOpen=false">{{ __('messages.Orbit_Shop') }}</a>
        <a href="{{ route('store.contact') }}" class="ob-nav-link py-2" @click="mobileOpen=false">{{ __('messages.Support') }}</a>
        <a href="{{ route('account') }}" class="ob-nav-link py-2" @click="mobileOpen=false">{{ __('messages.Account') }}</a>
      </div>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-orbit ob-footer px-6 md:px-12 pt-16 pb-8">
  <span class="ob-ring" style="width:340px; height:340px; top:-140px; right:-100px; border-color: rgba(184,144,90,.18);"></span>
  <span class="ob-ring" style="width:180px; height:180px; bottom:-60px; left:8%; border-color: rgba(184,144,90,.14);"></span>

  <div class="max-w-7xl mx-auto relative">
    <div class="grid md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 pb-10" style="border-bottom:1px solid rgba(255,255,255,.1);">
      <div>
        <a href="{{ route('store.index') }}" class="ob-word" style="color:#F5F6F8; font-size:1.3rem;">{{ $s->store_name ?? 'Orbit' }}</a>
        <p class="text-sm mt-3 max-w-xs" style="opacity:.7;">{{ $s->footer_text ?? __('messages.Orbit_FooterTagline') }}</p>
      </div>
      <div>
        <p class="ob-label mb-4" style="color:#8E939D;">{{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-2.5">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block mb-2.5">{{ __('messages.Orbit_TrackOrder') }}</a>
      </div>
      <div>
        <p class="ob-label mb-4" style="color:#8E939D;">{{ __('messages.Orbit_Shop') }}</p>
        <a href="{{ route('store.shop') }}" class="text-sm block mb-2.5">{{ __('messages.ViewAll') }}</a>
        <a href="{{ route('store.cart') }}" class="text-sm block mb-2.5">{{ __('messages.Cart') }}</a>
      </div>
      <div>
        <p class="ob-label mb-4" style="color:#8E939D;">{{ __('messages.Orbit_Newsletter') }}</p>
        <p class="text-sm mb-3" style="opacity:.7;">{{ __('messages.Orbit_NewsletterBody') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="ob-input flex-1 min-w-0" />
          <button type="submit" class="ob-btn ob-btn-accent" style="padding:.75rem 1.1rem;" aria-label="{{ __('messages.Subscribe') }}">→</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-6" style="opacity:.45;">© {{ date('Y') }} {{ $s->store_name ?? 'Orbit' }}</p>
  </div>
</footer>
@endsection
