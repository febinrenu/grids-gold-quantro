@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.add('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* ============ DECO THEME SYSTEM ============ */
  .theme-deco {
    --color-bg-base: 6 26 19;
    --color-bg-surface: 10 36 27;
    --color-bg-elevated: 14 46 35;
    --color-fg-primary: 250 248 245;
    --color-fg-secondary: 220 215 205;
    --color-fg-muted: 175 168 155;
    --color-accent-400: 212 175 55;
    --color-accent-500: 182 145 25;
    --color-accent-600: 152 115 5;
    color-scheme: dark;

    --deco-emerald: #061A13;
    --deco-emerald-light: #0A2E22;
    --deco-cream: #FAF8F5;
    --deco-gold: #D4AF37;
    --deco-gold-dark: #B59424;
    font-family: 'Montserrat', system-ui, sans-serif;
    background: var(--deco-emerald);
    color: var(--deco-cream);
  }

  .theme-deco .font-deco-logo {
    font-family: 'Cinzel', Georgia, serif;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .theme-deco .font-deco-title {
    font-family: 'Cinzel', Georgia, serif;
    letter-spacing: 0.08em;
  }

  /* Decorative borders and grids */
  .theme-deco .deco-frame {
    border: 1px solid var(--deco-gold);
    outline: 3px double var(--deco-gold);
    outline-offset: -8px;
    padding: 1.5rem;
    position: relative;
  }

  .theme-deco .deco-line-double {
    border-top: 4px double var(--deco-gold);
    margin: 1.5rem 0;
  }

  .theme-deco .deco-header {
    border-bottom: 3px double var(--deco-gold);
    background: var(--deco-emerald);
  }

  .theme-deco .deco-nav-link {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--deco-cream);
    transition: color 0.3s ease;
    padding: 0.5rem 1rem;
  }

  .theme-deco .deco-nav-link:hover {
    color: var(--deco-gold);
  }

  .theme-deco .deco-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--deco-gold);
    outline: 2px double var(--deco-gold);
    outline-offset: -5px;
    color: var(--deco-cream);
    background: transparent;
    padding: 0.9rem 2.2rem;
    font-family: 'Cinzel', serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  .theme-deco .deco-btn:hover {
    background: var(--deco-gold);
    color: var(--deco-emerald);
  }

  .theme-deco .deco-btn-solid {
    background: var(--deco-gold);
    color: var(--deco-emerald);
  }

  .theme-deco .deco-btn-solid:hover {
    background: var(--deco-cream);
    border-color: var(--deco-cream);
    outline-color: var(--deco-cream);
    color: var(--deco-emerald);
  }

  .theme-deco .deco-card {
    background: var(--deco-emerald-light);
    border: 1px solid var(--deco-gold);
    position: relative;
    padding: 0.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .theme-deco .deco-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  .theme-deco .deco-card-corner {
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1px solid var(--deco-gold);
    background: var(--deco-emerald);
  }

  .theme-deco .deco-card-corner-tl { top: -3px; left: -3px; }
  .theme-deco .deco-card-corner-tr { top: -3px; right: -3px; }
  .theme-deco .deco-card-corner-bl { bottom: -3px; left: -3px; }
  .theme-deco .deco-card-corner-br { bottom: -3px; right: -3px; }

  .theme-deco .deco-card-inner {
    border: 1px solid rgba(212, 175, 55, 0.25);
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .theme-deco .deco-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--deco-gold);
    color: var(--deco-emerald);
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 0.25rem 0.6rem;
    letter-spacing: 0.1em;
    z-index: 10;
  }

  .theme-deco .deco-top-bar {
    background: #04120D;
    color: var(--deco-gold);
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-align: center;
    padding: 0.45rem 1rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  }
</style>
@endpush

