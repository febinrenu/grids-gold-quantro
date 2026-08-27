@extends('store.vintage.layout')

@section('content')
    <div class="theme-vintage bg-vt-bg text-vt-text pb-24">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Vintage Shop Header -->
        <section class="border-b border-vt-border bg-vt-surface py-20 relative text-center px-4">
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: repeating-linear-gradient(45deg, #2C221B 0, #2C221B 1px, transparent 0, transparent 50%); background-size: 20px 20px;">
            </div>

            <div class="relative z-10 max-w-3xl mx-auto">
                <span class="font-serif uppercase tracking-[0.4em] text-xs text-vt-goldDark block mb-6">— The Complete
                    Archive —</span>
                <h1 class="text-4xl md:text-6xl font-serif text-vt-text mb-6">Fine Jewelry & Artifacts</h1>
                <div class="w-24 h-px bg-vt-text mx-auto mb-6"></div>
                <p class="text-xl italic text-vt-mute font-sans max-w-xl mx-auto">
                    Showing {{ trans_choice('messages.products', $total, ['count' => $total]) }} meticulously crafted
                    pieces.
                    @if($hasFilters) Including active filters. @endif
                </p>

                <div class="mt-12 flex flex-wrap gap-4 items-center justify-center">
                    <button
                        class="bg-vt-text text-vt-bg font-serif uppercase tracking-widest text-xs px-6 py-3 hover:bg-vt-gold transition-colors flex items-center gap-2"
                        type="button" @click="window.StoreUI.open('filtersDrawer')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        Refine Search
                    </button>

                    <form method="get" action="{{ route('store.shop') }}" class="flex items-center">
                        @foreach(request()->except(['sort', 'page']) as $k => $v)
                            @if(is_array($v))
                                @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
                            @else
                                <input type="hidden" name="{{ $k }}" value="{{ $v }}">
                            @endif
                        @endforeach

                        <select name="sort"
                            class="bg-transparent border border-vt-border text-vt-text font-serif uppercase tracking-widest text-xs px-4 py-3 outline-none focus:border-vt-gold cursor-pointer"
                            onchange="this.form.submit()">
                            <option value="latest" @selected(($sort ?? 'latest') === 'latest')>Newest Additions</option>
                            <option value="price_asc" @selected($sort === 'price_asc')>Price: Ascending</option>
                            <option value="price_desc" @selected($sort === 'price_desc')>Price: Descending</option>
                        </select>
                    </form>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid lg:grid-cols-[260px_1fr] gap-12">
                <aside class="hidden lg:block border-r border-vt-border pr-8">
                    <div class="sticky top-24 font-serif">
                        <h4 class="uppercase tracking-[0.2em] text-vt-goldDark mb-6 border-b border-vt-text/20 pb-2">Index
                        </h4>
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
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-vt-text/40 backdrop-blur-sm" x-transition.opacity
                @click="close()"></div>
            <aside
                class="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-vt-bg border-l border-vt-border z-[110] flex flex-col font-serif"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-x-0"
                x-transition:leave-end="translate-x-full" role="dialog" aria-modal="true"
                aria-label="{{ 'Filters' }}">
                <div class="flex items-center justify-between p-6 border-b border-vt-border">
                    <h5 class="text-xl text-vt-goldDark uppercase tracking-[0.2em]">Refinements</h5>
                    <button type="button" class="text-vt-mute hover:text-vt-text transition" @click="close()"
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

