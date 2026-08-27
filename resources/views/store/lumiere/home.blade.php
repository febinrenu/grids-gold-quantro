@extends('store.lumiere.layout')

@section('content')
    <div class="theme-lumiere pb-20">

        <!-- HERO SECTION: Glassmorphism over video/image -->
        <section class="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1920&q=80"
                    alt="Beautiful jewelry" class="w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-lm-text/10 backdrop-blur-[2px]"></div>

            <div
                class="relative z-10 p-8 md:p-14 glass-effect rounded-[2rem] max-w-3xl text-center shadow-glass mx-4 mt-10">
                <span
                    class="block text-lm-primary tracking-[0.2em] uppercase text-xs font-bold mb-4">{{ 'Lumiere_WelcomeTo' ?? 'Welcome to' }}
                    {{ $s->store_name }}</span>
                <h1 class="text-5xl md:text-7xl font-serif text-lm-text leading-[1.1] mb-6">
                    {{ $s->hero_title ?? 'Radiant Elegance in Every Detail.' }}
                </h1>
                <p class="text-lm-textMuted text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
                    {{ $s->hero_subtitle ?? 'Discover our curated collection of fine jewelry, designed to illuminate your most precious moments.' }}
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="{{ route('store.shop') }}"
                        class="btn btn-primary w-full sm:w-auto">{{ 'ShopCollection' ?? 'Shop the Collection' }}</a>
                    <a href="{{ route('store.contact') }}"
                        class="btn btn-outline w-full sm:w-auto bg-white/50">{{ 'BookConsultation' ?? 'Book Consultation' }}</a>
                </div>
            </div>
        </section>

        <!-- TRUST INDICATORS -->
        <section class="py-12 bg-lm-surface border-y border-lm-border">
            <div
                class="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-lm-border/50">
                <div class="px-4">
                    <h4 class="font-serif text-xl text-lm-text mb-2">Ethically Sourced</h4>
                    <p class="text-xs text-lm-textMuted leading-relaxed">All our diamonds and gemstones are conflict-free
                        and traceable.</p>
                </div>
                <div class="px-4">
                    <h4 class="font-serif text-xl text-lm-text mb-2">Lifetime Warranty</h4>
                    <p class="text-xs text-lm-textMuted leading-relaxed">Complimentary cleaning, polishing, and prong
                        inspections.</p>
                </div>
                <div class="px-4">
                    <h4 class="font-serif text-xl text-lm-text mb-2">Insured Shipping</h4>
                    <p class="text-xs text-lm-textMuted leading-relaxed">Secure, fully insured delivery on every single
                        piece.</p>
                </div>
                <div class="px-4">
                    <h4 class="font-serif text-xl text-lm-text mb-2">Bespoke Design</h4>
                    <p class="text-xs text-lm-textMuted leading-relaxed">Work with our master jewelers to create your dream
                        piece.</p>
                </div>
            </div>
        </section>

        <!-- CURATED CATEGORIES (Asymmetrical) -->
        <section class="max-w-7xl mx-auto px-4 py-24">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-lm-primary tracking-widest uppercase text-xs font-bold mb-3 block">Collections</span>
                <h2 class="text-4xl font-serif text-lm-text">Eternally Yours</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-auto">
                <!-- Large Left Block -->
                <a href="{{ route('store.shop') }}"
                    class="md:col-span-7 relative group rounded-2xl overflow-hidden h-auto md:h-full block">
                    <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
                        alt="Engagement Rings"
                        class="w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-lm-text/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-8 left-8 text-white">
                        <h3 class="text-3xl font-serif mb-2">Bridal & Engagement</h3>
                        <span
                            class="text-sm tracking-widest uppercase border-b border-white pb-1 group-hover:text-lm-secondary transition">Explore</span>
                    </div>
                </a>

                <div class="md:col-span-5 grid grid-rows-2 gap-6 h-auto md:h-full">
                    <a href="{{ route('store.shop') }}" class="relative group rounded-2xl overflow-hidden block">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
                            alt="Fine Earrings"
                            class="w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-lm-text/80 via-transparent to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h3 class="text-2xl font-serif mb-1">Fine Earrings</h3>
                            <span class="text-xs tracking-widest uppercase border-b border-white pb-1">Explore</span>
                        </div>
                    </a>
                    <a href="{{ route('store.shop') }}" class="relative group rounded-2xl overflow-hidden block">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                            alt="Bracelets & Bangles"
                            class="w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-lm-text/80 via-transparent to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h3 class="text-2xl font-serif mb-1">Bracelets & Bangles</h3>
                            <span class="text-xs tracking-widest uppercase border-b border-white pb-1">Explore</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- NEW ARRIVALS: Functional Products Array -->
        <section class="bg-lm-surface py-24 border-y border-lm-border">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span class="text-lm-primary tracking-widest uppercase text-xs font-bold mb-3 block">Just
                            Landed</span>
                        <h2 class="text-4xl font-serif text-lm-text">New Arrivals</h2>
                    </div>
                    <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                        class="text-sm tracking-widest uppercase border-b border-lm-text pb-1 hover:text-lm-primary hover:border-lm-primary transition">View
                        All Products</a>
                </div>

                @php $currency = $s->currency_code ?? '$';
                $all = ($products ?? collect())->values(); @endphp
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
                    @forelse($all->slice(0, 4) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        <p class="col-span-full py-10 text-center text-lm-textMuted">No products found.</p>
                    @endforelse
                </div>
            </div>
        </section>

        <!-- EDITORIAL / CRAFTSMANSHIP BANNER -->
        <section class="max-w-7xl mx-auto px-4 py-24">
            <div
                class="relative rounded-[2rem] overflow-hidden bg-lm-secondary/30 flex flex-col md:flex-row items-center border border-lm-border">
                <div class="w-full md:w-1/2 p-10 lg:p-20 order-2 md:order-1">
                    <span class="text-lm-primary tracking-widest uppercase text-xs font-bold mb-4 block">The Atelier</span>
                    <h2 class="text-3xl lg:text-5xl font-serif text-lm-text leading-tight mb-6">Mastery in Every Cut &
                        Curve.</h2>
                    <p class="text-lm-textMuted lg:text-lg font-light leading-relaxed mb-8">Our artisans combine
                        centuries-old techniques with modern precision to bring you jewelry that not only shines, but tells
                        a generational story.</p>
                    <a href="{{ route('store.contact') }}" class="btn btn-outline inline-block">Discover Our Process</a>
                </div>
                <div
                    class="w-full md:w-1/2 h-auto md:h-auto md:absolute md:top-0 md:right-0 md:bottom-0 order-1 md:order-2">
                    <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80"
                        alt="Jewelry Craftsmanship" class="w-full h-full object-cover">
                </div>
            </div>
        </section>

        <!-- BESTSELLERS -->
        <section class="max-w-7xl mx-auto px-4 pb-24">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-4xl font-serif text-lm-text">Signature Pieces</h2>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-8">
                @forelse($all->slice(4, 5) as $p)
                    @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                @empty
                    @foreach($all->slice(0, 5) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @endforeach
                @endforelse
            </div>
        </section>

        <!-- NEWSLETTER Block -->
        <section class="py-24 bg-lm-text text-white">
            <div class="max-w-3xl mx-auto px-4 text-center">
                <x-store.icon name="mail" class="w-10 h-10 mx-auto text-lm-primary mb-6" />
                <h2 class="text-3xl md:text-5xl font-serif mb-4">Join The Inner Circle</h2>
                <p class="text-white/60 mb-10 font-light text-lg">Subscribe for exclusive access to new launches, private
                    sales, and styling tips.</p>
                <form action="{{ route('newsletter.subscribe') }}" method="POST"
                    class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    @csrf
                    <input type="email" name="email" required placeholder="Your email address"
                        class="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-lm-primary transition">
                    <button type="submit"
                        class="btn bg-lm-primary hover:bg-white hover:text-lm-text text-white border-none py-4 px-8 uppercase tracking-widest !rounded-full">Subscribe</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection


