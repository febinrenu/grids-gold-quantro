@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* ============ COBALT — deep tech-luxury gem-toned theme. Midnight navy
     base, platinum/steel foreground, a single desaturated cool-steel accent.
     Sharp edges (no radius), hairline dividers, faceted CSS-only hero motif.
     Fixed top bar navigation. Self-contained CSS, no external runtime CDN. ============ */
  .theme-cobalt {
    --color-bg-base: 10 22 40;
    --color-bg-surface: 16 32 58;
    --color-bg-elevated: 24 46 82;
    --color-bg-muted: 19 38 66;
    --color-border-subtle: 45 70 105;
    --color-border-strong: 96 122 156;
    --color-fg-primary: 232 238 247;
    --color-fg-secondary: 168 182 204;
    --color-fg-muted: 108 126 154;
    --color-accent-400: 207 224 245;
    --color-accent-500: 199 205 214;
    --color-accent-600: 156 168 186;
    color-scheme: dark;
    font-family: 'Manrope', system-ui, sans-serif;
    background: rgb(10 22 40);
    color: rgb(232 238 247);
  }
  .theme-cobalt .cb-display { font-family: 'Space Grotesk', system-ui, sans-serif; letter-spacing: -.01em; }
  .theme-cobalt .cb-label { text-transform: uppercase; letter-spacing: .16em; font-size: .68rem; font-weight: 600; color: rgb(108 126 154); }
  .theme-cobalt .cb-hairline { border-top: 1px solid rgb(45 70 105); }
  .theme-cobalt .cb-hairline-b { border-bottom: 1px solid rgb(45 70 105); }

  .theme-cobalt .cb-topbar {
    position: sticky; top: 0; z-index: 40;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.1rem 1.75rem;
    background: rgba(10,22,40,.92); backdrop-filter: blur(10px);
    border-bottom: 1px solid rgb(45 70 105);
  }
  .theme-cobalt .cb-word { font-family: 'Space Grotesk', system-ui, sans-serif; font-weight: 700; font-size: 1.2rem; letter-spacing: -.01em; color: rgb(232 238 247); position: relative; padding-left: .85rem; }
  .theme-cobalt .cb-word::before { content: ''; position: absolute; left: 0; top: .18em; width: .5rem; height: .5rem; background: rgb(199 205 214); clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
  .theme-cobalt .cb-nav-link { font-size: .84rem; font-weight: 500; color: rgb(168 182 204); padding: .4rem 0; border-bottom: 1px solid transparent; transition: color .15s, border-color .15s; }
  .theme-cobalt .cb-nav-link:hover { color: rgb(232 238 247); border-bottom-color: rgb(199 205 214); }

  .theme-cobalt .cb-catstrip { display: flex; gap: 1.6rem; overflow-x: auto; padding: .7rem 1.75rem; background: rgb(16 32 58); border-bottom: 1px solid rgb(45 70 105); }
  .theme-cobalt .cb-catstrip a { white-space: nowrap; font-size: .74rem; text-transform: uppercase; letter-spacing: .1em; color: rgb(108 126 154); }
  .theme-cobalt .cb-catstrip a:hover { color: rgb(207 224 245); }
  .theme-cobalt .cb-catstrip::-webkit-scrollbar { height: 3px; }

  .theme-cobalt .cb-icon-btn { color: rgb(168 182 204); transition: color .15s; }
  .theme-cobalt .cb-icon-btn:hover { color: rgb(232 238 247); }

  .theme-cobalt .cb-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: .55rem;
    background: rgb(199 205 214); color: rgb(10 22 40);
    padding: .85rem 1.8rem; font-size: .82rem; font-weight: 700; letter-spacing: .02em;
    border-radius: 1px; transition: background .15s, transform .15s;
  }
  .theme-cobalt .cb-btn:hover { background: rgb(207 224 245); }
  .theme-cobalt .cb-btn-outline { background: transparent; color: rgb(232 238 247); border: 1px solid rgb(96 122 156); }
  .theme-cobalt .cb-btn-outline:hover { border-color: rgb(199 205 214); background: rgba(199,205,214,.06); }

  .theme-cobalt .cb-mobilenav { display: flex; flex-direction: column; background: rgb(16 32 58); border-bottom: 1px solid rgb(45 70 105); }
  .theme-cobalt .cb-mobilenav a { padding: .85rem 1.75rem; font-size: .88rem; border-top: 1px solid rgb(45 70 105); color: rgb(168 182 204); }

  .theme-cobalt .product-card { background: rgb(16 32 58); border: 1px solid rgb(45 70 105); border-radius: 1px; }
  .theme-cobalt .product-card .product-title { color: rgb(232 238 247); font-family: 'Space Grotesk', system-ui, sans-serif; }
  .theme-cobalt .product-card .price { color: rgb(207 224 245); font-weight: 700; }

  .theme-cobalt .cb-facet {
    position: absolute; inset: 0;
    background:
      linear-gradient(135deg, rgba(207,224,245,.14) 0%, transparent 35%),
      linear-gradient(315deg, rgba(199,205,214,.10) 0%, transparent 40%),
      linear-gradient(180deg, rgb(24 46 82) 0%, rgb(10 22 40) 100%);
    clip-path: polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 22%);
  }
  .theme-cobalt .cb-facet::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(232,238,247,.08) 50%, transparent 60%);
  }
  .theme-cobalt .cb-facet-chip { position: absolute; border: 1px solid rgba(199,205,214,.35); }

  .theme-cobalt .cb-footer { background: rgb(6 14 27); border-top: 1px solid rgb(45 70 105); }
