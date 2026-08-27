@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital@0;1&family=Jost:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  /* ============ LEDGER — printed auction-catalog aesthetic. Cream paper,
     deep ink navy, single gold rule accent. Classic serif headlines, numbered
     "N°" chapter headers, price-list with dotted leaders instead of cards.
     Self-contained CSS, no external runtime CDN. ============ */
  .theme-ledger {
    --color-bg-base: 250 247 240;
    --color-bg-surface: 255 253 249;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 240 234 220;
    --color-border-subtle: 210 200 178;
    --color-border-strong: 170 158 130;
    --color-fg-primary: 26 30 43;
    --color-fg-secondary: 70 76 92;
    --color-fg-muted: 120 114 98;
    --color-accent-400: 178 140 60;
    --color-accent-500: 158 122 42;
    --color-accent-600: 126 96 30;
    color-scheme: light;
    font-family: 'Jost', system-ui, sans-serif;
  }
  .theme-ledger .l-serif { font-family: 'Libre Caslon Text', Georgia, 'Times New Roman', serif; }
  .theme-ledger .l-label { text-transform: uppercase; letter-spacing: .18em; font-size: .7rem; color: #7c7462; }
  .theme-ledger .l-rule { border-top: 1px solid #C9B98A; }

  .theme-ledger .l-topbar { display: flex; align-items: center; justify-content: space-between; padding: 1.6rem 2rem; border-bottom: 2px solid #1A1E2B; }
  .theme-ledger .l-word { font-family: 'Libre Caslon Text', Georgia, serif; font-size: 1.5rem; letter-spacing: .01em; color: #1A1E2B; }

  .theme-ledger .l-masthead { display: grid; grid-template-columns: 1fr; gap: 2rem; padding: 3.5rem 2rem 2.5rem; max-width: 72rem; margin: 0 auto; }
  @media (min-width: 900px) { .theme-ledger .l-masthead { grid-template-columns: 1.15fr .85fr; align-items: end; } }
  .theme-ledger .l-mast-title { font-family: 'Libre Caslon Text', Georgia, serif; font-style: italic; font-size: clamp(2.4rem, 6vw, 4.2rem); line-height: 1.05; color: #1A1E2B; }

  /* Formal price-list plate — dotted leader between name and price */
  .theme-ledger .l-plate { display: flex; align-items: baseline; gap: .6rem; padding: 1.15rem 0; border-bottom: 1px solid #E4DCC5; }
  .theme-ledger .l-plate-no { font-family: 'Libre Caslon Text', Georgia, serif; font-style: italic; color: #9E7A2A; width: 2.2rem; flex-shrink: 0; }
  .theme-ledger .l-plate-name { font-family: 'Libre Caslon Text', Georgia, serif; font-size: 1.15rem; color: #1A1E2B; white-space: nowrap; }
  .theme-ledger .l-plate-leader { flex: 1; border-bottom: 1px dotted #B7AD90; height: 1px; margin-bottom: .35rem; }
  .theme-ledger .l-plate-price { font-family: 'Libre Caslon Text', Georgia, serif; color: #1A1E2B; white-space: nowrap; }

  .theme-ledger .l-btn { display: inline-flex; align-items: center; gap: .5rem; background: #1A1E2B; color: #FAF7F0; padding: .8rem 1.7rem; font-size: .8rem; letter-spacing: .04em; }
  .theme-ledger .l-btn:hover { background: #2B3348; }
  .theme-ledger .l-btn-outline { background: transparent; color: #1A1E2B; border: 1px solid #1A1E2B; }

  .theme-ledger .product-card { background: #fff; border-color: #E4DCC5; border-radius: 2px; }
  .theme-ledger .product-card .product-title { font-family: 'Libre Caslon Text', Georgia, serif; color: #1A1E2B; }
  .theme-ledger .product-card .price { color: #9E7A2A; }
</style>
@endpush

@section('header')
<div class="theme-ledger" style="background:#FAF7F0;">
  <div class="hidden md:block l-label" style="background:#1A1E2B; color:#C9B98A; text-align:center; padding:.5rem;">
    {{ $s->topbar_text_left ?? __('messages.Ledger_TopbarCurated') }}
  </div>
  <div class="l-topbar">
    <button id="lg-menuBtn" class="md:hidden l-label" style="border:1px solid #1A1E2B; padding:.4rem .6rem;" aria-label="{{ __('messages.Ledger_OpenMenu') }}">{{ __('messages.Ledger_Menu') }}</button>
    <a href="{{ route('store.index') }}" class="l-word">{{ $s->store_name ?? __('messages.Ledger_StoreName') }}</a>
    <nav class="hidden md:flex items-center gap-7 l-label">
      <a href="{{ route('store.shop') }}" class="hover:opacity-60 transition">{{ __('messages.Ledger_FullCatalogue') }}</a>
      @foreach(($categories ?? collect())->take(4) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:opacity-60 transition">{{ $cat->name }}</a>
      @endforeach
    </nav>
    <div class="flex items-center gap-4" style="color:#1A1E2B;">
      <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
      <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:#9E7A2A; color:#fff;">0</span>
      </a>
    </div>
  </div>
  <div id="lg-mobileNav" class="md:hidden hidden flex-col l-label" style="border-bottom:1px solid #E4DCC5;">
    <a href="{{ route('store.shop') }}" class="px-5 py-3" style="border-top:1px solid #E4DCC5;">{{ __('messages.Ledger_FullCatalogue') }}</a>
    @foreach(($categories ?? collect())->take(8) as $cat)
      <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="px-5 py-3" style="border-top:1px solid #E4DCC5;">{{ $cat->name }}</a>
    @endforeach
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('lg-menuBtn'), n = document.getElementById('lg-mobileNav');
    if (b && n) { b.addEventListener('click', function () { n.classList.toggle('hidden'); n.classList.toggle('flex'); }); }
  });
</script>
@endsection

@section('footer')
<footer class="theme-ledger" style="background:#1A1E2B; color:#C9B98A; padding: 3rem 2rem 2rem;">
  <div class="max-w-6xl mx-auto">
    <p class="l-serif" style="font-style:italic; font-size:2rem; color:#FAF7F0;">{{ $s->store_name ?? __('messages.Ledger_StoreName') }}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 pt-6" style="border-top:1px solid rgba(201,185,138,.2);">
      <div>
        <p class="l-label mb-3" style="color:#C9B98A;">{{ __('messages.Ledger_Enquiries') }}</p>
        <p class="text-sm" style="color:#a9a496;">{{ $s->contact_email ?? '' }}</p>
      </div>
      <div>
        <p class="l-label mb-3" style="color:#C9B98A;">{{ __('messages.Ledger_ClientCare') }}</p>
        <a href="{{ route('store.contact') }}" class="text-sm block mb-1" style="color:#a9a496;">{{ __('messages.ContactUs') }}</a>
        <a href="{{ route('account.orders') }}" class="text-sm block" style="color:#a9a496;">{{ __('messages.Ledger_TrackOrder') }}</a>
      </div>
      <div>
        <p class="l-label mb-3" style="color:#C9B98A;">{{ __('messages.Account') }}</p>
        <a href="{{ route('store.login.show') }}" class="text-sm block" style="color:#a9a496;">{{ __('messages.Ledger_SignIn') }}</a>
      </div>
      <div>
        <p class="l-label mb-3" style="color:#C9B98A;">{{ __('messages.Ledger_CatalogueAlerts') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-3 py-2 text-xs outline-none" style="background:rgba(250,247,240,.05); border:1px solid rgba(201,185,138,.3); color:#FAF7F0;" />
          <button type="submit" class="l-btn" style="background:#9E7A2A;">→</button>
        </form>
      </div>
    </div>
    <p class="text-xs mt-8" style="opacity:.5;">© {{ date('Y') }} {{ $s->store_name ?? __('messages.Ledger_StoreName') }}</p>
  </div>
</footer>
@endsection

