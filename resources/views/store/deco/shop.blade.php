@extends('store.deco.layout')

@section('content')
<div class="theme-deco bg-deco-emerald text-deco-cream">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8">
  <div class="text-center mb-8">
    <p class="font-deco-title text-deco-gold text-xs uppercase tracking-widest font-bold mb-2">✦ The Fine Catalogue ✦</p>
    <h1 class="font-deco-logo text-3xl md:text-4xl text-white">Bespoke Jewelry Collection</h1>
    <div class="deco-line-double max-w-xs mx-auto mt-4 mb-4"></div>
    <div class="text-xs text-deco-cream/60">
      {{ trans_choice('messages.products', $total, ['count' => $total]) }}
      @if($hasFilters) · <span class="text-deco-gold font-semibold">{{ __('messages.FiltersApplied') }}</span>@endif
    </div>
  </div>

  <form method="get" action="{{ route('store.shop') }}" class="flex justify-center items-center gap-3 flex-wrap mt-5">
    @foreach(request()->except(['sort','page']) as $k => $v)
      @if(is_array($v))
        @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
      @else
        <input type="hidden" name="{{ $k }}" value="{{ $v }}">
      @endif
    @endforeach
    <select name="sort" class="h-9 py-1 px-3 bg-deco-emerald border border-deco-gold text-xs text-deco-cream outline-none font-deco-logo">
      <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
      <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
      <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
    </select>
    <button class="deco-btn py-1 px-5 text-[10px]" type="submit">Update</button>
    <button class="deco-btn py-1 px-5 text-[10px] lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">Filters</button>
  </form>
</section>

