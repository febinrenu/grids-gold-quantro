@extends('store.minimal.layout')

@section('content')
    <div class="theme-minimal pb-0">

        <!-- HERO SECTION: Brutalist Block -->
        <section
            class="border-b-4 border-mn-border pt-12 md:pt-24 pb-12 overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div class="px-6 flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
                <div class="lg:w-1/2 relative z-10">
                    <span
                        class="inline-block bg-mn-text text-mn-bg px-4 py-1 font-bold uppercase tracking-widest text-sm mb-6 border-2 border-mn-text">ISSUE
                        NO. 01</span>
                    <h1
                        class="text-6xl sm:text-7xl lg:text-[7rem] font-display text-mn-text uppercase leading-[0.85] tracking-tighter mb-8">
                        {{ $s->hero_title ?? 'RAW FORM.' }}
                    </h1>
                    <p class="font-bold text-xl md:text-2xl mb-12 max-w-lg leading-tight mx-auto lg:mx-0">
                        {{ $s->hero_subtitle ?? 'Stripped back to the absolute essentials. Metal. Stone. Structure.' }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="{{ route('store.shop') }}" class="btn btn-primary text-xl px-10 py-4">SHOP COLLECTION</a>
                    </div>
                </div>
                <div class="lg:w-1/2 relative">
                    <div class="border-4 border-mn-border bg-mn-surface p-4 shadow-[12px_12px_0_0_#000000]">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80"
                            alt="Brutalist Jewelry"
                            class="w-full h-auto object-cover grayscale-[100%] contrast-125 border-2 border-mn-text">
                    </div>
                </div>
            </div>

            <!-- Marquee -->
            <div class="mt-20 border-y-4 border-mn-border bg-mn-text text-mn-bg py-4 overflow-hidden relative group">
                <div
                    class="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] group-hover:animate-none group-hover:pl-4 transition-all duration-300">
                    <span class="text-3xl font-display uppercase tracking-widest px-8">PURE METAL. NO COMPROMISE.</span>
                    <span class="text-3xl font-display uppercase tracking-widest px-8 text-mn-bg/50">///</span>
                    <span class="text-3xl font-display uppercase tracking-widest px-8">PURE METAL. NO COMPROMISE.</span>
                    <span class="text-3xl font-display uppercase tracking-widest px-8 text-mn-bg/50">///</span>
                    <span class="text-3xl font-display uppercase tracking-widest px-8">PURE METAL. NO COMPROMISE.</span>
                    <span class="text-3xl font-display uppercase tracking-widest px-8 text-mn-bg/50">///</span>
                    <span class="text-3xl font-display uppercase tracking-widest px-8">PURE METAL. NO COMPROMISE.</span>
                </div>

                <style>
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }

                        100% {
                            transform: translateX(-50%);
                        }
                    }
                </style>
            </div>
        </section>

        <!-- NEW ARRIVALS: Grid Block -->
        <section class="py-24 border-b-4 border-mn-border bg-mn-surface">
            <div class="px-6">
                <div
                    class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b-4 border-mn-border pb-6">
                    <h2 class="text-5xl md:text-7xl font-display text-mn-text uppercase tracking-tighter leading-none">
                        PRIMARY<br>DROPS</h2>
                    <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                        class="text-xl font-bold uppercase hover:bg-mn-text hover:text-mn-bg transition border-2 border-mn-text px-4 py-2 self-start md:self-end shadow-[4px_4px_0_0_#000]">VIEW
                        ALL UNITS</a>
                </div>

                @php $currency = $s->currency_code ?? '$';
                $all = ($products ?? collect())->values(); @endphp
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    @forelse($all->slice(0, 4) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        <div
                            class="col-span-full border-4 border-mn-border p-12 text-center bg-mn-bg shadow-[8px_8px_0_0_#000]">
                            <p class="font-display text-4xl uppercase">SYSTEM EMPTY.</p>
                        </div>
                    @endforelse
                </div>
            </div>
        </section>

        <!-- MANIFESTO / ABOUT -->
        <section class="border-b-4 border-mn-border grid grid-cols-1 md:grid-cols-2">
            <div
                class="p-12 md:p-24 border-b-4 md:border-b-0 md:border-r-4 border-mn-border flex flex-col justify-center text-center md:text-left bg-mn-text text-mn-bg">
                <span class="font-bold text-2xl uppercase tracking-widest mb-6 block border-b-2 border-mn-bg pb-4">01 // THE
                    STRUCTURE</span>
                <h3 class="text-5xl md:text-[5rem] font-display uppercase leading-[0.85] tracking-tighter mb-8">BUILT <br>TO
                    <br>LAST.</h3>
                <p class="font-bold text-xl leading-tight mb-12">We reject the ornate. We embrace the industrial. Every
                    piece is an architectural structure designed for the human form.</p>
                <a href="{{ route('store.contact') }}"
                    class="inline-block border-4 border-mn-bg text-mn-bg hover:bg-mn-bg hover:text-mn-text uppercase font-bold text-xl px-10 py-5 transition shadow-[6px_6px_0_0_#FFF]">READ
                    PROTOCOL</a>
            </div>
            <div class="relative bg-mn-surface p-12 flex items-center justify-center">
                <div class="w-full aspect-square border-4 border-mn-text bg-mn-text p-2 shadow-[-12px_12px_0_0_#000]">
                    <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
                        alt="Diamond Structure" class="w-full h-full object-cover grayscale-[100%] contrast-150">
                </div>
            </div>
        </section>

        <!-- CATEGORIES -->
        <section class="py-24 border-b-4 border-mn-border bg-mn-bg">
            <div class="px-6">
                <h2
                    class="text-5xl md:text-7xl font-display text-mn-text uppercase tracking-tighter leading-none mb-16 text-center">
                    SYSTEM CATEGORIES</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a href="{{ route('store.shop') }}"
                        class="group block border-4 border-mn-border p-6 hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 hover:-translate-x-2 transition-all bg-white relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-mn-text text-mn-bg font-bold p-3 text-2xl font-display">A
                        </div>
                        <h3 class="text-4xl font-display uppercase mb-4 mt-8">RINGS</h3>
                        <div class="h-64 border-4 border-mn-text overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                                alt="Rings"
                                class="w-full h-full object-cover grayscale-[100%] contrast-125 group-hover:scale-110 transition duration-500">
                        </div>
                    </a>

                    <a href="{{ route('store.shop') }}"
                        class="group block border-4 border-mn-border p-6 hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 hover:-translate-x-2 transition-all bg-white relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-mn-text text-mn-bg font-bold p-3 text-2xl font-display">B
                        </div>
                        <h3 class="text-4xl font-display uppercase mb-4 mt-8">NECK</h3>
                        <div class="h-64 border-4 border-mn-text overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
                                alt="Necklaces"
                                class="w-full h-full object-cover grayscale-[100%] contrast-125 group-hover:scale-110 transition duration-500">
                        </div>
                    </a>

                    <a href="{{ route('store.shop') }}"
                        class="group block border-4 border-mn-border p-6 hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 hover:-translate-x-2 transition-all bg-white relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-mn-text text-mn-bg font-bold p-3 text-2xl font-display">C
                        </div>
                        <h3 class="text-4xl font-display uppercase mb-4 mt-8">WRIST</h3>
                        <div class="h-64 border-4 border-mn-text overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                                alt="Bracelets"
                                class="w-full h-full object-cover grayscale-[100%] contrast-125 group-hover:scale-110 transition duration-500">
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- NEWSLETTER Block -->
        <section class="py-24 bg-mn-surface">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <h2 class="text-6xl md:text-8xl font-display uppercase tracking-tighter leading-none mb-6">TRANSMIT.</h2>
                <p class="font-bold text-2xl mb-12 uppercase border-y-4 border-mn-text py-4 bg-mn-text text-mn-bg">INPUT
                    DATA FOR NEW HARDWARE ALERTS.</p>
                <form action="{{ route('newsletter.subscribe') }}" method="POST"
                    class="flex flex-col sm:flex-row shadow-[12px_12px_0_0_#000]">
                    @csrf
                    <input type="email" name="email" required placeholder="EMAIL_ADDRESS"
                        class="flex-1 bg-mn-bg border-4 border-mn-text px-6 py-6 font-bold text-xl uppercase placeholder:text-mn-text/30 focus:outline-none focus:bg-mn-surface">
                    <button type="submit"
                        class="bg-mn-text text-mn-bg font-bold border-4 border-mn-text uppercase text-xl px-12 py-6 hover:bg-mn-bg hover:text-mn-text transition">SEND.</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection

