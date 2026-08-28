@extends('store.meridian.layout')

@section('content')
<div class="theme-meridian">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="px-6 md:px-12 pt-12 pb-8 md-hairline" style="border-color:#181818;">
  <div class="max-w-6xl mx-auto">
    <p class="md-label mb-3"><span class="md-num">00</span> {{ __('messages.Meridian_SectionCatalogue') }}</p>
    <div class="md-grid items-end" style="row-gap:1.5rem;">
      <div style="grid-column: span 12 / span 12;" class="md:col-span-7">
        <h1 class="md-display" style="font-weight:700; font-size:clamp(1.9rem,4vw,3.1rem); letter-spacing:-.01em;">{{ __('messages.Meridian_Shop') }}</h1>
        <div class="text-sm mt-3" style="color:#545249;">
          {{ trans_choice('messages.products', $total, ['count' => $total]) }}
          @if($hasFilters) · <span style="border-bottom:1px solid #C1442A; color:#C1442A;">{{ __('messages.FiltersApplied') }}</span>@endif
        </div>
      </div>
      <div style="grid-column: span 12 / span 12;" class="md:col-span-5">
        <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-2 flex-wrap justify-start md:justify-end">
          @foreach(request()->except(['sort','page']) as $k => $v)
            @if(is_array($v))
              @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
            @else
              <input type="hidden" name="{{ $k }}" value="{{ $v }}">
            @endif
          @endforeach
          <select name="sort" class="select h-9 text-sm py-1">
            <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
            <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
            <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
          </select>
          <button class="md-btn" type="submit" style="padding:.6rem 1.1rem;">{{ __('messages.Update') }}</button>
          <button class="md-btn md-btn-outline lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')" style="padding:.6rem 1.1rem;">{{ __('messages.Filters') }}</button>
        </form>
      </div>
    </div>
  </div>
</section>

<div class="px-6 md:px-12 py-10">
  <div class="max-w-6xl mx-auto md-grid" style="row-gap:2rem;">
    <aside class="hidden lg:block md:col-span-3" style="grid-column: span 12 / span 12;">
      <p class="md-label mb-4"><span class="md-num">A</span> {{ __('messages.Filters') }}</p>
      @include('store.partials.filters-card', [
        'q' => $q, 'cat' => $cat, 'collection' => $collection,
        'min' => $min, 'max' => $max, 'sort' => $sort,
        'categories' => $categories, 'collections' => $collections
      ])
    </aside>
    <main style="grid-column: span 12 / span 12;" class="md:col-span-9 md-hr-v md:pl-6">
      @include('store.partials.shop-product-grid', [
        's' => $s,
        'products' => $products,
        'categories' => $categories,
        'collections' => $collections,
        'q' => $q,
        'cat' => $cat,
        'collection' => $collection,
        'min' => $min,
        'max' => $max,
        'sort' => $sort,
        'currency' => $currency,
      ])
    </main>
  </div>
</div>

<div x-data="drawer()" x-cloak id="filtersDrawer">
  <div x-show="isOpen" class="drawer-backdrop" x-transition.opacity @click="close()"></div>
  <aside class="drawer-panel drawer-end" x-show="isOpen"
         x-transition:enter="transition-transform duration-300"
         x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
         x-transition:leave="transition-transform duration-200"
         x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"
         role="dialog" aria-modal="true" aria-label="{{ __('messages.Filters') }}">
    <div class="drawer-header">
      <h5 class="font-semibold m-0">{{ __('messages.Filters') }}</h5>
      <button type="button" class="btn btn-ghost btn-icon btn-sm" @click="close()" aria-label="{{ __('messages.Close') }}">
        <x-store.icon name="x" class="w-5 h-5" />
      </button>
    </div>
    <div class="drawer-body">
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
