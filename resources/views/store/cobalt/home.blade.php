@extends('store.cobalt.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php $currency = $s->currency_code ?? '$'; @endphp
<div class="theme-cobalt" style="background:rgb(10 22 40); color:rgb(232 238 247);">

  <!-- ============ HERO — asymmetric split, faceted CSS-only gem motif ============ -->
  <section class="cb-hairline-b" style="border-color: rgb(45 70 105);">
    <div class="grid lg:grid-cols-[1.1fr_.9fr]">
      <div class="px-6 md:px-14 py-16 md:py-24 flex flex-col justify-center order-2 lg:order-1">
        <p class="cb-label mb-5">{{ __('messages.Cobalt_HeroEyebrow') }}</p>
        <h1 class="cb-display" style="font-weight:700; font-size:clamp(2.4rem,5.4vw,4rem); line-height:1.04;">
          {{ $s->hero_title ?? __('messages.Cobalt_DefaultHeroTitle') }}
        </h1>
        <p class="text-base mt-6 max-w-md" style="color:rgb(168 182 204);">
          {{ $s->hero_subtitle ?? __('messages.Cobalt_DefaultHeroSubtitle') }}
        </p>
        <div class="flex flex-wrap gap-3 mt-9">
          <a href="{{ route('store.shop') }}" class="cb-btn">{{ __('messages.Cobalt_ShopTheCollection') }}</a>
          <a href="{{ route('store.contact') }}" class="cb-btn cb-btn-outline">{{ __('messages.Cobalt_TalkToAnAdvisor') }}</a>
        </div>
      </div>
      <div class="relative order-1 lg:order-2" style="min-height:320px;">
        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80" alt="{{ $s->store_name ?? 'Cobalt' }} jewelry" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
        <div class="cb-facet"></div>
        <div class="cb-facet-chip" style="top:14%; right:16%; width:26%; aspect-ratio:1; transform:rotate(45deg);"></div>
        <div class="cb-facet-chip" style="bottom:18%; right:30%; width:14%; aspect-ratio:1; transform:rotate(20deg); border-color: rgba(207,224,245,.5);"></div>
        <div class="absolute bottom-8 left-8 right-8 lg:left-10">
          <p class="cb-label" style="color:rgb(207 224 245);">{{ __('messages.Cobalt_HeroBadge') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP — inline SVG icons, no external library ============ -->
  <section class="px-6 md:px-14 py-10 cb-hairline-b" style="border-color: rgb(45 70 105);">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div>
        <svg class="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="rgb(199,205,214)" stroke-width="1.5"><path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z"/></svg>
        <p class="cb-display text-sm font-semibold">{{ __('messages.Cobalt_FeatureTitle1') }}</p>
        <p class="text-xs mt-1.5" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_FeatureDesc1') }}</p>
      </div>
      <div>
        <svg class="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="rgb(199,205,214)" stroke-width="1.5"><path d="M12 3l2.6 6.3L21 12l-6.4 2.7L12 21l-2.6-6.3L3 12l6.4-2.7L12 3z"/></svg>
        <p class="cb-display text-sm font-semibold">{{ __('messages.Cobalt_FeatureTitle2') }}</p>
        <p class="text-xs mt-1.5" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_FeatureDesc2') }}</p>
      </div>
      <div>
        <svg class="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="rgb(199,205,214)" stroke-width="1.5"><rect x="4" y="8" width="16" height="12" rx="1"/><path d="M8 8V6a4 4 0 018 0v2"/></svg>
        <p class="cb-display text-sm font-semibold">{{ __('messages.Cobalt_FeatureTitle3') }}</p>
        <p class="text-xs mt-1.5" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_FeatureDesc3') }}</p>
      </div>
      <div>
        <svg class="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="rgb(199,205,214)" stroke-width="1.5"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>
        <p class="cb-display text-sm font-semibold">{{ __('messages.Cobalt_FeatureTitle4') }}</p>
        <p class="text-xs mt-1.5" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_FeatureDesc4') }}</p>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — sharp-edged image grid ============ -->
  <section class="px-6 md:px-14 py-16 cb-hairline-b" style="border-color: rgb(45 70 105);">
    <div class="flex items-end justify-between mb-8 max-w-6xl mx-auto">
      <div>
        <p class="cb-label mb-2">{{ __('messages.Cobalt_Collections') }}</p>
        <p class="cb-display" style="font-weight:700; font-size:1.7rem;">{{ __('messages.Cobalt_ShopByCategory') }}</p>
      </div>
      <a href="{{ route('store.shop') }}" class="cb-label" style="text-decoration:underline; text-underline-offset:3px;">{{ __('messages.ViewAll') }}</a>
    </div>
    @php
      // Verified-working Unsplash jewelry photos as a fallback pool for any
      // category missing a real product cover photo, so a tile is never an
      // empty color block.
      $cbFallbackImgs = [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
      ];
    @endphp
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group block" style="border:1px solid rgb(45 70 105);">
          <div style="aspect-ratio:1; overflow:hidden; background:rgb(19 38 66);">
            <img src="{{ $cat->cover_image_url ?? $cbFallbackImgs[$i % count($cbFallbackImgs)] }}" alt="{{ $cat->name }}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform .35s;" class="group-hover:scale-105">
          </div>
          <div class="px-3.5 py-3 flex items-center justify-between" style="border-top:1px solid rgb(45 70 105);">
            <span class="text-sm font-semibold cb-display">{{ $cat->name }}</span>
            <span style="color:rgb(199 205 214);">&rarr;</span>
          </div>
        </a>
      @empty
        <p class="col-span-full text-sm" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_NoCategoriesYet') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product cards ============ -->
  <section class="px-6 md:px-14 py-16 cb-hairline-b" style="border-color: rgb(45 70 105);">
    <div class="flex items-end justify-between mb-8 max-w-6xl mx-auto">
      <div>
        <p class="cb-label mb-2">{{ __('messages.Cobalt_NewArrivals') }}</p>
        <p class="cb-display" style="font-weight:700; font-size:1.7rem;">{{ __('messages.Cobalt_FeaturedPieces') }}</p>
      </div>
      <a href="{{ route('store.shop') }}" class="cb-label" style="text-decoration:underline; text-underline-offset:3px;">{{ __('messages.ViewAll') }}</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      @php $items = ($products ?? collect())->take(8); @endphp
      @forelse($items as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_NoProductsYet') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ BRAND STORY — editorial copy, faceted divider accents ============ -->
  <section class="px-6 md:px-14 py-16 cb-hairline-b" style="border-color: rgb(45 70 105);">
    <div class="grid lg:grid-cols-[.9fr_1.1fr] gap-10 max-w-6xl mx-auto items-start">
      <div>
        <p class="cb-label mb-3">{{ __('messages.Cobalt_StoryEyebrow') }}</p>
        <p class="cb-display" style="font-weight:700; font-size:clamp(1.7rem,3.4vw,2.4rem); line-height:1.14;">{{ __('messages.Cobalt_StoryTitle') }}</p>
        <div style="aspect-ratio:4/5; overflow:hidden; border:1px solid rgb(45 70 105); margin-top:2rem;">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" alt="{{ __('messages.Cobalt_StoryEyebrow') }}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div>
        <p class="text-sm leading-relaxed max-w-xl" style="color:rgb(168 182 204);">{{ __('messages.Cobalt_StoryBody') }}</p>
        <div class="grid sm:grid-cols-3 gap-6 mt-8">
          <div class="pt-4" style="border-top:1px solid rgb(96 122 156);">
            <p class="text-sm font-semibold cb-display mb-1">{{ __('messages.Cobalt_StoryPoint1Title') }}</p>
            <p class="text-xs" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_StoryPoint1Body') }}</p>
          </div>
          <div class="pt-4" style="border-top:1px solid rgb(96 122 156);">
            <p class="text-sm font-semibold cb-display mb-1">{{ __('messages.Cobalt_StoryPoint2Title') }}</p>
            <p class="text-xs" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_StoryPoint2Body') }}</p>
          </div>
          <div class="pt-4" style="border-top:1px solid rgb(96 122 156);">
            <p class="text-sm font-semibold cb-display mb-1">{{ __('messages.Cobalt_StoryPoint3Title') }}</p>
            <p class="text-xs" style="color:rgb(108 126 154);">{{ __('messages.Cobalt_StoryPoint3Body') }}</p>
          </div>
        </div>
        <a href="{{ route('store.contact') }}" class="cb-btn cb-btn-outline mt-8 w-fit">{{ __('messages.Cobalt_LearnMore') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="px-6 md:px-14 py-16">
    <div class="max-w-3xl mx-auto text-center" style="border:1px solid rgb(45 70 105); padding: 3rem 2rem; background: rgb(16 32 58);">
      <p class="cb-label mb-3">{{ __('messages.Cobalt_Newsletter') }}</p>
      <p class="cb-display" style="font-weight:700; font-size:clamp(1.5rem,3vw,2rem);">{{ __('messages.Cobalt_NewsletterTitle') }}</p>
      <p class="text-sm mt-3 mx-auto max-w-md" style="color:rgb(168 182 204);">{{ __('messages.Cobalt_NewsletterBody') }}</p>
      <form id="newsletterForm" action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-3 mt-7 max-w-md mx-auto">
        @csrf
        <input id="newsletterEmail" type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-4 py-3 text-sm outline-none" style="background:rgba(232,238,247,.05); border:1px solid rgb(96 122 156); color:rgb(232 238 247); border-radius:1px;" />
        <button id="newsletterBtn" type="submit" class="cb-btn">{{ __('messages.Subscribe') }}</button>
      </form>
      <div id="newsletterMsg" class="min-h-[1rem] mt-3"></div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
