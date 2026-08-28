@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.add('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Karla:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* ============ VERDANT — dark emerald jewel-box couture. Deep forest-green
     backgrounds, hairline antique-gold frames around every key section (like
     glass jewelry cases), sharp geometric dividers, tall condensed display
     serif. The opposite of an earthy/organic theme: precise, dark, formal.
     Self-contained CSS, no external runtime CDN. ============ */
  .theme-verdant {
    --color-bg-base: 15 36 25;
    --color-bg-surface: 22 51 31;
    --color-bg-elevated: 27 61 38;
    --color-bg-muted: 19 44 29;
    --color-border-subtle: 61 92 70;
    --color-border-strong: 201 162 75;
    --color-fg-primary: 237 234 224;
    --color-fg-secondary: 197 210 199;
    --color-fg-muted: 148 168 152;
    --color-accent-400: 63 167 114;
    --color-accent-500: 46 139 87;
    --color-accent-600: 34 110 67;
    color-scheme: dark;
    font-family: 'Karla', system-ui, sans-serif;
  }
  .theme-verdant .vd-serif { font-family: 'Bodoni Moda', 'Georgia', serif; }
  .theme-verdant .vd-eyebrow { text-transform: uppercase; letter-spacing: .22em; font-size: .68rem; color: #C9A24B; }
  .theme-verdant .vd-gold { color: #C9A24B; }
  .theme-verdant .vd-gold-line { height: 1px; background: linear-gradient(90deg, transparent, #C9A24B, transparent); }

  /* Jewel-case frame: hairline gold border, deep shadow, sharp corners */
  .theme-verdant .vd-case {
    border: 1px solid rgba(201,162,75,.35);
    background: #16331F;
    box-shadow: 0 24px 48px -20px rgba(0,0,0,.6), inset 0 0 0 1px rgba(201,162,75,.05);
  }
  .theme-verdant .vd-case-lg {
    border: 1px solid rgba(201,162,75,.4);
    background: linear-gradient(160deg, #16331F 0%, #0F2419 100%);
  }

  .theme-verdant .vd-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
    background: #2E8B57; color: #0F2419; padding: .85rem 1.9rem;
    font-family: 'Karla', sans-serif; font-weight: 700; font-size: .8rem;
    letter-spacing: .08em; text-transform: uppercase;
    border: 1px solid #2E8B57; transition: background .15s, color .15s, border-color .15s;
  }
  .theme-verdant .vd-btn:hover { background: #3FA772; border-color: #3FA772; }
  .theme-verdant .vd-btn-outline {
    background: transparent; color: #C9A24B; border: 1px solid #C9A24B;
  }
  .theme-verdant .vd-btn-outline:hover { background: rgba(201,162,75,.1); }

  .theme-verdant .vd-divider {
    height: 1px; background: repeating-linear-gradient(90deg, rgba(201,162,75,.5) 0 8px, transparent 8px 16px);
  }

  .theme-verdant .vd-header {
    background: #0F2419; border-bottom: 1px solid rgba(201,162,75,.25);
  }
  .theme-verdant .vd-nav-link {
    font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; color: #C5D2C7;
    padding: .4rem 0; border-bottom: 1px solid transparent; transition: color .15s, border-color .15s;
  }
  .theme-verdant .vd-nav-link:hover { color: #C9A24B; border-color: #C9A24B; }

  .theme-verdant .vd-footer { background: #0A1811; border-top: 1px solid rgba(201,162,75,.25); }

  .theme-verdant .product-card { background: #16331F; border: 1px solid rgba(201,162,75,.22); border-radius: 0; }
  .theme-verdant .product-card:hover { border-color: rgba(201,162,75,.55); }
  .theme-verdant .product-card .product-title { color: #EDEAE0; font-family: 'Karla', sans-serif; }
  .theme-verdant .product-card .price { color: #C9A24B; font-weight: 700; }

  .theme-verdant .vd-icon-badge {
    width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center;
    border: 1px solid rgba(201,162,75,.4); color: #3FA772; flex-shrink: 0;
  }
</style>
@endpush

@section('header')
<div class="theme-verdant" x-data="{ vdMenu: false }">
  <header class="vd-header sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-5 md:px-8">
      <div class="flex items-center justify-between h-20">
        <button @click="vdMenu = !vdMenu" class="md:hidden text-[#EDEAE0]" aria-label="{{ __('messages.Verdant_OpenMenu') }}">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

        <a href="{{ route('store.index') }}" class="vd-serif text-2xl md:text-3xl tracking-wide" style="color:#EDEAE0;">
          {{ $s->store_name ?? 'Verdant' }}
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a href="{{ route('store.index') }}" class="vd-nav-link">{{ __('messages.Home') }}</a>
          <a href="{{ route('store.shop') }}" class="vd-nav-link">{{ __('messages.Shop') }}</a>
          @foreach(($categories ?? collect())->take(8) as $cat)
            <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="vd-nav-link">{{ $cat->name }}</a>
          @endforeach
          <a href="{{ route('store.contact') }}" class="vd-nav-link">{{ __('messages.Support') }}</a>
        </nav>

        <div class="flex items-center gap-5">
          <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hidden md:inline-flex" style="color:#C5D2C7;">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
          </a>
          <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative" style="color:#EDEAE0;">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
            <span class="cart-count absolute -top-2 -right-2 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#C9A24B; color:#0F2419;">0</span>
          </a>
        </div>
      </div>
    </div>

    <div x-show="vdMenu" x-cloak x-transition class="md:hidden px-5 pb-5" style="background:#0F2419; border-top:1px solid rgba(201,162,75,.2);">
      <a href="{{ route('store.index') }}" class="block vd-nav-link py-2.5">{{ __('messages.Home') }}</a>
      <a href="{{ route('store.shop') }}" class="block vd-nav-link py-2.5">{{ __('messages.Shop') }}</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="block vd-nav-link py-2.5">{{ $cat->name }}</a>
      @endforeach
      <a href="{{ route('store.contact') }}" class="block vd-nav-link py-2.5">{{ __('messages.Support') }}</a>
    </div>
  </header>
  <div class="vd-gold-line"></div>
</div>
@endsection

@section('footer')
<footer class="theme-verdant vd-footer pt-14 pb-8">
  <div class="max-w-7xl mx-auto px-5 md:px-8">
    <div class="grid md:grid-cols-4 gap-10 pb-10" style="border-bottom:1px solid rgba(201,162,75,.2);">
      <div class="md:col-span-2">
        <p class="vd-serif text-2xl" style="color:#EDEAE0;">{{ $s->store_name ?? 'Verdant' }}</p>
        <p class="text-sm mt-3 max-w-sm" style="color:#94A898;">{{ $s->footer_text ?? __('messages.Verdant_FooterTagline') }}</p>
      </div>
      <div>
        <p class="vd-eyebrow mb-4">{{ __('messages.Support') }}</p>
        <a href="{{ route('store.contact') }}" class="block text-sm mb-2.5" style="color:#C5D2C7;">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="block text-sm mb-2.5" style="color:#C5D2C7;">{{ __('messages.Verdant_TrackOrder') }}</a>
      </div>
      <div>
        <p class="vd-eyebrow mb-4">{{ __('messages.Verdant_JoinTheHouse') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-3 py-2.5 text-xs outline-none" style="background:rgba(255,255,255,.04); border:1px solid rgba(201,162,75,.3); color:#EDEAE0;" />
          <button type="submit" class="vd-btn" style="padding:.6rem 1rem;">{{ __('messages.Subscribe') }}</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-6 text-center" style="color:#5C7562;">&copy; {{ date('Y') }} {{ $s->store_name ?? 'Verdant' }}. {{ __('messages.Verdant_AllRightsReserved') }}</p>
  </div>
</footer>
@endsection
