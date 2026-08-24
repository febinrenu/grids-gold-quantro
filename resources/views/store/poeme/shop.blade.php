@extends('store.poeme.layout')

@section('content')
<div class="theme-poeme bg-poeme-parchment text-poeme-charcoal font-poeme-sans">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8">
  <div class="text-center mb-8">
    <p class="font-poeme-serif text-poeme-grey italic text-sm mb-1">{{ __('messages.Poeme_GalleryCatalogue') }}</p>
    <h1 class="font-poeme-serif text-3xl md:text-4xl text-poeme-charcoal font-light">{{ __('messages.Poeme_FineKeepsakesCollection') }}</h1>
    <div class="poeme-line max-w-xs mx-auto mt-4 mb-4"></div>
    <div class="text-xs text-poeme-grey italic">
      {{ trans_choice('messages.products', $total, ['count' => $total]) }}
      @if($hasFilters) · <span class="text-poeme-charcoal font-semibold">{{ __('messages.FiltersApplied') }}</span>@endif
    </div>
  </div>

  <form method="get" action="{{ route('store.shop') }}" class="flex justify-center items-center gap-3 flex-wrap mt-5 font-poeme-serif text-sm">
    @foreach(request()->except(['sort','page']) as $k => $v)
      @if(is_array($v))
        @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
      @else
        <input type="hidden" name="{{ $k }}" value="{{ $v }}">
      @endif
    @endforeach
    <select name="sort" class="h-9 py-1 px-3 bg-white border border-poeme-champagne rounded-full text-xs text-poeme-charcoal outline-none">
      <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Poeme_SortLatest') }}</option>
      <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.Poeme_SortPriceUp') }}</option>
      <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.Poeme_SortPriceDown') }}</option>
    </select>
    <button class="poeme-btn py-1 px-5 text-[11px]" type="submit">{{ __('messages.Update') }}</button>
    <button class="poeme-btn py-1 px-5 text-[11px] lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Filters') }}</button>
  </form>
</section>

