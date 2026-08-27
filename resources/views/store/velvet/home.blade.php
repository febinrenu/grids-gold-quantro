@extends('store.velvet.layout')

@section('content')
    <div class="theme-velvet pb-0 bg-vv-surface">

        <!-- HERO SECTION: Elegant full bleed with soft inset -->
        <section class="p-4 md:p-8 pt-0">
            <div class="relative min-h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div class="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1800&q=80"
                        alt="Velvet Luxury" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-vv-bg via-vv-bg/60 to-transparent"></div>
                </div>

                <div class="relative z-10 max-w-4xl mx-auto px-6 text-center mt-32">
                    <h1
                        class="text-5xl md:text-7xl lg:text-[6rem] font-serif text-vv-accent mb-6 leading-tight drop-shadow-lg">
                        {{ $s->hero_title ?? 'Elegance Redefined' }}
                    </h1>
                    <p
                        class="font-sans font-light text-vv-accent/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto drop-shadow">
                        {{ $s->hero_subtitle ?? 'A curated collection of the world\'s most exquisite pieces, designed for moments that last forever.' }}
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="{{ route('store.shop') }}"
                            class="btn btn-primary px-10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">Discover the
                            Collection</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- NEW ARRIVALS: Plush Slider Look -->
        <section class="py-24 max-w-7xl mx-auto px-6 relative">
            <div class="text-center mb-16 relative">
                <span class="font-sans text-vv-primary uppercase tracking-[0.3em] text-sm mb-4 block">The Premier
                    Listing</span>
                <h2 class="text-4xl md:text-5xl font-serif text-vv-text">Latest Masterpieces</h2>
            </div>

            @php $currency = $s->currency_code ?? '$';
            $all = ($products ?? collect())->values(); @endphp
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                @forelse($all->slice(0, 4) as $p)
                    @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                @empty
                    <p class="col-span-full py-10 text-center text-vv-textMuted font-sans">Our artisans are currently preparing
                        new pieces.</p>
                @endforelse
            </div>

            <div class="text-center mt-12">
                <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                    class="inline-block border-b border-vv-primary text-vv-primary hover:text-vv-accent pb-1 transition font-sans uppercase tracking-widest text-sm">View
                    All Acquisitions</a>
            </div>
        </section>

        <!-- EDITORIAL: The Velvet Room -->
        <section class="py-24 bg-vv-bg">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1 relative">
                    <div
                        class="rounded-t-full rounded-b-3xl overflow-hidden aspect-[3/4] shadow-2xl relative border-4 border-vv-surface">
                        <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&q=80"
                            alt="Model wearing jewelry" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-vv-bg/10"></div>
                    </div>
                    <div
                        class="absolute -bottom-8 -right-8 w-64 h-64 border border-vv-primary rounded-full hidden md:block opacity-30">
                    </div>
                    <div
                        class="absolute -top-8 -left-8 w-48 h-48 border border-vv-primary rounded-full hidden md:block opacity-30">
                    </div>
                </div>

                <div class="order-1 lg:order-2 text-center lg:text-left">
                    <span class="font-sans text-vv-primary uppercase tracking-[0.2em] text-xs mb-6 block">Our
                        Heritage</span>
                    <h3 class="text-4xl md:text-6xl font-serif text-vv-text mb-8 leading-tight">Crafted for <br><i
                            class="text-vv-primary font-serif">the Extraordinary</i></h3>
                    <p
                        class="font-sans font-light text-lg text-vv-textMuted leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                        Behind every piece lies a story of unconditional passion. From sourcing the rarest stones to molding
                        the finest metals, the Velvet standard demands perfection in every curve and setting.
                    </p>
                    <div class="grid grid-cols-2 gap-8 mb-10 text-center lg:text-left border-y border-vv-surface py-8">
                        <div>
                            <span class="block font-serif text-4xl text-vv-primary mb-2">120</span>
                            <span class="block font-sans text-xs uppercase tracking-widest text-vv-textMuted">Years of
                                Mastery</span>
                        </div>
                        <div>
                            <span class="block font-serif text-4xl text-vv-primary mb-2">99%</span>
                            <span class="block font-sans text-xs uppercase tracking-widest text-vv-textMuted">Perfect
                                Clarity</span>
                        </div>
                    </div>
                    <a href="{{ route('store.contact') }}" class="btn btn-outline">Read Our Story</a>
                </div>
            </div>
        </section>

        <!-- CATEGORIES -->
        <section class="py-32 px-4 md:px-8">
            <div class="max-w-[1400px] mx-auto rounded-3xl bg-vv-surfaceHover p-8 md:p-16 border border-vv-border">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif text-vv-text mb-4">Curated Expressions</h2>
                    <div class="w-24 h-px bg-vv-primary mx-auto"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <a href="{{ route('store.shop') }}" class="group block text-center">
                        <div class="rounded-t-[100px] rounded-b-3xl overflow-hidden aspect-[4/5] mb-6 shadow-xl relative">
                            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                                alt="Rings"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-1000">
                            <div
                                class="absolute inset-0 border-2 border-transparent group-hover:border-vv-primary/50 transition-colors duration-500 rounded-t-[100px] rounded-b-3xl pointer-events-none m-4">
                            </div>
                        </div>
                        <h4 class="font-serif text-2xl text-vv-text group-hover:text-vv-primary transition">The Ring
                            Collection</h4>
                        <p class="font-sans text-vv-textMuted text-sm mt-2">Bands of Eternity</p>
                    </a>

                    <a href="{{ route('store.shop') }}" class="group block text-center md:-translate-y-12">
                        <div class="rounded-t-[100px] rounded-b-3xl overflow-hidden aspect-[4/5] mb-6 shadow-xl relative">
                            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
                                alt="Necklaces"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-1000">
                            <div
                                class="absolute inset-0 border-2 border-transparent group-hover:border-vv-primary/50 transition-colors duration-500 rounded-t-[100px] rounded-b-3xl pointer-events-none m-4">
                            </div>
                        </div>
                        <h4 class="font-serif text-2xl text-vv-text group-hover:text-vv-primary transition">Pendants & Drops
                        </h4>
                        <p class="font-sans text-vv-textMuted text-sm mt-2">Graceful Adornments</p>
                    </a>

                    <a href="{{ route('store.shop') }}" class="group block text-center">
                        <div class="rounded-t-[100px] rounded-b-3xl overflow-hidden aspect-[4/5] mb-6 shadow-xl relative">
                            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                                alt="Bracelets"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-1000">
                            <div
                                class="absolute inset-0 border-2 border-transparent group-hover:border-vv-primary/50 transition-colors duration-500 rounded-t-[100px] rounded-b-3xl pointer-events-none m-4">
                            </div>
                        </div>
                        <h4 class="font-serif text-2xl text-vv-text group-hover:text-vv-primary transition">Wrist Bindings
                        </h4>
                        <p class="font-sans text-vv-textMuted text-sm mt-2">Delicate Links</p>
                    </a>
                </div>
            </div>
        </section>

        <!-- POPULAR ITEMS -->
        <section class="py-24 bg-vv-bg border-t border-vv-border">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-serif text-vv-text">Distinguished Favorites</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    @forelse($all->slice(4, 4) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        @foreach($all->slice(0, 4) as $p)
                            @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                        @endforeach
                    @endforelse
                </div>
            </div>
        </section>

        <!-- NEWSLETTER -->
        <section class="py-32 bg-vv-surface relative overflow-hidden text-center border-t border-vv-border">
            <!-- Decor -->
            <div class="absolute inset-0 opacity-[0.03]"
                style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
            </div>

            <div class="max-w-2xl mx-auto px-6 relative z-10">
                <h2 class="text-4xl md:text-5xl font-serif text-vv-text mb-6">Join the Private Registry</h2>
                <p class="font-sans font-light text-vv-textMuted mb-12 text-lg">Allow us to extend our most exclusive
                    invitations, early releases, and private viewings directly to you.</p>

                <form action="{{ route('newsletter.subscribe') }}" method="POST"
                    class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    @csrf
                    <input type="email" name="email" required placeholder="Enter your email address"
                        class="flex-1 bg-vv-bg border border-vv-border rounded-full font-sans text-vv-text px-6 py-4 focus:outline-none focus:border-vv-primary text-center sm:text-left shadow-inner">
                    <button type="submit" class="btn btn-primary shadow-lg">Subscribe</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection

