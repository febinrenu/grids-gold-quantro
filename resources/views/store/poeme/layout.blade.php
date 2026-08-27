@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>document.documentElement.classList.remove('dark');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<style>
  /* ============ POEME THEME SYSTEM ============ */
  .theme-poeme {
    --color-bg-base: 250 248 245;
    --color-bg-surface: 255 255 255;
    --color-bg-elevated: 245 240 236;
    --color-fg-primary: 51 51 51;
    --color-fg-secondary: 90 90 90;
    --color-fg-muted: 140 140 140;
    --color-accent-400: 224 206 184;
    --color-accent-500: 204 186 164;
    --color-accent-600: 174 156 134;
    color-scheme: light;

    --poeme-parchment: #FAF8F5;
    --poeme-white: #FFFFFF;
    --poeme-charcoal: #333333;
    --poeme-rosewater: #F5EBE6;
    --poeme-champagne: #E0CEB8;
    --poeme-grey: #7D7D7D;
    
    font-family: 'Lato', system-ui, sans-serif;
    background: var(--poeme-parchment);
    color: var(--poeme-charcoal);
  }

  .theme-poeme .font-poeme-serif {
    font-family: 'Cormorant Garamond', Georgia, serif;
  }

  .theme-poeme .font-poeme-sans {
    font-family: 'Lato', sans-serif;
  }

  /* Elegant organic layout spacing */
  .theme-poeme .poeme-line {
    border-top: 1px solid rgba(125, 125, 125, 0.15);
    margin: 1.5rem 0;
  }

  .theme-poeme .poeme-header-floating {
    background: rgba(250, 248, 245, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(224, 206, 184, 0.3);
  }

  .theme-poeme .poeme-nav-link {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--poeme-charcoal);
    transition: color 0.3s ease;
    padding: 0.5rem 0.75rem;
  }

  .theme-poeme .poeme-nav-link:hover {
    color: var(--poeme-grey);
  }

  .theme-poeme .poeme-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--poeme-charcoal);
    color: var(--poeme-charcoal);
    background: transparent;
    padding: 0.8rem 2rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    border-radius: 9999px;
  }

  .theme-poeme .poeme-btn:hover {
    background: var(--poeme-charcoal);
    color: var(--poeme-parchment);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .theme-poeme .poeme-btn-solid {
    background: var(--poeme-rosewater);
    border-color: var(--poeme-rosewater);
    color: var(--poeme-charcoal);
  }

  .theme-poeme .poeme-btn-solid:hover {
    background: var(--poeme-charcoal);
    border-color: var(--poeme-charcoal);
    color: var(--poeme-parchment);
  }

  .theme-poeme .poeme-card {
    background: var(--poeme-white);
    border-radius: 1.5rem;
    padding: 0.6rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid rgba(224, 206, 184, 0.15);
  }

  .theme-poeme .poeme-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  }

  .theme-poeme .poeme-badge {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: var(--poeme-rosewater);
    color: var(--poeme-charcoal);
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 0.72rem;
    padding: 0.2rem 0.55rem;
    border-radius: 9999px;
    z-index: 10;
  }

  .theme-poeme .poeme-top-bar {
    background: var(--poeme-rosewater);
    color: var(--poeme-charcoal);
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 0.8rem;
    text-align: center;
    padding: 0.4rem 1rem;
    border-bottom: 1px solid rgba(224, 206, 184, 0.3);
  }
</style>
@endpush

