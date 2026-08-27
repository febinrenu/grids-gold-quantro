@extends('store.radiance.layout')

@section('content')
    <div class="theme-radiance pb-0 bg-rad-bg">

        <!-- HERO SECTION: Cyberpunk / Neon Floating -->
        <section class="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <!-- Animated Background grid -->
            <div class="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5">
            </div>
            <div
                class="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] rounded-full bg-gradient-to-br from-rad-accent1 to-rad-accent2 blur-[150px] opacity-20">
            </div>
            <div
                class="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-rad-accent2 blur-[120px] opacity-10">
            </div>

            <div class="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="text-left">
                    <div
                        class="inline-block px-4 py-1.5 rounded-full bg-rad-accent1/10 border border-rad-accent1 text-rad-accent1 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                        // SYSTEM.ONLINE_STORE
                    </div>
                    <h1 class="text-5xl md:text-7xl font-display font-bold text-rad-text leading-[1.1] mb-6 tracking-tight">
                        {{ $s->hero_title ?? 'The Future of Adornment.' }}
                    </h1>
                    <p class="text-rad-textMuted text-lg font-medium mb-10 max-w-lg leading-relaxed">
                        {{ $s->hero_subtitle ?? 'Cybernetic precision fused with ancient precious metals. Equip your aesthetic.' }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="{{ route('store.shop') }}" class="btn btn-primary text-center">INITIALIZE SHOP //</a>
                    </div>
                </div>

                <div class="relative hidden lg:block h-auto w-full animate-float">
                    <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
                        alt="Futuristic Jewelry"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[550px] object-cover rounded-2xl border border-rad-accent1 shadow-[0_0_50px_rgba(0,240,255,0.3)] saturate-[1.5]">

                    <!-- Floating tech accents -->
                    <div
                        class="absolute top-20 right-10 bg-rad-surface/80 backdrop-blur-sm border border-rad-accent2 p-3 rounded-lg shadow-[0_0_20px_rgba(255,0,85,0.5)]">
                        <span
                            class="block text-rad-accent2 text-[10px] font-bold tracking-widest uppercase mb-1">SCAN_COMPLETE</span>
                        <span class="text-rad-text font-display font-medium text-sm">GIA CERT. // OK</span>
                    </div>
                    <div
                        class="absolute bottom-32 left-0 bg-rad-surface/80 backdrop-blur-sm border border-rad-accent1 p-3 rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                        <span
                            class="block text-rad-accent1 text-[10px] font-bold tracking-widest uppercase mb-1">MATERIAL_TYPE</span>
                        <span class="text-rad-text font-display font-medium text-sm">TITANIUM + GOLD</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- NEW ARRIVALS: Data Grid -->
        <section class="py-24 relative overflow-hidden border-t border-rad-border">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span class="text-rad-accent1 text-xs font-bold tracking-widest uppercase mb-2 block">> LOAD_MODULE:
                            LATEST</span>
                        <h2 class="text-4xl font-display font-bold text-rad-text uppercase tracking-wider">New Hardware</h2>
                    </div>
                    <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                        class="btn btn-outline py-2 px-6 text-xs">Execute // View All</a>
                </div>

                @php $currency = $s->currency_code ?? '$';
                $all = ($products ?? collect())->values(); @endphp
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-10">
                    @forelse($all->slice(0, 4) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        <p class="col-span-full py-20 text-center text-rad-textMuted font-display">// ERR: NO_DATA_FOUND</p>
                    @endforelse
                </div>
            </div>
        </section>

        <!-- HIGHLIGHT CHUNKS -->
        <section class="py-24 bg-rad-surface border-y border-rad-border">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div
                    class="md:col-span-8 relative rounded-3xl overflow-hidden min-h-auto group border-2 border-transparent hover:border-rad-accent1 transition-colors duration-500 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
                    <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80"
                        alt="Earrings"
                        class="w-full h-full object-cover transition duration-1000 group-hover:scale-105 saturate-[1.2] hue-rotate-[15deg]">
                    <div class="absolute inset-0 bg-gradient-to-t from-rad-bg via-rad-bg/50 to-transparent"></div>
                    <div class="absolute inset-0 bg-rad-accent3/10 mix-blend-color"></div>
                    <div class="absolute bottom-10 left-10 text-rad-text z-10 w-2/3">
                        <span
                            class="inline-block px-3 py-1 rounded bg-rad-accent1 text-rad-bg text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,240,255,0.8)]">Module
                            .01</span>
                        <h3 class="text-4xl font-display font-bold uppercase tracking-wider mb-2">Aural Amplifiers</h3>
                        <p class="text-rad-textMuted font-medium text-sm mb-6 max-w-sm">Precision engineered earrings
                            designed to catch every photon.</p>
                        <a href="{{ route('store.shop') }}" class="btn btn-primary inline-block py-2 px-6">Explore</a>
                    </div>
                </div>

                <div class="md:col-span-4 flex flex-col gap-8">
                    <div
                        class="relative rounded-3xl overflow-hidden flex-1 group border-2 border-transparent hover:border-rad-accent2 transition-colors duration-500 shadow-[0_0_30px_rgba(255,0,85,0.05)]">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                            alt="Rings"
                            class="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-rad-bg to-transparent"></div>
                        <div class="absolute bottom-8 left-8 text-rad-text z-10">
                            <span class="text-rad-accent2 text-xs font-bold tracking-widest uppercase mb-1 block">> Module
                                .02</span>
                            <h3 class="text-2xl font-display font-bold uppercase tracking-wider mb-3">Digit Rings</h3>
                            <a href="{{ route('store.shop') }}"
                                class="text-rad-text hover:text-rad-accent2 text-sm font-bold uppercase tracking-widest transition">Initialize
                                →</a>
                        </div>
                    </div>

                    <div
                        class="bg-rad-bg border border-rad-border rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
                        <div
                            class="absolute -right-10 -top-10 w-32 h-32 bg-rad-accent3 blur-[50px] opacity-20 group-hover:opacity-40 transition">
                        </div>
                        <x-store.icon name="zap" class="w-10 h-10 text-rad-accent3 mb-4" />
                        <h3 class="text-xl font-display font-bold text-rad-text uppercase tracking-wider mb-2">Performance
                            Specs</h3>
                        <p class="text-rad-textMuted text-sm font-medium mb-6">Each unit is vigorously tested against
                            structural decay and elemental interference.</p>
                        <a href="{{ route('store.contact') }}"
                            class="text-rad-accent3 hover:text-rad-text text-sm font-bold uppercase tracking-widest transition">Read
                            manual →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- CORE INVENTORY (Bestsellers) -->
        <section class="py-24 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <span class="text-rad-accent2 text-xs font-bold tracking-widest uppercase mb-2 block">> LOAD_MODULE:
                        BEST_SELLERS</span>
                    <h2 class="text-4xl font-display font-bold text-rad-text uppercase tracking-wider">Core Arsenal</h2>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
                    @forelse($all->slice(4, 5) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        @foreach($all->slice(0, 5) as $p)
                            @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                        @endforeach
                    @endforelse
                </div>
            </div>
        </section>

        <!-- NEWSLETTER Block -->
        <section class="py-24 border-t border-rad-border bg-rad-surface/50 relative">
            <div
                class="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rad-accent1/10 rounded-full blur-[100px] pointer-events-none">
            </div>
            <div
                class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rad-accent2/10 rounded-full blur-[100px] pointer-events-none">
            </div>

            <div class="max-w-xl mx-auto px-6 text-center relative z-10">
                <div
                    class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rad-bg border border-rad-accent3 mb-8 shadow-[0_0_20px_rgba(112,0,255,0.4)]">
                    <svg class="w-8 h-8 text-rad-accent3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h2 class="text-3xl font-display font-bold text-rad-text uppercase tracking-widest mb-4">Sync to Network</h2>
                <p class="text-rad-textMuted mb-10 font-medium">Establish a direct link to receive drop alerts, system
                    patches, and override codes.</p>
                <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-3">
                    @csrf
                    <div class="flex-1 relative">
                        <input type="email" name="email" required placeholder="INPUT_EMAIL_ADDRESS"
                            class="w-full bg-rad-bg border border-rad-border rounded-lg px-5 py-4 text-rad-text placeholder-rad-textMuted/50 focus:outline-none focus:border-rad-accent3 focus:ring-1 focus:ring-rad-accent3 font-display uppercase text-sm tracking-wider">
                    </div>
                    <button type="submit"
                        class="btn btn-outline border-rad-accent3 text-rad-accent3 hover:bg-rad-accent3 hover:text-rad-text px-8">ACTIVATE</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection




