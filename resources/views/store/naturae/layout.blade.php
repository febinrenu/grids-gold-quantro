@extends('layouts.store')

@php use Illuminate\Support\Str; @endphp

@push('head')
<script>
  // Naturae Gems has its own fixed light/earthy palette — it never adapts to
  // the shared light/dark toggle, so pin the mode here before paint
  // (overriding whatever the visitor last chose on the default theme) to
  // avoid unstyled text inheriting the wrong contrast color.
  document.documentElement.classList.remove('dark');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">

<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          serif: ['Fraunces', 'serif'],
          sans: ['Nunito', 'sans-serif'],
        },
        colors: {
          brand: {
            green: '#2B3524',
            greenDark: '#1C2318',
            greenLight: '#E9EBE2',
            cream: '#F3EDE2',
            tan: '#DAD0BF',
          },
        },
        boxShadow: {
          card: '0 4px 16px -6px rgba(28, 35, 24, 0.10)',
          cardHover: '0 14px 30px -10px rgba(28, 35, 24, 0.18)',
          navUp: '0 -4px 14px -6px rgba(28,35,24,0.14)',
        },
      },
    },
  };
</script>
<style>
  /* Fixed light/earthy palette, expressed as real CSS custom-property
     overrides (not just a JS dark-mode toggle) so every shared storefront
     component — .price, .chip, .stock-dot, .btn, .card — resolves the
     correct color regardless of the visitor's light/dark preference on
     other themes. */
  .theme-naturae {
    --color-bg-base: 243 237 226;
    --color-bg-surface: 255 255 255;
    --color-bg-elevated: 255 255 255;
    --color-bg-muted: 233 235 226;
    --color-border-subtle: 218 208 191;
    --color-border-strong: 190 178 155;
    --color-fg-primary: 36 32 24;
    --color-fg-secondary: 90 83 64;
    --color-fg-muted: 140 130 108;
    --color-accent-400: 58 70 48;
    --color-accent-500: 43 53 36;
    --color-accent-600: 28 35 24;
    color-scheme: light;
    font-family: 'Nunito', sans-serif;
  }
  .theme-naturae .font-serif { font-family: 'Fraunces', serif; }
  .theme-naturae .tracking-wider2 { letter-spacing: .12em; }
  .theme-naturae .product-card { background: #F3EDE2; border-color: #DAD0BF; }
  .theme-naturae .product-card .product-title { color: #242018; }
</style>
@endpush

@section('header')
<div class="theme-naturae">
  <div class="bg-brand-greenDark text-white text-[11.5px] md:text-[12px]">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center md:justify-between">
      <span class="tracking-wider2 font-medium">{{ __('messages.Naturae_FreeShipping') }}</span>
      <span class="hidden md:flex items-center gap-1 text-white/70">{{ __('messages.Naturae_EthicallySourcedConflictFree') }}</span>
    </div>
  </div>

  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/5">
    <div class="hidden md:flex max-w-7xl mx-auto px-4 py-4 items-center gap-8">
      <a href="{{ route('store.index') }}" class="flex items-center gap-2.5 shrink-0">
        <div class="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c1 2-1 3-1 5a4 4 0 108 0c0-3-2-4-3-6M8 10a6 6 0 106 10V10"/></svg>
        </div>
        <span class="font-semibold text-lg tracking-wider2 text-[#242018]">{{ $s->store_name ?? 'NATURAE GEMS' }}</span>
      </a>

      <nav class="flex items-center gap-6 text-[12.5px] font-medium tracking-wider2 text-[#3a3626] flex-wrap">
        <a href="{{ route('store.shop') }}" class="hover:text-brand-green transition">{{ __('messages.Naturae_ShopAllCaps') }}</a>
        @foreach(($categories ?? collect())->take(6) as $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="hover:text-brand-green transition">{{ Str::upper($cat->name) }}</a>
        @endforeach
      </nav>

      <div class="flex items-center gap-5 ml-auto text-[#242018]">
        <a href="{{ route('account') }}" aria-label="Account" class="hover:text-brand-green transition"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg></a>
        <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative hover:text-brand-green transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
          <span class="cart-count absolute -top-1.5 -right-1.5 bg-brand-green text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </a>
      </div>
    </div>

    <div class="md:hidden flex items-center gap-3 px-4 py-3.5">
      <button id="ng-menuBtn" class="p-1 -ml-1" aria-label="{{ __('messages.Naturae_OpenMenu') }}">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="{{ route('store.index') }}" class="flex items-center justify-center gap-2 flex-1">
        <div class="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center">
          <svg class="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c1 2-1 3-1 5a4 4 0 108 0c0-3-2-4-3-6M8 10a6 6 0 106 10V10"/></svg>
        </div>
        <span class="font-semibold text-base tracking-wider2 text-[#242018]">{{ $s->store_name ?? 'NATURAE GEMS' }}</span>
      </a>
      <a href="{{ route('store.cart') }}" aria-label="Cart" class="relative p-1">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 8V6a6 6 0 0112 0v2M4 8h16l-1.2 12.1a2 2 0 01-2 1.9H7.2a2 2 0 01-2-1.9L4 8z"/></svg>
        <span class="cart-count absolute -top-0.5 -right-0.5 bg-brand-green text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
      </a>
    </div>

    <div id="ng-mobileNav" class="md:hidden hidden flex-col px-4 py-2 text-sm font-medium tracking-wider2 text-[#3a3626] divide-y divide-black/5 border-t border-black/5">
      <a href="{{ route('store.shop') }}" class="py-2.5">{{ __('messages.Naturae_ShopAllCaps') }}</a>
      @foreach(($categories ?? collect())->take(6) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="py-2.5">{{ Str::upper($cat->name) }}</a>
      @endforeach
    </div>
  </header>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('ng-menuBtn');
    var mobileNav = document.getElementById('ng-mobileNav');
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
<footer class="theme-naturae bg-brand-greenDark text-white/70 pt-10 pb-6">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
      <div class="col-span-2 md:col-span-1">
        <h4 class="text-white font-semibold mb-3 text-sm tracking-wider2">{{ __('messages.Naturae_AboutHeading', ['store' => Str::upper($s->store_name ?? 'NATURAE GEMS')]) }}</h4>
        <p class="text-sm text-white/55 leading-relaxed mb-4 max-w-xs">{{ $s->footer_text ?? __('messages.Naturae_FooterTextDefault') }}</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm tracking-wider2">{{ __('messages.Naturae_ShopHeading') }}</h4>
        <ul class="space-y-2 text-sm text-white/55">
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">{{ __('messages.Naturae_AllJewelry') }}</a></li>
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">{{ __('messages.Naturae_NewArrivals') }}</a></li>
          <li><a href="{{ route('store.shop') }}" class="hover:text-white transition">{{ __('messages.Naturae_BestSellers') }}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm tracking-wider2">{{ __('messages.Naturae_CustomerCareHeading') }}</h4>
        <ul class="space-y-2 text-sm text-white/55">
          <li><a href="{{ route('store.contact') }}" class="hover:text-white transition">{{ __('messages.ContactUs') }}</a></li>
          <li><a href="{{ route('account.orders') }}" class="hover:text-white transition">{{ __('messages.Naturae_TrackYourOrder') }}</a></li>
          <li><a href="{{ route('store.login.show') }}" class="hover:text-white transition">{{ __('messages.SignIn') }}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3 text-sm tracking-wider2">{{ __('messages.Naturae_JoinOurCommunity') }}</h4>
        <p class="text-sm text-white/55 mb-4">{{ __('messages.Naturae_FooterNewsletterParagraph') }}</p>
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2">
          @csrf
          <input type="email" name="email" required placeholder="{{ __('messages.Naturae_EnterEmail') }}" class="flex-1 min-w-0 px-3 py-2.5 rounded bg-white/10 border border-white/15 outline-none text-xs text-white placeholder:text-white/40" />
          <button type="submit" class="w-10 h-10 shrink-0 bg-brand-tan hover:bg-white transition rounded flex items-center justify-center">
            <svg class="w-4 h-4 text-brand-greenDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </form>
      </div>
    </div>
    <div class="text-center md:text-left pt-6 text-xs text-white/40">
      <p>© {{ date('Y') }} {{ $s->store_name ?? 'Naturae Gems' }}. {{ __('messages.Naturae_AllRightsReserved') }}</p>
    </div>
  </div>
</footer>
@endsection

