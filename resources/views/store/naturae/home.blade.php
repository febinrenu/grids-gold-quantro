@extends('store.naturae.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-naturae bg-white text-[#242018]">

  <!-- ============ HERO (rounded organic photo, text beside it on cream) ============ -->
  <section class="bg-brand-cream">
    <div class="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p class="tracking-wider2 text-xs font-semibold text-[#5a5340] mb-3">{{ __('messages.Naturae_TopBadge') }}</p>
        <h1 class="font-serif text-4xl sm:text-5xl md:text-[52px] leading-[1.1] mb-5 text-[#242018]">{{ $s->hero_title ?? __('messages.Naturae_HeroTitleDefault') }}<br/><span class="italic">{{ __('messages.Naturae_HeroTitleMadeThem') }}</span></h1>
        <p class="text-[#5a5340] max-w-sm mb-7 text-sm md:text-base leading-relaxed">{{ $s->hero_subtitle ?? __('messages.Naturae_HeroSubtitleDefault') }}</p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="#bestsellers" class="inline-flex items-center gap-2 bg-brand-green hover:bg-[#3a4630] transition text-white font-semibold px-7 py-3.5 text-sm rounded-full">{{ __('messages.Naturae_ShopNowCaps') }}
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 border border-[#242018]/25 text-[#242018] font-semibold px-7 py-3.5 text-sm rounded-full hover:bg-black/5 transition">{{ __('messages.Naturae_OurStoryCaps') }}</a>
        </div>
        <div class="hidden md:flex items-center gap-6 mt-10 pt-6 border-t border-black/10 text-xs text-[#5a5340]">
          <span class="flex items-center gap-2"><svg class="w-4 h-4 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c1 2-1 3-1 5a4 4 0 108 0c0-3-2-4-3-6M8 10a6 6 0 106 10V10"/></svg>{{ __('messages.Naturae_EthicallySourcedStones') }}</span>
          <span class="flex items-center gap-2"><svg class="w-4 h-4 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>{{ __('messages.Naturae_ConflictFreeGold') }}</span>
          <span class="flex items-center gap-2"><svg class="w-4 h-4 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"/><path d="M9 10l2 2 4-4"/></svg>{{ __('messages.Naturae_HandcraftedSmallBatches') }}</span>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl">
          <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80"
               alt="Rose gold gemstone cluster ring resting on natural linen" class="w-full h-full object-cover" loading="eager">
        </div>
        <div class="hidden md:block absolute -bottom-8 -right-6 bg-white rounded-[2rem] shadow-xl px-6 py-5 max-w-[220px] border border-black/5">
          <p class="font-serif italic text-lg text-[#242018] leading-snug">"{{ __('messages.Naturae_QuoteGrowsBeautiful') }}"</p>
          <p class="text-[11px] text-[#5a5340] mt-2 tracking-wider2">— {{ __('messages.Naturae_JournalCredit') }}</p>
        </div>
      </div>
    </div>

    <div class="md:hidden grid grid-cols-3 gap-3 max-w-7xl mx-auto px-4 pb-8 text-[10px] text-[#5a5340] text-center">
      <span>{{ __('messages.Naturae_EthicallySourcedStones') }}</span>
      <span>{{ __('messages.Naturae_ConflictFreeGold') }}</span>
      <span>{{ __('messages.Naturae_HandcraftedSmallBatches') }}</span>
    </div>
  </section>

  <!-- ============ CATEGORY CIRCLES (real categories) ============ -->
  <section class="max-w-7xl mx-auto px-4 py-10">
    <div class="text-center mb-6">
      <p class="tracking-wider2 text-xs font-semibold text-[#5a5340]">{{ __('messages.Naturae_Explore') }}</p>
      <h2 class="font-serif text-2xl text-[#242018] mt-1">{{ __('messages.Naturae_ShopByCollection') }}</h2>
    </div>
    <div class="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-5 text-center">
      @php
        $catIcons = [
          '<path d="M12 3c1 2-1 3-1 5a4 4 0 108 0c0-3-2-4-3-6M8 10a6 6 0 106 10V10"/>',
          '<circle cx="12" cy="15" r="6"/><path d="M9 9l3-6 3 6"/>',
          '<path d="M12 3v6M8 9h8l-4 12z"/>',
          '<ellipse cx="9" cy="8" rx="3" ry="4"/><ellipse cx="15" cy="8" rx="3" ry="4"/><path d="M9 12v3M15 12v3"/>',
          '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="4"/>',
          '<circle cx="7" cy="12" r="3"/><circle cx="12" cy="8" r="3"/><circle cx="17" cy="12" r="3"/>',
          '<rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)"/>',
          '<path d="M12 2l7 12H5z"/><path d="M5 14l7 8 7-8"/>',
        ];
      @endphp
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group flex flex-col items-center gap-2.5">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-greenLight flex items-center justify-center group-hover:bg-brand-tan transition overflow-hidden">
            @if($cat->cover_image_url)
              <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="w-full h-full object-cover">
            @else
              <svg class="w-6 h-6 md:w-7 md:h-7 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">{!! $catIcons[$i % count($catIcons)] !!}</svg>
            @endif
          </div>
          <span class="text-[10.5px] md:text-xs font-medium">{{ $cat->name }}</span>
        </a>
      @empty
        <p class="col-span-full text-sm text-[#5a5340]">{{ __('messages.Naturae_CategoriesEmpty') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ SOURCED FROM THE EARTH — full-width lifestyle banner ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="rounded-[2.5rem] overflow-hidden relative min-h-[320px] md:min-h-[420px] flex items-center">
      <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80"
           alt="Rose gold bracelet resting on a soft blush surface" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-[#242018]/70 via-[#242018]/20 to-transparent"></div>
      <div class="relative z-10 max-w-md px-8 md:px-14 py-10">
        <p class="tracking-wider2 text-xs font-semibold text-brand-tan mb-3">{{ __('messages.Naturae_SourcedFromEarth') }}</p>
        <h3 class="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">{{ __('messages.Naturae_EveryPieceTraced') }}</h3>
        <p class="text-sm text-white/80 mb-6 leading-relaxed">{{ __('messages.Naturae_SourcingParagraph') }}</p>
        <a href="{{ route('store.contact') }}" class="inline-flex items-center gap-2 bg-white hover:bg-brand-tan transition text-[#242018] font-semibold px-6 py-3 text-xs tracking-wider2 rounded-full w-fit">{{ __('messages.Naturae_ReadSourcingStory') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ 3 PROMO BANNERS ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <div class="relative rounded-[1.75rem] overflow-hidden min-h-[210px] p-6 flex flex-col justify-between bg-[#EFE7D8]">
        <div class="relative z-10">
          <h3 class="font-serif text-xl text-[#242018] mb-1">{{ __('messages.Naturae_NewArrivals') }}</h3>
          <p class="text-xs text-[#5a5340]">{{ __('messages.Naturae_FreshCuts') }}</p>
        </div>
        <a href="{{ route('store.shop', ['sort' => 'latest']) }}" class="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-[#242018] tracking-wider2 hover:opacity-70 transition w-fit mt-3">{{ __('messages.Naturae_ShopNowCaps') }}
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
      <div class="relative rounded-[1.75rem] overflow-hidden min-h-[210px]">
        <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80"
             alt="Faceted teal gemstone pendant on layered gold chains" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
        <div class="relative z-10 h-full p-6 flex flex-col justify-end">
          <h3 class="font-serif text-xl text-white mb-1">{{ __('messages.Naturae_GemstoneSets') }}</h3>
          <p class="text-xs text-white/80 max-w-[180px] mb-3">{{ __('messages.Naturae_MatchingRings') }}</p>
          <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-1.5 text-xs font-semibold text-white tracking-wider2 hover:text-brand-tan transition w-fit">{{ __('messages.Naturae_ShopSetsCaps') }}
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
      <div class="relative rounded-[1.75rem] overflow-hidden min-h-[210px] p-6 flex flex-col justify-between bg-brand-green">
        <div class="relative z-10">
          <h3 class="font-serif text-xl text-white mb-1">{{ __('messages.Naturae_EthicallySourced') }}</h3>
          <p class="text-xs text-white/70 max-w-[180px]">{{ __('messages.Naturae_ConflictFreeGoldTraceable') }}</p>
        </div>
        <a href="{{ route('store.contact') }}" class="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-white tracking-wider2 hover:text-brand-tan transition w-fit mt-3">{{ __('messages.Naturae_LearnMoreCaps') }}
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- ============ BEST SELLERS (real products) ============ -->
  <section id="bestsellers" class="max-w-7xl mx-auto px-4 pb-10">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="tracking-wider2 text-xs font-semibold text-[#5a5340]">{{ __('messages.Naturae_CuratedForYou') }}</p>
        <h2 class="font-serif text-2xl text-[#242018] mt-1">{{ __('messages.Naturae_BestSellers') }}</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="text-xs md:text-sm font-semibold tracking-wider2 text-brand-green hover:opacity-70 transition flex items-center gap-1">{{ __('messages.Naturae_ViewAllCaps') }}
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
      @php $currency = $s->currency_code ?? '$'; $bestsellers = ($products ?? collect())->take(6); @endphp
      @forelse($bestsellers as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm text-[#5a5340]">{{ __('messages.Naturae_NoProducts') }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ NEW IN (real products) ============ -->
  <section class="bg-brand-cream py-10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-serif text-2xl text-[#242018]">{{ __('messages.Naturae_NewIn') }}</h2>
        <a href="{{ route('store.shop', ['sort' => 'latest']) }}" class="text-xs md:text-sm font-semibold tracking-wider2 text-brand-green hover:opacity-70 transition">{{ __('messages.Naturae_ViewAllCaps') }}</a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
        @php $newIn = ($products ?? collect())->slice(6, 6); @endphp
        @forelse($newIn as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          @foreach($bestsellers->take(6) as $p)
            @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
          @endforeach
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ JOURNAL / PULL-QUOTE ============ -->
  <section class="max-w-4xl mx-auto px-4 py-16 text-center">
    <svg class="w-8 h-8 text-brand-tan mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7c-3 2-4 5-4 8a4 4 0 004 4v-6H4c0-2 1-4 4-5zM17 7c-3 2-4 5-4 8a4 4 0 004 4v-6h-3c0-2 1-4 4-5z"/></svg>
    <p class="font-serif italic text-2xl md:text-3xl leading-relaxed text-[#242018]">
      "{{ __('messages.Naturae_PullQuote') }}"
    </p>
    <p class="mt-6 tracking-wider2 text-xs font-semibold text-[#5a5340]">— {{ __('messages.Naturae_FoundersNote') }}</p>
  </section>

  <!-- ============ GIFT / PEARLS ACCENT BANNER ============ -->
  <section class="max-w-7xl mx-auto px-4 pb-10">
    <div class="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
      <div class="rounded-[2rem] overflow-hidden aspect-[16/10]">
        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
             alt="Pearl necklace resting in an open velvet box" class="w-full h-full object-cover">
      </div>
      <div class="p-4 md:p-8">
        <p class="tracking-wider2 text-xs font-semibold text-[#5a5340] mb-3">{{ __('messages.Naturae_Gifting') }}</p>
        <h3 class="font-serif text-3xl text-[#242018] mb-4 leading-tight">{{ __('messages.Naturae_GiftStoryTitle') }}</h3>
        <p class="text-sm text-[#5a5340] mb-6 leading-relaxed max-w-md">{{ __('messages.Naturae_GiftParagraph') }}</p>
        <a href="{{ route('store.shop') }}" class="inline-flex items-center gap-2 bg-brand-green hover:bg-[#3a4630] transition text-white font-semibold px-7 py-3 text-xs tracking-wider2 rounded-full w-fit">{{ __('messages.Naturae_ShopGiftsCaps') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ TRUST BAR ============ -->
  <section class="bg-brand-tan/60">
    <div class="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c1 2-1 3-1 5a4 4 0 108 0c0-3-2-4-3-6M8 10a6 6 0 106 10V10"/></svg>
        <div><p class="font-semibold text-xs md:text-sm tracking-wider2">{{ __('messages.Naturae_TrustEthicallySourced') }}</p><p class="text-[10px] md:text-xs text-[#5a5340]">{{ __('messages.Naturae_TraceableGemsGold') }}</p></div>
      </div>
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8V6a2 2 0 114 0v2"/></svg>
        <div><p class="font-semibold text-xs md:text-sm tracking-wider2">{{ __('messages.Naturae_SecurePaymentsCaps') }}</p><p class="text-[10px] md:text-xs text-[#5a5340]">{{ __('messages.Naturae_SafeEncrypted') }}</p></div>
      </div>
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0013.9 3.5M18.5 9A8 8 0 004.6 5.5"/></svg>
        <div><p class="font-semibold text-xs md:text-sm tracking-wider2">{{ __('messages.Naturae_HassleFreeReturnsCaps') }}</p><p class="text-[10px] md:text-xs text-[#5a5340]">{{ __('messages.Naturae_ThirtyDayReturns') }}</p></div>
      </div>
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-brand-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.8-10-9.3C.5 8 2 4.5 5.5 4c2-.3 3.8.7 4.9 2.3C11.5 4.7 13.3 3.7 15.3 4c3.5.5 5 4 3.5 7.7C21.5 16.2 12 21 12 21z"/></svg>
        <div><p class="font-semibold text-xs md:text-sm tracking-wider2">{{ __('messages.Naturae_CustomerSupportCaps') }}</p><p class="text-[10px] md:text-xs text-[#5a5340]">{{ __('messages.Naturae_HereToHelp') }}</p></div>
      </div>
    </div>
  </section>

  <!-- ============ SUSTAINABILITY NEWSLETTER ============ -->
  <section class="max-w-7xl mx-auto px-4 py-14">
    <div class="bg-brand-greenDark rounded-[2.5rem] p-8 md:p-14 text-center">
      <svg class="w-8 h-8 text-brand-tan mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3c1 2-1 3-1 5a4 4 0 108 0c0-3-2-4-3-6M8 10a6 6 0 106 10V10"/></svg>
      <h2 class="font-serif text-2xl md:text-3xl text-white mb-3">{{ __('messages.Naturae_JoinCommunity') }}</h2>
      <p class="text-sm text-white/70 max-w-md mx-auto mb-6">{{ __('messages.Naturae_NewsletterParagraph') }}</p>
      <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        @csrf
        <input type="email" name="email" required placeholder="{{ __('messages.Naturae_EnterEmail') }}" class="flex-1 min-w-0 px-4 py-3 rounded-full bg-white/10 border border-white/15 outline-none text-sm text-white placeholder:text-white/40" />
        <button type="submit" class="bg-brand-tan hover:bg-white transition text-brand-greenDark font-semibold px-6 py-3 text-xs tracking-wider2 rounded-full shrink-0">{{ __('messages.Naturae_SubscribeCaps') }}</button>
      </form>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
