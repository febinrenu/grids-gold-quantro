@extends('store.nova.layout')

@section('content')
    <div class="theme-nova pb-0 bg-nv-bg">

        <!-- HERO SECTION: Cyberpunk Grid overlay -->
        <section class="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
            <!-- Tech Backgrounds -->
            <div class="absolute inset-0 bg-nv-bg z-0"></div>
            <div
                class="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] z-10 [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-50">
            </div>
            <div
                class="absolute top-1/4 -right-[10%] w-[500px] h-auto bg-nv-primary rounded-full blur-[150px] opacity-20 z-0">
            </div>
            <div
                class="absolute bottom-1/4 -left-[10%] w-[400px] h-auto bg-nv-secondary rounded-full blur-[150px] opacity-10 z-0">
            </div>

            <div class="relative z-20 max-w-[1600px] mx-auto px-6 w-full text-center">

                <div
                    class="inline-flex items-center gap-2 px-4 py-2 bg-nv-surface/80 border border-nv-primary/50 text-nv-primary rounded font-display font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(176,38,255,0.3)] mb-8">
                    <div class="w-2 h-2 bg-nv-secondary rounded-full animate-pulse"></div>
                    SYSTEM INITIALIZED
                </div>

                <h1
                    class="text-6xl md:text-8xl lg:text-[8rem] font-display font-bold text-white uppercase leading-[0.9] tracking-tighter mb-6">
                    {{ $s->hero_title ?? 'NEO-LUXURY.' }}
                </h1>

                <p
                    class="font-sans font-light text-nv-text text-lg md:text-2xl mb-12 max-w-2xl mx-auto border-y border-nv-border/50 py-4">
                    {{ $s->hero_subtitle ?? 'Advanced materials. Parametric design. The synthesis of human craft and machine precision.' }}
                </p>

                <div class="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="{{ route('store.shop') }}" class="btn btn-primary lg:text-lg lg:px-12 py-4">ACCESS HARDWARE
                        //</a>
                    <a href="{{ route('store.contact') }}" class="btn btn-outline lg:text-lg lg:px-12 py-4">TRANSMIT
                        COMMS</a>
                </div>

            </div>
        </section>

        <!-- ROSTER (New Arrivals) -->
        <section class="py-24 relative overflow-hidden bg-nv-surface border-y border-nv-border">
            <!-- Corner accents -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-nv-primary m-6"></div>
            <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-nv-secondary m-6"></div>
            <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-nv-secondary m-6"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-nv-primary m-6"></div>

            <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2
                            class="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-wider flex items-center gap-4">
                            LATEST_ACQUISITIONS <span
                                class="bg-nv-primary text-white text-xs px-2 py-1 align-middle">NEW</span>
                        </h2>
                    </div>
                    <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                        class="text-nv-secondary font-display font-bold uppercase tracking-widest hover:text-white transition group flex items-center gap-2 text-sm">
                        VIEW COMPLETE DATABASE
                        <svg class="w-4 h-4 group-hover:translate-x-2 transition" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>

                @php $currency = $s->currency_code ?? '$';
                $all = ($products ?? collect())->values(); @endphp
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
                    @forelse($all->slice(0, 4) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        <div class="col-span-full border border-nv-border p-12 text-center bg-nv-bg">
                            <p class="font-display font-bold text-2xl uppercase text-nv-textMuted">DATABASE EMPTY. NO RECORDS
                                FOUND.</p>
                        </div>
                    @endforelse
                </div>
            </div>
        </section>

        <!-- ARCHITECTURE (Editorial feature) -->
        <section class="py-32 relative">
            <div class="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">

                <div class="lg:w-1/2 relative">
                    <!-- Glitch effect container -->
                    <div
                        class="relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden border border-nv-primary/50 shadow-[0_0_30px_rgba(176,38,255,0.2)]">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80"
                            alt="Cybernetic Jewelry" class="w-full h-full object-cover filter saturate-150 contrast-125">
                        <div class="absolute inset-0 bg-nv-primary/10 mix-blend-overlay"></div>

                        <!-- HUD Elements -->
                        <div class="absolute top-4 left-4 border border-nv-secondary/50 p-2 bg-nv-bg/80 backdrop-blur">
                            <p class="font-display font-bold text-[10px] text-nv-secondary uppercase m-0 leading-tight">
                                ANALYSIS...</p>
                            <p class="font-display font-bold text-xs text-white uppercase m-0 leading-tight mt-1">CARBON
                                STRUCTURE = STABLE</p>
                        </div>

                        <div class="absolute bottom-4 right-4 flex gap-1">
                            <div class="w-1 h-6 bg-nv-secondary animate-pulse"></div>
                            <div class="w-1 h-8 bg-nv-secondary animate-pulse wait-100"></div>
                            <div class="w-1 h-4 bg-nv-secondary animate-pulse wait-200"></div>
                            <div class="w-1 h-10 bg-nv-secondary animate-pulse wait-300"></div>
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/2">
                    <span class="font-display font-bold text-nv-primary uppercase tracking-widest text-sm mb-4 block">///
                        INITIATIVE: ALPHA</span>
                    <h3 class="text-5xl md:text-6xl font-display font-bold text-white uppercase leading-[0.9] mb-8">TITANIUM
                        <br>MATRIX.</h3>
                    <p
                        class="text-nv-text font-light text-lg md:text-xl leading-relaxed mb-10 border-l-[3px] border-nv-primary pl-6">
                        Our forging process utilizes plasma and high-grade titanium, bound with lab-grown hyper-diamonds.
                        Sustainable, virtually indestructible, and designed to outlast the wearer.
                    </p>

                    <div class="grid grid-cols-2 gap-6 mb-10">
                        <div class="bg-nv-surface p-4 border border-nv-border rounded">
                            <span class="block text-nv-secondary font-display font-bold text-2xl mb-1">99.9%</span>
                            <span class="block text-[10px] uppercase tracking-widest text-nv-textMuted font-bold">Purity
                                Rating</span>
                        </div>
                        <div class="bg-nv-surface p-4 border border-nv-border rounded">
                            <span class="block text-nv-primary font-display font-bold text-2xl mb-1">0_EMISSION</span>
                            <span class="block text-[10px] uppercase tracking-widest text-nv-textMuted font-bold">Carbon
                                Cost</span>
                        </div>
                    </div>

                    <a href="{{ route('store.contact') }}" class="btn btn-primary inline-flex">ACCESS DATASHEET</a>
                </div>

            </div>
        </section>

        <!-- CORE MODULES (Categories) -->
        <section class="py-24 bg-nv-surface border-y border-nv-border">
            <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
                <h2
                    class="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-wider mb-16 text-center">
                    SYSTEM_DIRECTORIES</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a href="{{ route('store.shop') }}"
                        class="group relative bg-nv-bg rounded-lg border border-nv-border overflow-hidden h-auto hover:border-nv-secondary transition-colors duration-500 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                            alt="Bracelets"
                            class="w-full h-full object-cover filter saturate-0 contrast-125 group-hover:saturate-100 transition-all duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-nv-bg via-nv-bg/80 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-8">
                            <span
                                class="text-nv-secondary font-display text-[10px] font-bold tracking-widest uppercase mb-2 block">DIR_01</span>
                            <h3 class="text-3xl font-display font-bold text-white uppercase mb-4">WRIST CHASSIS</h3>
                            <div class="h-1 w-0 group-hover:w-full bg-nv-secondary transition-all duration-500"></div>
                        </div>
                    </a>

                    <a href="{{ route('store.shop') }}"
                        class="group relative bg-nv-bg rounded-lg border border-nv-border overflow-hidden h-auto hover:border-nv-primary transition-colors duration-500 hover:shadow-[0_0_25px_rgba(176,38,255,0.2)] lg:-translate-y-8">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                            alt="Rings"
                            class="w-full h-full object-cover filter saturate-0 contrast-125 group-hover:saturate-100 transition-all duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-nv-bg via-nv-bg/80 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-8">
                            <span
                                class="text-nv-primary font-display text-[10px] font-bold tracking-widest uppercase mb-2 block">DIR_02</span>
                            <h3 class="text-3xl font-display font-bold text-white uppercase mb-4">DIGIT UPGRADES</h3>
                            <div class="h-1 w-0 group-hover:w-full bg-nv-primary transition-all duration-500"></div>
                        </div>
                    </a>

                    <a href="{{ route('store.shop') }}"
                        class="group relative bg-nv-bg rounded-lg border border-nv-border overflow-hidden h-auto hover:border-nv-secondary transition-colors duration-500 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]">
                        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
                            alt="Necklaces"
                            class="w-full h-full object-cover filter saturate-0 contrast-125 group-hover:saturate-100 transition-all duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-nv-bg via-nv-bg/80 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-8">
                            <span
                                class="text-nv-secondary font-display text-[10px] font-bold tracking-widest uppercase mb-2 block">DIR_03</span>
                            <h3 class="text-3xl font-display font-bold text-white uppercase mb-4">CERVICAL LINKS</h3>
                            <div class="h-1 w-0 group-hover:w-full bg-nv-secondary transition-all duration-500"></div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- NETWORK UPLINK (Newsletter) -->
        <section class="py-32 relative overflow-hidden bg-nv-bg">
            <div
                class="absolute inset-0 bg-[linear-gradient(rgba(176,38,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(176,38,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]">
            </div>

            <div
                class="max-w-3xl mx-auto px-6 text-center relative z-10 border border-nv-primary/30 bg-nv-surface/50 backdrop-blur-md p-12 lg:p-20 rounded-xl shadow-[0_0_50px_rgba(176,38,255,0.1)]">
                <svg class="w-12 h-12 text-nv-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z">
                    </path>
                </svg>
                <h2 class="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-4">
                    SYNCHRONIZE.</h2>
                <p class="text-nv-textMuted mb-10">Link your comms array to receive encrypted drop data, firmware updates,
                    and exclusive payload drops.</p>

                <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-4">
                    @csrf
                    <div class="flex-1 relative group">
                        <input type="email" name="email" required placeholder="ENTER COMMS KEY (EMAIL)"
                            class="w-full bg-nv-bg border border-nv-border rounded font-display font-bold uppercase tracking-widest text-white px-6 py-4 focus:outline-none focus:border-nv-primary focus:shadow-[0_0_15px_rgba(176,38,255,0.3)] transition">
                        <div class="absolute right-0 top-0 bottom-0 w-2 bg-nv-primary rounded-r"></div>
                    </div>
                    <button type="submit" class="btn btn-primary px-10 border border-nv-primary">TRANSMIT</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection



