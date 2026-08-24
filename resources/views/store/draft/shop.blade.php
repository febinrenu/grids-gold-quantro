@extends('store.draft.layout')

@section('content')
<div class="theme-draft bg-draft-slate text-draft-ink font-draft-sans">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8">
  <div class="border-b border-draft-ink pb-6">
    <p class="font-draft-mono text-xs text-draft-blue font-bold">{{ __('messages.Draft_SpecIndexTag') }}</p>
    <h1 class="font-draft-mono text-2xl md:text-3xl font-bold uppercase text-draft-ink">{{ __('messages.Draft_AtelierSpecIndex') }}</h1>
    <div class="text-xs font-draft-mono text-draft-grey mt-2">
      {{ __('messages.Draft_MatchingLotsFound') }} [{{ $total }}]
      @if($hasFilters) · <span class="text-draft-blue font-semibold">{{ __('messages.Draft_FiltersEngaged') }}</span>@endif
    </div>
  </div>

  <form method="get" action="{{ route('store.shop') }}" class="flex items-center gap-2 flex-wrap mt-5 font-draft-mono text-xs">
    @foreach(request()->except(['sort','page']) as $k => $v)
      @if(is_array($v))
        @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
      @else
        <input type="hidden" name="{{ $k }}" value="{{ $v }}">
      @endif
    @endforeach
    <select name="sort" class="h-9 px-3 bg-draft-white border border-draft-border text-draft-ink font-draft-mono text-xs outline-none">
      <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Draft_SortLatest') }}</option>
      <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.Draft_SortPriceAsc') }}</option>
      <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.Draft_SortPriceDesc') }}</option>
    </select>
    <button class="draft-btn py-1.5 px-5 text-[10px]" type="submit">{{ __('messages.Draft_ReQuery') }}</button>
    <button class="draft-btn py-1.5 px-5 text-[10px] lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Draft_OpenFilters') }}</button>
  </form>
</section>

