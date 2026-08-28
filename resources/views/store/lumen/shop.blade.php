@extends('store.lumen.layout')

@section('content')
<div class="theme-lumen" style="background:#FDFCFA; color:#2A2620;">
@php
  $currency   = $s->currency_code ?? '$';
  $total      = $products->total();
  $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
@endphp

<section class="px-6 md:px-10 pt-20 pb-12 text-center border-b lm-hairline">
  <p class="lm-eyebrow mb-5">{{ __('messages.Lumen_TheCollection') }}</p>
  <h1 class="lm-italic" style="font-size:clamp(2rem,4.4vw,3.2rem); color:#2A2620;">{{ __('messages.Lumen_ShopAll') }}</h1>
  <div class="text-sm mt-4" style="color:#948a7a;">
    {{ trans_choice('messages.products', $total, ['count' => $total]) }}
    @if($hasFilters) · <span class="lm-link-u">{{ __('messages.FiltersApplied') }}</span>@endif
  </div>

  <form method="get" action="{{ route('store.shop') }}" class="flex items-center justify-center gap-3 flex-wrap mt-8">
    @foreach(request()->except(['sort','page']) as $k => $v)
      @if(is_array($v))
        @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
      @else
        <input type="hidden" name="{{ $k }}" value="{{ $v }}">
      @endif
    @endforeach
    <select name="sort" class="select h-10 text-sm py-1" style="border-radius:1px;">
      <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ __('messages.Latest') }}</option>
      <option value="price_asc" @selected($sort === 'price_asc')>{{ __('messages.PriceUp') }}</option>
      <option value="price_desc" @selected($sort === 'price_desc')>{{ __('messages.PriceDown') }}</option>
    </select>
    <button class="lm-btn lm-btn-outline" type="submit">{{ __('messages.Update') }}</button>
    <button class="lm-btn lm-btn-outline lg:hidden" type="button" @click="window.StoreUI.open('filtersDrawer')">{{ __('messages.Filters') }}</button>
  </form>
</section>

<div class="px-6 md:px-10 py-14">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-12">
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
