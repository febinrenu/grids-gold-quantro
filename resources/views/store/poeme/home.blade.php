@extends('store.poeme.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-poeme bg-poeme-parchment text-poeme-charcoal font-poeme-sans">

  <!-- ============ HERO SECTION ============ -->
  <section class="relative py-24 px-4 md:px-8 border-b border-poeme-champagne/30 overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center opacity-25 scale-105" style="background-image: url('{{ global_asset(upload_path('products') . '/JWL-RNG-002.png') }}');"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-poeme-parchment via-transparent to-poeme-parchment/60"></div>
    
    <div class="max-w-4xl mx-auto text-center relative z-10 space-y-6">
      <p class="font-poeme-serif text-poeme-grey text-sm italic tracking-wide">✦ {{ __('messages.Poeme_TaglineHero') }} ✦</p>
      <h1 class="font-poeme-serif text-4xl sm:text-5xl md:text-6xl text-poeme-charcoal font-light leading-tight">
        {{ $s->hero_title ?? 'Ethereal Romance for the Modern Bride' }}
      </h1>
      <p class="text-poeme-grey text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
        {{ $s->hero_subtitle ?? 'A curated selection of delicate engagement bands, sparkling diamond drops, and vintage-inspired bridal sets created to hold your forever story.' }}
      </p>
      <div class="pt-4 flex justify-center gap-4">
        <a href="{{ route('store.shop') }}" class="poeme-btn poeme-btn-solid">{{ __('messages.Poeme_BridalGallery') }}</a>
        <a href="{{ route('store.contact') }}" class="poeme-btn">{{ __('messages.Poeme_SchedulePrivateSalon') }}</a>
      </div>
    </div>
  </section>

  <!-- ============ STORY SECTION ============ -->
  <section class="max-w-7xl mx-auto py-16 px-4 md:px-8 border-b border-poeme-champagne/30">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <p class="font-poeme-serif italic text-poeme-grey text-sm tracking-wide">A Story Worth Wearing</p>
        <h2 class="font-poeme-serif text-3xl md:text-4xl font-light leading-tight text-poeme-charcoal">{{ __('messages.Poeme_HeritageTitle') }}</h2>
        <p class="text-sm text-poeme-grey leading-relaxed font-light">
          {{ __('messages.Poeme_HeritageParagraph1') }}
        </p>
        <p class="text-sm text-poeme-grey leading-relaxed font-light">
          {{ __('messages.Poeme_HeritageParagraph2') }}
        </p>
        <div class="pt-2">
          <a href="{{ route('store.shop') }}" class="poeme-btn">{{ __('messages.Poeme_ViewFamilyArchives') }}</a>
        </div>
      </div>
      <div class="relative p-3 bg-white rounded-[2rem] border border-poeme-champagne shadow-sm overflow-hidden">
        <div class="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
          <img src="{{ global_asset(upload_path('products') . '/JWL-RNG-001.png') }}" alt="Exquisite Diamond Wedding Rings" class="w-full h-full object-cover object-center">
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CIRCULAR CATEGORIES GRID ============ -->
  <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto border-b border-poeme-champagne/30">
    <div class="text-center mb-12">
      <p class="font-poeme-serif text-poeme-grey italic text-sm mb-1">{{ __('messages.Poeme_DelicateDetails') }}</p>
      <h2 class="font-poeme-serif text-3xl font-light text-poeme-charcoal">{{ __('messages.Poeme_RomanceArchives') }}</h2>
      <div class="poeme-line max-w-xs mx-auto mt-4"></div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      @forelse(($categories ?? collect())->take(4) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="group text-center space-y-4">
          <div class="aspect-square rounded-full overflow-hidden border border-poeme-champagne/60 p-2 bg-white transition duration-500 group-hover:scale-102 group-hover:shadow-md">
            <div class="w-full h-full rounded-full overflow-hidden">
              @if($cat->cover_image_url)
                <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              @else
                <div class="w-full h-full bg-poeme-rosewater flex items-center justify-center text-poeme-grey">
                  <span class="font-poeme-serif italic text-xs">Poeme</span>
                </div>
              @endif
            </div>
          </div>
          <h3 class="font-poeme-serif text-base text-poeme-charcoal group-hover:text-poeme-grey transition font-semibold">{{ $cat->name }}</h3>
        </a>
      @empty
        <div class="col-span-full text-center text-sm opacity-50">{{ __('messages.Poeme_NoCategoriesLoaded') }}</div>
      @endforelse
    </div>
  </section>

  <!-- ============ THE WEDDING SETS EDITORIAL ============ -->
  <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto border-b border-poeme-champagne/30">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 relative p-3 bg-white rounded-[2rem] border border-poeme-champagne shadow-sm">
        <div class="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
          <img src="{{ global_asset(upload_path('products') . '/JWL-SET-001.png') }}" alt="Bridal Diamond Pendant Set" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="space-y-6 order-1 md:order-2">
        <p class="font-poeme-serif italic text-poeme-grey text-sm tracking-wide">{{ __('messages.Poeme_SoftSplendor') }}</p>
        <h2 class="font-poeme-serif text-3xl md:text-4xl font-light text-poeme-charcoal">{{ __('messages.Poeme_EtherealBridalSets') }}</h2>
        <p class="text-sm text-poeme-grey leading-relaxed font-light">
          {{ __('messages.Poeme_BridalSetsParagraph') }}
        </p>
        <div class="pt-4 flex gap-4 flex-wrap">
          <a href="{{ route('store.shop', ['collection' => 'bridal']) }}" class="poeme-btn poeme-btn-solid">{{ __('messages.Poeme_BridalGallery') }}</a>
          <a href="{{ route('store.contact') }}" class="poeme-btn">{{ __('messages.Poeme_BookVirtualFitting') }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PRODUCTS ============ -->
  <section id="featured" class="py-16 px-4 md:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <p class="font-poeme-serif text-poeme-grey italic text-sm mb-1">✦ {{ __('messages.Poeme_PoetryCollection') }} ✦</p>
      <h2 class="font-poeme-serif text-3xl font-light text-poeme-charcoal">{{ __('messages.Poeme_HandcraftedKeepsakes') }}</h2>
      <div class="poeme-line max-w-xs mx-auto mt-4"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      @php $currency = $s->currency_code ?? '$'; @endphp
      @forelse(($products ?? collect())->take(8) as $p)
        @php
          $productSlug = $p->slug ?? (string) $p->id;
          $galleryFilenames = $p->productGalleryFilenames();
          $galleryUrls = collect($galleryFilenames)->map(fn ($f) => $f ? global_asset(upload_path('products') . '/' . $f) : null)->filter()->values()->all();
          $primaryFile = $p->primaryProductImageFilename();
          $imgUrl = $primaryFile ? global_asset(upload_path('products') . '/' . $primaryFile) : global_asset(upload_path('products') . '/no-image.png');
          $descShort = Str::limit(strip_tags($p->note ?? ''), 400);
          $price = (float) ($p->display_price ?? ($p->price ?? 0));
          $isJewelry = (bool) ($p->is_jewelry_item ?? false);
          $metalTypeName = $isJewelry && $p->metalType ? $p->metalType->name : '';
          $karatName = $isJewelry && $p->karat ? $p->karat->name : '';
          $variants = $p->relationLoaded('variants') ? $p->variants : collect($p->variants ?? []);
          $variants = collect($variants);
          $variantPayload = $variants->map(function($v) use ($currency) {
            $final = (float) ($v->display_price ?? ($v->price ?? 0));
            return [
              'id' => (int) ($v->id ?? 0),
              'name' => (string) ($v->name ?? ''),
              'price' => (float) ($v->price ?? 0),
              'display_price' => $final,
              'display_price_formatted' => $currency . number_format($final, 2, '.', ','),
              'image' => !empty($v->image) ? global_asset(upload_path('products') . '/' . $v->image) : null,
              'stock' => (int) max(0, $v->stock ?? $v->qty ?? 0),
            ];
          })->values();
          $productStock = $variants->isEmpty() ? (int) max(0, $p->stock ?? 0) : null;
          $isAvailable = $variants->isEmpty() ? ($productStock > 0) : $variantPayload->contains(fn($v) => ($v['stock'] ?? 0) > 0);
          $isPreorder = (bool) ($p->is_preorder ?? false);
          $isPreorderActive = $isPreorder && !$isAvailable;
        @endphp
        
        <div class="poeme-card text-center">
          <div class="relative overflow-hidden mb-4 rounded-[1rem] border border-poeme-champagne/40 bg-poeme-rosewater">
            <a href="#" class="block aspect-square js-quick-view"
               data-id="{{ $p->id }}"
               data-slug="{{ $productSlug }}"
               data-name="{{ e($p->name) }}"
               data-price="{{ number_format($price, 2, '.', '') }}"
               data-image="{{ $imgUrl }}"
               data-gallery='@json($galleryUrls)'
               data-currency="{{ $currency }}"
               data-description="{{ e($descShort) }}"
               data-stock="{{ $productStock }}"
               data-variants='@json($variantPayload)'
               data-is-jewelry="{{ $isJewelry ? '1' : '0' }}"
               data-metal-type="{{ e($metalTypeName) }}"
               data-karat="{{ e($karatName) }}"
               @click.prevent>
              <img src="{{ $imgUrl }}" alt="{{ $p->name }}" class="w-full h-full object-cover">
            </a>
            @if($isPreorderActive)
              <span class="poeme-badge">{{ __('messages.Poeme_Preorder') }}</span>
            @elseif(!$isAvailable)
              <span class="poeme-badge" style="background:#8C3D3D; color:white;">{{ __('messages.OutOfStock') }}</span>
            @endif
          </div>

          <div class="px-2 pb-3 space-y-1.5 flex-1 flex flex-col justify-between">
            <div>
              @if($isJewelry && ($metalTypeName || $karatName))
                <p class="font-poeme-serif italic text-xs text-poeme-grey">
                  {{ trim($metalTypeName . ' ' . $karatName) }}
                </p>
              @endif
              <h3 class="font-poeme-serif text-sm font-semibold text-poeme-charcoal tracking-wide line-clamp-1" title="{{ $p->name }}">
                {{ $p->name }}
              </h3>
            </div>
            
            <div class="space-y-3">
              <p class="font-poeme-serif italic text-base text-poeme-charcoal font-semibold">
                {{ $currency }}{{ number_format($price, 2, '.', ',') }}
              </p>
              
              <button type="button" 
                      class="w-full poeme-btn poeme-btn-solid text-[10px] py-1.5 js-add-to-cart"
                      @if(!$isAvailable) disabled @endif
                      data-id="{{ $p->id }}"
                      data-slug="{{ $productSlug }}"
                      data-name="{{ e($p->name) }}"
                      data-price="{{ number_format($price, 2, '.', '') }}"
                      data-image="{{ $imgUrl }}"
                      data-gallery='@json($galleryUrls)'
                      data-currency="{{ $currency }}"
                      data-qty="1"
                      data-product-id="{{ $p->id }}"
                      data-product-image="{{ $imgUrl }}"
                      data-variants='@json($variantPayload)'
                      data-stock="{{ $productStock }}"
                      data-is-jewelry="{{ $isJewelry ? '1' : '0' }}"
                      data-added-label="{{ __('messages.Added') }}">
                {{ __('messages.AddToCart') }}
              </button>
            </div>
          </div>
        </div>
      @empty
        <div class="col-span-full text-center text-sm font-poeme-serif italic opacity-50">{{ __('messages.Poeme_NoLotsCatalogued') }}</div>
      @endforelse
    </div>
  </section>

  <!-- ============ ROMANTIC BRAND STATEMENT ============ -->
  <section class="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center border-t border-poeme-champagne/30">
    <div class="space-y-6">
      <svg class="w-8 h-8 mx-auto text-poeme-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <p class="font-poeme-serif italic text-2xl text-poeme-charcoal font-light leading-relaxed">
        {{ __('messages.Poeme_BrandQuote') }}
      </p>
      <p class="font-poeme-sans text-[10px] tracking-widest text-poeme-grey uppercase font-bold">&mdash; The Poeme Design Studio &mdash;</p>
    </div>
  </section>

</div>
@endsection
