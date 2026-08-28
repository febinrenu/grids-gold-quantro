@extends('store.nocturne.layout')

@section('content')
<div class="theme-nocturne" style="color:rgb(245 244 241); min-height:60vh;">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="relative px-6 md:px-12 pt-16 pb-10 text-center overflow-hidden">
  <div class="absolute inset-0" style="background: radial-gradient(ellipse 60% 50% at 50% 0%, rgb(42 42 46), transparent 65%); pointer-events:none;"></div>
  <div class="relative">
    <p class="nc-eyebrow mb-3">{{ __('messages.Nocturne_ShopEyebrow') }}</p>
    <h1 class="nc-display" style="font-size:clamp(2rem,4.5vw,3.2rem);">{{ __('messages.Nocturne_NavShop') }}</h1>
    <div class="text-sm mt-4" style="color:rgb(122 120 114);">
      {{ trans_choice('messages.products', $total, ['count' => $total]) }}
      @if($hasFilters) · <span style="text-decoration:underline; color:rgb(196 152 82);">{{ __('messages.FiltersApplied') }}</span>@endif
    </div>

    <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-2 flex-wrap justify-center mt-7">
      @foreach(request()->except(['sort','page']) as $k => $v)
        @if(is_array($v))
          @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
        @else
          <input type="hidden" name="{{ $k }}" value="{{ $v }}">
        @endif
      @endforeach
      <select name="sort" class="select h-9 text-sm py-1" style="background:rgb(17 17 19); color:rgb(245 244 241); border-color:rgb(68 68 74);">
        <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
        <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
        <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
      </select>
      <button class="nc-btn" type="submit" style="padding:.55rem 1.2rem;">{{ __('messages.Update') }}</button>
      <button class="nc-btn nc-btn-ghost lg:hidden" type="button" style="padding:.55rem 1.2rem;" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Filters') }}</button>
    </form>
  </div>
</section>

<div class="px-6 md:px-12 py-10" style="border-top:1px solid rgb(42 42 46);">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10">
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
  <aside class="drawer-panel drawer-end theme-nocturne" x-show="isOpen"
         x-transition:enter="transition-transform duration-300"
         x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
         x-transition:leave="transition-transform duration-200"
         x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"
         role="dialog" aria-modal="true" aria-label="{{ __('messages.Filters') }}"
         style="background:rgb(17 17 19); color:rgb(245 244 241);">
    <div class="drawer-header" style="border-color:rgb(42 42 46);">
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
