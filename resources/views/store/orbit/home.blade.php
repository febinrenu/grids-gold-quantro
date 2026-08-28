@extends('store.orbit.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-orbit" style="background:#F5F6F8; color:#1C1E22;">

  <!-- ============ HERO — orbital ring background, headline, two CTAs ============ -->
  <section class="relative px-6 md:px-12 pt-16 pb-20 overflow-hidden">
    <span class="ob-ring" style="width:620px; height:620px; top:-220px; right:-160px;"></span>
    <span class="ob-ring" style="width:380px; height:380px; top:40px; right:6%; border-color:rgba(184,144,90,.16);"></span>
    <span class="ob-ring-fill" style="width:260px; height:260px; bottom:-80px; left:-60px;"></span>

    <div class="max-w-3xl relative">
      <p class="ob-label mb-5">{{ __('messages.Orbit_HeroKicker') }}</p>
      <h1 class="ob-display" style="font-weight:700; font-size:clamp(2.4rem,5.6vw,4.2rem); line-height:1.05; letter-spacing:-.02em;">
        {{ $s->hero_title ?? __('messages.Orbit_HeroHeadline') }}
      </h1>
      <p class="text-base mt-6 max-w-lg" style="color:#5A606B;">
        {{ $s->hero_subtitle ?? __('messages.Orbit_HeroSubtitle') }}
      </p>
      <div class="flex flex-wrap gap-4 mt-9">
        <a href="{{ route('store.shop') }}" class="ob-btn ob-btn-accent">{{ __('messages.Orbit_ExploreCollection') }}</a>
        <a href="{{ route('store.contact') }}" class="ob-btn ob-btn-outline">{{ __('messages.Orbit_BookConsultation') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP — 4 items, inline SVG icons in ring badges ============ -->
  <section class="px-6 md:px-12 py-12" style="border-top:1px solid #E7E9ED; border-bottom:1px solid #E7E9ED; background:#fff;">
    <div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="flex items-start gap-4">
        <span style="width:2.9rem; height:2.9rem; border-radius:50%; background:rgba(184,144,90,.12); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#9C7645" stroke-width="1.7"><path d="M12 2l3 6 6 1-4.5 4.4L17.5 20 12 17l-5.5 3 1-6.6L3 9l6-1 3-6z"/></svg>
        </span>
        <div>
          <p class="ob-display font-semibold text-sm">{{ __('messages.Orbit_Feature1Title') }}</p>
          <p class="text-xs mt-1" style="color:#8E939D;">{{ __('messages.Orbit_Feature1Desc') }}</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <span style="width:2.9rem; height:2.9rem; border-radius:50%; background:rgba(184,144,90,.12); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#9C7645" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.4 2.4L16 9.5"/></svg>
        </span>
        <div>
          <p class="ob-display font-semibold text-sm">{{ __('messages.Orbit_Feature2Title') }}</p>
          <p class="text-xs mt-1" style="color:#8E939D;">{{ __('messages.Orbit_Feature2Desc') }}</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <span style="width:2.9rem; height:2.9rem; border-radius:50%; background:rgba(184,144,90,.12); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#9C7645" stroke-width="1.7"><path d="M4 7l8-4 8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/></svg>
        </span>
        <div>
          <p class="ob-display font-semibold text-sm">{{ __('messages.Orbit_Feature3Title') }}</p>
          <p class="text-xs mt-1" style="color:#8E939D;">{{ __('messages.Orbit_Feature3Desc') }}</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <span style="width:2.9rem; height:2.9rem; border-radius:50%; background:rgba(184,144,90,.12); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#9C7645" stroke-width="1.7"><path d="M3 12a9 9 0 1015-6.7M3 12V5m0 7h7"/></svg>
        </span>
        <div>
          <p class="ob-display font-semibold text-sm">{{ __('messages.Orbit_Feature4Title') }}</p>
          <p class="text-xs mt-1" style="color:#8E939D;">{{ __('messages.Orbit_Feature4Desc') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — circular tiles orbiting a center label ============ -->
  <section class="px-6 md:px-12 py-16 max-w-7xl mx-auto">
    <div class="flex items-end justify-between mb-10">
      <div>
        <p class="ob-label mb-3">{{ __('messages.Orbit_ShopByCategory') }}</p>
        <p class="ob-display" style="font-weight:700; font-size:clamp(1.5rem,3vw,2.1rem);">{{ __('messages.Orbit_CategoryHeadline') }}</p>
      </div>
      <a href="{{ route('store.shop') }}" class="ob-label" style="text-decoration:underline; text-underline-offset:4px;">{{ __('messages.ViewAll') }}</a>
    </div>

    @php
      $catImgs = ['1611652022419-a9419f74343d','1605100804763-247f67b3557e','1599643478518-a784e5dc4c8f','1616401784845-180882ba9ba8','1611591437281-460bfbe1220a','1573408301185-9146fe634ad0','1620656798579-1984d9e87df7','1587467512961-120760940315'];
    @endphp

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="flex flex-col items-center text-center group">
          <div class="ob-circle-tile" style="width:100%; max-width:9.5rem;">
            <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-'.$catImgs[$i % count($catImgs)].'?auto=format&fit=crop&w=400&q=75' }}" alt="{{ $cat->name }}">
          </div>
          <span class="ob-display font-semibold text-sm mt-4">{{ $cat->name }}</span>
        </a>
      @empty
        <p class="col-span-full text-sm text-center py-8" style="color:#8E939D;">{{ __('messages.Orbit_NoCategoriesYet') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product cards ============ -->
  <section class="px-6 md:px-12 py-16" style="background:#fff; border-top:1px solid #E7E9ED; border-bottom:1px solid #E7E9ED;">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-end justify-between mb-10">
        <div>
          <p class="ob-label mb-3">{{ __('messages.Orbit_NewArrivals') }}</p>
          <p class="ob-display" style="font-weight:700; font-size:clamp(1.5rem,3vw,2.1rem);">{{ __('messages.Orbit_FeaturedPieces') }}</p>
        </div>
        <a href="{{ route('store.shop') }}" class="ob-btn ob-btn-outline">{{ __('messages.ViewAll') }}</a>
      </div>

      @php $currency = $s->currency_code ?? '$'; $items = ($products ?? collect())->take(8); @endphp
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        @forelse($items as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-sm text-center py-8" style="color:#8E939D;">{{ __('messages.Orbit_NoProductsYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL / BRAND STORY — orbit motif + specific craftsmanship copy ============ -->
  <section class="px-6 md:px-12 py-20 max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-14 items-center">
      <div class="relative">
        <span class="ob-ring" style="width:420px; height:420px; top:-40px; left:-60px; border-color:rgba(184,144,90,.2);"></span>
        <div style="border-radius:28px; overflow:hidden; aspect-ratio:4/5; box-shadow:0 30px 60px -30px rgba(28,30,34,.35); position:relative;">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80" alt="Jeweler shaping metal at a bench" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div style="position:absolute; bottom:-2rem; right:-1.5rem; width:44%; aspect-ratio:1; border-radius:50%; overflow:hidden; border:8px solid #F5F6F8; box-shadow:0 20px 40px -18px rgba(28,30,34,.35);" class="hidden sm:block">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80" alt="Finished ring detail" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div>
        <p class="ob-label mb-4">{{ __('messages.Orbit_StoryKicker') }}</p>
        <p class="ob-display" style="font-weight:700; font-size:clamp(1.7rem,3.6vw,2.6rem); line-height:1.15;">{{ __('messages.Orbit_StoryTitle') }}</p>
        <p class="text-sm mt-5 max-w-md" style="color:#5A606B; line-height:1.7;">{{ __('messages.Orbit_StoryBody') }}</p>

        <div class="mt-8 space-y-4">
          <div class="flex items-start gap-3">
            <span style="width:1.6rem; height:1.6rem; border-radius:50%; border:1.5px solid #B8905A; flex-shrink:0; margin-top:.15rem;"></span>
            <p class="text-sm" style="color:#4B5058;">{{ __('messages.Orbit_StoryPoint1') }}</p>
          </div>
          <div class="flex items-start gap-3">
            <span style="width:1.6rem; height:1.6rem; border-radius:50%; border:1.5px solid #B8905A; flex-shrink:0; margin-top:.15rem;"></span>
            <p class="text-sm" style="color:#4B5058;">{{ __('messages.Orbit_StoryPoint2') }}</p>
          </div>
          <div class="flex items-start gap-3">
            <span style="width:1.6rem; height:1.6rem; border-radius:50%; border:1.5px solid #B8905A; flex-shrink:0; margin-top:.15rem;"></span>
            <p class="text-sm" style="color:#4B5058;">{{ __('messages.Orbit_StoryPoint3') }}</p>
          </div>
        </div>

        <a href="{{ route('store.contact') }}" class="ob-btn ob-btn-outline mt-9 w-fit">{{ __('messages.Orbit_LearnMore') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="px-6 md:px-12 py-20 relative overflow-hidden" style="background:#1C1E22; color:#F5F6F8;">
    <span class="ob-ring" style="width:460px; height:460px; top:-180px; left:-120px; border-color:rgba(184,144,90,.22);"></span>
    <span class="ob-ring" style="width:260px; height:260px; bottom:-100px; right:6%; border-color:rgba(184,144,90,.16);"></span>
    <div class="max-w-2xl mx-auto text-center relative">
      <p class="ob-label mb-4" style="color:#B8905A;">{{ __('messages.Orbit_Newsletter') }}</p>
      <p class="ob-display" style="font-weight:700; font-size:clamp(1.6rem,3.4vw,2.3rem);">{{ __('messages.Orbit_NewsletterTitle') }}</p>
      <p class="text-sm mt-4" style="opacity:.7;">{{ __('messages.Orbit_NewsletterBody') }}</p>
      <form id="newsletterForm" action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
        @csrf
        <input id="newsletterEmail" type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="ob-input flex-1 min-w-0" />
        <button id="newsletterBtn" type="submit" class="ob-btn ob-btn-accent">{{ __('messages.Subscribe') }}</button>
      </form>
      <p id="newsletterMsg" class="text-xs mt-3 min-h-[1rem]"></p>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
