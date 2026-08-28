@extends('store.solstice.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php $currency = $s->currency_code ?? '$'; @endphp
<div class="theme-solstice">

  <!-- ============ HERO — full-width sunrise gradient band ============ -->
  <section class="so-sunrise px-6 md:px-12 py-20 md:py-28">
    <div class="max-w-5xl mx-auto text-center">
      <p class="so-eyebrow" style="color:#FFF3E2;">{{ __('messages.Solstice_Eyebrow') }}</p>
      <h1 class="so-display mt-4" style="font-size:clamp(2.4rem,6vw,4.4rem); line-height:1.06; color:#3A2A1E; font-weight:600;">
        {{ $s->hero_title ?? __('messages.Solstice_DefaultHeroTitle') }}
      </h1>
      <p class="mt-5 max-w-xl mx-auto text-base md:text-lg" style="color:#4A331F; opacity:.9;">
        {{ $s->hero_subtitle ?? __('messages.Solstice_DefaultHeroSubtitle') }}
      </p>
      <div class="flex flex-wrap justify-center gap-3 mt-9">
        <a href="{{ route('store.shop') }}" class="so-btn so-btn-light so-shadow">{{ __('messages.Solstice_ShopTheCollection') }}</a>
        <a href="{{ route('store.contact') }}" class="so-btn so-btn-outline" style="border-color:#3A2A1E;">{{ __('messages.Solstice_TalkToUs') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP — 4 features with inline SVG icons ============ -->
  <section class="px-6 md:px-12 py-12" style="background:#EDD9BE;">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="text-center">
        <div class="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center" style="background:#FAF1E5;">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#A8522B" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>
        </div>
        <p class="font-bold text-sm" style="color:#3A2A1E;">{{ __('messages.Solstice_FeatureHandcraftedTitle') }}</p>
        <p class="text-xs mt-1" style="color:#8D6F57;">{{ __('messages.Solstice_FeatureHandcraftedDesc') }}</p>
      </div>
      <div class="text-center">
        <div class="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center" style="background:#FAF1E5;">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#A8522B" stroke-width="1.8"><path d="M12 2l2.9 6.5L22 9.3l-5 4.9 1.2 7-6.2-3.4-6.2 3.4 1.2-7-5-4.9 7.1-.8z"/></svg>
        </div>
        <p class="font-bold text-sm" style="color:#3A2A1E;">{{ __('messages.Solstice_FeatureMaterialsTitle') }}</p>
        <p class="text-xs mt-1" style="color:#8D6F57;">{{ __('messages.Solstice_FeatureMaterialsDesc') }}</p>
      </div>
      <div class="text-center">
        <div class="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center" style="background:#FAF1E5;">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#A8522B" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M3 7l9 4"/></svg>
        </div>
        <p class="font-bold text-sm" style="color:#3A2A1E;">{{ __('messages.Solstice_FeatureShippingTitle') }}</p>
        <p class="text-xs mt-1" style="color:#8D6F57;">{{ __('messages.Solstice_FeatureShippingDesc') }}</p>
      </div>
      <div class="text-center">
        <div class="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center" style="background:#FAF1E5;">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#A8522B" stroke-width="1.8"><path d="M12 21s-7-4.4-9.5-9C.7 8 2.4 4.5 6 4c2.1-.3 3.8.8 6 3 2.2-2.2 3.9-3.3 6-3 3.6.5 5.3 4 3.5 8-2.5 4.6-9.5 9-9.5 9z"/></svg>
        </div>
        <p class="font-bold text-sm" style="color:#3A2A1E;">{{ __('messages.Solstice_FeatureGuaranteeTitle') }}</p>
        <p class="text-xs mt-1" style="color:#8D6F57;">{{ __('messages.Solstice_FeatureGuaranteeDesc') }}</p>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY ============ -->
  <section class="px-6 md:px-12 py-16 md:py-20">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-8 flex-wrap gap-3">
        <div>
          <p class="so-eyebrow">{{ __('messages.Solstice_Explore') }}</p>
          <h2 class="so-display mt-2" style="font-size:clamp(1.6rem,3.5vw,2.4rem); color:#3A2A1E;">{{ __('messages.Solstice_ShopByCategory') }}</h2>
        </div>
        <a href="{{ route('store.shop') }}" class="so-nav-link" style="text-decoration:underline; color:#A8522B;">{{ __('messages.ViewAll') }}</a>
      </div>

      @php
        // Verified-working Unsplash jewelry photos as a fallback for any
        // category missing a real product cover photo, so a tile is never a
        // broken image icon.
        $soFallbackImgs = [
          'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
        ];
      @endphp
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        @forelse(($categories ?? collect())->take(8) as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="so-card so-shadow block overflow-hidden group" style="text-decoration:none;">
            <div style="aspect-ratio:1; overflow:hidden; border-top-left-radius:1.75rem; border-top-right-radius:1.75rem;">
              <img src="{{ $cat->cover_image_url ?? $soFallbackImgs[$i % count($soFallbackImgs)] }}" alt="{{ $cat->name }}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform .4s;" class="group-hover:scale-105">
            </div>
            <div class="p-4">
              <p class="font-bold text-sm" style="color:#3A2A1E;">{{ $cat->name }}</p>
            </div>
          </a>
        @empty
          <p class="col-span-full text-sm" style="color:#8D6F57;">{{ __('messages.Solstice_NoCategoriesYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PIECES — product grid ============ -->
  <section class="px-6 md:px-12 py-16 md:py-20" style="background:#EDD9BE;">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-8 flex-wrap gap-3">
        <div>
          <p class="so-eyebrow">{{ __('messages.Solstice_NewArrivals') }}</p>
          <h2 class="so-display mt-2" style="font-size:clamp(1.6rem,3.5vw,2.4rem); color:#3A2A1E;">{{ __('messages.Solstice_FeaturedPieces') }}</h2>
        </div>
        <a href="{{ route('store.shop') }}" class="so-btn so-shadow">{{ __('messages.ViewAll') }}</a>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        @forelse(($products ?? collect())->take(8) as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-sm" style="color:#8D6F57;">{{ __('messages.Solstice_NoProductsYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ BRAND STORY — editorial band with real copy ============ -->
  <section class="px-6 md:px-12 py-16 md:py-24">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div class="so-shadow" style="border-radius:1.75rem; overflow:hidden; aspect-ratio:4/5;">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80" alt="{{ __('messages.Solstice_GoldsmithAltText') }}" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div>
        <p class="so-eyebrow">{{ __('messages.Solstice_OurCraft') }}</p>
        <h2 class="so-display mt-3" style="font-size:clamp(1.7rem,3.6vw,2.6rem); line-height:1.18; color:#3A2A1E;">{{ __('messages.Solstice_StoryHeadline') }}</h2>
        <p class="mt-5 text-sm md:text-base leading-relaxed" style="color:#604734;">{{ __('messages.Solstice_StoryParagraphOne') }}</p>
        <p class="mt-4 text-sm md:text-base leading-relaxed" style="color:#604734;">{{ __('messages.Solstice_StoryParagraphTwo') }}</p>
        <a href="{{ route('store.contact') }}" class="so-btn so-btn-outline mt-7 w-fit" style="border-color:#3A2A1E;">{{ __('messages.Solstice_LearnOurStory') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ WARM QUOTE BAND ============ -->
  <section class="so-sunrise px-6 md:px-12 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <p class="so-display" style="font-size:clamp(1.4rem,3vw,2rem); font-style:italic; color:#3A2A1E; line-height:1.4;">
        "{{ __('messages.Solstice_QuoteText') }}"
      </p>
      <p class="so-eyebrow mt-4" style="color:#4A331F;">{{ __('messages.Solstice_QuoteAttribution') }}</p>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="px-6 md:px-12 py-16 md:py-20">
    <div class="max-w-2xl mx-auto so-card so-shadow p-10 text-center">
      <p class="so-eyebrow">{{ __('messages.Solstice_JoinTheGlow') }}</p>
      <h2 class="so-display mt-3" style="font-size:clamp(1.5rem,3vw,2.1rem); color:#3A2A1E;">{{ __('messages.Solstice_NewsletterHeadline') }}</h2>
      <p class="mt-3 text-sm" style="color:#8D6F57;">{{ __('messages.Solstice_NewsletterSubtext') }}</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
        @csrf
        <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="input flex-1 min-w-0" />
        <button type="submit" class="so-btn justify-center">{{ __('messages.Subscribe') }}</button>
      </form>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
