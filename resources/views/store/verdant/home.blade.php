@extends('store.verdant.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php $currency = $s->currency_code ?? '$'; @endphp
<div class="theme-verdant" style="background:#0F2419; color:#EDEAE0;">

  <!-- ============ HERO — deep emerald gradient, gold hairline accents ============ -->
  <section class="relative px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden" style="background:radial-gradient(ellipse at top, #16331F 0%, #0F2419 65%);">
    <div class="max-w-4xl mx-auto text-center">
      <div class="vd-gold-line w-24 mx-auto mb-7"></div>
      <p class="vd-eyebrow mb-5">{{ __('messages.Verdant_HeroEyebrow') }}</p>
      <h1 class="vd-serif" style="font-size:clamp(2.4rem,6vw,4.6rem); line-height:1.06; letter-spacing:.01em; color:#EDEAE0;">
        {{ $s->hero_title ?? __('messages.Verdant_HeroTitleFallback') }}
      </h1>
      <p class="text-sm md:text-base mt-6 max-w-xl mx-auto" style="color:#C5D2C7;">
        {{ $s->hero_subtitle ?? __('messages.Verdant_HeroSubtitleFallback') }}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 mt-10">
        <a href="{{ route('store.shop') }}" class="vd-btn">{{ __('messages.Verdant_ExploreCollection') }}</a>
        <a href="{{ route('store.contact') }}" class="vd-btn vd-btn-outline">{{ __('messages.Verdant_RequestConsultation') }}</a>
      </div>
      <div class="vd-gold-line w-24 mx-auto mt-10"></div>
    </div>
  </section>

  <!-- ============ TRUST STRIP — 4 items, inline SVG icons in gold-framed boxes ============ -->
  <section class="px-5 md:px-8 py-12" style="background:#0A1811; border-top:1px solid rgba(201,162,75,.2); border-bottom:1px solid rgba(201,162,75,.2);">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      <div class="flex items-start gap-3.5">
        <div class="vd-icon-badge">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/></svg>
        </div>
        <div>
          <p class="text-sm font-bold" style="color:#EDEAE0;">{{ __('messages.Verdant_TrustCertifiedTitle') }}</p>
          <p class="text-xs mt-1" style="color:#94A898;">{{ __('messages.Verdant_TrustCertifiedDesc') }}</p>
        </div>
      </div>
      <div class="flex items-start gap-3.5">
        <div class="vd-icon-badge">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"/></svg>
        </div>
        <div>
          <p class="text-sm font-bold" style="color:#EDEAE0;">{{ __('messages.Verdant_TrustInsuredTitle') }}</p>
          <p class="text-xs mt-1" style="color:#94A898;">{{ __('messages.Verdant_TrustInsuredDesc') }}</p>
        </div>
      </div>
      <div class="flex items-start gap-3.5">
        <div class="vd-icon-badge">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v4H4zM6 8v12h12V8M10 12h4"/></svg>
        </div>
        <div>
          <p class="text-sm font-bold" style="color:#EDEAE0;">{{ __('messages.Verdant_TrustHandsetTitle') }}</p>
          <p class="text-xs mt-1" style="color:#94A898;">{{ __('messages.Verdant_TrustHandsetDesc') }}</p>
        </div>
      </div>
      <div class="flex items-start gap-3.5">
        <div class="vd-icon-badge">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
        </div>
        <div>
          <p class="text-sm font-bold" style="color:#EDEAE0;">{{ __('messages.Verdant_TrustLifetimeTitle') }}</p>
          <p class="text-xs mt-1" style="color:#94A898;">{{ __('messages.Verdant_TrustLifetimeDesc') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — gold-framed jewel-case grid ============ -->
  <section class="px-5 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
    <div class="flex items-end justify-between mb-9">
      <div>
        <p class="vd-eyebrow mb-2">{{ __('messages.Verdant_CategoriesEyebrow') }}</p>
        <h2 class="vd-serif" style="font-size:clamp(1.7rem,3vw,2.5rem); color:#EDEAE0;">{{ __('messages.Verdant_ShopByCategory') }}</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="vd-nav-link hidden md:inline">{{ __('messages.ViewAll') }}</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      @forelse(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="vd-case group block">
          <div style="aspect-ratio:1; overflow:hidden; border-bottom:1px solid rgba(201,162,75,.3);">
            <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=75' }}" alt="{{ $cat->name }}" style="width:100%; height:100%; object-fit:cover; filter:saturate(.92) brightness(.92);" loading="lazy">
          </div>
          <div class="px-4 py-4 text-center">
            <span class="text-sm font-semibold tracking-wide" style="color:#EDEAE0;">{{ $cat->name }}</span>
          </div>
        </a>
      @empty
        <p class="col-span-full text-sm" style="color:#94A898;">{{ __('messages.Verdant_NoCategoriesYet') }}</p>
      @endforelse
    </div>
  </section>

  <div class="vd-divider max-w-7xl mx-auto"></div>

  <!-- ============ FEATURED PIECES — jewel-box product grid ============ -->
  <section class="px-5 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
    <div class="flex items-end justify-between mb-9">
      <div>
        <p class="vd-eyebrow mb-2">{{ __('messages.Verdant_FeaturedEyebrow') }}</p>
        <h2 class="vd-serif" style="font-size:clamp(1.7rem,3vw,2.5rem); color:#EDEAE0;">{{ __('messages.Verdant_FeaturedPieces') }}</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="vd-nav-link hidden md:inline">{{ __('messages.ViewAll') }}</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      @php $items = ($products ?? collect())->take(18); @endphp
      @forelse($items as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm" style="color:#94A898;">{{ __('messages.Verdant_NoProductsYet') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ EDITORIAL / BRAND STORY — craftsmanship copy, gold-framed image ============ -->
  <section class="px-5 md:px-8 py-16 md:py-20" style="background:#16331F; border-top:1px solid rgba(201,162,75,.2); border-bottom:1px solid rgba(201,162,75,.2);">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="vd-case-lg" style="aspect-ratio:4/5; overflow:hidden;">
        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80" alt="{{ __('messages.Verdant_EditorialImageAlt') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div>
        <p class="vd-eyebrow mb-4">{{ __('messages.Verdant_EditorialEyebrow') }}</p>
        <h2 class="vd-serif" style="font-size:clamp(1.7rem,3.2vw,2.6rem); line-height:1.2; color:#EDEAE0;">{{ __('messages.Verdant_EditorialHeadline') }}</h2>
        <p class="text-sm mt-5 leading-relaxed" style="color:#C5D2C7;">{{ __('messages.Verdant_EditorialParaOne') }}</p>
        <p class="text-sm mt-4 leading-relaxed" style="color:#C5D2C7;">{{ __('messages.Verdant_EditorialParaTwo') }}</p>
        <div class="vd-gold-line w-16 mt-8 mb-6"></div>
        <div class="grid grid-cols-2 gap-6">
          <div>
            <p class="vd-serif text-2xl vd-gold">18K &ndash; 22K</p>
            <p class="text-xs mt-1" style="color:#94A898;">{{ __('messages.Verdant_StatGoldPurity') }}</p>
          </div>
          <div>
            <p class="vd-serif text-2xl vd-gold">100%</p>
            <p class="text-xs mt-1" style="color:#94A898;">{{ __('messages.Verdant_StatHandFinished') }}</p>
          </div>
        </div>
        <a href="{{ route('store.contact') }}" class="vd-btn vd-btn-outline mt-8 w-fit">{{ __('messages.Verdant_LearnOurCraft') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER — gold-framed jewel case ============ -->
  <section class="px-5 md:px-8 py-16 md:py-20">
    <div class="vd-case-lg max-w-3xl mx-auto text-center px-8 py-14">
      <p class="vd-eyebrow mb-4">{{ __('messages.Verdant_NewsletterEyebrow') }}</p>
      <h2 class="vd-serif" style="font-size:clamp(1.6rem,3vw,2.2rem); color:#EDEAE0;">{{ __('messages.Verdant_NewsletterHeadline') }}</h2>
      <p class="text-sm mt-4 max-w-md mx-auto" style="color:#C5D2C7;">{{ __('messages.Verdant_NewsletterSubtext') }}</p>
      <form id="newsletterForm" action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
        @csrf
        <input id="newsletterEmail" type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-4 py-3 text-sm outline-none" style="background:rgba(255,255,255,.04); border:1px solid rgba(201,162,75,.35); color:#EDEAE0;" />
        <button id="newsletterBtn" type="submit" class="vd-btn">{{ __('messages.Subscribe') }}</button>
      </form>
      <div id="newsletterMsg" class="min-h-[1.25rem] mt-3"></div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
