@extends('store.facet.layout')

@section('content')
<div class="theme-facet bg-white text-brand-ink">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="bg-brand-paper border-b border-brand-ink/[.06]">
  <div class="max-w-7xl mx-auto px-4 py-10">
    <p class="text-[11px] font-bold text-brand-indigo eyebrow mb-2">THE COLLECTION</p>
    <h1 class="font-display font-bold text-3xl md:text-4xl text-brand-ink">Shop Fine Jewelry</h1>
    <div class="text-sm text-brand-ink/50 mt-2">
      {{ trans_choice('messages.products', $total, ['count' => $total]) }}
      @if($hasFilters) · <span class="text-brand-indigo font-semibold">{{ __('messages.FiltersApplied') }}</span>@endif
    </div>

    <form method="get" action="{{ route('store.shop') }}" class="flex items-end gap-2 flex-wrap mt-4">
      @foreach(request()->except(['sort','page']) as $k => $v)
        @if(is_array($v))
          @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
        @else
          <input type="hidden" name="{{ $k }}" value="{{ $v }}">
        @endif
      @endforeach
      <div>
        <label class="text-xs text-brand-ink/50 block mb-1">{{ __('messages.Sort') }}</label>
        <select name="sort" class="select h-9 text-sm py-1">
          <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
          <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
          <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
        </select>
      </div>
      <button class="bg-brand-indigo hover:bg-brand-indigoDark transition text-white font-semibold px-5 py-2 rounded-lg text-xs" type="submit">Update</button>
      <button class="border border-brand-ink/20 text-brand-ink px-5 py-2 rounded-lg text-xs lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">Filters</button>
    </form>
  </div>
</section>

<div class="max-w-7xl mx-auto px-4 py-8">
  <div class="grid lg:grid-cols-[280px_1fr] gap-6">
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
