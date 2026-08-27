@extends('store.vintage.layout')

@section('content')
    <div class="theme-vintage pb-0 bg-vt-bg">

        <!-- HERO SECTION: The Catalog Cover -->
        <section class="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div class="border-[6px] double border-vt-border p-2">
                <div class="border border-vt-border p-6 md:p-16 text-center relative overflow-hidden bg-vt-surface">

                    <div
                        class="absolute top-4 left-4 right-4 flex justify-between font-serif italic text-xs text-vt-textMuted border-b border-vt-border pb-2">
                        <span>Vol. LXIV</span>
                        <span>PRICE 10 CENTS</span>
                    </div>

                    <h1 class="font-serif text-5xl md:text-8xl text-vt-text uppercase tracking-widest mt-12 mb-6"
                        style="line-height: 0.9;">
                        {{ $s->hero_title ?? "Fine \nJewellery" }}
                    </h1>

                    <div class="flex items-center justify-center gap-4 mb-10">
                        <div class="h-px w-16 bg-vt-border"></div>
                        <span class="font-serif italic text-vt-textMuted">An Illustrated Catalogue</span>
                        <div class="h-px w-16 bg-vt-border"></div>
                    </div>

                    <div class="max-w-2xl mx-auto relative h-auto md:h-auto border border-vt-border p-2 mb-10">
                        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80"
                            alt="Vintage Jewelry"
                            class="w-full h-full object-cover filter sepia-[50%] contrast-125 brightness-90">
                    </div>

                    <p class="font-serif text-vt-text mx-auto max-w-xl leading-loose mb-10">
                        {{ $s->hero_subtitle ?? 'Presenting our finest assortment of precious stones and hand-wrought metals, crafted by artisans for ladies and gentlemen of discerning taste.' }}
                    </p>

                    <a href="{{ route('store.shop') }}"
                        class="btn btn-outline border-vt-text px-12 py-3 bg-vt-bg font-serif uppercase tracking-[0.2em] hover:bg-vt-text hover:text-vt-surface transition">Survey
                        the Collection</a>

                </div>
            </div>
        </section>

        <!-- NEW ARRIVALS: "Latest Specimens" -->
        <section class="max-w-7xl mx-auto px-4 py-16">
            <div class="text-center mb-12 relative flex justify-center items-center">
                <div class="absolute left-0 right-0 h-px bg-vt-border top-1/2"></div>
                <h2 class="font-serif text-3xl text-vt-text bg-vt-bg px-6 relative z-10 italic">Latest Specimens</h2>
            </div>

            @php $currency = $s->currency_code ?? '$';
            $all = ($products ?? collect())->values(); @endphp
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                @forelse($all->slice(0, 4) as $p)
                    @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                @empty
                    <p class="col-span-full py-10 text-center text-vt-textMuted font-serif italic">No specimens available at
                        present.</p>
                @endforelse
            </div>

            <div class="text-center mt-12">
                <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                    class="font-serif italic text-vt-accent hover:text-vt-primary border-b border-vt-accent pb-1">View
                    Entire Ledger &rarr;</a>
            </div>
        </section>

        <!-- THE FOUNDRY (Editorial) -->
        <section class="border-y border-vt-border bg-vt-surface py-20 mt-16">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="border p-2 border-vt-border relative group">
                    <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80"
                        alt="The Foundry" class="w-full h-full object-cover filter sepia-[60%]">
                </div>

                <div class="pl-0 md:pl-10 text-center md:text-left">
                    <img src="https://www.transparenttextures.com/patterns/arabesque.png"
                        class="absolute opacity-10 pointer-events-none w-full h-full object-cover top-0 left-0 hidden md:block">
                    <span class="font-serif italic text-vt-textMuted block mb-4">— Since 1892</span>
                    <h3 class="font-serif text-4xl text-vt-text mb-6 leading-tight">Mastery of <br>The Old World.</h3>
                    <p class="font-serif leading-loose text-vt-text mb-8">
                        We employ time-honored techniques passed down through generations. From smelting the raw gold to
                        individually setting each stone, our artisans refuse to compromise the integrity of the craft.
                        Truly, these are heirlooms in the making.
                    </p>
                    <a href="{{ route('store.contact') }}"
                        class="btn btn-outline border-vt-text text-vt-text hover:bg-vt-text hover:text-vt-surface font-serif">Read
                        Our Manifesto</a>
                </div>
            </div>
        </section>

        <!-- ASSORTMENTS (Categories) -->
        <section class="max-w-7xl mx-auto px-4 py-24">
            <div class="text-center mb-16">
                <h2 class="font-serif text-4xl text-vt-text mb-4">Notable Assortments</h2>
                <p class="font-serif italic text-vt-textMuted">Categorized for your perusal.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a href="{{ route('store.shop') }}"
                    class="block border border-vt-border bg-vt-surface p-4 text-center group hover:border-vt-primary transition">
                    <div class="aspect-square border border-vt-border mb-4 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
                            alt="Bracelets"
                            class="w-full h-full object-cover filter sepia-[40%] group-hover:scale-105 transition duration-700">
                    </div>
                    <h4 class="font-serif text-xl border-b border-vt-border pb-2 mb-2">Wrist Adornments</h4>
                    <p class="font-serif italic text-xs text-vt-textMuted">Plate & Solid Cuff</p>
                </a>
                <a href="{{ route('store.shop') }}"
                    class="block border border-vt-border bg-vt-surface p-4 text-center group hover:border-vt-primary transition">
                    <div class="aspect-square border border-vt-border mb-4 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
                            alt="Rings"
                            class="w-full h-full object-cover filter sepia-[40%] group-hover:scale-105 transition duration-700">
                    </div>
                    <h4 class="font-serif text-xl border-b border-vt-border pb-2 mb-2">Bands & Settings</h4>
                    <p class="font-serif italic text-xs text-vt-textMuted">Matrimonial & Decorative</p>
                </a>
                <a href="{{ route('store.shop') }}"
                    class="block border border-vt-border bg-vt-surface p-4 text-center group hover:border-vt-primary transition">
                    <div class="aspect-square border border-vt-border mb-4 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
                            alt="Earrings"
                            class="w-full h-full object-cover filter sepia-[40%] group-hover:scale-105 transition duration-700">
                    </div>
                    <h4 class="font-serif text-xl border-b border-vt-border pb-2 mb-2">Pendants & Drops</h4>
                    <p class="font-serif italic text-xs text-vt-textMuted">For Neck and Ear</p>
                </a>
            </div>
        </section>

        <!-- POPULAR (Bestsellers) -->
        <section class="max-w-7xl mx-auto px-4 pb-24">
            <div class="text-center mb-12 relative flex justify-center items-center">
                <div class="absolute left-0 right-0 h-[3px] double bg-vt-border top-1/2"></div>
                <h2 class="font-serif text-3xl text-vt-text bg-vt-bg px-6 relative z-10 italic">Patron Favorites</h2>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                @forelse($all->slice(4, 5) as $p)
                    @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                @empty
                    @foreach($all->slice(0, 5) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @endforeach
                @endforelse
            </div>
        </section>

        <!-- POSTAL SUBSCRIPTION -->
        <section
            class="py-20 mt-10 border-t border-vt-border bg-vt-surface bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')]">
            <div class="max-w-2xl mx-auto px-4 text-center">
                <h2 class="font-serif text-3xl mb-4 text-vt-text">The Postal Registry</h2>
                <p class="font-serif italic text-vt-textMuted mb-8">Supply your posting details to receive our seasonal
                    bulletins and private notices of new arrivals.</p>
                <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex flex-col sm:flex-row gap-0">
                    @csrf
                    <input type="email" name="email" required placeholder="Your Postal Name/Address"
                        class="flex-1 bg-vt-bg border border-vt-border px-4 py-3 font-serif rounded-none focus:outline-none focus:border-vt-primary">
                    <button type="submit"
                        class="bg-vt-text text-vt-surface font-serif uppercase tracking-widest px-8 py-3 hover:bg-vt-primary transition">Post
                        &rarr;</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection


