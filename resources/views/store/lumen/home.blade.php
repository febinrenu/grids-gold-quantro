@extends('store.lumen.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php $currency = $s->currency_code ?? '$'; @endphp
<div class="theme-lumen" style="background:#FDFCFA; color:#2A2620;">

  <!-- ============ HERO — centered single column, radial glow behind headline ============ -->
  <section class="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
    <div class="lm-glow"></div>
    <div class="relative max-w-2xl mx-auto text-center" style="z-index:1;">
      <p class="lm-eyebrow mb-6">{{ __('messages.Lumen_Eyebrow') }}</p>
      <h1 class="lm-italic" style="font-size:clamp(2.6rem,6vw,4.4rem); line-height:1.1; color:#2A2620;">{{ $s->hero_title ?? __('messages.Lumen_HeroTitle') }}</h1>
      <p class="text-base mt-6 max-w-md mx-auto" style="color:#7c7362; line-height:1.75; font-weight:300;">{{ $s->hero_subtitle ?? __('messages.Lumen_HeroSubtitle') }}</p>
      <div class="flex flex-wrap items-center justify-center gap-4 mt-10">
        <a href="{{ route('store.shop') }}" class="lm-btn lm-btn-gold">{{ __('messages.Lumen_ExploreCollection') }}</a>
        <a href="{{ route('store.contact') }}" class="lm-btn lm-btn-outline">{{ __('messages.Lumen_BookConsultation') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP — 4 items, inline SVG icons, hairline dividers ============ -->
  <section class="border-t border-b lm-hairline">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x lm-hairline" style="border-color:#E8E2D6;">
      <div class="px-6 py-10 text-center">
        <svg class="w-6 h-6 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#D4AF6A" stroke-width="1.1"><path d="M12 2l2.6 6.2L21 9l-5 4.6L17.4 21 12 17.3 6.6 21 8 13.6 3 9l6.4-.8z"/></svg>
        <p class="lm-serif text-sm" style="letter-spacing:.02em;">{{ __('messages.Lumen_TrustHandCraftedTitle') }}</p>
        <p class="text-xs mt-2" style="color:#948a7a;">{{ __('messages.Lumen_TrustHandCraftedDesc') }}</p>
      </div>
      <div class="px-6 py-10 text-center">
        <svg class="w-6 h-6 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#D4AF6A" stroke-width="1.1"><path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7z"/></svg>
        <p class="lm-serif text-sm">{{ __('messages.Lumen_TrustCertifiedTitle') }}</p>
        <p class="text-xs mt-2" style="color:#948a7a;">{{ __('messages.Lumen_TrustCertifiedDesc') }}</p>
      </div>
      <div class="px-6 py-10 text-center">
        <svg class="w-6 h-6 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#D4AF6A" stroke-width="1.1"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>
        <p class="lm-serif text-sm">{{ __('messages.Lumen_TrustSecureTitle') }}</p>
        <p class="text-xs mt-2" style="color:#948a7a;">{{ __('messages.Lumen_TrustSecureDesc') }}</p>
      </div>
      <div class="px-6 py-10 text-center">
        <svg class="w-6 h-6 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#D4AF6A" stroke-width="1.1"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>
        <p class="lm-serif text-sm">{{ __('messages.Lumen_TrustReturnsTitle') }}</p>
        <p class="text-xs mt-2" style="color:#948a7a;">{{ __('messages.Lumen_TrustReturnsDesc') }}</p>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — real category images, airy grid ============ -->
  <section class="px-6 md:px-10 py-24">
    <div class="max-w-6xl mx-auto text-center mb-14">
      <p class="lm-eyebrow mb-4">{{ __('messages.Lumen_Curated') }}</p>
      <h2 class="lm-italic" style="font-size:clamp(1.8rem,3.4vw,2.6rem); color:#2A2620;">{{ __('messages.Lumen_ShopByCategory') }}</h2>
    </div>
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      @forelse(($categories ?? collect())->take(8) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group block text-center">
          <div class="overflow-hidden mb-4" style="aspect-ratio:1; border-radius:1px; background:#F5F1E9;">
            <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=70' }}" alt="{{ $cat->name }}" style="width:100%; height:100%; object-fit:cover; transition:transform .5s ease;" class="group-hover:scale-105">
          </div>
          <p class="lm-serif text-sm" style="color:#2A2620;">{{ $cat->name }}</p>
        </a>
      @empty
        <p class="col-span-full text-sm text-center" style="color:#948a7a;">{{ __('messages.Lumen_NoCategoriesYet') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product cards ============ -->
  <section class="px-6 md:px-10 py-24 border-t lm-hairline" style="background:#FAF8F4;">
    <div class="max-w-6xl mx-auto flex items-end justify-between mb-12 flex-wrap gap-4">
      <div>
        <p class="lm-eyebrow mb-4">{{ __('messages.Lumen_NewArrivals') }}</p>
        <h2 class="lm-italic" style="font-size:clamp(1.8rem,3.4vw,2.6rem); color:#2A2620;">{{ __('messages.Lumen_FeaturedPieces') }}</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="lm-link-u text-sm" style="color:#605848;">{{ __('messages.ViewAll') }}</a>
    </div>
    <div class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      @php $items = ($products ?? collect())->take(18); @endphp
      @forelse($items as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm text-center" style="color:#948a7a;">{{ __('messages.Lumen_NoProductsYet') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ EDITORIAL / BRAND STORY — image + copy, generous whitespace ============ -->
  <section class="px-6 md:px-10 py-28">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p class="lm-eyebrow mb-5">{{ __('messages.Lumen_OurCraft') }}</p>
        <h2 class="lm-italic mb-6" style="font-size:clamp(1.8rem,3.6vw,2.8rem); line-height:1.2; color:#2A2620;">{{ __('messages.Lumen_CraftHeadline') }}</h2>
        <p class="text-sm mb-4" style="color:#7c7362; line-height:1.85; font-weight:300;">{{ __('messages.Lumen_CraftParagraph1') }}</p>
        <p class="text-sm mb-8" style="color:#7c7362; line-height:1.85; font-weight:300;">{{ __('messages.Lumen_CraftParagraph2') }}</p>
        <a href="{{ route('store.contact') }}" class="lm-btn lm-btn-outline">{{ __('messages.Lumen_OurStory') }}</a>
      </div>
      <div style="aspect-ratio:4/5; overflow:hidden; border-radius:1px;">
        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80" alt="{{ __('messages.Lumen_CraftHeadline') }}" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER — quiet, centered, hairline framed ============ -->
  <section class="px-6 md:px-10 py-24 border-t lm-hairline" style="background:#FAF8F4;">
    <div class="max-w-lg mx-auto text-center">
      <p class="lm-eyebrow mb-5">{{ __('messages.Lumen_JoinTheLight') }}</p>
      <h2 class="lm-italic mb-4" style="font-size:clamp(1.6rem,3vw,2.2rem); color:#2A2620;">{{ __('messages.Lumen_NewsletterHeadline') }}</h2>
      <p class="text-sm mb-8" style="color:#7c7362; line-height:1.75;">{{ __('messages.Lumen_NewsletterCopy') }}</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-3 max-w-sm mx-auto">
        @csrf
        <input type="email" name="email" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 px-4 py-3 text-sm outline-none border lm-hairline bg-white" style="color:#2A2620; border-radius:1px;" />
        <button type="submit" class="lm-btn lm-btn-gold">{{ __('messages.Subscribe') }}</button>
      </form>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