<div class="max-w-7xl mx-auto px-4 md:px-8 py-8 border-t border-draft-border">
  <div class="grid lg:grid-cols-[240px_1fr] gap-10">
    <aside class="hidden lg:block">
      <div class="p-4 bg-draft-white border border-draft-border font-draft-mono text-xs">
        <div class="mb-4 text-xs font-bold text-draft-ink">{{ __('messages.Draft_FilterControls') }}</div>
        @include('store.partials.filters-card', [
          'q' => $q, 'cat' => $cat, 'collection' => $collection,
          'min' => $min, 'max' => $max, 'sort' => $sort,
          'categories' => $categories, 'collections' => $collections
        ])
      </div>
    </aside>
    
    <main>
      {{-- Applied filter tags --}}
      @if($hasFilters)
        <div class="flex flex-wrap gap-2 mb-6 font-draft-mono text-xs">
          @if(filled($q))
            <a href="{{ route('store.shop', request()->except('q','page')) }}" class="border border-draft-border bg-draft-white px-3 py-1 flex items-center gap-1">
              "{{ $q }}" <span class="text-draft-blue">&times;</span>
            </a>
          @endif
          @if(filled($cat))
            @php $catName = optional($categories->firstWhere('id', $cat))->name ?? $cat; @endphp
            <a href="{{ route('store.shop', request()->except('category','page')) }}" class="border border-draft-border bg-draft-white px-3 py-1 flex items-center gap-1">
              CAT_{{ strtoupper(Str::slug($catName, '_')) }} <span class="text-draft-blue">&times;</span>
            </a>
          @endif
          @if(filled($collection))
            @php
              $coObj  = $collections->first(fn($c) => (string)$c->slug === (string)$collection || (string)$c->id === (string)$collection);
              $coName = $coObj->title ?? $collection;
            @endphp
            <a href="{{ route('store.shop', request()->except('collection','page')) }}" class="border border-draft-border bg-draft-white px-3 py-1 flex items-center gap-1">
              COLL_{{ strtoupper(Str::slug($coName, '_')) }} <span class="text-draft-blue">&times;</span>
            </a>
          @endif
          <a href="{{ route('store.shop') }}" class="border border-red-500 text-red-600 px-3 py-1 bg-red-50/50">{{ __('messages.Draft_ResetAll') }}</a>
        </div>
      @endif

      @if($products->count())
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              $metalTypeName = $isJewelry && $p->metalType ? $p->metalType->name : __('messages.Draft_NA');
              $karatName = $isJewelry && $p->karat ? $p->karat->name : __('messages.Draft_NA');
              
              $grossWeight = $isJewelry ? (float) ($p->jewelry_gross_weight ?? 0.0) : 0.0;
              $netWeight = $isJewelry ? (float) ($p->jewelry_net_weight ?? 0.0) : 0.0;
              $metalWeight = $isJewelry ? (float) ($p->jewelry_metal_weight ?? 0.0) : 0.0;
              
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
            
            <div class="draft-spec-card">
              <div class="draft-spec-header">
                <span class="font-draft-mono text-[10px] text-draft-grey">//ID: {{ str_pad($p->id, 5, '0', STR_PAD_LEFT) }}</span>
                @if($isPreorderActive)
                  <span class="draft-badge">{{ __('messages.Draft_PreOrderBadge') }}</span>
                @elseif(!$isAvailable)
                  <span class="draft-badge bg-red-700">{{ __('messages.Draft_OutOfStockBadge') }}</span>
                @else
                  <span class="draft-badge bg-emerald-600">{{ __('messages.Draft_InStockBadge') }}</span>
                @endif
              </div>

              <div class="aspect-video overflow-hidden border-b border-draft-border bg-draft-slate">
                <a href="#" class="block w-full h-full js-quick-view"
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
                   @click.prevent>
                  <img src="{{ $imgUrl }}" alt="{{ $p->name }}" class="w-full h-full object-cover">
                </a>
              </div>

              <div class="draft-spec-body">
                <div class="space-y-1">
                  <h3 class="font-draft-mono text-sm font-bold text-draft-ink line-clamp-1" title="{{ $p->name }}">
                    {{ $p->name }}
                  </h3>
                  
                  {{-- Technical specs table --}}
                  <table class="draft-spec-table font-draft-mono">
                    <tbody>
                      <tr>
                        <td>{{ __('messages.Draft_MetalType') }}</td>
                        <td class="text-right text-draft-ink">{{ $metalTypeName }}</td>
                      </tr>
                      <tr>
                        <td>{{ __('messages.Draft_KaratIndex') }}</td>
                        <td class="text-right text-draft-ink">{{ $karatName }}</td>
                      </tr>
                      @if($isJewelry)
                        <tr>
                          <td>{{ __('messages.Draft_GrossWeight') }}</td>
                          <td class="text-right text-draft-ink">{{ $grossWeight > 0 ? $grossWeight . ' g' : __('messages.Draft_NA') }}</td>
                        </tr>
                        <tr>
                          <td>{{ __('messages.Draft_MetalWeight') }}</td>
                          <td class="text-right text-draft-ink">{{ $metalWeight > 0 ? $metalWeight . ' g' : __('messages.Draft_NA') }}</td>
                        </tr>
                      @endif
                    </tbody>
                  </table>
                </div>

                <div class="pt-3 border-t border-draft-border mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p class="font-draft-mono text-[9px] text-draft-grey">{{ __('messages.Draft_ValueEst') }}</p>
                    <p class="font-draft-mono text-sm font-bold text-draft-blue">
                      {{ $currency }}{{ number_format($price, 2, '.', ',') }}
                    </p>
                  </div>
                  
                  <button type="button" 
                          class="draft-btn py-1.5 px-4 text-[9px] js-add-to-cart"
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
                          data-added-label="{{ __('messages.Draft_AddedLabel') }}">
                    {{ __('messages.Draft_AddToCartBtn') }}
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
            <nav aria-label="{{ __('messages.Draft_ProductPagination') }}">
              <ul class="flex items-center gap-1 font-draft-mono text-xs">
                @if ($products->onFirstPage())
                  <li><span class="px-3 py-1.5 border border-draft-border text-draft-grey">{{ __('messages.Draft_Prev') }}</span></li>
                @else
                  <li><a class="px-3 py-1.5 border border-draft-border hover:bg-draft-ink hover:text-white transition" href="{{ $products->previousPageUrl() }}">{{ __('messages.Draft_Prev') }}</a></li>
                @endif
                
                @foreach(range(1, $products->lastPage()) as $i)
                  @if($i == $products->currentPage())
                    <li><span class="px-3 py-1.5 border border-draft-ink bg-draft-ink text-white font-bold">[{{ $i }}]</span></li>
                  @else
                    <li><a class="px-3 py-1.5 border border-draft-border hover:bg-draft-ink hover:text-white transition" href="{{ $products->url($i) }}">[{{ $i }}]</a></li>
                  @endif
                @endforeach

                @if ($products->hasMorePages())
                  <li><a class="px-3 py-1.5 border border-draft-border hover:bg-draft-ink hover:text-white transition" href="{{ $products->nextPageUrl() }}">{{ __('messages.Draft_Next') }}</a></li>
                @else
                  <li><span class="px-3 py-1.5 border border-draft-border text-draft-grey">{{ __('messages.Draft_Next') }}</span></li>
                @endif
              </ul>
            </nav>
          </div>
        @endif
      @else
        <div class="text-center py-16 border border-draft-border bg-draft-white">
          <p class="font-draft-mono text-sm text-draft-blue mb-3">{{ __('messages.Draft_NoLotsMatched') }}</p>
          <p class="text-xs text-draft-grey mb-4 font-draft-mono">{{ __('messages.Draft_NoLotsDesc') }}</p>
          <a href="{{ route('store.shop') }}" class="draft-btn text-xs py-1.5 px-6">{{ __('messages.Draft_ResetQuery') }}</a>
        </div>
      @endif
    </main>
  </div>
</div>

<div x-data="drawer()" x-cloak id="filtersDrawer">
  <div x-show="isOpen" class="drawer-backdrop" x-transition.opacity @click="close()"></div>
  <aside class="drawer-panel drawer-end bg-draft-white border-l border-draft-ink text-draft-ink" x-show="isOpen"
         x-transition:enter="transition-transform duration-300"
         x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
         x-transition:leave="transition-transform duration-200"
         x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"
         role="dialog" aria-modal="true" aria-label="{{ __('messages.Filters') }}">
    <div class="drawer-header border-b border-draft-border py-4 px-6 flex justify-between items-center font-draft-mono">
      <h5 class="text-sm m-0 font-bold">{{ __('messages.Draft_FiltersDrawer') }}</h5>
      <button type="button" class="text-draft-ink hover:text-draft-blue transition font-bold" @click="close()" aria-label="{{ __('messages.Close') }}">
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
