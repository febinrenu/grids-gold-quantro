@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* ============ ATLAS — fixed persistent sidebar nav instead of a scrolling
     top header (a genuinely different navigation paradigm from a normal
     storefront). Warm stone + charcoal + terracotta, architectural feel.
     Self-contained CSS, no external runtime CDN. ============ */
  .theme-atlas {
    --color-bg-base: 237 232 224;
    --color-bg-surface: 246 243 237;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 225 218 205;
    --color-border-subtle: 213 205 189;
    --color-border-strong: 180 170 150;
    --color-fg-primary: 38 36 31;
    --color-fg-secondary: 84 78 68;
    --color-fg-muted: 130 122 108;
    --color-accent-400: 191 108 55;
    --color-accent-500: 181 101 29;
    --color-accent-600: 143 79 22;
    color-scheme: light;
    font-family: 'Sora', system-ui, sans-serif;
  }
  .theme-atlas .a-word { font-weight: 700; font-size: 1.05rem; letter-spacing: -.01em; }
  .theme-atlas .a-label { text-transform: uppercase; letter-spacing: .14em; font-size: .68rem; color: #82786c; }

  .theme-atlas .a-sidebar {
    position: fixed; top: 0; left: 0; bottom: 0; width: 280px; z-index: 30;
    background: #262421; color: #EDE8E0; display: flex; flex-direction: column;
    padding: 2rem 1.75rem; border-right: 1px solid rgba(237,232,224,.08);
  }
  .theme-atlas .a-nav-link { display: block; padding: .55rem 0; font-size: .92rem; color: #cfc9bd; border-bottom: 1px solid rgba(237,232,224,.06); }
  .theme-atlas .a-nav-link:hover { color: #EDE8E0; }
  .theme-atlas.a-offset { margin-left: 0; }
  @media (min-width: 768px) { .theme-atlas.a-offset { margin-left: 280px; } }

  .theme-atlas .a-mobilebar { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; background: #262421; color: #EDE8E0; }
  @media (min-width: 768px) { .theme-atlas .a-mobilebar { display: none; } }
  @media (max-width: 767px) { .theme-atlas .a-sidebar { display: none; } }

  .theme-atlas .a-feature-row { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
  @media (min-width: 768px) { .theme-atlas .a-feature-row { grid-template-columns: 1.1fr .9fr; align-items: center; } }

  .theme-atlas .a-btn { display: inline-flex; align-items: center; gap: .5rem; background: #262421; color: #EDE8E0; padding: .8rem 1.6rem; border-radius: 2px; font-size: .85rem; font-weight: 600; transition: opacity .15s; }
  .theme-atlas .a-btn:hover { opacity: .82; }
  .theme-atlas .a-btn-outline { background: transparent; color: #262421; border: 1.5px solid #262421; }

  .theme-atlas .product-card { background: #F6F3ED; border-color: #DDD5C4; border-radius: 4px; }
  .theme-atlas .product-card .product-title { color: #262421; }
  .theme-atlas .product-card .price { color: #B5651D; }
</style>
@endpush

@section('header')
<div class="theme-atlas">
  <div class="a-mobilebar">
    <button id="at-menuBtn" aria-label="Open menu" class="a-label" style="color:#EDE8E0; border:1px solid rgba(237,232,224,.3); padding:.35rem .6rem;">MENU</button>
    <a href="{{ route('store.index') }}" class="a-word">{{ $s->store_name ?? 'Atlas' }}</a>
    <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative" style="color:#EDE8E0;">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
      <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#B5651D; color:#fff;">0</span>
    </a>
  </div>
  <div id="at-mobileNav" class="hidden md:hidden flex-col" style="background:#302D28;">
    <a href="{{ route('store.shop') }}" class="a-nav-link px-5">Shop All</a>
    @foreach(($categories ?? collect())->take(8) as $cat)
      <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="a-nav-link px-5">{{ $cat->name }}</a>
    @endforeach
  </div>

  <aside class="a-sidebar">
    <a href="{{ route('store.index') }}" class="a-word mb-10" style="color:#EDE8E0; font-size:1.3rem;">{{ $s->store_name ?? 'Atlas' }}</a>
    <nav class="flex-1">
      <a href="{{ route('store.shop') }}" class="a-nav-link">Shop All</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="a-nav-link">{{ $cat->name }}</a>
      @endforeach
    </nav>
    <div class="flex items-center gap-5 pt-6" style="border-top:1px solid rgba(237,232,224,.08);">
      <a href="{{ route('account') }}" aria-label="Account" style="color:#cfc9bd;"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
      <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative" style="color:#cfc9bd;">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#B5651D; color:#fff;">0</span>
      </a>
      <span class="a-label">{{ $s->currency_code ?? 'USD' }}</span>
    </div>
  </aside>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('at-menuBtn'), n = document.getElementById('at-mobileNav');
    if (b && n) { b.addEventListener('click', function () { n.classList.toggle('hidden'); n.classList.toggle('flex'); }); }
  });
</script>
@endsection

@section('footer')
<footer class="theme-atlas a-offset" style="background:#262421; color:#cfc9bd; padding: 3rem 2.5rem 2rem;">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8" style="border-bottom:1px solid rgba(237,232,224,.08);">
    <div class="col-span-2">
      <p class="a-word" style="color:#EDE8E0; font-size:1.2rem;">{{ $s->store_name ?? 'Atlas' }}</p>
      <p class="text-sm mt-2 max-w-xs" style="opacity:.65;">{{ $s->footer_text ?? 'Considered jewelry, built to last.' }}</p>
    </div>
    <div>
      <p class="a-label mb-3">Support</p>
      <a href="{{ route('store.contact') }}" class="text-sm block mb-1.5" style="opacity:.75;">Contact Us</a>
      <a href="{{ route('account.orders') }}" class="text-sm block mb-1.5" style="opacity:.75;">Track Order</a>
    </div>
    <div>
      <p class="a-label mb-3">Newsletter</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
        @csrf
        <input type="email" name="email" required placeholder="Email" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none" style="background:rgba(237,232,224,.06); border:1px solid rgba(237,232,224,.15); color:#EDE8E0; border-radius:2px;" />
        <button type="submit" class="a-btn" style="background:#B5651D;">→</button>
      </form>
    </div>
  </div>
  <p class="text-xs mt-6" style="opacity:.4;">© {{ date('Y') }} {{ $s->store_name ?? 'Atlas' }}</p>
</footer>
@endsection