<div class="max-w-7xl mx-auto px-4 md:px-8 py-8 border-t border-poeme-champagne/30">
  <div class="grid lg:grid-cols-[240px_1fr] gap-10">
    <aside class="hidden lg:block">
      <div class="p-6 bg-white border border-poeme-champagne rounded-[1.5rem]">
        <div class="font-poeme-serif italic text-base mb-3 text-poeme-charcoal font-bold">{{ __('messages.Poeme_RefineResults') }}</div>
        @include('store.partials.filters-card', [
          'q' => $q, 'cat' => $cat, 'collection' => $collection,
          'min' => $min, 'max' => $max, 'sort' => $sort,
          'categories' => $categories, 'collections' => $collections
        ])
      </div>
    </aside>
    
    <main>
      {{-- Applied filters --}}
      @if($hasFilters)
        <div class="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
          @if(filled($q))
            <a href="{{ route('store.shop', request()->except('q','page')) }}" class="border border-poeme-champagne bg-white rounded-full px-3 py-1 text-[11px] flex items-center gap-1">
              "{{ $q }}" <span class="text-poeme-charcoal">&times;</span>
            </a>
          @endif
          @if(filled($cat))
            @php $catName = optional($categories->firstWhere('id', $cat))->name ?? $cat; @endphp
            <a href="{{ route('store.shop', request()->except('category','page')) }}" class="border border-poeme-champagne bg-white rounded-full px-3 py-1 text-[11px] flex items-center gap-1">
              {{ $catName }} <span class="text-poeme-charcoal">&times;</span>
            </a>
          @endif
          @if(filled($collection))
            @php
              $coObj  = $collections->first(fn($c) => (string)$c->slug === (string)$collection || (string)$c->id === (string)$collection);
              $coName = $coObj->title ?? $collection;
            @endphp
            <a href="{{ route('store.shop', request()->except('collection','page')) }}" class="border border-poeme-champagne bg-white rounded-full px-3 py-1 text-[11px] flex items-center gap-1">
              {{ $coName }} <span class="text-poeme-charcoal">&times;</span>
            </a>
          @endif
          <a href="{{ route('store.shop') }}" class="border border-red-200 text-red-700 rounded-full px-3 py-1 text-[11px] bg-red-50">{{ __('messages.ClearFilters') }}</a>
        </div>
      @endif

      @if($products->count())
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          @foreach($products as $p)
            @php
              $productSlug = $p->slug ?? (string) $p->id;
              $galleryFilenames = $p->productGalleryFilenames();
              $galleryUrls = collect($galleryFilenames)->map(fn ($f) => $f ? global_asset(upload_path('products') . '/' . $f) : null)->filter()->values()->all();
              $primaryFile = $p->primaryProductImageFilename();
              $imgUrl = $primaryFile ? global_asset(upload_path('products') . '/' . $primaryFile) : global_asset(upload_path('products') . '/no-image.png');
              $descShort = \Illuminate\Support\Str::limit(strip_tags($p->note ?? ''), 400);
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
                   data-gross-weight="{{ $grossWeight }}"
                   data-net-weight="{{ $netWeight }}"
                   data-metal-weight="{{ $metalWeight }}"
                   data-stones-summary="{{ e($stonesSummary) }}"
                   data-pricing-breakdown='@json($pricingBreakdown)'
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
                  @if($isJewelry && ($metalTypeName || $karatName || $grossWeight))
                    <p class="font-poeme-serif italic text-xs text-poeme-grey">
                      {{ trim($metalTypeName . ' ' . $karatName) }}
                      @if($grossWeight > 0) — {{ $grossWeight }}g @endif
                    </p>
                  @endif
                  <h3 class="font-poeme-serif text-sm font-semibold text-poeme-charcoal tracking-wide line-clamp-1" title="{{ $p->name }}">
                     <a href="#" class="js-quick-view hover:text-poeme-grey transition"
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
          @endforeach
        </div>

        {{-- Symmetrical pagination --}}
        @php $products->appends(request()->except('page')); @endphp
        @if ($products->hasPages())
          <div class="mt-12 flex flex-col items-center gap-4">
            <nav aria-label="{{ __('messages.Poeme_ProductPagination') }}">
              <ul class="flex items-center gap-1 font-poeme-serif text-sm">
                @if ($products->onFirstPage())
                  <li><span class="px-3 py-1.5 border border-poeme-champagne/45 text-poeme-grey/40 rounded-full">&larr;</span></li>
                @else
                  <li><a class="px-3 py-1.5 border border-poeme-champagne rounded-full hover:bg-poeme-champagne transition" href="{{ $products->previousPageUrl() }}">&larr;</a></li>
                @endif
                
                @foreach(range(1, $products->lastPage()) as $i)
                  @if($i == $products->currentPage())
                    <li><span class="px-3.5 py-1.5 border border-poeme-charcoal bg-poeme-charcoal text-white rounded-full font-bold">{{ $i }}</span></li>
                  @else
                    <li><a class="px-3.5 py-1.5 border border-poeme-champagne rounded-full hover:bg-poeme-champagne transition" href="{{ $products->url($i) }}">{{ $i }}</a></li>
                  @endif
                @endforeach

                @if ($products->hasMorePages())
                  <li><a class="px-3 py-1.5 border border-poeme-champagne rounded-full hover:bg-poeme-champagne transition" href="{{ $products->nextPageUrl() }}">&rarr;</a></li>
                @else
                  <li><span class="px-3 py-1.5 border border-poeme-champagne/45 text-poeme-grey/40 rounded-full">&rarr;</span></li>
                @endif
              </ul>
            </nav>
          </div>
        @endif
      @else
        <div class="text-center py-16 border border-poeme-champagne rounded-[1.5rem] bg-white">
          <p class="font-poeme-serif italic text-base text-poeme-charcoal mb-2">{{ __('messages.Poeme_NoGalleryLotsFound') }}</p>
          <p class="text-xs text-poeme-grey mb-4">{{ __('messages.Poeme_TryClearingFilters') }}</p>
          <a href="{{ route('store.shop') }}" class="poeme-btn text-xs py-1.5 px-6">{{ __('messages.Poeme_ClearAll') }}</a>
        </div>
      @endif
    </main>
  </div>
</div>

<div x-data="drawer()" x-cloak id="filtersDrawer">
  <div x-show="isOpen" class="drawer-backdrop" x-transition.opacity @click="close()"></div>
  <aside class="drawer-panel drawer-end bg-poeme-parchment border-l border-poeme-champagne text-poeme-charcoal" x-show="isOpen"
         x-transition:enter="transition-transform duration-300"
         x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
         x-transition:leave="transition-transform duration-200"
         x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"
         role="dialog" aria-modal="true" aria-label="Filters">
    <div class="drawer-header border-b border-poeme-champagne/30 py-4 px-6 flex justify-between items-center font-poeme-serif">
      <h5 class="text-sm m-0 font-bold">{{ __('messages.Filters') }}</h5>
      <button type="button" class="text-poeme-charcoal hover:text-poeme-grey transition font-bold" @click="close()" aria-label="{{ __('messages.Close') }}">
        &times;
      </button>
    </div>
    <div class="drawer-body p-6">
      @include('store.partials.filters-card', [
        'q' => $q, 'cat' => $cat, 'collection' => $collection,
        'min' => $min, 'max' => $max, 'sort' => $sort,
        'categories' => $categories, 'collections' => $collections,
        'isDrawer' => true
      ])
    </div>
  </aside>
</div>

@include('store.partials.shop-modals-scripts', ['currency' => $currency])
</div>
@endsection
