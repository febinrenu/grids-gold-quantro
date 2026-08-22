@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,480;9..144,600&family=Archivo:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  /* ============ MONOLITH v2 — full redesign. Light warm-ivory + deep forest
     green + terracotta rust (was dark/near-black). Centered stacked header
     instead of a left-right bar. Asymmetric image-collage hero instead of a
     single full-bleed photo. Self-contained CSS, no external runtime CDN. ============ */
  .theme-monolith {
    --color-bg-base: 246 241 231;
    --color-bg-surface: 255 253 248;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 235 227 209;
    --color-border-subtle: 222 211 188;
    --color-border-strong: 190 175 145;
    --color-fg-primary: 35 48 31;
    --color-fg-secondary: 74 88 63;
    --color-fg-muted: 122 130 106;
    --color-accent-400: 196 108 68;
    --color-accent-500: 176 83 43;
    --color-accent-600: 140 64 32;
    color-scheme: light;

    --mono-paper: #F6F1E7;
    --mono-ink: #23301F;
    --mono-rust: #B0532B;
    --mono-rust-dark: #8C4020;
    --mono-moss: #5C6B4F;
    font-family: 'Archivo', system-ui, sans-serif;
  }
  .theme-monolith .m-serif { font-family: 'Fraunces', Georgia, 'Times New Roman', serif; }
  .theme-monolith .m-label { letter-spacing: .2em; text-transform: uppercase; font-size: .7rem; }

  .theme-monolith .m-topstrip { display: flex; align-items: center; justify-content: space-between; padding: .6rem 1.5rem; background: var(--mono-ink); color: rgba(246,241,231,.75); font-size: .72rem; letter-spacing: .06em; }
  .theme-monolith .m-header { position: relative; padding: 1.6rem 1.5rem 1.2rem; text-align: center; border-bottom: 1px solid rgba(35,48,31,.1); }
  .theme-monolith .m-word { font-family: 'Fraunces', Georgia, serif; font-weight: 480; font-size: 1.9rem; color: var(--mono-ink); }
  .theme-monolith .m-tagline { font-size: .68rem; letter-spacing: .28em; text-transform: uppercase; color: var(--mono-rust); margin-top: .25rem; }
  .theme-monolith .m-header-icons { position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); display: flex; align-items: center; gap: 1.1rem; color: var(--mono-ink); }
  .theme-monolith .m-header-menu { position: absolute; left: 1.5rem; top: 50%; transform: translateY(-50%); }
  .theme-monolith .m-nav { display: flex; align-items: center; justify-content: center; gap: 1.9rem; padding-top: .9rem; }

  .theme-monolith .m-btn { display: inline-flex; align-items: center; gap: .6rem; border: 1.5px solid var(--mono-ink); color: var(--mono-ink); padding: .8rem 1.7rem; font-size: .72rem; letter-spacing: .16em; text-transform: uppercase; transition: all .2s; background: transparent; }
  .theme-monolith .m-btn:hover { background: var(--mono-ink); color: var(--mono-paper); }
  .theme-monolith .m-btn-solid { background: var(--mono-rust); border-color: var(--mono-rust); color: #fff; }
  .theme-monolith .m-btn-solid:hover { background: var(--mono-rust-dark); border-color: var(--mono-rust-dark); color: #fff; }

  .theme-monolith .m-mosaic { display: grid; gap: .75rem; padding: 0 1.5rem; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(2, minmax(0, 16rem)); grid-template-areas: "a a a b b c" "a a a b b d"; }
  .theme-monolith .m-mosaic-empty { grid-template-rows: minmax(0, 16rem); grid-template-areas: "a a a a a a"; }
  .theme-monolith .m-mosaic > a:nth-child(1) { grid-area: a; }
  .theme-monolith .m-mosaic > a:nth-child(2) { grid-area: b; }
  .theme-monolith .m-mosaic > a:nth-child(3) { grid-area: c; }
  .theme-monolith .m-mosaic > a:nth-child(4) { grid-area: d; }
  .theme-monolith .m-tile { position: relative; overflow: hidden; background: var(--mono-moss); display: block; border-radius: 6px; }
  .theme-monolith .m-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
  .theme-monolith .m-tile:hover img { transform: scale(1.05); }
  .theme-monolith .m-tile-cap { position: absolute; left: 1.1rem; bottom: 1.1rem; color: #fff; font-family: 'Fraunces', Georgia, serif; font-size: 1.2rem; text-shadow: 0 2px 10px rgba(0,0,0,.35); }

  .theme-monolith .m-catalog-row { display: grid; grid-template-columns: 3rem 6rem 1fr auto; align-items: center; gap: 1.5rem; padding: 1.3rem 0; border-bottom: 1px solid rgba(35,48,31,.1); }
  .theme-monolith .m-catalog-index { font-family: 'Fraunces', Georgia, serif; color: var(--mono-rust); font-size: 1rem; }
  .theme-monolith .m-catalog-thumb { width: 6rem; height: 6rem; object-fit: cover; background: var(--mono-moss); border-radius: 4px; }
  .theme-monolith .m-catalog-name { font-family: 'Fraunces', Georgia, serif; font-size: 1.25rem; color: var(--mono-ink); }

  .theme-monolith .product-card { background: var(--mono-paper); border: 1px solid rgba(35,48,31,.12); border-radius: 6px; }
  .theme-monolith .product-card .product-title { font-family: 'Fraunces', Georgia, serif; font-size: 1rem; color: var(--mono-ink); }
  .theme-monolith .product-card .price { color: var(--mono-rust); }
</style>
@endpush

@section('header')
<div class="theme-monolith" style="background:var(--mono-paper);">
  <div class="m-topstrip">
    <span>{{ $s->topbar_text_left ?? 'A small collection, considered carefully' }}</span>
    <span class="hidden md:inline">{{ $s->topbar_text_right ?? 'Complimentary shipping over $150' }}</span>
  </div>
  <div class="m-header">
    <button id="mo-menuBtn" class="md:hidden m-header-menu m-label" aria-label="Open menu" style="border:1px solid var(--mono-ink); padding:.35rem .55rem; color:var(--mono-ink);">MENU</button>
    <a href="{{ route('store.index') }}" class="m-word">{{ $s->store_name ?? 'Monolith' }}</a>
    <p class="m-tagline">Object Studies in Gold &amp; Stone</p>
    <div class="m-header-icons">
      <a href="{{ route('account') }}" aria-label="Account" class="hover:opacity-60 transition"><svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
      <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:opacity-60 transition">
        <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:var(--mono-rust); color:#fff;">0</span>
      </a>
    </div>
    <nav class="hidden md:flex m-nav m-label" style="color:var(--mono-ink);">
      <a href="{{ route('store.shop') }}" class="hover:opacity-60 transition">Index</a>
      @foreach(($categories ?? collect())->take(5) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:opacity-60 transition">{{ $cat->name }}</a>
      @endforeach
    </nav>
  </div>
  <div id="mo-mobileNav" class="md:hidden hidden flex-col m-label" style="border-bottom:1px solid rgba(35,48,31,.1); color:var(--mono-ink);">
    <a href="{{ route('store.shop') }}" class="px-6 py-3" style="border-top:1px solid rgba(35,48,31,.08);">Index</a>
    @foreach(($categories ?? collect())->take(8) as $cat)
      <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="px-6 py-3" style="border-top:1px solid rgba(35,48,31,.08);">{{ $cat->name }}</a>
    @endforeach
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('mo-menuBtn'), n = document.getElementById('mo-mobileNav');
    if (b && n) { b.addEventListener('click', function () { n.classList.toggle('hidden'); n.classList.toggle('flex'); }); }
  });
</script>
@endsection

@section('footer')
<footer class="theme-monolith" style="background:var(--mono-ink); color:rgba(246,241,231,.7);">
  <div class="max-w-7xl mx-auto px-8 py-16">
    <p class="m-serif" style="font-size:clamp(2.2rem,5vw,4rem); color:var(--mono-paper); line-height:1;">{{ $s->store_name ?? 'Monolith' }}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8" style="border-top:1px solid rgba(246,241,231,.12);">
      <div>
        <p class="m-label mb-3" style="color:#D7B08E;">Visit</p>
        <p class="text-sm" style="opacity:.75;">{{ $s->contact_address ?? '123 Studio Row' }}</p>
      </div>
      <div>
        <p class="m-label mb-3" style="color:#D7B08E;">Contact</p>
        <p class="text-sm" style="opacity:.75;">{{ $s->contact_email ?? 'hello@monolith.test' }}</p>
      </div>
      <div>
        <p class="m-label mb-3" style="color:#D7B08E;">Account</p>
        <a href="{{ route('store.login.show') }}" class="text-sm block hover:opacity-100 transition" style="opacity:.75;">Sign In</a>
      </div>
      <div>
        <p class="m-label mb-3" style="color:#D7B08E;">Notify Me</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="Email" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none" style="background:rgba(246,241,231,.06); border:1px solid rgba(246,241,231,.2); color:var(--mono-paper); border-radius:3px;" />
          <button type="submit" class="m-btn m-btn-solid">→</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-10" style="opacity:.4;">© {{ date('Y') }} {{ $s->store_name ?? 'Monolith' }}</p>
  </div>
</footer>
@endsection
