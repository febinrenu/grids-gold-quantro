@extends('store.radiance.layout')

@section('content')
    <div class="theme-radiance bg-rd-bg text-rd-text pb-20">
        @php
            $currency = $s->currency_code ?? '$';
            $total = $products->total();
            $hasFilters = filled($q ?? null) || filled($cat ?? null) || filled($collection ?? null) || filled($min ?? null) || filled($max ?? null);
        @endphp

        <!-- Futuristic Shop Header -->
        <section class="border-b border-rd-border relative overflow-hidden bg-rd-bg py-16 text-center">
            <div class="absolute inset-0 opacity-[0.03]"
                style="background-image: radial-gradient(#F2F0FF 1px, transparent 1px); background-size: 32px 32px;"></div>

            <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rd-surface border border-rd-border mb-4">
                    <span class="w-1.5 h-1.5 rounded-full bg-rd-primary shadow-[0_0_10px_#B624FF]"></span>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-rd-primary">Network Connected</span>
                </div>

                <h1 class="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase italic tracking-wide">
                    Global <span class="text-gradient">Inventory</span>
                </h1>

                <div class="text-sm font-medium text-rd-mute">
                    {{ trans_choice('messages.products', $total, ['count' => $total]) }} Retrieved
                    @if($hasFilters) · <span class="text-rd-secondary">Parameters Applied</span>@endif
                </div>

                <!-- Central Filter Strip -->
                <div
                    class="mt-8 inline-flex items-center gap-2 bg-rd-surface border border-rd-border rounded-xl p-2 max-w-full overflow-x-auto no-scrollbar">
                    <button
                        class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-rd-bg px-4 py-2 rounded-lg text-white hover:text-rd-primary transition border border-transparent hover:border-rd-primary"
                        type="button" @click="window.StoreUI.open('filtersDrawer')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        {{ 'Filters' }}
                    </button>

                    <div class="w-px h-6 bg-rd-border mx-2"></div>

                    <form method="get" action="{{ route('store.shop') }}" class="flex items-center gap-2">
                        @foreach(request()->except(['sort', 'page']) as $k => $v)
                            @if(is_array($v))
                                @foreach($v as $vv)<input type="hidden" name="{{ $k }}[]" value="{{ $vv }}">@endforeach
                            @else
                                <input type="hidden" name="{{ $k }}" value="{{ $v }}">
                            @endif
                        @endforeach

                        <span class="text-[10px] font-bold uppercase tracking-widest text-rd-mute ml-2">Sort</span>
                        <select name="sort"
                            class="text-xs font-bold uppercase tracking-widest bg-rd-bg border border-rd-border text-white px-4 py-2 pr-8 rounded-lg outline-none focus:border-rd-secondary focus:ring-1 focus:ring-rd-secondary cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%233BF4FB%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[right_10px_center]"
                            onchange="this.form.submit()">
                            <option value="latest" @selected(($sort ?? 'latest') === 'latest')>Latest Uploads</option>
                            <option value="price_asc" @selected($sort === 'price_asc')>Value ASC</option>
                            <option value="price_desc" @selected($sort === 'price_desc')>Value DESC</option>
                        </select>
                    </form>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 mt-8">
            <div class="grid lg:grid-cols-[280px_1fr] gap-8">
                <aside class="hidden lg:block">
                    <div class="sticky top-24 bg-rd-surface border border-rd-border rounded-2xl p-6">
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
            <div x-show="isOpen" class="fixed inset-0 z-[100] bg-rd-bg/80 backdrop-blur-sm" x-transition.opacity
                @click="close()"></div>
            <aside
                class="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-rd-surface border-l border-rd-border z-[110] flex flex-col shadow-[-20px_0_40px_rgba(182,36,255,0.1)]"
                x-show="isOpen" x-transition:enter="transition-transform duration-300 ease-out"
                x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
                x-transition:leave="transition-transform duration-200 ease-in" x-transition:leave-start="translate-x-0"
                x-transition:leave-end="translate-x-full" role="dialog" aria-modal="true"
                aria-label="{{ 'Filters' }}">
                <div class="flex items-center justify-between p-5 border-b border-rd-border bg-rd-elevated">
                    <h5 class="font-display font-extrabold text-xl text-white italic uppercase tracking-wider">Parameters
                    </h5>
                    <button type="button" class="text-rd-mute hover:text-rd-accent transition p-1 bg-rd-bg rounded-md"
                        @click="close()" aria-label="{{ 'Close' }}">
                        <x-store.icon name="x" class="w-5 h-5" />
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

