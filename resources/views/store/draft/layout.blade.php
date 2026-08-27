@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* ============ DRAFT THEME SYSTEM ============ */
  .theme-draft {
    --color-bg-base: 232 237 242;
    --color-bg-surface: 241 244 247;
    --color-bg-elevated: 220 225 230;
    --color-fg-primary: 17 17 17;
    --color-fg-secondary: 60 60 60;
    --color-fg-muted: 110 110 110;
    --color-accent-400: 0 82 255;
    --color-accent-500: 0 66 204;
    --color-accent-600: 0 51 153;
    color-scheme: light;

    --draft-slate: #E8EDF2;
    --draft-white: #F1F4F7;
    --draft-ink: #111111;
    --draft-blue: #0052FF;
    --draft-border: #D5D5D5;
    --draft-grey: #6E6E6E;
    
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    background: var(--draft-slate);
    color: var(--draft-ink);
  }

  .theme-draft .font-draft-mono {
    font-family: 'Space Mono', monospace;
  }

  .theme-draft .font-draft-sans {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  /* Exposed technical gridlines */
  .theme-draft .draft-grid-cell {
    border-right: 1px solid var(--draft-border);
    border-bottom: 1px solid var(--draft-border);
  }

  .theme-draft .draft-border-box {
    border: 1px solid var(--draft-ink);
  }

  .theme-draft .draft-line {
    border-top: 1px solid var(--draft-border);
    margin: 1.5rem 0;
  }

  .theme-draft .draft-header {
    border-bottom: 1px solid var(--draft-ink);
    background: var(--draft-white);
  }

  .theme-draft .draft-nav-link {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--draft-ink);
    transition: all 0.2s ease;
    padding: 0.5rem 0.85rem;
    border-right: 1px solid var(--draft-border);
    height: 100%;
    display: inline-flex;
    align-items: center;
  }

  .theme-draft .draft-nav-link:hover {
    background: var(--draft-slate);
    color: var(--draft-blue);
  }

  .theme-draft .draft-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--draft-ink);
    color: var(--draft-ink);
    background: transparent;
    padding: 0.75rem 1.75rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }

  .theme-draft .draft-btn:hover {
    background: var(--draft-ink);
    color: var(--draft-white);
  }

  .theme-draft .draft-btn-solid {
    background: var(--draft-blue);
    border-color: var(--draft-blue);
    color: var(--draft-white);
  }

  .theme-draft .draft-btn-solid:hover {
    background: var(--draft-ink);
    border-color: var(--draft-ink);
    color: var(--draft-white);
  }

  .theme-draft .draft-spec-card {
    background: var(--draft-white);
    border: 1px solid var(--draft-border);
    padding: 0;
    transition: border-color 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .theme-draft .draft-spec-card:hover {
    border-color: var(--draft-ink);
  }

  .theme-draft .draft-spec-header {
    border-bottom: 1px solid var(--draft-border);
    padding: 0.5rem 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FAFAFA;
  }

  .theme-draft .draft-spec-body {
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .theme-draft .draft-spec-table {
    width: 100%;
    font-size: 0.68rem;
    margin: 0.5rem 0;
  }

  .theme-draft .draft-spec-table tr {
    border-bottom: 1px dashed #E5E5E5;
  }

  .theme-draft .draft-spec-table tr:last-child {
    border-bottom: none;
  }

  .theme-draft .draft-spec-table td {
    padding: 0.3rem 0;
  }

  .theme-draft .draft-spec-table td:first-child {
    font-weight: 700;
    color: var(--draft-grey);
  }

  .theme-draft .draft-badge {
    background: var(--draft-blue);
    color: var(--draft-white);
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 0.15rem 0.45rem;
  }

  .theme-draft .draft-top-bar {
    background: var(--draft-ink);
    color: var(--draft-white);
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    padding: 0.45rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--draft-ink);
  }
</style>
@endpush

@section('header')
<div class="theme-draft">
  <div class="draft-top-bar">
    <div class="hidden sm:block">SYS_STATUS: //ONLINE //PORT_8000 //LOC_DEV</div>
    <div class="mx-auto sm:mx-0">✦ {{ 'Draft_TopBarTagline' }} ✦</div>
    <div class="hidden md:block">VER: //{{ date('Y') }}.9_THEMES</div>
  </div>
  <header class="draft-header px-4 md:px-8">
    <div class="max-w-7xl mx-auto flex items-stretch justify-between" style="min-height: 56px;">
      <div class="flex items-center">
        <a href="{{ route('store.index') }}" class="font-draft-mono text-sm tracking-tight text-draft-ink font-bold hover:text-draft-blue transition py-2" style="border-right: 1px solid var(--draft-border); padding-right:1.5rem; margin-right:1.5rem;">
          //{{ strtoupper($s->store_name ?? 'Draft Atelier') }}
        </a>
        <nav class="hidden lg:flex items-center h-full">
          <a href="{{ route('store.shop') }}" class="draft-nav-link">{{ 'Draft_IndexLots' }}</a>
          @foreach(($categories ?? collect())->take(4) as $cat)
            <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="draft-nav-link">CAT_{{ strtoupper(Str::slug($cat->name, '_')) }}</a>
          @endforeach
        </nav>
      </div>

      <div class="flex items-center gap-6 text-draft-ink">
        <a href="{{ route('account') }}" aria-label="{{ 'Account' }}" class="hover:text-draft-blue transition flex items-center gap-1 text-[11px] font-draft-mono">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
          <span class="hidden sm:inline">{{ 'Draft_AccSession' }}</span>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ 'Cart' }}" class="relative hover:text-draft-blue transition flex items-center gap-1 text-[11px] font-draft-mono py-4" style="border-left: 1px solid var(--draft-border); padding-left:1.5rem;">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="hidden sm:inline">{{ 'Draft_CartQty' }}</span>
          <span class="cart-count px-1.5 py-0.5 rounded text-[9px] font-bold text-white" style="background:var(--draft-blue);">0</span>
        </a>
      </div>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-draft py-16 px-4 md:px-8 border-t border-draft-ink" style="background:var(--draft-white);">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
      <div class="md:col-span-4">
        <h2 class="font-draft-mono text-base font-bold text-draft-ink mb-3">//ATELIER_{{ strtoupper($s->store_name ?? 'Draft') }}</h2>
        <p class="font-draft-sans text-xs text-draft-grey leading-relaxed max-w-sm mb-4">{{ 'Draft_FooterTagline' }}</p>
        <div class="text-[10px] font-draft-mono text-draft-grey">LOC: {{ $s->contact_address ?? 'Precision Square, Studio 12' }}</div>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-draft-mono text-xs font-bold text-draft-ink uppercase mb-3">{{ 'Draft_AnnData' }}</h4>
        <div class="space-y-2 text-xs font-draft-mono">
          <p>{{ 'Draft_TelLabel' }} {{ $s->contact_phone ?? '+44 20 7946 0999' }}</p>
          <p>{{ 'Draft_MailLabel' }} {{ $s->contact_email ?? 'atelier@draftjewelers.local' }}</p>
        </div>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-draft-mono text-xs font-bold text-draft-ink uppercase mb-3">{{ 'Draft_IndexRoutes' }}</h4>
        <div class="space-y-2 text-xs font-draft-mono">
          <a href="{{ route('store.shop') }}" class="block hover:text-draft-blue transition">{{ 'Draft_LotsIndex' }}</a>
          <a href="{{ route('store.contact') }}" class="block hover:text-draft-blue transition">{{ 'Draft_ConsultSession' }}</a>
        </div>
      </div>

      <div class="md:col-span-4">
        <h4 class="font-draft-mono text-xs font-bold text-draft-ink uppercase mb-3">{{ 'Draft_SubscribeStream' }}</h4>
        <p class="text-xs text-draft-grey mb-3 font-draft-sans">{{ 'Draft_SubscribeDesc' }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-1 border border-draft-ink p-1 bg-draft-slate">
          @csrf
          <input type="email" name="email" required placeholder="email@domain.com" class="flex-1 min-w-0 px-3 py-1.5 text-xs outline-none bg-transparent text-draft-ink font-draft-mono" />
          <button type="submit" class="px-4 py-1.5 text-xs bg-draft-ink text-white font-draft-mono font-bold hover:bg-draft-blue transition">{{ 'Draft_Send' }}</button>
        </form>
      </div>
    </div>

    <div class="border-t border-draft-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-draft-mono text-draft-grey">
      <div>© {{ date('Y') }} //{{ strtoupper($s->store_name ?? 'Draft') }}_ATELIER</div>
      <div>{{ 'Draft_SecureBadges' }}</div>
    </div>
  </div>
</footer>
@endsection


