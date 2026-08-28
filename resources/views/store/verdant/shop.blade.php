@extends('store.verdant.layout')

@section('content')
<div class="theme-verdant" style="background:#0F2419; color:#EDEAE0;">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="px-5 md:px-8 pt-14 pb-8 max-w-7xl mx-auto">
  <p class="vd-eyebrow mb-3">{{ __('messages.Verdant_ShopEyebrow') }}</p>
  <h1 class="vd-serif" style="font-size:clamp(2rem,4.5vw,3.2rem); color:#EDEAE0;">{{ __('messages.Verdant_ShopAll') }}</h1>
  <div class="text-sm mt-3" style="color:#94A898;">
    {{ trans_choice('messages.products', $total, ['count' => $total]) }}
    @if($hasFilters) &middot; <span style="color:#C9A24B;">{{ __('messages.FiltersApplied') }}</span>@endif
  </div>

  <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-3 flex-wrap mt-6">
    @foreach(request()->except(['sort','page']) as $k => $v)
      @if(is_array($v))
        @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
      @else
        <input type="hidden" name="{{ $k }}" value="{{ $v }}">
      @endif
    @endforeach
    <select name="sort" class="select h-10 text-sm" style="background:#16331F; border:1px solid rgba(201,162,75,.35); color:#EDEAE0;">
      <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
      <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
      <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
    </select>
    <button class="vd-btn" type="submit">{{ __('messages.Update') }}</button>
    <button class="vd-btn vd-btn-outline lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Filters') }}</button>
  </form>
</section>

<div class="vd-divider max-w-7xl mx-auto"></div>

<div class="px-5 md:px-8 py-10 max-w-7xl mx-auto">
  <div class="grid lg:grid-cols-[280px_1fr] gap-10">
    <aside class="hidden lg:block">
      <div class="vd-case p-5">
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
  <aside class="drawer-panel drawer-end theme-verdant" x-show="isOpen"
         style="background:#0F2419; color:#EDEAE0;"
         x-transition:enter="transition-transform duration-300"
         x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
         x-transition:leave="transition-transform duration-200"
         x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"
         role="dialog" aria-modal="true" aria-label="{{ __('messages.Filters') }}">
    <div class="drawer-header" style="border-bottom:1px solid rgba(201,162,75,.25);">
      <h5 class="font-semibold m-0" style="color:#EDEAE0;">{{ __('messages.Filters') }}</h5>
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
