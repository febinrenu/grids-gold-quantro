@extends('store.prism.layout')

@section('content')
    <div class="theme-prism bg-pr-bg text-pr-text pb-24">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Page Header -->
        <div class="pt-8 pb-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
            <div
                class="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-pr-border mb-6">
                <span class="text-xl">✨</span>
                <span class="text-xs font-bold text-pr-purple uppercase tracking-wider">Happy Shopping!</span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-7xl font-black text-pr-text tracking-tight mb-4">
                The <span class="pr-text-gradient">Collection</span>
            </h1>

            <p class="text-pr-mute font-medium max-w-xl mx-auto">
                Viewing {{ trans_choice('messages.products', $total, ['count' => $total]) }}
                @if($hasFilters) that match your vibe. @endif
            </p>

            <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                <button
                    class="w-full sm:w-auto bg-white border border-pr-border rounded-full px-6 py-3 font-bold text-pr-text shadow-sm hover:border-pr-pink hover:text-pr-pink transition-all flex items-center justify-center gap-2"
                    type="button" @click="window.StoreUI.open('filtersDrawer')">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Filter Magic
                </button>

                <form method="get" action="{{ route('store.shop') }}" class="w-full sm:w-auto relative">
                    @foreach(request()->except(['sort', 'page']) as $k => $v)
                        @if(is_array($v))
                            @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
                        @else
                            <input type="hidden" name="{{ $k }}" value="{{ $v }}">
                        @endif
                    @endforeach

                    <select name="sort"
                        class="w-full bg-white border border-pr-border rounded-full text-pr-text font-bold px-6 py-3 outline-none focus:border-pr-purple shadow-sm cursor-pointer appearance-none pr-10"
                        onchange="this.form.submit()">
                        <option value="latest" @selected(($sort ?? 'latest') === 'latest')>New & Shiny</option>
                        <option value="price_asc" @selected($sort === 'price_asc')>Price: Low-High</option>
                        <option value="price_desc" @selected($sort === 'price_desc')>Price: High-Low</option>
                    </select>

                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-pr-mute">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </form>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid lg:grid-cols-[280px_1fr] gap-8 xl:gap-12">
                <!-- Desktop Filters -->
                <aside class="hidden lg:block">
                    <div class="sticky top-32 bg-white border border-pr-border rounded-[2rem] p-6 shadow-sm">
                        <h4 class="font-black text-xl text-pr-text mb-4">Refine By</h4>
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
                    </div>
                </aside>

                <!-- Main Grid -->
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
            <div x-show="isOpen" class="fixed inset-0 z-[100] pr-glass" x-transition.opacity @click="close()"></div>
            <aside
                class="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white border-l border-white/50 shadow-2xl z-[110] flex flex-col"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
                x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 cubic-bezier(0.4, 0, 0.2, 1)"
                x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" role="dialog"
                aria-modal="true" aria-label="Filters">
                <div class="flex items-center justify-between p-6 border-b border-pr-border bg-pr-gradient-soft">
                    <h5 class="text-2xl font-black text-pr-text">Filter Magic ✨</h5>
                    <button type="button"
                        class="text-pr-text hover:bg-white hover:shadow-sm rounded-full p-2 transition-all" @click="close()"
                        aria-label="{{ 'Close' }}">
                        <x-store.icon name="x" class="w-6 h-6" />
                    </button>
                </div>
                <div class="flex-1 overflow-y-auto p-6">
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

