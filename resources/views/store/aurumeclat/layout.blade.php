@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  // AurumÉclat has its own fixed dark/gold palette — it never adapts to the
  // shared light/dark toggle, so pin the mode here before paint (overriding
  // whatever the visitor last chose on the default theme) to avoid unstyled
  // text inheriting the wrong contrast color.
  document.documentElement.classList.add('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          brand: {
            black: '#0F0D0A',
            charcoal: '#1B1712',
            gold: '#C9A15B',
            goldDark: '#AD8748',
            cream: '#F3ECDD',
            burgundy: '#3D1A24',
          },
        },
        boxShadow: {
          card: '0 4px 18px -6px rgba(0,0,0,0.35)',
          cardHover: '0 16px 34px -10px rgba(0,0,0,0.5)',
        },
      },
    },
  };
</script>
<style>
  /* Fixed dark/gold palette, expressed as real CSS custom-property overrides
     (not just a JS dark-mode toggle) so every shared storefront component —
     .price, .chip, .stock-dot, .btn, .card — resolves the correct color
     regardless of the visitor's light/dark preference on other themes. */
  .theme-aurumeclat {
    --color-bg-base: 15 13 10;
    --color-bg-surface: 27 23 18;
    --color-bg-elevated: 34 28 21;
    --color-bg-muted: 27 23 18;
    --color-border-subtle: 58 47 34;
    --color-border-strong: 79 65 48;
    --color-fg-primary: 237 230 214;
    --color-fg-secondary: 201 184 150;
    --color-fg-muted: 160 148 128;
    --color-accent-400: 224 181 99;
    --color-accent-500: 201 161 91;
    --color-accent-600: 173 135 72;
    color-scheme: dark;
    font-family: 'Inter', sans-serif;
  }
  .theme-aurumeclat .font-logo { font-family: 'Playfair Display', serif; }
  .theme-aurumeclat .eyebrow { letter-spacing: .16em; }
  .theme-aurumeclat .nav-spaced { letter-spacing: .08em; }
  .theme-aurumeclat .product-card { background: #1B1712; border-color: rgba(255,255,255,.08); }
  .theme-aurumeclat .product-card .product-title { color: #EDE6D6; }
  .theme-aurumeclat .card { background: #1B1712; color: #EDE6D6; border-color: rgba(255,255,255,.08); }
</style>
@endpush

@section('header')
<div class="theme-aurumeclat">
  <div class="hidden md:block bg-black text-white/70 text-[11.5px] border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
      <span>{{ __('messages.Aurumeclat_TopbarAppointments') }} <span class="text-white/40">— {{ __('messages.Aurumeclat_TopbarBookYourTime') }}</span></span>
      <span>{{ __('messages.Aurumeclat_TopbarIgiDiamonds') }} <span class="text-white/40">— {{ __('messages.Aurumeclat_TopbarAuthenticityGuaranteed') }}</span></span>
      <span>{{ __('messages.Aurumeclat_TopbarLifetimePolishing') }} <span class="text-white/40">— {{ __('messages.Aurumeclat_TopbarComplimentaryForever') }}</span></span>
      <span>{{ __('messages.Aurumeclat_TopbarFreeInsuredShipping') }} <span class="text-white/40">— {{ __('messages.Aurumeclat_TopbarOnAllOrders') }}</span></span>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-brand-black/95 backdrop-blur border-b border-white/5">
    <div class="hidden md:flex max-w-7xl mx-auto px-4 py-4 items-center">
      <div class="flex items-center gap-5 text-xs text-white/70 w-1/4">
        <span>{{ $s->currency_code ?? 'USD $' }}</span>
      </div>
      <a href="{{ route('store.index') }}" class="flex-1 flex flex-col items-center leading-none">
        <svg class="w-3 h-3 text-brand-gold mb-1.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>
        <span class="font-logo text-2xl lg:text-3xl tracking-[0.12em] text-white">{{ $s->store_name ?? 'AURUMÉCLAT' }}</span>
        <span class="text-[9px] eyebrow text-white/50 mt-1">{{ __('messages.Aurumeclat_FineJewelry') }}</span>
      </a>
      <div class="flex items-center gap-5 justify-end w-1/4 text-white/80">
        <a href="{{ route('account') }}" aria-label="{{ __('messages.Account') }}" class="hover:text-brand-gold transition"><svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
        <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative hover:text-brand-gold transition">
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-gold text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
        </a>
      </div>
    </div>

    <div class="md:hidden flex items-center gap-3 px-4 py-3.5">
      <button id="ae-menuBtn" class="p-1 -ml-1 text-white" aria-label="{{ __('messages.Aurumeclat_OpenMenu') }}">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex-1 flex flex-col items-center leading-none">
        <span class="font-logo text-base tracking-[0.1em] text-white">{{ $s->store_name ?? 'AURUMÉCLAT' }}</span>
      </a>
      <a href="{{ route('store.cart') }}" aria-label="{{ __('messages.Cart') }}" class="relative p-1 text-white">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-0.5 -right-0.5 bg-brand-gold text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
      </a>
    </div>

    <div id="ae-mobileNav" class="md:hidden hidden flex-col px-4 py-2 text-sm font-medium text-white/85 divide-y divide-white/10 border-t border-white/10">
      <a href="{{ route('store.shop') }}" class="py-2.5">{{ __('messages.Aurumeclat_ShopAll') }}</a>
      @foreach(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>

    <nav class="hidden md:block border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-center gap-7 text-[11.5px] font-medium text-white/75 nav-spaced h-11 flex-wrap">
        <a href="{{ route('store.shop') }}" class="hover:text-brand-gold transition">{{ __('messages.Aurumeclat_ShopAllCaps') }}</a>
        @foreach(($categories ?? collect())->take(8) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-brand-gold transition">{{ Str::upper($cat->name) }}</a>
        @endforeach
      </div>
    </nav>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('ae-menuBtn');
    var mobileNav = document.getElementById('ae-mobileNav');
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
      });
    }
  });