</style>
@endpush

@section('header')
<div class="theme-cobalt" x-data="{ mobileOpen: false }">
  <div class="cb-topbar">
    <button type="button" class="lg:hidden cb-icon-btn" @click="mobileOpen = !mobileOpen" aria-label="{{ __('messages.Cobalt_OpenMenu') }}">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
    <a href="{{ route('store.index') }}" class="cb-word">{{ $s->store_name ?? 'Cobalt' }}</a>
    <nav class="hidden lg:flex items-center gap-8">
      <a href="{{ route('store.index') }}" class="cb-nav-link">{{ __('messages.Home') }}</a>
      <a href="{{ route('store.shop') }}" class="cb-nav-link">{{ __('messages.Cobalt_ShopAll') }}</a>
      <a href="{{ route('store.contact') }}" class="cb-nav-link">{{ __('messages.Support') }}</a>
    </nav>
    <div class="flex items-center gap-5">
      <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="cb-icon-btn hidden sm:inline-flex">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
      </a>
      <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative cb-icon-btn">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:rgb(199,205,214); color:rgb(10,22,40);">0</span>
      </a>
    </div>
  </div>

  <div class="cb-catstrip hidden lg:flex">
    <a href="{{ route('store.shop') }}">{{ __('messages.Cobalt_ShopAll') }}</a>
    @foreach(($categories ?? collect())->take(8) as $cat)
      <a href="{{ route('store.shop', ['category' => $cat->id]) }}">{{ $cat->name }}</a>
    @endforeach
  </div>

  <div class="cb-mobilenav lg:hidden" x-show="mobileOpen" x-cloak x-transition>
    <a href="{{ route('store.index') }}">{{ __('messages.Home') }}</a>
    <a href="{{ route('store.shop') }}">{{ __('messages.Cobalt_ShopAll') }}</a>
    <a href="{{ route('store.contact') }}">{{ __('messages.Support') }}</a>
    <a href="{{ route('account') }}">{{ __('messages.Account') }}</a>
    @foreach(($categories ?? collect())->take(8) as $cat)
      <a href="{{ route('store.shop', ['category' => $cat->id]) }}">{{ $cat->name }}</a>
    @endforeach
  </div>
</div>
@endsection

@section('footer')
<footer class="theme-cobalt cb-footer" style="padding: 3.5rem 1.75rem 2rem;">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 cb-hairline-b">
      <div class="col-span-2">
        <p class="cb-word">{{ $s->store_name ?? 'Cobalt' }}</p>
        <p class="text-sm mt-3 max-w-xs" style="color:rgb(168 182 204);">{{ $s->footer_text ?? __('messages.Cobalt_FooterTagline') }}</p>
      </div>
      <div>
        <p class="cb-label mb-4">{{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-2" style="color:rgb(168 182 204);">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block" style="color:rgb(168 182 204);">{{ __('messages.Cobalt_TrackOrder') }}</a>
      </div>
      <div>
        <p class="cb-label mb-4">{{ __('messages.Cobalt_Newsletter') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none" style="background:rgba(232,238,247,.05); border:1px solid rgb(45 70 105); color:rgb(232 238 247); border-radius:1px;" />
          <button type="submit" class="cb-btn" style="padding:.6rem .9rem;" aria-label="{{ __('messages.Subscribe') }}">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-6">
      <p class="text-xs" style="color:rgb(108 126 154);">&copy; {{ date('Y') }} {{ $s->store_name ?? 'Cobalt' }}</p>
      <p class="cb-label">{{ $s->currency_code ?? 'USD' }}</p>
    </div>
  </div>
</footer>
@endsection
