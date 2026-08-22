@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.add('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,480&family=Archivo:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  /* ============ MONOLITH — a single self-contained stylesheet, no external
     runtime CDN. Editorial gallery aesthetic: near-black + cream + one
     bronze accent, oversized serif display type, asymmetric mosaic grids,
     numbered catalog-style product listing instead of card grids. ============ */
  .theme-monolith {
    --color-bg-base: 10 10 9;
    --color-bg-surface: 20 19 17;
    --color-bg-elevated: 28 27 24;
    --color-bg-muted: 20 19 17;
    --color-border-subtle: 54 51 46;
    --color-border-strong: 84 79 70;
    --color-fg-primary: 243 240 234;
    --color-fg-secondary: 196 189 176;
    --color-fg-muted: 148 140 126;
    --color-accent-400: 190 154 111;
    --color-accent-500: 156 122 84;
    --color-accent-600: 124 96 63;
    color-scheme: dark;

    --mono-ink: #0A0A09;
    --mono-cream: #F3F0EA;
    --mono-bronze: #9C7A54;
    --mono-bronze-light: #C7A97A;
    font-family: 'Archivo', system-ui, sans-serif;
  }
  .theme-monolith .m-serif { font-family: 'Fraunces', Georgia, 'Times New Roman', serif; }
  .theme-monolith .m-label { letter-spacing: .22em; text-transform: uppercase; font-size: .7rem; }

  .theme-monolith .m-topbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.5rem 2rem; border-bottom: 1px solid rgba(243,240,234,.08);
  }
  .theme-monolith .m-word { font-family: 'Fraunces', Georgia, serif; font-size: 1.3rem; letter-spacing: .02em; color: var(--mono-cream); }

  .theme-monolith .m-hero {
    min-height: 86vh; position: relative; display: flex; align-items: flex-end;
    background: linear-gradient(180deg, rgba(10,10,9,.15) 0%, rgba(10,10,9,.9) 100%), #14130f;
    background-size: cover; background-position: center;
  }
  .theme-monolith .m-hero-inner { padding: 0 2rem 4rem; max-width: 60rem; }
  .theme-monolith .m-hero-title { font-family: 'Fraunces', Georgia, serif; font-weight: 340; font-size: clamp(3rem, 8vw, 6.5rem); line-height: .96; color: var(--mono-cream); }

  /* Asymmetric mosaic — explicit grid-template-areas so tiles vary in size */
  .theme-monolith .m-mosaic {
    display: grid; gap: .75rem; padding: 0 2rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, minmax(0, 16rem));
    grid-template-areas: "a a a b b c" "a a a b b d";
  }
  .theme-monolith .m-mosaic-empty { grid-template-rows: minmax(0, 16rem); grid-template-areas: "a a a a a a"; }
  .theme-monolith .m-mosaic > a:nth-child(1) { grid-area: a; }
  .theme-monolith .m-mosaic > a:nth-child(2) { grid-area: b; }
  .theme-monolith .m-mosaic > a:nth-child(3) { grid-area: c; }
  .theme-monolith .m-mosaic > a:nth-child(4) { grid-area: d; }
  .theme-monolith .m-tile { position: relative; overflow: hidden; background: #1c1b18; display: block; }
  .theme-monolith .m-tile img { width: 100%; height: 100%; object-fit: cover; opacity: .82; transition: transform .6s ease, opacity .3s ease; }
  .theme-monolith .m-tile img { width: 100%; height: 100%; object-fit: cover; opacity: .82; transition: transform .6s ease, opacity .3s ease; }
  .theme-monolith .m-tile:hover img { transform: scale(1.04); opacity: 1; }
  .theme-monolith .m-tile-cap { position: absolute; left: 1.1rem; bottom: 1.1rem; color: var(--mono-cream); font-family: 'Fraunces', Georgia, serif; font-size: 1.2rem; }

  /* Numbered catalog listing — replaces the usual card grid */
  .theme-monolith .m-catalog-row { display: grid; grid-template-columns: 3rem 7rem 1fr auto; align-items: center; gap: 1.5rem; padding: 1.4rem 0; border-bottom: 1px solid rgba(243,240,234,.08); }
  .theme-monolith .m-catalog-index { font-family: 'Fraunces', Georgia, serif; color: var(--mono-bronze); font-size: 1rem; }
  .theme-monolith .m-catalog-thumb { width: 7rem; height: 7rem; object-fit: cover; background: #1c1b18; }
  .theme-monolith .m-catalog-name { font-family: 'Fraunces', Georgia, serif; font-size: 1.35rem; color: var(--mono-cream); }

  .theme-monolith .m-btn { display: inline-flex; align-items: center; gap: .6rem; border: 1px solid var(--mono-cream); color: var(--mono-cream); padding: .85rem 1.8rem; font-size: .72rem; letter-spacing: .18em; text-transform: uppercase; transition: all .2s; background: transparent; }
  .theme-monolith .m-btn:hover { background: var(--mono-cream); color: var(--mono-ink); }
  .theme-monolith .m-btn-solid { background: var(--mono-bronze); border-color: var(--mono-bronze); color: #0A0A09; }
  .theme-monolith .m-btn-solid:hover { background: var(--mono-bronze-light); border-color: var(--mono-bronze-light); color: #0A0A09; }

  .theme-monolith .product-card { background: transparent; border: none; box-shadow: none; }
  .theme-monolith .product-card .product-media { aspect-ratio: 3/4; background: #1c1b18; }
  .theme-monolith .product-card .product-title { font-family: 'Fraunces', Georgia, serif; font-size: 1rem; color: var(--mono-cream); }
  .theme-monolith .product-card .price { color: var(--mono-bronze-light); }
</style>
@endpush

@section('header')
<div class="theme-monolith bg-mono-ink" style="background:#0A0A09;">
  <div class="m-topbar">
    <a href="{{ route('store.index') }}" class="m-word">{{ $s->store_name ?? 'Monolith' }}</a>
    <nav class="hidden md:flex items-center gap-8 m-label" style="color:var(--mono-cream);">
      <a href="{{ route('store.shop') }}" class="hover:opacity-60 transition">Index</a>
      @foreach(($categories ?? collect())->take(4) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:opacity-60 transition">{{ $cat->name }}</a>
      @endforeach
    </nav>
    <div class="flex items-center gap-5" style="color:var(--mono-cream);">
      <a href="{{ route('account') }}" aria-label="Account" class="hover:opacity-60 transition"><svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
      <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:opacity-60 transition">
        <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:var(--mono-bronze); color:#0A0A09;">0</span>
      </a>
    </div>
  </div>
</div>
@endsection

@section('footer')
<footer class="theme-monolith" style="background:#0A0A09; border-top:1px solid rgba(243,240,234,.08);">
  <div class="max-w-7xl mx-auto px-8 py-16">
    <p class="m-serif" style="font-size:clamp(2.5rem,6vw,5rem); color:var(--mono-cream); line-height:1;">{{ $s->store_name ?? 'Monolith' }}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8" style="border-top:1px solid rgba(243,240,234,.08);">
      <div>
        <p class="m-label mb-3" style="color:var(--mono-bronze-light);">Visit</p>
        <p class="text-sm" style="color:var(--color, #C4BDB0); opacity:.7;">{{ $s->contact_address ?? '' }}</p>
      </div>
      <div>
        <p class="m-label mb-3" style="color:var(--mono-bronze-light);">Contact</p>
        <p class="text-sm" style="opacity:.7; color:#C4BDB0;">{{ $s->contact_email ?? '' }}</p>
      </div>
      <div>
        <p class="m-label mb-3" style="color:var(--mono-bronze-light);">Account</p>
        <a href="{{ route('store.login.show') }}" class="text-sm block hover:opacity-100 transition" style="opacity:.7; color:#C4BDB0;">Sign In</a>
      </div>
      <div>
        <p class="m-label mb-3" style="color:var(--mono-bronze-light);">Notify Me</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Email" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none" style="background:transparent; border:1px solid rgba(243,240,234,.25); color:var(--mono-cream);" />
          <button type="submit" class="m-btn m-btn-solid">→</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-10" style="opacity:.35; color:#C4BDB0;">© {{ date('Y') }} {{ $s->store_name ?? 'Monolith' }}</p>
  </div>
</footer>
@endsection