@section('header')
<div class="theme-deco">
  <div class="deco-top-bar uppercase font-semibold">
    ✦ {{ __('messages.Deco_TopBarMessage') }} ✦
  </div>
  <header class="deco-header py-5 px-4 md:px-8">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="{{ route('store.index') }}" class="font-deco-logo text-2xl md:text-3xl text-deco-cream font-bold text-center tracking-widest hover:text-deco-gold transition">
        {{ $s->store_name ?? __('messages.Deco_DefaultStoreName') }}
      </a>

      <nav class="flex flex-wrap items-center justify-center gap-2 md:gap-4 my-2">
        <a href="{{ route('store.shop') }}" class="deco-nav-link">{{ __('messages.Deco_TheCatalog') }}</a>
        @foreach(($categories ?? collect())->take(4) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="deco-nav-link">{{ $cat->name }}</a>
        @endforeach
        <a href="{{ route('store.contact') }}" class="deco-nav-link">{{ __('messages.Deco_PrivateConsult') }}</a>
      </nav>

      <div class="flex items-center gap-6 text-deco-cream">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hover:text-deco-gold transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative hover:text-deco-gold transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-2 -right-2 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style="background:var(--deco-gold); color:var(--deco-emerald);">0</span>
        </a>
      </div>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-deco py-16 px-4 md:px-8 border-t-4 double border-deco-gold" style="background:#04120D;">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="font-deco-logo text-3xl text-deco-gold mb-3">{{ $s->store_name ?? __('messages.Deco_DefaultStoreName') }}</h2>
      <p class="font-deco-title text-xs tracking-widest text-deco-cream/70 uppercase">{{ __('messages.Deco_FooterTagline') }}</p>
      <div class="deco-line-double max-w-xl mx-auto my-6"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm text-deco-cream/80">
      <div>
        <h4 class="font-deco-title text-deco-gold text-xs font-bold uppercase mb-4 tracking-wider">{{ __('messages.Deco_BespokeSalons') }}</h4>
        <p class="leading-relaxed">{{ $s->contact_address ?? __('messages.Deco_DefaultAddress') }}</p>
      </div>
      <div>
        <h4 class="font-deco-title text-deco-gold text-xs font-bold uppercase mb-4 tracking-wider">{{ __('messages.Deco_PrivateConcierge') }}</h4>
        <p class="mb-2">{{ __('messages.Phone') }}: {{ $s->contact_phone ?? '+44 20 7946 0958' }}</p>
        <p>{{ __('messages.Email') }}: {{ $s->contact_email ?? 'concierge@decojewelers.local' }}</p>
      </div>
      <div>
        <h4 class="font-deco-title text-deco-gold text-xs font-bold uppercase mb-4 tracking-wider">{{ __('messages.Deco_ClientServices') }}</h4>
        <a href="{{ route('account') }}" class="block mb-2 hover:text-deco-gold transition">&bull; {{ __('messages.Deco_PrivateAccountLink') }}</a>
        <a href="{{ route('store.contact') }}" class="block hover:text-deco-gold transition">&bull; {{ __('messages.Deco_ScheduleFitting') }}</a>
      </div>
      <div>
        <h4 class="font-deco-title text-deco-gold text-xs font-bold uppercase mb-4 tracking-wider">{{ __('messages.Deco_CatalogueUpdates') }}</h4>
        <p class="text-xs mb-3 text-deco-cream/60">{{ __('messages.Deco_NewsletterBlurb') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-1 border border-deco-gold p-1 bg-deco-emerald">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Deco_EnterEmailPlaceholder') }}" class="flex-1 min-w-0 px-3 py-1.5 text-xs outline-none bg-transparent text-deco-cream" />
          <button type="submit" class="px-4 py-1.5 text-xs bg-deco-gold text-deco-emerald font-bold tracking-widest uppercase hover:bg-deco-cream transition">{{ __('messages.Subscribe') }}</button>
        </form>
      </div>
    </div>

    <div class="border-t border-deco-gold/30 pt-8 text-center text-xs text-deco-cream/40">
      <p>&copy; {{ date('Y') }} {{ $s->store_name ?? 'Deco' }} {{ __('messages.Deco_CopyrightTagline') }}</p>
    </div>
  </div>
</footer>
@endsection

