@extends('store.orbit.layout')

@section('content')
<div class="theme-orbit" style="background:#F5F6F8; color:#1C1E22;">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="relative px-6 md:px-12 pt-14 pb-8 overflow-hidden">
  <span class="ob-ring" style="width:360px; height:360px; top:-160px; right:-100px;"></span>
  <div class="max-w-7xl mx-auto relative">
    <p class="ob-label mb-3">{{ __('messages.Orbit_FullCatalogue') }}</p>
    <h1 class="ob-display" style="font-weight:700; font-size:clamp(1.9rem,4vw,3rem);">{{ __('messages.Orbit_Shop') }}</h1>
    <div class="text-sm mt-3" style="color:#8E939D;">
      {{ trans_choice('messages.products', $total, ['count' => $total]) }}
      @if($hasFilters) · <span style="text-decoration:underline;">{{ __('messages.FiltersApplied') }}</span>@endif
    </div>

    <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-3 flex-wrap mt-6">
      @foreach(request()->except(['sort','page']) as $k => $v)
        @if(is_array($v))
          @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
        @else
          <input type="hidden" name="{{ $k }}" value="{{ $v }}">
        @endif
      @endforeach
      <select name="sort" class="select h-10 text-sm py-1" style="border-radius:999px; border:1px solid #E7E9ED;">
        <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
        <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
        <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
      </select>
      <button class="ob-btn ob-btn-accent" type="submit">{{ __('messages.Update') }}</button>
      <button class="ob-btn ob-btn-outline lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Filters') }}</button>
    </form>
  </div>
</section>

<div class="px-6 md:px-12 py-8" style="border-top:1px solid #E7E9ED;">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10">
    <aside class="hidden lg:block">
      <div class="ob-card p-1">
        @include('store.partials.filters-card', [
          'q' => $q, 'cat' => $cat, 'collection' => $collection,
          'min' => $min, 'max' => $max, 'sort' => $sort,
          'categories' => $categories, 'collections' => $collections
        ])
      </div>
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
