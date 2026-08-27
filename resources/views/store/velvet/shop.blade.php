@extends('store.velvet.layout')

@section('content')
    <div class="theme-velvet bg-vv-bg text-vv-text pb-20">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Page Header -->
        <section
            class="bg-vv-surface py-16 rounded-b-[4rem] border-b border-vv-border shadow-lg px-4 md:px-8 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-vv-bg/50 to-transparent"></div>
            <div class="relative z-10 max-w-3xl mx-auto">
                <span class="text-xs font-bold uppercase tracking-widest text-vv-mute mb-4 block">Our Catalog</span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-vv-text mb-6">The Collection</h1>
                <p class="text-vv-mute mb-8">
                    Explore {{ trans_choice('messages.products', $total, ['count' => $total]) }} meticulously crafted
                    pieces. @if($hasFilters) Including applied refinements. @endif
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button class="btn-velvet-outline text-xs px-6 py-2" type="button"
                        @click="window.StoreUI.open('filtersDrawer')">
                        Filters & Refinements
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
                            class="bg-vv-surface border border-vv-border rounded-full text-vv-text text-xs uppercase tracking-widest font-bold px-6 py-3 outline-none focus:border-vv-mute cursor-pointer"
                            onchange="this.form.submit()">
                            <option value="latest" @selected(($sort ?? 'latest') === 'latest')>Newest Arrivals</option>
                            <option value="price_asc" @selected($sort === 'price_asc')>Price: Low to High</option>
                            <option value="price_desc" @selected($sort === 'price_desc')>Price: High to Low</option>
                        </select>
                    </form>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 md:px-8 mt-12">
            <div class="grid lg:grid-cols-[280px_1fr] gap-12">
                <!-- Desktop Sidebar -->
                <aside class="hidden lg:block">
                    <div class="sticky top-32 bg-vv-surface border border-vv-border rounded-[2rem] p-6 shadow-xl">
                        <h4 class="font-serif text-xl border-b border-vv-border pb-4 mb-4 text-vv-text">Refine Criteria</h4>
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
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-vv-bg/80 backdrop-blur-md" x-transition.opacity
                @click="close()"></div>
            <aside
                class="fixed bottom-0 left-0 w-full h-[80vh] bg-vv-surface border-t border-vv-border z-[110] flex flex-col rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="translate-y-full" x-transition:enter-end="translate-y-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-y-0"
                x-transition:leave-end="translate-y-full" role="dialog" aria-modal="true" aria-label="Filters">

                <div class="flex items-center justify-between p-6 border-b border-vv-border">
                    <h5 class="text-2xl font-serif text-vv-text">Refine Results</h5>
                    <button type="button"
                        class="text-vv-mute hover:text-vv-text transition-colors p-2 bg-vv-bg rounded-full" @click="close()"
                        aria-label="{{ 'Close' }}">
                        <x-store.icon name="x" class="w-5 h-5" />
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

