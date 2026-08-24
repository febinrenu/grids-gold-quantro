@extends('store.deco.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-deco bg-deco-emerald text-deco-cream">

  <!-- ============ HERO SECTION ============ -->
  <section class="relative py-20 px-4 md:px-8 border-b border-deco-gold/30 overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center opacity-30 scale-105" style="background-image: url('{{ global_asset(upload_path('products') . '/JWL-RNG-003.png') }}'); filter: blur(2px);"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-deco-emerald via-transparent to-deco-emerald/80"></div>
    
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <div class="deco-frame py-12 px-6 md:px-12 bg-deco-emerald/90">
        <div class="deco-card-corner deco-card-corner-tl"></div>
        <div class="deco-card-corner deco-card-corner-tr"></div>
        <div class="deco-card-corner deco-card-corner-bl"></div>
        <div class="deco-card-corner deco-card-corner-br"></div>
        
        <p class="font-deco-title text-deco-gold text-xs tracking-widest uppercase mb-4">✦ {{ __('messages.Deco_FineArtisanJewelry') }} ✦</p>
        <h1 class="font-deco-logo text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
          {{ $s->hero_title ?? __('messages.Deco_DefaultHeroTitle') }}
        </h1>
        <p class="text-deco-cream/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
          {{ $s->hero_subtitle ?? __('messages.Deco_DefaultHeroSubtitle') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="{{ route('store.shop') }}" class="deco-btn deco-btn-solid">{{ __('messages.Deco_ExploreCatalog') }}</a>
          <a href="{{ route('store.contact') }}" class="deco-btn">{{ __('messages.Deco_PrivateSalon') }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ EDITORIAL COLLAGE SECTION ============ -->
  <section class="max-w-7xl mx-auto py-16 px-4 md:px-8 border-b border-deco-gold/30">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <span class="h-0.5 w-8 bg-deco-gold"></span>
          <p class="font-deco-title text-deco-gold text-xs uppercase tracking-widest font-semibold">{{ __('messages.Deco_TheEditorialEdit') }}</p>
        </div>
        <h2 class="font-deco-logo text-3xl md:text-4xl text-white">{{ __('messages.Deco_SymmetryIsBeauty') }}</h2>
        <p class="text-sm text-deco-cream/80 leading-relaxed font-light">
          {{ __('messages.Deco_EditorialParagraph1') }}
        </p>
        <p class="text-sm text-deco-cream/80 leading-relaxed font-light">
          {{ __('messages.Deco_EditorialParagraph2') }}
        </p>
        <div class="pt-4">
          <a href="{{ route('store.shop') }}" class="deco-btn">{{ __('messages.Deco_ViewTheCollections') }}</a>
        </div>
      </div>
      <div class="relative p-2 bg-deco-emerald border-2 double border-deco-gold">
        <div class="aspect-[4/5] overflow-hidden">
          <img src="{{ global_asset(upload_path('products') . '/JWL-ERR-003.png') }}" alt="{{ __('messages.Deco_EarringsAlt') }}" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FEATURED CATEGORIES SHOWCASE ============ -->
  <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto border-b border-deco-gold/30">
    <div class="text-center mb-12">
      <p class="font-deco-title text-deco-gold text-xs uppercase tracking-widest font-bold mb-2">✦ {{ __('messages.Deco_CuratedSelections') }} ✦</p>
      <h2 class="font-deco-logo text-3xl text-white">{{ __('messages.Deco_ShopByJewelrySalon') }}</h2>
      <div class="deco-line-double max-w-xs mx-auto mt-4"></div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      @forelse(($categories ?? collect())->take(4) as $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="deco-card">
          <div class="deco-card-corner deco-card-corner-tl"></div>
          <div class="deco-card-corner deco-card-corner-tr"></div>
          <div class="deco-card-corner deco-card-corner-bl"></div>
          <div class="deco-card-corner deco-card-corner-br"></div>
          
          <div class="deco-card-inner">
            <div class="aspect-square overflow-hidden mb-4 border border-deco-gold/30">
              @if($cat->cover_image_url)
                <img src="{{ $cat->cover_image_url }}" alt="{{ $cat->name }}" class="w-full h-full object-cover">
              @else
                <div class="w-full h-full bg-deco-emerald-light flex items-center justify-center text-deco-gold/40">
                  <span class="font-deco-logo text-xs">{{ __('messages.Deco_DecoSalonPlaceholder') }}</span>
                </div>
              @endif
            </div>
            <h3 class="font-deco-logo text-sm text-center text-white tracking-widest uppercase mt-2">{{ $cat->name }}</h3>
            <p class="text-[10px] text-center text-deco-gold mt-1 uppercase font-semibold">{{ __('messages.Deco_EnterArrow') }} →</p>
          </div>
        </a>
      @empty
        <div class="col-span-full text-center text-sm opacity-50">{{ __('messages.Deco_NoCategoriesFound') }}</div>
      @endforelse
    </div>
  </section>

  <!-- ============ EXQUISITE BRIDAL COLLECTION ============ -->
  <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto border-b border-deco-gold/30">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 relative p-2 bg-deco-emerald border-2 double border-deco-gold">
        <div class="aspect-[4/5] overflow-hidden">
          <img src="{{ global_asset(upload_path('products') . '/JWL-RNG-005.png') }}" alt="{{ __('messages.Deco_BridalRingSetAlt') }}" class="w-full h-full object-cover object-center">
        </div>
      </div>
      <div class="space-y-6 order-1 md:order-2">
        <div class="flex items-center gap-3">
          <span class="h-0.5 w-8 bg-deco-gold"></span>
          <p class="font-deco-title text-deco-gold text-xs uppercase tracking-widest font-semibold">{{ __('messages.Deco_BridalHeritage') }}</p>
        </div>
        <h2 class="font-deco-logo text-3xl md:text-4xl text-white">{{ __('messages.Deco_TheArtDecoBride') }}</h2>
        <p class="text-sm text-deco-cream/80 leading-relaxed font-light">
          {{ __('messages.Deco_BridalParagraph1') }}
        </p>
        <p class="text-sm text-deco-cream/80 leading-relaxed font-light">
          {{ __('messages.Deco_BridalParagraph2') }}
        </p>
        <div class="pt-4 flex gap-4">
          <a href="{{ route('store.shop', ['collection' => 'bridal']) }}" class="deco-btn deco-btn-solid">{{ __('messages.Deco_TheBridalGallery') }}</a>
          <a href="{{ route('store.contact') }}" class="deco-btn">{{ __('messages.Deco_BookAppointment') }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PRODUCTS (BEST SELLERS) ============ -->
  <section id="bestsellers" class="py-16 px-4 md:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <p class="font-deco-title text-deco-gold text-xs uppercase tracking-widest font-bold mb-2">✦ {{ __('messages.Deco_GoldenMasterpieces') }} ✦</p>
      <h2 class="font-deco-logo text-3xl text-white">{{ __('messages.Deco_RecentlyCataloguedLots') }}</h2>
      <div class="deco-line-double max-w-xs mx-auto mt-4"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          $grossWeight = $isJewelry ? (float) ($p->jewelry_gross_weight ?? 0) : '';
          $netWeight = $isJewelry ? (float) ($p->jewelry_net_weight ?? 0) : '';
          $metalWeight = $isJewelry ? (float) ($p->jewelry_metal_weight ?? 0) : '';
          $stonesSummary = '';
          if ($isJewelry && $p->relationLoaded('stones') && $p->stones) {
              $stonesSummary = $p->stones->map(fn($st) => $st->quantity . 'x ' . ($st->stoneType->name ?? $st->stone_name ?? ''))->join(', ');
          }
          $pricingBreakdown = null;
          if ($isJewelry) {
              $pricingBreakdown = app(\App\Services\Jewelry\JewelryPricingService::class)->preview($p->id, $s->default_warehouse_id ?? null);
          }
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
        
        <div class="deco-card">
          <div class="deco-card-corner deco-card-corner-tl"></div>
          <div class="deco-card-corner deco-card-corner-tr"></div>
          <div class="deco-card-corner deco-card-corner-bl"></div>
          <div class="deco-card-corner deco-card-corner-br"></div>
          
          <div class="deco-card-inner">
            <div class="relative overflow-hidden mb-4 border border-deco-gold/30">
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
                 data-gross-weight="{{ $grossWeight }}"
                 data-net-weight="{{ $netWeight }}"
                 data-metal-weight="{{ $metalWeight }}"
                 data-stones-summary="{{ e($stonesSummary) }}"
                 data-pricing-breakdown='@json($pricingBreakdown)'
                 @click.prevent>
                <img src="{{ $imgUrl }}" alt="{{ $p->name }}" class="w-full h-full object-cover">
              </a>
              @if($isPreorderActive)
                <span class="deco-badge">{{ __('messages.PreOrder') }}</span>
              @elseif(!$isAvailable)
                <span class="deco-badge" style="background:#4A1111; color:white;">{{ __('messages.OutOfStock') }}</span>
              @endif
            </div>

            <div class="text-center space-y-2">
              @if($isJewelry && ($metalTypeName || $karatName || $grossWeight))
                <p class="text-[10px] text-deco-gold tracking-widest uppercase font-semibold">
                  {{ trim($metalTypeName . ' ' . $karatName) }}
                  @if($grossWeight > 0) &bull; {{ $grossWeight }}g @endif
                </p>
              @endif
              <h3 class="font-deco-logo text-xs text-white tracking-wider line-clamp-1" title="{{ $p->name }}">
                <a href="#" class="js-quick-view hover:text-deco-gold transition"
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
                   data-gross-weight="{{ $grossWeight }}"
                   data-net-weight="{{ $netWeight }}"
                   data-metal-weight="{{ $metalWeight }}"
                   data-stones-summary="{{ e($stonesSummary) }}"
                   data-pricing-breakdown='@json($pricingBreakdown)'
                   @click.prevent>
                  {{ $p->name }}
                </a>
              </h3>
              <p class="font-deco-title text-sm text-deco-gold font-bold">
                {{ $currency }}{{ number_format($price, 2, '.', ',') }}
              </p>
              
              <div class="pt-2">
                <button type="button" 
                        class="w-full deco-btn deco-btn-solid text-[9px] py-2 js-add-to-cart"
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
                  ✦ {{ __('messages.AddToCart') }} ✦
                </button>
              </div>
            </div>
          </div>
        </div>
      @empty
        <div class="col-span-full text-center text-sm opacity-50">{{ __('messages.Deco_NoLotsCatalogued') }}</div>
      @endforelse
    </div>
  </section>

  <!-- ============ CLIENT TESTIMONIALS ============ -->
  <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto border-t border-deco-gold/30 text-center">
    <p class="font-deco-title text-deco-gold text-xs uppercase tracking-widest font-bold mb-4">✦ {{ __('messages.Deco_TrustPrestige') }} ✦</p>
    <div class="deco-frame py-10 px-6 bg-deco-emerald-light/60">
      <div class="deco-card-corner deco-card-corner-tl"></div>
      <div class="deco-card-corner deco-card-corner-tr"></div>
      <div class="deco-card-corner deco-card-corner-bl"></div>
      <div class="deco-card-corner deco-card-corner-br"></div>

      <p class="font-deco-logo text-xl italic md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
        "{{ __('messages.Deco_TestimonialQuote') }}"
      </p>
      <p class="font-deco-title text-xs tracking-wider text-deco-gold uppercase font-bold">&mdash; Lady Charlotte V., London</p>
    </div>
  </section>

  @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])

</div>
@endsection