@section('header')
<div class="theme-poeme">
  <div class="poeme-top-bar">
    {{ __('messages.Poeme_TopBarMessage') }}
  </div>
  <header class="poeme-header-floating sticky top-0 z-50 py-4 px-4 md:px-8">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
      <a href="{{ route('store.index') }}" class="font-poeme-serif italic text-2xl md:text-3xl text-poeme-charcoal font-bold tracking-tight hover:opacity-75 transition">
        {{ $s->store_name ?? 'Poeme Jewelry' }}
      </a>
      
      <nav class="flex flex-wrap items-center justify-center gap-1 md:gap-4 my-2">
        <a href="{{ route('store.shop') }}" class="poeme-nav-link">{{ __('messages.Poeme_TheGallery') }}</a>
        @foreach(($categories ?? collect())->take(4) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="poeme-nav-link">{{ $cat->name }}</a>
        @endforeach
        <a href="{{ route('store.contact') }}" class="poeme-nav-link italic">{{ __('messages.Poeme_PrivateConsultations') }}</a>
      </nav>

      <div class="flex items-center gap-6 text-poeme-charcoal">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hover:opacity-60 transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
        </a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative hover:opacity-60 transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white" style="background:var(--poeme-champagne); color:var(--poeme-charcoal);">0</span>
        </a>
      </div>
    </div>
  </header>
</div>
@endsection

@section('footer')
<footer class="theme-poeme py-16 px-4 md:px-8 border-t border-poeme-champagne" style="background:var(--poeme-rosewater);">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="font-poeme-serif italic text-3xl text-poeme-charcoal mb-2">{{ $s->store_name ?? 'Poeme' }}</h2>
      <p class="font-poeme-serif text-sm italic text-poeme-grey">{{ __('messages.Poeme_FooterTagline') }}</p>
      <div class="poeme-line max-w-xs mx-auto my-6"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm text-poeme-charcoal/80 font-poeme-sans">
      <div>
        <h4 class="font-poeme-serif italic text-base text-poeme-charcoal font-bold mb-4">{{ __('messages.Poeme_OurSalons') }}</h4>
        <p class="leading-relaxed">{{ $s->contact_address ?? '12 Rosewater Lane, Paris' }}</p>
      </div>
      <div>
        <h4 class="font-poeme-serif italic text-base text-poeme-charcoal font-bold mb-4">{{ __('messages.Poeme_ConciergeDesk') }}</h4>
        <p class="mb-2">{{ __('messages.Phone') }}: {{ $s->contact_phone ?? '+33 1 7946 0912' }}</p>
        <p>{{ __('messages.Email') }}: {{ $s->contact_email ?? 'love@poemejewelers.local' }}</p>
      </div>
      <div>
        <h4 class="font-poeme-serif italic text-base text-poeme-charcoal font-bold mb-4">{{ __('messages.Poeme_BespokeOptions') }}</h4>
        <a href="{{ route('store.contact') }}" class="block mb-2 hover:opacity-75 transition">&bull; {{ __('messages.Poeme_VirtualAppointments') }}</a>
        <a href="{{ route('store.contact') }}" class="block hover:opacity-75 transition">&bull; {{ __('messages.Poeme_CustomEngravings') }}</a>
      </div>
      <div>
        <h4 class="font-poeme-serif italic text-base text-poeme-charcoal font-bold mb-4">{{ __('messages.Poeme_RomanticLetters') }}</h4>
        <p class="text-xs mb-3 text-poeme-grey leading-relaxed">{{ __('messages.Poeme_NewsletterBlurb') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-1 border border-poeme-champagne p-1 bg-poeme-parchment rounded-full">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Poeme_EnterEmail') }}" class="flex-1 min-w-0 px-3 py-1 text-xs outline-none bg-transparent text-poeme-charcoal rounded-full" />
          <button type="submit" class="px-4 py-1 text-xs bg-poeme-champagne text-poeme-charcoal font-poeme-serif font-bold rounded-full hover:bg-poeme-charcoal hover:text-white transition">{{ __('messages.Poeme_Send') }}</button>
        </form>
      </div>
    </div>

    <div class="border-t border-poeme-champagne/40 pt-8 text-center text-xs text-poeme-grey font-poeme-sans">
      <p>&copy; {{ date('Y') }} {{ $s->store_name ?? 'Poeme' }} {{ __('messages.Poeme_FooterCopyrightSuffix') }}</p>
    </div>
  </div>
</footer>
@endsection

