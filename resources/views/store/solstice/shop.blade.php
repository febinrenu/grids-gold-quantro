@extends('store.solstice.layout')

@section('content')
<div class="theme-solstice">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="so-sunrise px-6 md:px-12 py-12 md:py-16">
  <div class="max-w-6xl mx-auto">
    <p class="so-eyebrow" style="color:#FFF3E2;">{{ __('messages.Solstice_FullCollection') }}</p>
    <h1 class="so-display mt-2" style="font-size:clamp(1.9rem,4.5vw,3.2rem); color:#3A2A1E;">{{ __('messages.Solstice_Shop') }}</h1>
    <div class="text-sm mt-3" style="color:#4A331F; opacity:.85;">
      {{ trans_choice('messages.products', $total, ['count' => $total]) }}
      @if($hasFilters) · <span style="text-decoration:underline;">{{ __('messages.FiltersApplied') }}</span>@endif
    </div>

    <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-2 flex-wrap mt-6">
      @foreach(request()->except(['sort','page']) as $k => $v)
        @if(is_array($v))
          @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
        @else
          <input type="hidden" name="{{ $k }}" value="{{ $v }}">
        @endif
      @endforeach
      <select name="sort" class="select h-10 text-sm py-1">
        <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
        <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
        <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
      </select>
      <button class="so-btn so-btn-light so-shadow" type="submit">{{ __('messages.Update') }}</button>
      <button class="so-btn so-btn-outline lg:hidden" style="border-color:#3A2A1E;" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Filters') }}</button>
    </form>
  </div>
</section>

<div class="px-6 md:px-12 py-10 md:py-14">
  <div class="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
    <aside class="hidden lg:block">
      @include('store.partials.filters-card', [
        'q' => $q, 'cat' => $cat, 'collection' => $collection,
        'min' => $min, 'max' => $max, 'sort' => $sort,
        'categories' => $categories, 'collections' => $collections
      ])
    </aside>
    <main>
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
