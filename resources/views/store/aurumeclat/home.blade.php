@extends('store.aurumeclat.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-aurumeclat bg-brand-black text-[#EDE6D6]">

  <!-- ============ HERO ============ -->
  <section class="relative overflow-hidden bg-gradient-to-br from-[#1B1712] to-[#0F0D0A]">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-5">
          <span class="h-px w-10 bg-brand-gold"></span>
          <span class="eyebrow text-[11px] text-brand-gold font-semibold">{{ __('messages.Aurumeclat_Eyebrow') }}</span>
        </div>
        <h1 class="font-logo text-4xl sm:text-5xl md:text-[54px] leading-[1.1] mb-5">
          <span class="text-white">{{ $s->hero_title ?? __('messages.Aurumeclat_HeroTitleDefault') }}</span><br/>
          <span class="text-brand-gold">{{ __('messages.Aurumeclat_HeroTitleAccent') }}</span>
        </h1>
        <p class="text-white/60 max-w-sm mb-7 text-sm md:text-base leading-relaxed">{{ $s->hero_subtitle ?? __('messages.Aurumeclat_HeroSubtitleDefault') }}</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="#bestsellers" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldDark transition text-black font-semibold px-6 py-3 text-xs nav-spaced">
            {{ __('messages.Aurumeclat_ShopFineJewelry') }}
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 text-xs nav-spaced hover:bg-white/10 transition">{{ __('messages.Aurumeclat_BookPrivateAppointment') }}</a>
        </div>
        <div class="hidden md:flex items-center gap-6 mt-10 pt-6 border-t border-white/10 text-[11px] text-white/60">
          <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>{{ __('messages.Aurumeclat_GoldKarats') }}</span>
          <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/></svg>{{ __('messages.Aurumeclat_IgiGiaCertified') }}</span>
          <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"/><path d="M9 10l2 2 4-4"/></svg>{{ __('messages.Aurumeclat_LifetimeServicePromise') }}</span>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80"
               alt="{{ __('messages.Aurumeclat_AltGoldNecklace') }}" class="w-full h-full object-cover" loading="eager">
        </div>
        <div class="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-brand-black border border-brand-gold/40 rounded-xl px-5 py-4 shadow-2xl">
          <svg class="w-8 h-8 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/></svg>
          <div>
            <p class="font-logo text-lg text-white leading-none">{{ __('messages.Aurumeclat_IgiCertifiedBadge') }}</p>
            <p class="text-[10px] text-white/50 eyebrow mt-1">{{ __('messages.Aurumeclat_NaturalDiamonds') }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden max-w-7xl mx-auto px-4 pb-8">
      <div class="grid grid-cols-4 gap-3 bg-white/5 rounded-xl py-4">
        <a href="#gold-rate" class="flex flex-col items-center gap-1.5"><svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg><span class="text-[9.5px] text-white/70 text-center">{{ __('messages.Aurumeclat_GoldRateLabel') }}</span></a>
        <a href="{{ route('store.shop') }}" class="flex flex-col items-center gap-1.5"><svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/></svg><span class="text-[9.5px] text-white/70 text-center">{{ __('messages.Aurumeclat_DiamondsLabel') }}</span></a>
        <a href="{{ route('store.contact') }}" class="flex flex-col items-center gap-1.5"><svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><span class="text-[9.5px] text-white/70 text-center">{{ __('messages.Aurumeclat_CustomDesignLabel') }}</span></a>
        <a href="{{ route('store.shop') }}" class="flex flex-col items-center gap-1.5"><svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.8-10-9.3C.5 8 2 4.5 5.5 4c2-.3 3.8.7 4.9 2.3C11.5 4.7 13.3 3.7 15.3 4c3.5.5 5 4 3.5 7.7C21.5 16.2 12 21 12 21z"/></svg><span class="text-[9.5px] text-white/70 text-center">{{ __('messages.Aurumeclat_BridalLabel') }}</span></a>
      </div>
    </div>
  </section>

  <!-- ============ INFO BAR (4 cards incl. gold rate) ============ -->
  <section id="gold-rate" class="bg-brand-cream text-[#241C12]">
    <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl p-4 shadow-card">
        <p class="text-sm font-semibold mb-2 text-[#241C12]">{{ __('messages.Aurumeclat_TodaysGoldRate') }}</p>
        <div class="flex items-center justify-between text-xs mb-1 text-[#241C12]"><span>24K (999)</span><span class="font-bold text-base">{{ $s->currency_code ?? '$' }}2,362 /oz</span></div>
        <div class="flex items-center justify-between text-xs mb-2 text-[#7a6a58]"><span>22K (916)</span><span class="font-semibold">{{ $s->currency_code ?? '$' }}2,168 /oz</span></div>
        <svg viewBox="0 0 100 24" class="w-full h-6 mb-2"><polyline points="0,18 15,15 30,17 45,10 60,12 75,6 100,4" fill="none" stroke="#AD8748" stroke-width="2"/></svg>
        <a href="#" class="text-[11px] font-semibold text-brand-goldDark hover:opacity-70 transition">{{ __('messages.Aurumeclat_ViewLiveGoldRate') }}</a>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-card">
        <p class="text-sm font-semibold mb-2 text-[#241C12]">{{ __('messages.Aurumeclat_CertifiedDiamondsHeading') }}</p>
        <p class="text-xs text-[#7a6a58] mb-1">{{ __('messages.Aurumeclat_IgiGiaCertified') }}</p>
        <p class="text-xs text-[#7a6a58] mb-1">{{ __('messages.Aurumeclat_ConflictFree') }}</p>
        <p class="text-xs text-[#7a6a58] mb-3">{{ __('messages.Aurumeclat_HundredPercentNatural') }}</p>
        <svg viewBox="0 0 60 40" class="w-10 h-7"><rect x="20" y="8" width="20" height="20" transform="rotate(45 30 18)" fill="none" stroke="#AD8748" stroke-width="2"/></svg>
      </div>
      <div class="bg-gradient-to-br from-brand-gold to-brand-goldDark rounded-xl p-4 shadow-card text-black">
        <p class="text-sm font-bold mb-1">{!! __('messages.Aurumeclat_CustomDesignConsultation') !!}</p>
        <p class="text-xs mb-4 text-black/70">{{ __('messages.Aurumeclat_BringDreamToLife') }}</p>
        <a href="{{ route('store.contact') }}" class="text-[11px] font-bold inline-flex items-center gap-1">{{ __('messages.Aurumeclat_BookConsultation') }}</a>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-card">
        <p class="text-sm font-semibold mb-2 text-[#241C12]">{{ __('messages.Aurumeclat_BridalWedding') }}</p>
        <p class="text-xs text-[#7a6a58] mb-4">{{ __('messages.Aurumeclat_CelebrateForever') }}</p>
        <a href="{{ route('store.shop') }}" class="text-[11px] font-semibold text-brand-goldDark hover:opacity-70 transition">{{ __('messages.Aurumeclat_ExploreBridal') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ SHOP BY SIGNATURE COLLECTION ============ -->
  <section class="bg-brand-cream text-[#241C12] pb-10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col items-center text-center mb-6">
        <svg class="w-3 h-3 text-brand-goldDark mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>
        <h2 class="eyebrow text-sm md:text-base font-semibold">{{ __('messages.Aurumeclat_ShopBySignatureCollection') }}</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        @php
          $catIcons = [
            '<circle cx="12" cy="15" r="6"/><path d="M9 9l3-6 3 6"/>',
            '<path d="M12 3v6M8 9h8l-4 12z"/>',
            '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
            '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="4"/>',
            '<circle cx="12" cy="15" r="6"/><path d="M9 9l3-6 3 6"/>',
            '<circle cx="7" cy="12" r="3"/><circle cx="12" cy="8" r="3"/><circle cx="17" cy="12" r="3"/>',
            '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
          ];
          $grads = ['from-[#3a3a3a] to-[#111]','from-[#4a2018] to-[#1a0d0a]','from-[#232323] to-[#0a0a0a]','from-[#1e3a2f] to-[#0a1a14]','from-[#8C6B3F] to-[#4a3a24]','from-[#3D1A24] to-[#1a0a0e]','from-[#1e2a4a] to-[#0a0e1a]','from-[#232323] to-[#0a0a0a]'];
        @endphp
        @forelse(($categories ?? collect())->take(8) as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group relative rounded-lg overflow-hidden aspect-[4/5] flex items-end justify-center pb-4 {{ $cat->cover_image_url ? '' : 'bg-gradient-to-br '.$grads[$i % count($grads)] }}">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>
            @else
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <svg class="absolute top-1/3 w-10 h-10 text-brand-gold/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">{!! $catIcons[$i % count($catIcons)] !!}</svg>
            @endif
            <span class="relative z-10 text-white text-[10px] md:text-xs font-semibold eyebrow text-center px-2">{{ Str::upper($cat->name) }}</span>
          </a>
        @empty
          <p class="col-span-full text-[#7a6a58] text-sm text-center">{{ __('messages.Aurumeclat_NoCategoriesYet') }}</p>
        @endforelse
      </div>
      <div class="flex justify-center mt-6">
        <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-brand-black hover:bg-black transition text-white font-semibold px-7 py-3 text-xs eyebrow">{{ __('messages.Aurumeclat_ExploreAllCollections') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ BESTSELLING PIECES (real products) ============ -->
  <section id="bestsellers" class="bg-brand-black py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-end justify-between mb-5">
        <div>
          <p class="eyebrow text-[10px] text-brand-gold font-semibold mb-1">{{ __('messages.Aurumeclat_CuratedBestsellers') }}</p>
          <h2 class="font-logo text-2xl md:text-3xl text-white">{{ __('messages.Aurumeclat_BestsellingPieces') }}</h2>
        </div>
        <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-white/70 hover:text-brand-gold transition flex items-center gap-1">{{ __('messages.Aurumeclat_ViewAllCaps') }}
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
        </a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
        @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(5); @endphp
        @forelse($bestsellers as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-white/50 text-sm">{{ __('messages.Aurumeclat_NoProductsAvailableYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ 5-COLUMN FEATURE STRIP ============ -->
  <section class="bg-brand-charcoal py-10 border-y border-white/5">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
      <div>
        <svg class="w-7 h-7 text-brand-gold mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7.5-4.8-10-9.3C.5 8 2 4.5 5.5 4c2-.3 3.8.7 4.9 2.3C11.5 4.7 13.3 3.7 15.3 4c3.5.5 5 4 3.5 7.7C21.5 16.2 12 21 12 21z"/></svg>
        <h3 class="font-logo text-lg text-white mb-1.5">{{ __('messages.Aurumeclat_TheBridalEdit') }}</h3>
        <p class="text-xs text-white/50 mb-3">{{ __('messages.Aurumeclat_CelebrateYourForever') }}</p>
        <a href="{{ route('store.shop') }}" class="text-[11px] eyebrow font-semibold text-brand-gold hover:opacity-70 transition">{{ __('messages.Aurumeclat_ExploreCaps') }}</a>
      </div>
      <div>
        <svg class="w-7 h-7 text-brand-gold mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z"/></svg>
        <h3 class="font-logo text-lg text-white mb-1.5">{{ __('messages.Aurumeclat_TimelessHeirlooms') }}</h3>
        <p class="text-xs text-white/50 mb-3">{{ __('messages.Aurumeclat_MadeToBePassedDown') }}</p>
        <a href="{{ route('store.shop') }}" class="text-[11px] eyebrow font-semibold text-brand-gold hover:opacity-70 transition">{{ __('messages.Aurumeclat_DiscoverCaps') }}</a>
      </div>
      <div class="hidden md:flex flex-col items-center">
        <div class="w-16 h-16 rounded-full border border-brand-gold/50 flex items-center justify-center mb-2">
          <span class="font-logo text-2xl text-brand-gold">A</span>
        </div>
        <p class="eyebrow text-[9px] text-white/40 max-w-[120px]">{!! __('messages.Aurumeclat_CraftedWithPassion') !!}</p>
      </div>
      <div>
        <svg class="w-7 h-7 text-brand-gold mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>
        <h3 class="font-logo text-lg text-white mb-1.5">{{ __('messages.Aurumeclat_CustomCraftedForYou') }}</h3>
        <p class="text-xs text-white/50 mb-3">{{ __('messages.Aurumeclat_YourVisionOurArtistry') }}</p>
        <a href="{{ route('store.contact') }}" class="text-[11px] eyebrow font-semibold text-brand-gold hover:opacity-70 transition">{{ __('messages.Aurumeclat_StartDesign') }}</a>
      </div>
      <div>
        <svg class="w-7 h-7 text-brand-gold mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/></svg>
        <h3 class="font-logo text-lg text-white mb-1.5">{{ __('messages.Aurumeclat_CertifiedPurityAuthenticity') }}</h3>
        <p class="text-xs text-white/50 mb-3">{{ __('messages.Aurumeclat_TrustInEveryDetail') }}</p>
        <a href="{{ route('store.shop') }}" class="text-[11px] eyebrow font-semibold text-brand-gold hover:opacity-70 transition">{{ __('messages.Aurumeclat_LearnMoreCaps') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ 2-COLUMN EDITORIAL BANNER (real photos) ============ -->
  <section class="max-w-7xl mx-auto px-4 py-10">
    <div class="grid md:grid-cols-2 gap-4 md:gap-6">
      <div class="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-7">
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
             alt="{{ __('messages.Aurumeclat_AltEngagementRing') }}" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
        <div class="relative z-10">
          <h3 class="font-logo text-2xl text-white mb-1.5">{{ __('messages.Aurumeclat_DesignYourPiece') }}</h3>
          <p class="text-sm text-brand-gold mb-2">{{ __('messages.Aurumeclat_MakeItUniquelyYours') }}</p>
          <p class="text-xs text-white/70 max-w-xs mb-5">{{ __('messages.Aurumeclat_ConceptToCreation') }}</p>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldDark transition text-black font-semibold px-6 py-3 text-xs eyebrow w-fit">{{ __('messages.Aurumeclat_StartCustomDesign') }}</a>
        </div>
      </div>

      <div class="relative rounded-2xl overflow-hidden min-h-[280px] p-7 flex flex-col justify-center bg-brand-cream text-[#241C12]">
        <div class="relative z-10">
          <h3 class="font-logo text-2xl mb-2">{{ __('messages.Aurumeclat_BookAPrivateAppointmentHeading') }}</h3>
          <p class="text-xs text-[#5a4a3a] mb-1">{{ __('messages.Aurumeclat_OneOnOneInStoreVirtual') }}</p>
          <ul class="text-xs text-[#5a4a3a] space-y-1 mb-5 mt-2">
            <li class="flex items-center gap-1.5"><svg class="w-3 h-3 text-brand-goldDark shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l4 4L19 6"/></svg>{{ __('messages.Aurumeclat_PersonalizedStyling') }}</li>
            <li class="flex items-center gap-1.5"><svg class="w-3 h-3 text-brand-goldDark shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l4 4L19 6"/></svg>{{ __('messages.Aurumeclat_DiamondEducation') }}</li>
            <li class="flex items-center gap-1.5"><svg class="w-3 h-3 text-brand-goldDark shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l4 4L19 6"/></svg>{{ __('messages.Aurumeclat_CustomCreations') }}</li>
          </ul>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 bg-brand-black hover:bg-black transition text-white font-semibold px-6 py-3 text-xs eyebrow w-fit">{{ __('messages.Aurumeclat_BookAppointment') }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ NEW ARRIVALS (real products, horizontal scroll) ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="flex items-center justify-between mb-4">
      <h2 class="eyebrow text-sm md:text-base font-semibold">{{ __('messages.Aurumeclat_NewArrivals') }}</h2>
      <a href="{{ route('store.shop') }}" class="text-xs font-semibold text-brand-gold hover:opacity-70 transition">{{ __('messages.Aurumeclat_ViewAllCaps') }}</a>
    </div>
    <div class="relative">
      <button id="aeNaPrev" class="hidden md:flex absolute -left-4 top-1/3 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-black/10 shadow-card items-center justify-center hover:bg-gray-50 transition text-black"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg></button>
      <div id="aeNaScroll" class="flex gap-3 md:gap-4 overflow-x-auto pb-2" style="scroll-behavior:smooth; scrollbar-width:none;">
        @php $newArrivals = ($products ?? collect())->slice(5, 6); @endphp
        @forelse($newArrivals as $p)
          <div class="shrink-0 w-40 sm:w-44">
            @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
          </div>
        @empty
          @foreach($bestsellers->take(4) as $p)
            <div class="shrink-0 w-40 sm:w-44">
              @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
            </div>
          @endforeach
        @endforelse
      </div>
      <button id="aeNaNext" class="hidden md:flex absolute -right-4 top-1/3 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-black/10 shadow-card items-center justify-center hover:bg-gray-50 transition text-black"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button>
    </div>
  </section>

  <!-- ============ TRUST BAR ============ -->
  <section class="bg-brand-charcoal border-y border-white/5 py-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-5">
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/></svg>
        <div><p class="font-semibold text-xs md:text-sm text-white">{{ __('messages.Aurumeclat_IgiGiaCertified') }}</p><p class="text-[10px] md:text-xs text-white/50">{{ __('messages.Aurumeclat_HundredPercentGenuine') }}</p></div>
      </div>
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>
        <div><p class="font-semibold text-xs md:text-sm text-white">{{ __('messages.Aurumeclat_GoldKarats') }}</p><p class="text-[10px] md:text-xs text-white/50">{{ __('messages.Aurumeclat_HallmarkedJewelry') }}</p></div>
      </div>
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>
        <div><p class="font-semibold text-xs md:text-sm text-white">{{ __('messages.Aurumeclat_SecureInsuredDelivery') }}</p><p class="text-[10px] md:text-xs text-white/50">{{ __('messages.Aurumeclat_SafeDiscreet') }}</p></div>
      </div>
      <div class="flex items-center gap-2.5">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"/><path d="M9 10l2 2 4-4"/></svg>
        <div><p class="font-semibold text-xs md:text-sm text-white">{{ __('messages.Aurumeclat_LifetimeService') }}</p><p class="text-[10px] md:text-xs text-white/50">{{ __('messages.Aurumeclat_PolishResizeRepair') }}</p></div>
      </div>
      <div class="hidden md:flex items-center gap-2.5">
        <svg class="w-6 h-6 text-brand-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0013.9 3.5M18.5 9A8 8 0 004.6 5.5"/></svg>
        <div><p class="font-semibold text-sm text-white">{{ __('messages.Aurumeclat_EasyReturns') }}</p><p class="text-xs text-white/50">{{ __('messages.Aurumeclat_ThirtyDayPolicy') }}</p></div>
      </div>
    </div>
  </section>

  <!-- ============ TESTIMONIALS ============ -->
  <section class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="eyebrow text-sm md:text-base font-semibold text-center mb-6">{{ __('messages.Aurumeclat_WhatOurClientsSay') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="bg-brand-charcoal rounded-xl p-5">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">P</div>
          <p class="text-sm font-semibold text-white">Priya S.</p>
        </div>
        <div class="text-amber-400 text-xs mb-2">★★★★★</div>
        <p class="text-sm text-white/60">"{{ __('messages.Aurumeclat_Testimonial1') }}"</p>
      </div>
      <div class="bg-brand-charcoal rounded-xl p-5">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">A</div>
          <p class="text-sm font-semibold text-white">Arjun S.</p>
        </div>
        <div class="text-amber-400 text-xs mb-2">★★★★★</div>
        <p class="text-sm text-white/60">"{{ __('messages.Aurumeclat_Testimonial2') }}"</p>
      </div>
      <div class="bg-brand-charcoal rounded-xl p-5">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">N</div>
          <p class="text-sm font-semibold text-white">Nisha R.</p>
        </div>
        <div class="text-amber-400 text-xs mb-2">★★★★★</div>
        <p class="text-sm text-white/60">"{{ __('messages.Aurumeclat_Testimonial3') }}"</p>
      </div>
    </div>
  </section>

  <!-- ============ AURUMÉCLAT CLUB ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="bg-brand-burgundy rounded-2xl p-6 md:p-8">
      <h2 class="font-logo text-xl md:text-2xl text-white mb-1.5">{{ $s->store_name ?? 'AurumÉclat' }} {{ __('messages.Aurumeclat_ClubWord') }}</h2>
      <p class="text-sm text-white/70 mb-5 max-w-md">{{ __('messages.Aurumeclat_JoinExclusiveMembership') }}</p>
      <div class="grid grid-cols-3 gap-5 mb-6 max-w-lg">
        <div class="flex flex-col items-center gap-1.5 text-center">
          <svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 7h-9M14 17H5M17 3v8M8 13v8"/><circle cx="17" cy="7" r="3"/><circle cx="8" cy="17" r="3"/></svg>
          <span class="text-[11px] text-white/80">{!! __('messages.Aurumeclat_EarlyAccessNewCollections') !!}</span>
        </div>
        <div class="flex flex-col items-center gap-1.5 text-center">
          <svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8V6a2 2 0 114 0v2"/></svg>
          <span class="text-[11px] text-white/80">{!! __('messages.Aurumeclat_VipInvitations') !!}</span>
        </div>
        <div class="flex flex-col items-center gap-1.5 text-center">
          <svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>
          <span class="text-[11px] text-white/80">{!! __('messages.Aurumeclat_ComplimentaryServices') !!}</span>
        </div>
      </div>
      <a href="{{ route('store.register.show') }}" class="inline-block bg-brand-gold hover:bg-brand-goldDark transition text-black font-semibold px-7 py-3 text-xs eyebrow">{{ __('messages.Aurumeclat_JoinTheClub') }}</a>
    </div>
  </section>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var scroller = document.getElementById('aeNaScroll');
    var prev = document.getElementById('aeNaPrev');
    var next = document.getElementById('aeNaNext');
    if (scroller && prev && next) {
      prev.addEventListener('click', function () { scroller.scrollBy({ left: -260, behavior: 'smooth' }); });
      next.addEventListener('click', function () { scroller.scrollBy({ left: 260, behavior: 'smooth' }); });
    }
  });
</script>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
