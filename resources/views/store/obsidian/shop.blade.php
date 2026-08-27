@extends('store.obsidian.layout')

@section('content')
    <div class="theme-obsidian bg-ob-bg text-ob-text pb-20">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Minimal Dark Shop Header -->
        <section class="border-b border-ob-border bg-ob-surface pt-20 pb-12">
            <div class="max-w-7xl mx-auto px-4">
                <span
                    class="text-ob-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{{ 'Nexgold_TheCatalog' }}</span>
                <h1 class="text-5xl font-serif italic text-white mb-6">{{ 'Nexgold_ShopAllJewelry' }}</h1>

                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-ob-border pt-6">
                    <div class="text-sm text-ob-mute font-light">
                        {{ trans_choice('messages.products', $total, ['count' => $total]) }}
                        @if($hasFilters) · <span class="text-ob-gold">Filters active</span>@endif
                    </div>

                    <form method="get" action="{{ route('store.shop') }}" class="flex items-center gap-3">
                        @foreach(request()->except(['sort', 'page']) as $k => $v)
                            @if(is_array($v))
                                @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
                            @else
                                <input type="hidden" name="{{ $k }}" value="{{ $v }}">
                            @endif
                        @endforeach

                        <button
                            class="md:hidden text-xs uppercase tracking-widest text-ob-text border border-ob-border px-4 py-2 hover:border-ob-gold transition"
                            type="button" @click="window.StoreUI.open('filtersDrawer')">
                            {{ 'Filters' }}
                        </button>

                        <div
                            class="flex items-center gap-2 bg-ob-bg border border-ob-border px-3 py-1.5 focus-within:border-ob-gold transition">
                            <span class="text-xs uppercase tracking-widest text-ob-mute">{{ 'Sort' }}:</span>
                            <select name="sort"
                                class="text-sm font-bold bg-transparent border-none text-ob-text py-0 pr-8 focus:ring-0 outline-none appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%23F5F5F5%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:14px_14px] bg-no-repeat bg-[right_center]"
                                onchange="this.form.submit()">
                                <option class="bg-ob-surface" value="latest" @selected(($sort ?? 'latest') === 'latest')>
                                    {{ 'Latest' }}</option>
                                <option class="bg-ob-surface" value="price_asc" @selected($sort === 'price_asc')>
                                    {{ 'PriceUp' }}</option>
                                <option class="bg-ob-surface" value="price_desc" @selected($sort === 'price_desc')>
                                    {{ 'PriceDown' }}</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 mt-12">
            <div class="grid md:grid-cols-[250px_1fr] gap-12">
                <aside class="hidden md:block">
                    <!-- Dark mode filters -->
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
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" x-transition.opacity
                @click="close()"></div>
            <aside
                class="fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-ob-bg z-[110] border-r border-ob-border flex flex-col"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-x-0"
                x-transition:leave-end="-translate-x-full" role="dialog" aria-modal="true"
                aria-label="{{ 'Filters' }}">
                <div class="flex items-center justify-between p-5 border-b border-ob-border bg-ob-surface">
                    <h5 class="font-serif italic text-xl text-ob-gold">{{ 'Filters' }}</h5>
                    <button type="button" class="text-ob-mute hover:text-white transition" @click="close()"
                        aria-label="{{ 'Close' }}">
                        <x-store.icon name="x" class="w-6 h-6" />
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

