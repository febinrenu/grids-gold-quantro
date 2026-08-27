@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  /* ============ KIOSK — bold graphic poster/streetwear. Acid yellow + black
     + white, huge condensed display type, scrolling marquee ticker, diagonal
     clip-path hero, thick-bordered sticker cards. Self-contained CSS. ============ */
  .theme-kiosk {
    --color-bg-base: 255 255 255;
    --color-bg-surface: 247 247 242;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 237 237 228;
    --color-border-subtle: 10 10 10;
    --color-border-strong: 10 10 10;
    --color-fg-primary: 10 10 10;
    --color-fg-secondary: 40 40 40;
    --color-fg-muted: 90 90 90;
    --color-accent-400: 235 245 40;
    --color-accent-500: 216 232 12;
    --color-accent-600: 172 186 10;
    color-scheme: light;

    --kx-black: #0A0A0A;
    --kx-yellow: #E9F52A;
    --kx-yellow-deep: #C7D613;
    font-family: 'Space Mono', ui-monospace, monospace;
  }
  .theme-kiosk .k-display { font-family: 'Archivo Black', Impact, 'Arial Black', sans-serif; text-transform: uppercase; letter-spacing: -.01em; }
  .theme-kiosk .k-label { font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .1em; font-size: .72rem; }

  .theme-kiosk .k-marquee-wrap { background: var(--kx-black); overflow: hidden; white-space: nowrap; border-bottom: 3px solid var(--kx-black); }
  .theme-kiosk .k-marquee { display: inline-block; padding: .55rem 0; animation: kmarquee 22s linear infinite; }
  .theme-kiosk .k-marquee span { display: inline-block; color: var(--kx-yellow); font-family: 'Archivo Black', sans-serif; text-transform: uppercase; font-size: .8rem; letter-spacing: .04em; padding: 0 1.5rem; }
  @keyframes kmarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .theme-kiosk .k-topbar { display: flex; align-items: center; justify-content: space-between; padding: 1.1rem 1.5rem; background: #fff; border-bottom: 3px solid var(--kx-black); }
  .theme-kiosk .k-word { font-family: 'Archivo Black', sans-serif; text-transform: uppercase; font-size: 1.5rem; letter-spacing: -.01em; }

  .theme-kiosk .k-hero {
    position: relative; background: var(--kx-yellow); overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
    padding: 4.5rem 1.5rem 6.5rem;
  }
  .theme-kiosk .k-hero-title { font-family: 'Archivo Black', sans-serif; text-transform: uppercase; font-size: clamp(2.6rem, 8vw, 5.5rem); line-height: .92; color: var(--kx-black); }

  .theme-kiosk .k-sticker { display: inline-flex; align-items: center; gap: .4rem; background: var(--kx-black); color: var(--kx-yellow); font-family: 'Archivo Black', sans-serif; text-transform: uppercase; font-size: .7rem; padding: .45rem .9rem; border-radius: 999px; transform: rotate(-3deg); }

  .theme-kiosk .k-block { border: 3px solid var(--kx-black); background: #fff; }
  .theme-kiosk .k-block-yellow { background: var(--kx-yellow); }
  .theme-kiosk .k-block-black { background: var(--kx-black); color: #fff; }

  .theme-kiosk .k-btn { display: inline-flex; align-items: center; gap: .5rem; background: var(--kx-black); color: var(--kx-yellow); border: 3px solid var(--kx-black); padding: .8rem 1.6rem; font-family: 'Archivo Black', sans-serif; text-transform: uppercase; font-size: .82rem; transition: transform .15s; }
  .theme-kiosk .k-btn:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--kx-black); }
  .theme-kiosk .k-btn-alt { background: #fff; color: var(--kx-black); }

  .theme-kiosk .product-card { background: #fff; border: 3px solid var(--kx-black) !important; border-radius: 0 !important; box-shadow: none; }
  .theme-kiosk .product-card:hover { transform: translate(-3px,-3px); box-shadow: 5px 5px 0 var(--kx-black); }
  .theme-kiosk .product-card .product-title { font-family: 'Archivo Black', sans-serif; text-transform: uppercase; font-size: .92rem; color: var(--kx-black); }
  .theme-kiosk .product-card .price { color: var(--kx-black); font-weight: 700; }
</style>
@endpush

@section('header')
<div class="theme-kiosk">
  <div class="k-marquee-wrap">
    <div class="k-marquee">
      @for($i = 0; $i < 6; $i++)
        <span>{{ $s->topbar_text_left ?? 'Kiosk_TopbarDefault' }} ✦ {{ 'Kiosk_FreeShippingBanner' }} ✦</span>
      @endfor
    </div>
  </div>
  <div class="k-topbar">
    <button id="kx-menuBtn" class="md:hidden k-label" aria-label="{{ 'Kiosk_OpenMenu' }}" style="border:2px solid var(--kx-black); padding:.4rem .6rem;">{{ 'Menu' }}</button>
    <a href="{{ route('store.index') }}" class="k-word">{{ $s->store_name ?? 'KIOSK' }}</a>
    <nav class="hidden md:flex items-center gap-6 k-label">
      <a href="{{ route('store.shop') }}" class="hover:opacity-60 transition">{{ 'Kiosk_ShopAll' }}</a>
      @foreach(($categories ?? collect())->take(5) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:opacity-60 transition">{{ Str::upper($cat->name) }}</a>
      @endforeach
    </nav>
    <div class="flex items-center gap-4">
      <a href="{{ route('account') }}" aria-label="{{ 'Account' }}" class="hover:opacity-60 transition"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
      <a href="{{ route('store.cart') }}" aria-label="{{ 'Cart' }}" class="relative hover:opacity-60 transition">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-2 -right-2 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:var(--kx-black); color:var(--kx-yellow);">0</span>
      </a>
    </div>
  </div>
  <div id="kx-mobileNav" class="md:hidden hidden flex-col k-label" style="background:#fff; border-bottom:3px solid var(--kx-black);">
    <a href="{{ route('store.shop') }}" class="px-5 py-3" style="border-top:1px solid #eee;">{{ 'Kiosk_ShopAll' }}</a>
    @foreach(($categories ?? collect())->take(8) as $cat)
      <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="px-5 py-3" style="border-top:1px solid #eee;">{{ Str::upper($cat->name) }}</a>
    @endforeach
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('kx-menuBtn'), n = document.getElementById('kx-mobileNav');
    if (b && n) { b.addEventListener('click', function () { n.classList.toggle('hidden'); n.classList.toggle('flex'); }); }
  });
</script>
@endsection

@section('footer')
<footer class="theme-kiosk k-block-black" style="padding: 3.5rem 1.5rem 2rem;">
  <div class="max-w-7xl mx-auto">
    <p class="k-display" style="font-size:clamp(2.2rem,6vw,4.5rem); color:var(--kx-yellow); line-height:.95;">{{ $s->store_name ?? 'KIOSK' }}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 pt-8" style="border-top:2px solid rgba(233,245,42,.25);">
      <div>
        <p class="k-label mb-3" style="color:var(--kx-yellow);">{{ 'Shop' }}</p>
        <a href="{{ route('store.shop') }}" class="text-sm block mb-1.5" style="color:#eee;">{{ 'Kiosk_AllJewelry' }}</a>
      </div>
      <div>
        <p class="k-label mb-3" style="color:var(--kx-yellow);">{{ 'Kiosk_Help' }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-1.5" style="color:#eee;">{{ 'Kiosk_Contact' }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block mb-1.5" style="color:#eee;">{{ 'Kiosk_TrackOrder' }}</a>
      </div>
      <div>
        <p class="k-label mb-3" style="color:var(--kx-yellow);">{{ 'Account' }}</p>
        <a href="{{ route('store.login.show') }}" class="text-sm block mb-1.5" style="color:#eee;">{{ 'Kiosk_SignIn' }}</a>
      </div>
      <div>
        <p class="k-label mb-3" style="color:var(--kx-yellow);">{{ 'Kiosk_GetDropsFirst' }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ 'Email' }}" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none" style="background:#161616; border:2px solid #333; color:#fff;" />
          <button type="submit" class="k-btn">{{ 'Kiosk_Go' }}</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-8" style="opacity:.4; color:#eee;">© {{ date('Y') }} {{ $s->store_name ?? 'Kiosk' }}</p>
  </div>
</footer>
@endsection


