@extends('store.monolith.layout')

@section('content')
<div class="theme-monolith" style="background:#0A0A09; color:#F3F0EA;">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="max-w-7xl mx-auto px-8 pt-14 pb-8">
  <p class="m-label mb-2" style="color:#9C7A54;">{{ 'Monolith_TheFullIndex' }}</p>
  <h1 class="m-serif" style="font-size:clamp(2rem,5vw,3.5rem); color:#F3F0EA;">{{ 'Monolith_TheCollection' }}</h1>
  <div class="text-sm mt-3" style="color:#C4BDB0;">
    {{ trans_choice('messages.products', $total, ['count' => $total]) }}
    @if($hasFilters) · <span style="color:#C7A97A;">{{ 'FiltersApplied' }}</span>@endif
  </div>

  <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-2 flex-wrap mt-5">
    @foreach(request()->except(['sort','page']) as $k => $v)
      @if(is_array($v))
        @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
      @else
        <input type="hidden" name="{{ $k }}" value="{{ $v }}">
      @endif
    @endforeach
    <select name="sort" class="select h-9 text-sm py-1">
      <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ 'Latest' }}</option>
      <option value="price_asc" @selected($sort === 'price_asc')>{{ 'PriceUp' }}</option>
      <option value="price_desc" @selected($sort === 'price_desc')>{{ 'PriceDown' }}</option>
    </select>
    <button class="m-btn" type="submit">{{ 'Update' }}</button>
    <button class="m-btn lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ 'Filters' }}</button>
  </form>
</section>

<div class="max-w-7xl mx-auto px-8 py-8" style="border-top:1px solid rgba(243,240,234,.08);">
  <div class="grid lg:grid-cols-[240px_1fr] gap-10">
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
         role="dialog" aria-modal="true" aria-label="{{ 'Filters' }}">
    <div class="drawer-header">
      <h5 class="font-semibold m-0">{{ 'Filters' }}</h5>
      <button type="button" class="btn btn-ghost btn-icon btn-sm" @click="close()" aria-label="{{ 'Close' }}">
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

