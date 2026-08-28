@extends('store.nocturne.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php
  $currency = $s->currency_code ?? '$';
  // Verified-working Unsplash jewelry photography, treated with the .nc-duotone
  // grayscale+amber filter for the noir-editorial signature look.
  $ncImgs = [
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=900&q=80',
  ];
@endphp
<div class="theme-nocturne" style="background:rgb(10 10 11); color:rgb(245 244 241);">

  <!-- ============ HERO — full-bleed duotone photo, bold uppercase overlay type ============ -->
  <section class="relative overflow-hidden" style="min-height:min(640px, 92vh);">
    <img src="{{ $ncImgs[0] }}" alt="{{ $s->store_name ?? 'Nocturne' }}" class="nc-duotone" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
    <div class="absolute inset-0" style="background:linear-gradient(0deg, rgba(10,10,11,.95) 0%, rgba(10,10,11,.35) 55%, rgba(10,10,11,.15) 100%);"></div>
    <div class="relative h-full flex flex-col justify-end px-6 md:px-14 pb-16 pt-32" style="min-height:min(640px, 92vh);">
      <p class="nc-eyebrow mb-5">{{ __('messages.Nocturne_HeroEyebrow') }}</p>
      <h1 class="nc-display uppercase" style="font-size:clamp(2.6rem,7vw,5.4rem); line-height:1; max-width:14ch;">{{ $s->hero_title ?? __('messages.Nocturne_HeroTitleFallback') }}</h1>
      <p class="text-base mt-6 max-w-lg" style="color:rgb(176 174 168);">{{ $s->hero_subtitle ?? __('messages.Nocturne_HeroSubtitleFallback') }}</p>
      <div class="flex flex-wrap gap-4 mt-9">
        <a href="{{ route('store.shop') }}" class="nc-btn">{{ __('messages.Nocturne_ExploreCollection') }}</a>
        <a href="{{ route('store.contact') }}" class="nc-btn nc-btn-ghost">{{ __('messages.Nocturne_RequestPrivateViewing') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP ============ -->
  <section class="px-6 md:px-12 py-12" style="background:rgb(17 17 19); border-top:1px solid rgb(42 42 46); border-bottom:1px solid rgb(42 42 46);">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="flex flex-col items-center text-center gap-3">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="rgb(196 152 82)" stroke-width="1.4"><path d="M12 2l2.4 6.5L21 11l-6.6 2.5L12 20l-2.4-6.5L3 11l6.6-2.5z"/></svg>
        <p class="nc-label">{{ __('messages.Nocturne_TrustHandCraftedTitle') }}</p>
        <p class="text-xs" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_TrustHandCraftedDesc') }}</p>
      </div>
      <div class="flex flex-col items-center text-center gap-3">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="rgb(196 152 82)" stroke-width="1.4"><path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7l8-4z"/></svg>
        <p class="nc-label">{{ __('messages.Nocturne_TrustCertifiedTitle') }}</p>
        <p class="text-xs" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_TrustCertifiedDesc') }}</p>
      </div>
      <div class="flex flex-col items-center text-center gap-3">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="rgb(196 152 82)" stroke-width="1.4"><path d="M3 12l4-8h10l4 8-9 10-9-10z"/><path d="M3 12h18M12 4v18"/></svg>
        <p class="nc-label">{{ __('messages.Nocturne_TrustRareMaterialsTitle') }}</p>
        <p class="text-xs" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_TrustRareMaterialsDesc') }}</p>
      </div>
      <div class="flex flex-col items-center text-center gap-3">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="rgb(196 152 82)" stroke-width="1.4"><path d="M4 8V6a4 4 0 018 0v2m-9 0h10l-1 12H5L4 8z"/></svg>
        <p class="nc-label">{{ __('messages.Nocturne_TrustInsuredShippingTitle') }}</p>
        <p class="text-xs" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_TrustInsuredShippingDesc') }}</p>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — duotone photography grid ============ -->
  <section class="px-6 md:px-12 py-20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <p class="nc-eyebrow mb-3">{{ __('messages.Nocturne_CategoriesEyebrow') }}</p>
        <h2 class="nc-display" style="font-size:clamp(1.9rem,4vw,2.8rem);">{{ __('messages.Nocturne_CategoriesTitle') }}</h2>
        <div class="nc-rule mx-auto mt-4"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        @forelse(($categories ?? collect())->take(8) as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group block nc-frame" style="overflow:hidden; aspect-ratio:3/4; position:relative;">
            <img src="{{ $cat->cover_image_url ?? $ncImgs[$i % count($ncImgs)] }}" alt="{{ $cat->name }}" loading="lazy" class="nc-duotone group-hover:scale-105" style="width:100%; height:100%; object-fit:cover; transition:transform .5s ease;">
            <div class="absolute inset-0" style="background:linear-gradient(to top, rgba(10,10,11,.92), transparent 55%);"></div>
            <span class="absolute bottom-4 left-4 right-4 nc-display text-lg" style="color:rgb(245 244 241);">{{ $cat->name }}</span>
          </a>
        @empty
          <p class="col-span-full text-sm text-center" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_NoCategoriesYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product cards ============ -->
  <section class="px-6 md:px-12 py-20" style="background:rgb(17 17 19); border-top:1px solid rgb(42 42 46); border-bottom:1px solid rgb(42 42 46);">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-10 flex-wrap gap-3">
        <div>
          <p class="nc-eyebrow mb-3">{{ __('messages.Nocturne_FeaturedEyebrow') }}</p>
          <h2 class="nc-display" style="font-size:clamp(1.9rem,4vw,2.8rem);">{{ __('messages.Nocturne_FeaturedTitle') }}</h2>
        </div>
        <a href="{{ route('store.shop') }}" class="nc-label" style="text-decoration:underline; text-underline-offset:4px;">{{ __('messages.ViewAll') }}</a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        @php $items = ($products ?? collect())->take(12); @endphp
        @forelse($items as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-sm text-center" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_NoProductsYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL STRIP — three-photo duotone band, full width ============ -->
  <section class="grid grid-cols-3" style="height:340px;">
    <div class="nc-frame" style="overflow:hidden;"><img src="{{ $ncImgs[3] }}" alt="" class="nc-duotone" style="width:100%; height:100%; object-fit:cover;"></div>
    <div class="nc-frame" style="overflow:hidden;"><img src="{{ $ncImgs[4] }}" alt="" class="nc-duotone" style="width:100%; height:100%; object-fit:cover;"></div>
    <div class="nc-frame" style="overflow:hidden;"><img src="{{ $ncImgs[5] }}" alt="" class="nc-duotone" style="width:100%; height:100%; object-fit:cover;"></div>
  </section>

  <!-- ============ EDITORIAL / BRAND STORY ============ -->
  <section class="px-6 md:px-12 py-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <div class="nc-frame" style="overflow:hidden; aspect-ratio:4/5;">
        <img src="{{ $ncImgs[6] }}" alt="{{ __('messages.Nocturne_StoryImageAlt') }}" class="nc-duotone" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div>
        <p class="nc-eyebrow mb-4">{{ __('messages.Nocturne_StoryEyebrow') }}</p>
        <h2 class="nc-display mb-6" style="font-size:clamp(1.8rem,3.5vw,2.6rem); line-height:1.2;">{{ __('messages.Nocturne_StoryHeadline') }}</h2>
        <p class="text-sm leading-relaxed mb-4" style="color:rgb(176 174 168);">{{ __('messages.Nocturne_StoryParagraphOne') }}</p>
        <p class="text-sm leading-relaxed mb-8" style="color:rgb(176 174 168);">{{ __('messages.Nocturne_StoryParagraphTwo') }}</p>
        <a href="{{ route('store.contact') }}" class="nc-btn nc-btn-ghost">{{ __('messages.Nocturne_MeetTheAtelier') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="relative px-6 md:px-12 py-20 text-center overflow-hidden" style="background:rgb(10 10 11); border-top:1px solid rgb(42 42 46);">
    <div class="relative max-w-lg mx-auto">
      <p class="nc-eyebrow mb-4">{{ __('messages.Nocturne_NewsletterEyebrow') }}</p>
      <h2 class="nc-display mb-4" style="font-size:clamp(1.6rem,3vw,2.2rem);">{{ __('messages.Nocturne_NewsletterTitle') }}</h2>
      <p class="text-sm mb-8" style="color:rgb(122 120 114);">{{ __('messages.Nocturne_NewsletterSubtitle') }}</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2 max-w-sm mx-auto">
        @csrf
        <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-4 py-3 text-sm outline-none" style="background:rgba(245,244,241,.05); border:1px solid rgb(68 68 74); color:rgb(245 244 241);" />
        <button type="submit" class="nc-btn">{{ __('messages.Subscribe') }}</button>
      </form>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
