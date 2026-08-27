@extends('store.lumiere.layout')

@section('content')
    <div class="theme-lumiere bg-lm-bg text-lm-text pb-20">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Hero / Breadcrumb Area -->
        <section class="border-b border-lm-border bg-white py-12 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599643477877-52643a60a77f?auto=format&fit=crop&q=80&w=2000"
                alt="Beautiful jewelry collection" class="absolute inset-0 w-full h-full object-cover opacity-10">
            <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
                <h1 class="text-3xl md:text-5xl font-light tracking-tight text-lm-text mb-4">{{ 'ShopAll' }}
                </h1>
                <p class="text-sm font-light text-lm-mute mb-2">
                    {{ trans_choice('messages.products', $total, ['count' => $total]) }}
                    @if($hasFilters) · <span
                    class="text-lm-champagneDark font-medium">{{ 'FiltersApplied' }}</span>@endif
                </p>
            </div>
        </section>

        <!-- Filter Ribbon -->
        <div class="border-b border-lm-border bg-lm-bg sticky top-20 z-40">
            <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <button
                    class="lg:hidden flex items-center gap-2 text-sm font-medium border border-lm-border px-4 py-1.5 rounded-full hover:border-lm-champagneDark transition-colors bg-white"
                    type="button" @click="window.StoreUI.open('filtersDrawer')">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    {{ 'Filters' }}
                </button>
                <div class="hidden lg:flex items-center gap-2 text-sm text-lm-mute">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span>Refine by</span>
                </div>
                <form method="get" action="{{ route('store.shop') }}" class="flex items-center gap-3">
                    @foreach(request()->except(['sort', 'page']) as $k => $v)
                        @if(is_array($v))
                            @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
                        @else
                            <input type="hidden" name="{{ $k }}" value="{{ $v }}">
                        @endif
                    @endforeach
                    <select name="sort"
                        class="text-sm font-light bg-transparent border-0 ring-0 outline-none pr-8 cursor-pointer text-lm-text focus:ring-0 appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_center]"
                        onchange="this.form.submit()">
                        <option value="latest" @selected(($sort ?? 'latest') === 'latest')>{{ 'Latest' }}
                        </option>
                        <option value="price_asc" @selected($sort === 'price_asc')>{{ 'PriceUp' }}</option>
                        <option value="price_desc" @selected($sort === 'price_desc')>{{ 'PriceDown' }}</option>
                    </select>
                </form>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 mt-8">
            <div class="grid lg:grid-cols-[240px_1fr] gap-10">
                <aside class="hidden lg:block">
                    <!-- Reusing the exact filters-card but it will inherit Lumiere styles -->
                    @include('store.partials.filters-card', [
                        'q' => $q,
                        'cat' => $cat,
                        'collection' => $collection,
                        'min' => $min,
                        'max' => $max,
                        'sort' => $sort,
                        'categories' => $categories,
                        'collections' => $collections
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

        <!-- Mobile Drawer -->
        <div x-data="drawer()" x-cloak id="filtersDrawer">
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-lm-text/20 backdrop-blur-sm" x-transition.opacity
                @click="close()"></div>
            <aside
                class="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-lm-surface z-[110] shadow-glass flex flex-col"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-x-0"
                x-transition:leave-end="translate-x-full" role="dialog" aria-modal="true"
                aria-label="{{ 'Filters' }}">
                <div class="flex items-center justify-between p-4 border-b border-lm-border">
                    <h5 class="font-semibold text-lg">{{ 'Filters' }}</h5>
                    <button type="button" class="p-2 text-lm-mute hover:text-lm-text transition-colors" @click="close()"
                        aria-label="{{ 'Close' }}">
                        <x-store.icon name="x" class="w-5 h-5" />
                    </button>
                </div>
                <div class="flex-1 overflow-y-auto p-4">
                    @include('store.partials.filters-card', [
                        'q' => $q,
                        'cat' => $cat,
                        'collection' => $collection,
                        'min' => $min,
                        'max' => $max,
                        'sort' => $sort,
                        'categories' => $categories,
                        'collections' => $collections,
                        'isDrawer' => true
                    ])
                </div>
            </aside>
        </div>

        @include('store.partials.shop-modals-scripts', ['currency' => $currency])
    </div>
@endsection