</script>
@endsection

@section('footer')
<footer class="theme-aurumeclat bg-black text-white/60 pt-10 pb-6 border-t border-white/5">
  <div class="max-w-7xl mx-auto px-4">
    <div class="mb-8">
      <span class="font-logo text-xl tracking-[0.1em] text-white">{{ $s->store_name ?? 'AURUMÉCLAT' }}</span>
      <p class="text-xs text-white/40 mt-1">{{ $s->footer_text ?? __('messages.Aurumeclat_FooterTagline') }}</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10 text-sm">
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">{{ __('messages.Aurumeclat_Boutique') }}</h4>
        <ul class="space-y-2 text-white/50">
          <li>{{ $s->contact_address ?? '' }}</li>
          <li>{{ $s->contact_phone ?? '' }}</li>
          <li>{{ $s->contact_email ?? '' }}</li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">{{ __('messages.Aurumeclat_CustomerCare') }}</h4>
        <ul class="space-y-2 text-white/50">
          <li><a href="{{ route('store.contact') }}" class="hover:text-white transition">{{ __('messages.ContactUs') }}</a></li>
          <li><a href="{{ route('account.orders') }}" class="hover:text-white transition">{{ __('messages.Aurumeclat_TrackYourOrder') }}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">{{ __('messages.Aurumeclat_AccountCaps') }}</h4>
        <ul class="space-y-2 text-white/50">
          <li><a href="{{ route('account') }}" class="hover:text-white transition">{{ __('messages.MyAccount') }}</a></li>
          <li><a href="{{ route('store.login.show') }}" class="hover:text-white transition">{{ __('messages.SignIn') }}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm eyebrow">{{ __('messages.Aurumeclat_JoinTheMaison') }}</h4>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Aurumeclat_EnterYourEmail') }}" class="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/15 outline-none text-xs text-white placeholder:text-white/40" />
          <button type="submit" class="w-9 h-9 shrink-0 bg-brand-gold hover:bg-brand-goldDark transition rounded-lg flex items-center justify-center text-black font-bold">→</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-white/35">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'AurumÉclat Fine Jewelry' }}. {{ __('messages.Aurumeclat_AllRightsReserved') }}</p>
    </div>
  </div>
</footer>
@endsection
