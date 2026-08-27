@extends('store.nova.layout')

@section('content')
    <div class="theme-nova bg-nv-bg text-nv-text pb-16">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Hero / Page Header -->
        <section class="border-b border-nv-cyan/30 relative overflow-hidden bg-nv-surface py-12">
            <div class="absolute inset-0 nv-grid-bg opacity-40"></div>
            <div
                class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-nv-cyan to-transparent">
            </div>

            <div class="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-end justify-between gap-6">
                <div>
                    <div class="inline-flex items-center gap-2 mb-4">
                        <span class="w-1.5 h-1.5 rounded-none bg-nv-pink animate-pulse"></span>
                        <span class="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-nv-pink">SECURE DB
                            // QUERY ACTIVE</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-display font-black text-white tracking-widest uppercase">
                        Central <span class="text-nv-cyan">Database</span>
                    </h1>
                    <p class="text-xs font-display text-nv-mute tracking-[0.1em] mt-3 uppercase">
                        Returning {{ trans_choice('messages.products', $total, ['count' => $total]) }} results
                        @if($hasFilters) [ FILTER PARAMS APPLIED ] @endif
                    </p>
                </div>

                <!-- Toolbar -->
                <div class="flex items-center gap-4 bg-nv-bg border border-nv-border p-2">
                    <button
                        class="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-white hover:text-nv-cyan transition-colors px-4 py-2 border-r border-nv-border disabled:opacity-50"
                        type="button" @click="window.StoreUI.open('filtersDrawer')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="square" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        PARAMS
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
                            class="text-xs font-display font-bold uppercase tracking-widest bg-transparent border-none text-nv-text pl-4 pr-8 py-2 outline-none cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2300F0FF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[right_10px_center]"
                            onchange="this.form.submit()">
                            <option value="latest" @selected(($sort ?? 'latest') === 'latest')>NEWEST COMPILED</option>
                            <option value="price_asc" @selected($sort === 'price_asc')>VAL [ASC]</option>
                            <option value="price_desc" @selected($sort === 'price_desc')>VAL [DESC]</option>
                        </select>
                    </form>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 mt-8">
            <div class="grid lg:grid-cols-[250px_1fr] gap-8">
                <aside class="hidden lg:block relative">
                    <div class="sticky top-24">
                        <!-- Decoration -->
                        <div class="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-nv-cyan opacity-50"></div>

                        <h4
                            class="font-display font-bold uppercase tracking-widest text-nv-cyan mb-4 border-b border-nv-cyan/30 pb-2 text-sm">
                            Query Parameters</h4>
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
                    <div class="border border-nv-border p-1 bg-nv-surface/50 relative">
                        <div class="absolute top-0 right-0 w-8 h-8 border-t border-r border-nv-pink opacity-50"></div>
                        <div class="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-nv-pink opacity-50"></div>
                        <div class="p-1">
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
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <div x-data="drawer()" x-cloak id="filtersDrawer">
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-nv-bg/90 backdrop-blur-sm" x-transition.opacity
                @click="close()"></div>
            <aside
                class="fixed top-0 left-0 h-full w-[85vw] max-w-[320px] bg-nv-surface border-r border-nv-cyan z-[110] flex flex-col font-display shadow-neon-cyan"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-x-0"
                x-transition:leave-end="-translate-x-full" role="dialog" aria-modal="true" aria-label="Query Parameters">
                <div class="flex items-center justify-between p-4 border-b border-nv-border bg-nv-bg">
                    <h5 class="text-lg font-bold text-nv-cyan tracking-widest uppercase">VARS // PARAMS</h5>
                    <button type="button" class="text-nv-pink hover:text-white transition-colors" @click="close()"
                        aria-label="{{ 'Close' }}">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="square" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex-1 overflow-y-auto p-5">
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

