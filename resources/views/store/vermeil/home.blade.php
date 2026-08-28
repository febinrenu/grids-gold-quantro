@extends('store.vermeil.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php $currency = $s->currency_code ?? '$'; @endphp
<div class="theme-vermeil" style="background:#FBF4F1; color:#4A3D3A;">

  <!-- ============ HERO — airy single column, thin serif headline ============ -->
  <section class="px-6 md:px-10 pt-16 md:pt-24 pb-14 md:pb-20">
    <div class="max-w-3xl mx-auto text-center">
      <p class="vm-label mb-6">{{ __('messages.Vermeil_HeroKicker') }}</p>
      <h1 class="vm-serif" style="font-size:clamp(2.6rem,7vw,4.6rem); line-height:1.08; letter-spacing:.01em;">{{ $s->hero_title ?? __('messages.Vermeil_DefaultHeroTitle') }}</h1>
      <p class="text-sm md:text-base mt-6 max-w-lg mx-auto" style="opacity:.75; line-height:1.75;">{{ $s->hero_subtitle ?? __('messages.Vermeil_DefaultHeroSubtitle') }}</p>
      <div class="flex flex-wrap items-center justify-center gap-4 mt-10">
        <a href="{{ route('store.shop') }}" class="vm-btn vm-btn-solid">{{ __('messages.Vermeil_ShopTheEdit') }}</a>
        <a href="{{ route('store.contact') }}" class="vm-btn">{{ __('messages.Vermeil_BookConsultation') }}</a>
      </div>
    </div>
    <div class="max-w-4xl mx-auto mt-16" style="border-radius:2px; overflow:hidden; aspect-ratio: 21/9;">
      <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80" alt="{{ __('messages.Vermeil_HeroImageAlt') }}" style="width:100%; height:100%; object-fit:cover;">
    </div>
  </section>

  <!-- ============ TRUST STRIP — thin icons, hairline dividers ============ -->
  <section class="px-6 md:px-10 py-10" style="border-top:1px solid #ECDCD5; border-bottom:1px solid #ECDCD5;">
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
      <div class="px-2">
        <svg class="w-6 h-6 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="#C9846B" stroke-width="1.2"><path d="M12 2l2.4 6.6L21 10l-5 4.5L17.4 21 12 17.3 6.6 21 8 14.5 3 10l6.6-1.4z"/></svg>
        <p class="vm-label" style="letter-spacing:.1em;">{{ __('messages.Vermeil_TrustHandFinished') }}</p>
      </div>
      <div class="px-2">
        <svg class="w-6 h-6 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="#C9846B" stroke-width="1.2"><path d="M12 3l9 4.5v9L12 21l-9-4.5v-9z"/><path d="M12 12l9-4.5M12 12v9M12 12L3 7.5"/></svg>
        <p class="vm-label" style="letter-spacing:.1em;">{{ __('messages.Vermeil_TrustEthicalMetals') }}</p>
      </div>
      <div class="px-2">
        <svg class="w-6 h-6 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="#C9846B" stroke-width="1.2"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>
        <p class="vm-label" style="letter-spacing:.1em;">{{ __('messages.Vermeil_TrustSecurePackaging') }}</p>
      </div>
      <div class="px-2">
        <svg class="w-6 h-6 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="#C9846B" stroke-width="1.2"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"/><path d="M12 7v5l3 3"/></svg>
        <p class="vm-label" style="letter-spacing:.1em;">{{ __('messages.Vermeil_TrustLifetimeCare') }}</p>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — soft rounded thumbnails, generous gaps ============ -->
  <section class="px-6 md:px-10 py-16 md:py-20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <p class="vm-label mb-3">{{ __('messages.Vermeil_CollectionsKicker') }}</p>
        <h2 class="vm-serif" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">{{ __('messages.Vermeil_ShopByCategory') }}</h2>
      </div>
      @php
        $catImgs = ['1611652022419-a9419f74343d','1605100804763-247f67b3557e','1599643478518-a784e5dc4c8f','1616401784845-180882ba9ba8','1611591437281-460bfbe1220a','1573408301185-9146fe634ad0'];
      @endphp
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        @forelse(($categories ?? collect())->take(6) as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group text-center">
            <div style="border-radius:50%; overflow:hidden; aspect-ratio:1; border:1px solid #ECDCD5;">
              <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-'.$catImgs[$i % count($catImgs)].'?auto=format&fit=crop&w=500&q=75' }}" alt="{{ $cat->name }}" style="width:100%; height:100%; object-fit:cover; transition:transform .4s ease;" class="group-hover:scale-105">
            </div>
            <p class="vm-serif mt-4" style="font-size:1.15rem; font-weight:400;">{{ $cat->name }}</p>
          </a>
        @empty
          <p class="col-span-full text-center text-sm" style="opacity:.6;">{{ __('messages.Vermeil_NoCategoriesYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product grid ============ -->
  <section class="px-6 md:px-10 py-16 md:py-20" style="border-top:1px solid #ECDCD5;">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p class="vm-label mb-3">{{ __('messages.Vermeil_FeaturedKicker') }}</p>
          <h2 class="vm-serif" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">{{ __('messages.Vermeil_FeaturedPieces') }}</h2>
        </div>
        <a href="{{ route('store.shop') }}" class="vm-nav-link" style="border-bottom:1px solid #C9846B;">{{ __('messages.ViewAll') }}</a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
        @php $items = ($products ?? collect())->take(8); @endphp
        @forelse($items as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-center text-sm" style="opacity:.6;">{{ __('messages.Vermeil_NoProductsYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL / BRAND STORY — craftsmanship copy, single image ============ -->
  <section class="px-6 md:px-10 py-16 md:py-24" style="border-top:1px solid #ECDCD5; background:#F7EAE5;">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div style="border-radius:2px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80" alt="{{ __('messages.Vermeil_AtelierImageAlt') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div>
        <p class="vm-label mb-4">{{ __('messages.Vermeil_AtelierKicker') }}</p>
        <h2 class="vm-serif mb-5" style="font-size:clamp(1.7rem,3vw,2.3rem); line-height:1.2;">{{ __('messages.Vermeil_AtelierHeadline') }}</h2>
        <p class="text-sm leading-relaxed mb-4" style="opacity:.85;">{{ __('messages.Vermeil_AtelierParagraphOne') }}</p>
        <p class="text-sm leading-relaxed mb-7" style="opacity:.85;">{{ __('messages.Vermeil_AtelierParagraphTwo') }}</p>
        <a href="{{ route('store.contact') }}" class="vm-btn">{{ __('messages.Vermeil_MeetTheMakers') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ SECOND EDITORIAL BEAT — reversed, gold-plating specific copy ============ -->
  <section class="px-6 md:px-10 py-16 md:py-24">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div class="order-2 md:order-1">
        <p class="vm-label mb-4">{{ __('messages.Vermeil_TechniqueKicker') }}</p>
        <h2 class="vm-serif mb-5" style="font-size:clamp(1.7rem,3vw,2.3rem); line-height:1.2;">{{ __('messages.Vermeil_TechniqueHeadline') }}</h2>
        <p class="text-sm leading-relaxed" style="opacity:.85;">{{ __('messages.Vermeil_TechniqueParagraph') }}</p>
      </div>
      <div class="order-1 md:order-2" style="border-radius:2px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" alt="{{ __('messages.Vermeil_TechniqueImageAlt') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="px-6 md:px-10 py-16 md:py-20" style="border-top:1px solid #ECDCD5;">
    <div class="max-w-xl mx-auto text-center">
      <p class="vm-label mb-3">{{ __('messages.Vermeil_Newsletter') }}</p>
      <h2 class="vm-serif mb-4" style="font-size:clamp(1.6rem,3vw,2.1rem);">{{ __('messages.Vermeil_NewsletterHeadline') }}</h2>
      <p class="text-sm mb-8" style="opacity:.75;">{{ __('messages.Vermeil_NewsletterBody') }}</p>
      <form id="newsletterForm" action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-3">
        @csrf
        <input id="newsletterEmail" type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-4 py-3 text-sm outline-none" style="background:#FFFDFC; border:1px solid #ECDCD5; color:#4A3D3A;" />
        <button id="newsletterBtn" type="submit" class="vm-btn vm-btn-solid">{{ __('messages.Subscribe') }}</button>
      </form>
      <div id="newsletterMsg" class="min-h-[1rem] mt-3 text-sm"></div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