<div class="max-w-7xl mx-auto px-4 md:px-8 py-8 border-t border-deco-gold/30">
  <div class="grid lg:grid-cols-[240px_1fr] gap-10">
    <aside class="hidden lg:block">
      <div class="p-1 bg-deco-emerald border border-deco-gold">
        <div class="border border-deco-gold/30 p-4">
          @include('store.partials.filters-card', [
            'q' => $q, 'cat' => $cat, 'collection' => $collection,
            'min' => $min, 'max' => $max, 'sort' => $sort,
            'categories' => $categories, 'collections' => $collections
          ])
        </div>
      </div>
    </aside>
    
    <main>
      {{-- Custom Symmetrical Catalog Product Grid --}}
      @if($hasFilters)
        <div class="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
          @if(filled($q))
            <a href="{{ route('store.shop', request()->except('q','page')) }}" class="border border-deco-gold px-3 py-1 text-[11px] flex items-center gap-1 bg-deco-emerald-light">
              "{{ $q }}" <span class="text-deco-gold">&times;</span>
            </a>
          @endif
          @if(filled($cat))
            @php $catName = optional($categories->firstWhere('id', $cat))->name ?? $cat; @endphp
            <a href="{{ route('store.shop', request()->except('category','page')) }}" class="border border-deco-gold px-3 py-1 text-[11px] flex items-center gap-1 bg-deco-emerald-light">
              {{ $catName }} <span class="text-deco-gold">&times;</span>
            </a>
          @endif
          @if(filled($collection))
            @php
              $coObj  = $collections->first(fn($c) => (string)$c->slug === (string)$collection || (string)$c->id === (string)$collection);
              $coName = $coObj->title ?? $collection;
            @endphp
            <a href="{{ route('store.shop', request()->except('collection','page')) }}" class="border border-deco-gold px-3 py-1 text-[11px] flex items-center gap-1 bg-deco-emerald-light">
              {{ $coName }} <span class="text-deco-gold">&times;</span>
            </a>
          @endif
          <a href="{{ route('store.shop') }}" class="border border-red-800 text-red-200 px-3 py-1 text-[11px] bg-red-950/20">Reset All</a>
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
                     @click.prevent>
                    <img src="{{ $imgUrl }}" alt="{{ $p->name }}" class="w-full h-full object-cover">
                  </a>
                  @if($isPreorderActive)
                    <span class="deco-badge">PRE-ORDER</span>
                  @elseif(!$isAvailable)
                    <span class="deco-badge" style="background:#4A1111; color:white;">OUT OF STOCK</span>
                  @endif
                </div>

                <div class="text-center space-y-2">
                  @if($isJewelry && ($metalTypeName || $karatName))
                    <p class="text-[10px] text-deco-gold tracking-widest uppercase font-semibold">
                      {{ trim($metalTypeName . ' ' . $karatName) }}
                    </p>
                  @endif
                  <h3 class="font-deco-logo text-xs text-white tracking-wider line-clamp-1" title="{{ $p->name }}">
                    {{ $p->name }}
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
                            data-added-label="ADDED">
                      ✦ ADD TO CART ✦
                    </button>
                  </div>
                </div>
              </div>
            </div>
          @endforeach
        </div>

        {{-- Symmetrical pagination --}}
        @php $products->appends(request()->except('page')); @endphp
        @if ($products->hasPages())
          <div class="mt-12 flex flex-col items-center gap-4">
            <nav aria-label="Product pagination">
              <ul class="flex items-center gap-1 font-deco-logo text-xs">
                @if ($products->onFirstPage())
                  <li><span class="px-3 py-1.5 border border-deco-gold/30 text-deco-cream/40">&larr;</span></li>
                @else
                  <li><a class="px-3 py-1.5 border border-deco-gold hover:bg-deco-gold hover:text-deco-emerald transition" href="{{ $products->previousPageUrl() }}">&larr;</a></li>
                @endif
                
                @foreach(range(1, $products->lastPage()) as $i)
                  @if($i == $products->currentPage())
                    <li><span class="px-3 py-1.5 border border-deco-gold bg-deco-gold text-deco-emerald font-bold">{{ $i }}</span></li>
                  @else
                    <li><a class="px-3 py-1.5 border border-deco-gold hover:bg-deco-gold hover:text-deco-emerald transition" href="{{ $products->url($i) }}">{{ $i }}</a></li>
                  @endif
                @endforeach

                @if ($products->hasMorePages())
                  <li><a class="px-3 py-1.5 border border-deco-gold hover:bg-deco-gold hover:text-deco-emerald transition" href="{{ $products->nextPageUrl() }}">&rarr;</a></li>
                @else
                  <li><span class="px-3 py-1.5 border border-deco-gold/30 text-deco-cream/40">&rarr;</span></li>
                @endif
              </ul>
            </nav>
          </div>
        @endif
      @else
        <div class="text-center py-16 border border-deco-gold/30 bg-deco-emerald-light/40">
          <p class="font-deco-logo text-sm text-deco-gold mb-3">No Lots Found</p>
          <p class="text-xs text-deco-cream/60 mb-4">Try clearing filters or search parameters.</p>
          <a href="{{ route('store.shop') }}" class="deco-btn text-xs py-1.5 px-6">Clear All</a>
        </div>
      @endif
    </main>
  </div>
</div>

<div x-data="drawer()" x-cloak id="filtersDrawer">
  <div x-show="isOpen" class="drawer-backdrop" x-transition.opacity @click="close()"></div>
  <aside class="drawer-panel drawer-end bg-deco-emerald border-l border-deco-gold text-deco-cream" x-show="isOpen"
         x-transition:enter="transition-transform duration-300"
         x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
         x-transition:leave="transition-transform duration-200"
         x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"
         role="dialog" aria-modal="true" aria-label="Filters">
    <div class="drawer-header border-b border-deco-gold/30 py-4 px-6 flex justify-between items-center">
      <h5 class="font-deco-logo text-sm m-0 text-white">Filters</h5>
      <button type="button" class="text-deco-cream hover:text-deco-gold transition" @click="close()" aria-label="Close">
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
