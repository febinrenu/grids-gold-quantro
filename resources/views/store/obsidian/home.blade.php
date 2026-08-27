@extends('store.obsidian.layout')

@section('content')
    <div class="theme-obsidian pb-0 bg-ob-bg">

        <!-- HERO SECTION: Ultra Dark Full Screen -->
        <section class="relative min-h-[90vh] flex flex-col justify-end pb-20">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1920&q=80"
                    alt="Dark luxury jewelry" class="w-full h-full object-cover grayscale-[30%] contrast-[1.2]">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-ob-bg via-ob-bg/60 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-ob-bg via-ob-bg/20 to-transparent"></div>

            <div class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-12 w-full">
                <div class="max-w-2xl border-l-[3px] border-ob-primary pl-8">
                    <span class="block text-ob-primary tracking-[0.3em] uppercase text-xs font-bold mb-6">The Obsidian
                        Collection</span>
                    <h1 class="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
                        {{ $s->hero_title ?? 'Masterpieces Set in Shadow.' }}
                    </h1>
                    <p class="text-ob-textMuted text-lg font-light mb-10 leading-relaxed max-w-lg">
                        {{ $s->hero_subtitle ?? 'Hand-forged perfection. For those who demand the pinnacle of craft and materials.' }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-6">
                        <a href="{{ route('store.shop') }}"
                            class="btn btn-primary">{{ 'ShopCollection' ?? 'Discover the Collection' }}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- NEW ARRIVALS -->
        <section class="py-32">
            <div class="max-w-screen-2xl mx-auto px-6 sm:px-12">
                <div
                    class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-ob-border pb-6">
                    <div>
                        <h2 class="text-4xl font-serif text-white italic">01. Latest Acquisitions</h2>
                    </div>
                    <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                        class="text-xs tracking-[0.2em] uppercase text-ob-primary hover:text-white transition">View All
                        →</a>
                </div>

                @php $currency = $s->currency_code ?? '$';
                $all = ($products ?? collect())->values(); @endphp
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    @forelse($all->slice(0, 4) as $p)
                        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                    @empty
                        <p class="col-span-full py-10 text-ob-textMuted">No products found.</p>
                    @endforelse
                </div>
            </div>
        </section>

        <!-- EDITORIAL SPLIT -->
        <section class="border-y border-ob-border bg-ob-surface">
            <div class="grid grid-cols-1 md:grid-cols-2 min-h-auto">
                <div class="p-12 lg:p-24 flex flex-col justify-center border-r border-ob-border">
                    <span class="text-ob-primary tracking-[0.3em] uppercase text-xs font-bold mb-8">The Ethos</span>
                    <h3 class="text-4xl lg:text-5xl font-serif text-white leading-tight mb-8">Uncompromising Standards.</h3>
                    <p class="text-ob-textMuted font-light leading-relaxed mb-12">Only 1 in 10,000 diamonds meets our
                        rigorous internal criteria for inclusion in an Obsidian piece. We select for character, cut
                        precision, and absolute perfection.</p>
                    <a href="{{ route('store.contact') }}" class="btn btn-outline self-start">Request Private Viewing</a>
                </div>
                <div class="relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
                        alt="Cut Diamond" class="absolute inset-0 w-full h-full object-cover">
                </div>
            </div>
        </section>

        <!-- HIGHLIGHT CATEGORIES -->
        <section class="py-32">
            <div class="max-w-screen-2xl mx-auto px-6 sm:px-12">
                <h2 class="text-4xl font-serif text-white italic mb-16 pb-6 border-b border-ob-border">02. The Archives</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <a href="{{ route('store.shop') }}"
                        class="group block relative h-auto border border-ob-border overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                            alt="Rings"
                            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 grayscale-[50%] transition duration-700">
                        <div class="absolute inset-0 bg-ob-bg/30"></div>
                        <div class="relative h-full flex flex-col items-center justify-center text-center p-8">
                            <h3 class="text-3xl font-serif text-white mb-4 group-hover:text-ob-primary transition">High
                                Jewelry Rings</h3>
                            <span class="text-xs uppercase tracking-[0.2em] text-ob-textMuted">Explore</span>
                        </div>
                    </a>
                    <a href="{{ route('store.shop') }}"
                        class="group block relative h-auto border border-ob-border overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
                            alt="Necklaces"
                            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 grayscale-[50%] transition duration-700">
                        <div class="absolute inset-0 bg-ob-bg/30"></div>
                        <div class="relative h-full flex flex-col items-center justify-center text-center p-8">
                            <h3 class="text-3xl font-serif text-white mb-4 group-hover:text-ob-primary transition">Necklaces
                                & Pendants</h3>
                            <span class="text-xs uppercase tracking-[0.2em] text-ob-textMuted">Explore</span>
                        </div>
                    </a>
                    <a href="{{ route('store.shop') }}"
                        class="group block relative h-auto border border-ob-border overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                            alt="Bracelets"
                            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 grayscale-[50%] transition duration-700">
                        <div class="absolute inset-0 bg-ob-bg/30"></div>
                        <div class="relative h-full flex flex-col items-center justify-center text-center p-8">
                            <h3 class="text-3xl font-serif text-white mb-4 group-hover:text-ob-primary transition">Bracelets
                                & Cuffs</h3>
                            <span class="text-xs uppercase tracking-[0.2em] text-ob-textMuted">Explore</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- HERITAGE BADGES -->
        <section class="border-y border-ob-border bg-ob-surface py-20">
            <div class="max-w-screen-2xl mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                    <span class="text-ob-primary text-4xl block font-serif italic mb-4">I.</span>
                    <p class="text-xs tracking-[0.1em] uppercase">GIA Certified Diamonds</p>
                </div>
                <div>
                    <span class="text-ob-primary text-4xl block font-serif italic mb-4">II.</span>
                    <p class="text-xs tracking-[0.1em] uppercase">18K Solid Gold</p>
                </div>
                <div>
                    <span class="text-ob-primary text-4xl block font-serif italic mb-4">III.</span>
                    <p class="text-xs tracking-[0.1em] uppercase">Handcrafted in Studio</p>
                </div>
                <div>
                    <span class="text-ob-primary text-4xl block font-serif italic mb-4">IV.</span>
                    <p class="text-xs tracking-[0.1em] uppercase">Secure Global Transit</p>
                </div>
            </div>
        </section>

        <!-- THE VAULT (Bestsellers) -->
        <section class="py-32">
            <div class="max-w-screen-2xl mx-auto px-6 sm:px-12">
                <h2 class="text-4xl font-serif text-white italic mb-16 pb-6 border-b border-ob-border text-right">03. The
                    Vault (Signatures)</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

        <!-- PRIVATE MANIFESTO / NEWSLETTER -->
        <section class="py-40 bg-ob-bg border-t border-ob-border relative overflow-hidden">
            <div
                class="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1572979269493-27cc6216c52a?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
            </div>
            <div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
                <h2 class="text-5xl font-serif text-white mb-8">The Syndicate</h2>
                <p class="text-ob-textMuted mb-12 font-light leading-relaxed">Membership offers priority access to
                    one-of-a-kind pieces, unlisted inventory, and private viewings in our global showrooms.</p>
                <form action="{{ route('newsletter.subscribe') }}" method="POST"
                    class="flex flex-col sm:flex-row border border-ob-border p-1 bg-ob-surface">
                    @csrf
                    <input type="email" name="email" required placeholder="Enter formal email"
                        class="flex-1 bg-transparent border-none px-6 py-4 text-white text-sm focus:outline-none focus:ring-0 placeholder:text-ob-textMuted">
                    <button type="submit" class="btn btn-primary sm:ml-2">Request Access</button>
                </form>
            </div>
        </section>

    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection


