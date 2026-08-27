@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  // NexGold Jewelers has its own fixed light/navy palette — it never adapts
  // to the shared light/dark toggle, so pin the mode here before paint
  // (overriding whatever the visitor last chose on the default theme) to
  // avoid unstyled text inheriting the wrong contrast color.
  document.documentElement.classList.remove('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">

<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Archivo', 'sans-serif'],
          serif: ['"Instrument Serif"', 'serif'],
        },
        colors: {
          nx: {
            navy: '#0B1F3F',
            navy2: '#123A78',
            ink: '#12151A',
            gold: '#C89B3C',
            goldDark: '#A87F2E',
            sand: '#F4F2ED',
            card: '#FDFCFA',
            border: '#E7E3DA',
            blue: '#8B5E34',
          },
        },
        borderRadius: {
          xl2: '24px',
        },
      },
    },
  };
</script>
<style>
  /* Fixed light/navy palette, expressed as real CSS custom-property
     overrides (not just a JS dark-mode toggle) so every shared storefront
     component — .price, .chip, .stock-dot, .btn, .card — resolves the
     correct color regardless of the visitor's light/dark preference on
     other themes. */
  .theme-nexgold {
    --color-bg-base: 244 242 237;
    --color-bg-surface: 253 252 250;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 231 227 218;
    --color-border-subtle: 231 227 218;
    --color-border-strong: 200 194 180;
    --color-fg-primary: 18 21 26;
    --color-fg-secondary: 65 75 95;
    --color-fg-muted: 130 135 145;
    --color-accent-400: 214 181 122;
    --color-accent-500: 200 155 60;
    --color-accent-600: 168 127 46;
    color-scheme: light;
    font-family: 'Archivo', sans-serif;
  }
  .theme-nexgold .font-serif-italic { font-family: 'Instrument Serif', serif; font-style: italic; }
  .theme-nexgold .eyebrow { font-size: 11px; letter-spacing: .18em; font-weight: 700; text-transform: uppercase; color: #C89B3C; }
  .theme-nexgold .product-card { background: #FDFCFA; border-color: #E7E3DA; border-radius: 18px; }
  .theme-nexgold .card { border-radius: 18px; }
</style>
@endpush

@section('header')
<div class="theme-nexgold bg-nx-sand text-nx-ink">
  <div class="bg-nx-navy text-white/80 text-[12px]">
    <div class="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
      <span>{{ $s->topbar_text_left ?? 'Nexgold_FreeInsuredShipping' }}</span>
      <span class="hidden sm:inline">{{ $s->topbar_text_right ?? 'Nexgold_CertifiedGoldDiamondsGuaranteed' }}</span>
    </div>
  </div>

  <header class="bg-nx-card border-b border-nx-border">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4 md:gap-7">
      <a href="{{ route('store.index') }}" class="flex items-center gap-2 shrink-0">
        <span class="w-9 h-9 rounded-full bg-nx-navy text-nx-gold flex items-center justify-center font-serif-italic text-lg">N</span>
        <span class="font-extrabold text-lg tracking-tight text-nx-navy">{{ $s->store_name ?? 'Nexgold_NexgoldJewelers' }}</span>
      </a>

      <form method="get" action="{{ route('store.shop') }}" class="flex-1 min-w-[160px] flex items-center bg-nx-sand border border-nx-border rounded-full px-4 py-1.5 gap-2">
        <svg class="w-4 h-4 text-nx-ink/50 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" name="q" value="{{ request('q') }}" placeholder="{{ 'Nexgold_SearchPlaceholder' }}" class="flex-1 min-w-0 bg-transparent outline-none text-sm">
      </form>

      <div class="flex items-center gap-4 shrink-0 text-nx-navy">
        <a href="{{ route('account') }}" class="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:text-nx-gold transition" aria-label="{{ 'Account' }}">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>
          {{ 'Account' }}
        </a>
        <a href="{{ route('store.cart') }}" class="relative flex items-center gap-2 bg-nx-goldDark text-white rounded-full px-4 py-2 text-sm font-bold hover:bg-nx-blue transition" aria-label="{{ 'Cart' }}">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count bg-nx-blue min-w-[20px] h-5 rounded-full flex items-center justify-center text-[11px] font-extrabold px-1">0</span>
        </a>
        <button id="nx-menuBtn" class="md:hidden p-1" aria-label="{{ 'Nexgold_OpenMenu' }}">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <nav class="hidden md:block border-t border-nx-border">
      <div class="max-w-7xl mx-auto px-4 flex items-center gap-1 h-11 overflow-x-auto">
        <a href="{{ route('store.shop') }}" class="px-3 py-2 text-sm font-semibold text-nx-navy hover:text-nx-gold transition whitespace-nowrap">{{ 'Nexgold_ShopAll' }}</a>
        @foreach(($categories ?? collect())->take(10) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="px-3 py-2 text-sm font-medium text-nx-ink/70 hover:text-nx-gold transition whitespace-nowrap">{{ $cat->name }}</a>
        @endforeach
      </div>
    </nav>

    <div id="nx-mobileNav" class="md:hidden hidden flex-col px-4 py-2 text-sm font-medium divide-y divide-nx-border border-t border-nx-border">
      <a href="{{ route('store.shop') }}" class="py-2.5">{{ 'Nexgold_ShopAll' }}</a>
      @foreach(($categories ?? collect())->take(10) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ $cat->name }}</a>
      @endforeach
    </div>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('nx-menuBtn');
    var mobileNav = document.getElementById('nx-mobileNav');
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
<footer class="theme-nexgold bg-nx-navy text-white/70 pt-12 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
      <div class="col-span-2 md:col-span-1">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-9 h-9 rounded-full bg-white/10 text-nx-gold flex items-center justify-center font-serif-italic text-lg">N</span>
          <span class="font-extrabold text-lg text-white">{{ $s->store_name ?? 'Nexgold_NexgoldJewelers' }}</span>
        </div>
        <p class="text-sm text-white/50">{{ $s->footer_text ?? 'Nexgold_FooterTagline' }}</p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3 text-xs tracking-wider uppercase">{{ 'Nexgold_CustomerCare' }}</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="{{ route('store.contact') }}" class="hover:text-white transition">{{ 'ContactUs' }}</a></li>
          <li><a href="{{ route('account.orders') }}" class="hover:text-white transition">{{ 'Nexgold_TrackYourOrder' }}</a></li>
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">{{ 'Nexgold_ShopAllJewelry' }}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3 text-xs tracking-wider uppercase">{{ 'Nexgold_StoreInfo' }}</h4>
        <ul class="space-y-2 text-sm text-white/60">
          <li>{{ $s->contact_address ?? '' }}</li>
          <li>{{ $s->contact_phone ?? '' }}</li>
          <li>{{ $s->contact_email ?? '' }}</li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-3 text-xs tracking-wider uppercase">{{ 'Nexgold_Newsletter' }}</h4>
        <p class="text-sm text-white/50 mb-3">{{ 'Nexgold_FooterNewsletterDesc' }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ 'Nexgold_YourEmail' }}" class="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/15 outline-none text-sm text-white placeholder:text-white/40" />
          <button type="submit" class="px-4 py-2 rounded-lg bg-nx-gold text-nx-navy font-bold text-sm hover:bg-white transition">{{ 'Nexgold_Join' }}</button>
        </form>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5 text-xs text-white/40">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Nexgold_NexgoldJewelers' }}. {{ 'AllRightsReserved' }}</p>
    </div>
  </div>
</footer>
@endsection


