@extends('store.minimal.layout')

@section('content')
    <div class="theme-minimal bg-mn-bg text-mn-text">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Header Row -->
        <div
            class="max-w-[1400px] mx-auto border-x-2 border-b-2 border-mn-border flex flex-col md:flex-row md:items-center justify-between p-6 bg-mn-surface">
            <div class="mb-4 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tighter">ALL PRODUCTS</h1>
                <div class="font-bold text-mn-mute mt-1 uppercase text-sm">
                    {{ trans_choice('messages.products', $total, ['count' => $total]) }} @if($hasFilters) / FILTERED @endif
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button class="btn-brutal px-6 py-3 text-sm" type="button" @click="window.StoreUI.open('filtersDrawer')">
                    FILTERS
                </button>

                <form method="get" action="{{ route('store.shop') }}" class="flex">
                    @foreach(request()->except(['sort', 'page']) as $k => $v)
                        @if(is_array($v))
                            @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
                        @else
                            <input type="hidden" name="{{ $k }}" value="{{ $v }}">
                        @endif
                    @endforeach

                    <select name="sort"
                        class="w-full sm:w-auto bg-mn-surface border-2 border-mn-border text-mn-text font-bold uppercase text-sm px-4 py-3 outline-none focus:border-black shadow-[3px_3px_0_0_#111827] cursor-pointer"
                        onchange="this.form.submit()">
                        <option value="latest" @selected(($sort ?? 'latest') === 'latest')>NEWEST</option>
                        <option value="price_asc" @selected($sort === 'price_asc')>PRICE (LOW-HIGH)</option>
                        <option value="price_desc" @selected($sort === 'price_desc')>PRICE (HIGH-LOW)</option>
                    </select>
                </form>
            </div>
        </div>

        <!-- Main Grid -->
        <div class="max-w-[1400px] mx-auto border-x-2 border-b-2 border-mn-border bg-mn-bg min-h-screen">
            <div class="grid lg:grid-cols-[280px_1fr] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-mn-border h-full">

                <!-- Sidebar Filters (Desktop) -->
                <aside class="hidden lg:block bg-mn-surface p-6">
                    <div class="sticky top-24">
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

                <!-- Product Grid -->
                <main class="bg-mn-bg">
                    @php $all = $products->values(); @endphp

                    @if($all->isEmpty())
                        <div class="p-12 text-center font-bold text-2xl uppercase">NO PRODUCTS FOUND.</div>
                    @else
                        <div
                            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [&>div]:border-b-2 sm:[&>div:nth-last-child(-n+2)]:border-b-0 lg:[&>div:nth-last-child(-n+3)]:border-b-0 sm:[&>div]:border-r-2 sm:[&>div:nth-child(2n)]:border-r-0 lg:[&>div:nth-child(2n)]:border-r-2 lg:[&>div:nth-child(3n)]:border-r-0">
                            @foreach($all as $p)
                                <!-- Custom Product Card for Minimal Theme to match grid perfectly -->
                                <div class="p-6 relative group bg-mn-surface hover:bg-mn-bg transition-colors">
                                    <a href="#" class="block mb-4">
                                        <div class="aspect-square bg-mn-bg border-2 border-mn-border relative overflow-hidden">
                                            <img src="{{ $p->primary_image_url ?? $p->image_url }}" alt="{{ $p->name }}"
                                                class="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0">
                                            @if($p->price != $p->sale_price)
                                                <div
                                                    class="absolute top-0 left-0 bg-mn-text text-white font-bold text-xs px-2 py-1 uppercase border-b-2 border-r-2 border-mn-border">
                                                    SALE</div>
                                            @endif
                                        </div>
                                    </a>
                                    <div>
                                        <a href="#"
                                            class="font-bold uppercase text-lg leading-tight block mb-2">{{ $p->name }}</a>
                                        <div class="font-black text-xl">
                                            @if($p->price != $p->sale_price)
                                                <span>{{ $currency }}{{ number_format($p->sale_price, 2) }}</span>
                                                <span
                                                    class="text-mn-mute line-through text-sm ml-2">{{ $currency }}{{ number_format($p->price, 2) }}</span>
                                            @else
                                                <span>{{ $currency }}{{ number_format($p->price, 2) }}</span>
                                            @endif
                                        </div>
                                        @if(isset($p->category_id) && $p->category)
                                            <div class="text-xs uppercase font-bold text-mn-mute mt-1 border-t-2 border-mn-border pt-1">
                                                {{ substr($p->category->name, 0, 15) }}</div>
                                        @endif
                                    </div>
                                    <button type="button" @click="window.StoreUI.addToCart({{ $p->id }})"
                                        class="mt-4 w-full border-2 border-mn-border bg-mn-bg py-2 font-bold uppercase text-xs hover:bg-mn-text hover:text-white transition-colors cursor-pointer block text-center">
                                        ADD TO CART
                                    </button>
                                </div>
                            @endforeach
                        </div>
                    @endif

                    <!-- Pagination -->
                    @if($products->hasPages())
                        <div class="border-t-2 border-mn-border p-6 bg-mn-surface font-bold uppercase text-sm">
                            {{ $products->links('vendor.pagination.tailwind') }}
                        </div>
                    @endif
                </main>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <div x-data="drawer()" x-cloak id="filtersDrawer">
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-mn-text/40" x-transition.opacity @click="close()"></div>
            <aside
                class="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-mn-surface border-l-2 border-mn-border z-[110] flex flex-col font-bold uppercase"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-x-0"
                x-transition:leave-end="translate-x-full" role="dialog" aria-modal="true"
                aria-label="{{ 'Filters' }}">
                <div class="flex items-center justify-between p-6 border-b-2 border-mn-border bg-mn-text text-white">
                    <h5 class="text-xl">FILTERS</h5>
                    <button type="button" class="text-white hover:text-mn-mute transition" @click="close()"
                        aria-label="{{ 'Close' }}">
                        x
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

