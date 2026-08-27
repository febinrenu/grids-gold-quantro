@extends('store.prism.layout')

@section('content')
    <div class="theme-prism pb-0 relative overflow-hidden">

        <!-- Abstract Background Shapes -->
        <div class="pr-shape w-[500px] h-auto bg-pr-tertiary top-10 left-[-100px] animation-delay-2000"></div>
        <div class="pr-shape w-[600px] h-auto bg-pr-secondary top-[40%] right-[-200px] animation-delay-4000"></div>

        <!-- HERO SECTION -->
        <section class="min-h-[85vh] flex items-center justify-center pt-10 pb-20 relative z-10">
            <div class="max-w-[1400px] mx-auto px-6 w-full text-center">

                <span
                    class="inline-block px-6 py-2 bg-white rounded-full text-pr-primary font-bold shadow-sm border border-pr-border mb-8 animate-bounce-slow">
                    ✨ New Season Drops Are Here ✨
                </span>

                <h1
                    class="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-pr-text mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
                    {!! nl2br(e($s->hero_title ?? "Jewelry That \nMakes You Smile")) !!}
                </h1>

                <p
                    class="font-sans text-pr-textMuted text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                    {{ $s->hero_subtitle ?? 'Vibrant stones, playful shapes, and holographic metals. Designed for the bold and the joyful.' }}
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="{{ route('store.shop') }}" class="btn btn-primary text-xl px-12 py-5 rounded-2xl">Shop The
                        Collection</a>
                    <a href="{{ route('store.contact') }}" class="btn btn-outline text-xl px-12 py-5 rounded-2xl">Follow The
                        Vibe</a>
                </div>

                <div class="mt-20">
                    <div
                        class="w-full aspect-[21/9] max-h-auto rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(138,79,255,0.2)] border-4 border-white relative group">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80"
                            alt="Holographic Jewelry"
                            class="w-full h-full object-cover filter saturate-150 group-hover:scale-105 transition duration-1000">
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-pr-primary/20 via-pr-secondary/10 to-transparent">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- NEW ARRIVALS: Carousel-like Grid -->
        <section class="py-24 relative z-10">
            <div class="max-w-[1400px] mx-auto px-6">
                <div class="flex flex-col md:flex-row items-center justify-between mb-16 px-4">
                    <h2 class="text-4xl md:text-6xl font-display font-bold text-pr-text tracking-tight">Fresh Drops 💧</h2>
                    <a href="{{ route('store.shop', ['sort' => 'latest']) }}"
                        class="btn bg-white border border-pr-border shadow-sm text-pr-text hover:text-pr-primary mt-4 md:mt-0 font-bold rounded-2xl">
                        See All Goodies
                    </a>
                </div>

                @php $currency = $s->currency_code ?? '$';
                $all = ($products ?? collect())->values(); @endphp
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    @forelse($all->slice(0, 4) as $p)
                        <div class="@if($loop->iteration % 2 == 0) translate-y-8 @endif">
                            @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
                        </div>
                    @empty
                        <div
                            class="col-span-full border-2 border-dashed border-pr-border rounded-[30px] p-16 text-center bg-white/50 backdrop-blur">
                            <span class="text-6xl mb-4 block">🥺</span>
                            <p class="font-display font-bold text-2xl text-pr-textMuted">No goodies found right now.</p>
                        </div>
                    @endforelse
                </div>
            </div>
        </section>

        <!-- EDITORIAL: The Rainbow Room -->
        <section class="py-32 relative z-10">
            <div class="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div class="space-y-8 pr-0 lg:pr-12">
                    <span
                        class="inline-block px-4 py-1 bg-pr-secondary/10 text-pr-secondary font-bold rounded-full uppercase tracking-wider text-sm">Our
                        Magic</span>
                    <h3 class="text-5xl md:text-7xl font-display font-bold text-pr-text leading-tight tracking-tight">Color
                        <br>Outside <br>The Lines.</h3>
                    <p class="text-pr-textMuted text-xl leading-relaxed font-medium">
                        We source the most unique, iridescent stones and pair them with asymmetric, playful settings.
                        Because life's too short for boring jewelry.
                    </p>
                    <div class="flex gap-4 pt-4">
                        <div class="bg-white p-6 rounded-3xl border border-pr-border shadow-sm flex-1 text-center">
                            <span class="block text-4xl mb-2">💎</span>
                            <span class="font-bold text-pr-text">Ethical Stones</span>
                        </div>
                        <div class="bg-white p-6 rounded-3xl border border-pr-border shadow-sm flex-1 text-center">
                            <span class="block text-4xl mb-2">♻️</span>
                            <span class="font-bold text-pr-text">Recycled Gold</span>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-pr-primary to-pr-secondary rounded-[40px] transform rotate-[-5deg] z-0">
                    </div>
                    <div
                        class="relative overflow-hidden rounded-[40px] aspect-[4/5] z-10 border-4 border-white bg-white shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80"
                            alt="Colorful Rings" class="w-full h-full object-cover filter saturate-150">
                    </div>
                    <div
                        class="absolute -right-8 top-20 bg-white p-4 rounded-3xl shadow-xl z-20 border border-pr-border animate-bounce-slow">
                        <p class="font-bold text-pr-primary text-xl">100% Fun</p>
                        <p class="text-sm font-medium text-pr-textMuted">Guaranteed</p>
                    </div>
                </div>

            </div>
        </section>

        <!-- CATEGORIES -->
        <section class="py-24 relative z-10">
            <div class="max-w-[1400px] mx-auto px-6">
                <h2 class="text-5xl md:text-6xl font-display font-bold text-center text-pr-text mb-16 tracking-tight">Shop
                    By Vibe 🌈</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a href="{{ route('store.shop') }}"
                        class="group block relative rounded-[40px] overflow-hidden aspect-square border-4 border-white shadow-lg bg-white">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                            alt="Bracelets"
                            class="w-full h-full object-cover filter saturate-150 group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-pr-text/80 to-transparent"></div>
                        <div class="absolute bottom-10 left-10 text-lef">
                            <h3
                                class="text-4xl font-display font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform">
                                Arm Candy</h3>
                            <span
                                class="inline-block bg-white text-pr-primary font-bold px-4 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore
                                &rarr;</span>
                        </div>
                    </a>

                    <a href="{{ route('store.shop') }}"
                        class="group block relative rounded-[40px] overflow-hidden aspect-square border-4 border-white shadow-lg bg-white md:-translate-y-12">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                            alt="Rings"
                            class="w-full h-full object-cover filter saturate-150 group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-pr-text/80 to-transparent"></div>
                        <div class="absolute bottom-10 left-10 text-lef">
                            <h3
                                class="text-4xl font-display font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform">
                                Ring Bling</h3>
                            <span
                                class="inline-block bg-white text-pr-secondary font-bold px-4 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore
                                &rarr;</span>
                        </div>
                    </a>

                    <a href="{{ route('store.shop') }}"
                        class="group block relative rounded-[40px] overflow-hidden aspect-square border-4 border-white shadow-lg bg-white">
                        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
                            alt="Necklaces"
                            class="w-full h-full object-cover filter saturate-150 group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-pr-text/80 to-transparent"></div>
                        <div class="absolute bottom-10 left-10 text-lef">
                            <h3
                                class="text-4xl font-display font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform">
                                Chokers & Chains</h3>
                            <span
                                class="inline-block bg-white text-pr-tertiary font-bold px-4 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore
                                &rarr;</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- NEWSLETTER -->
        <section class="py-32 relative z-10">
            <div class="max-w-[1000px] mx-auto px-6">
                <div
                    class="bg-white rounded-[40px] p-10 md:p-20 text-center border-2 border-pr-border shadow-2xl relative overflow-hidden">

                    <!-- Confetti blurbs -->
                    <div class="absolute top-10 left-10 w-24 h-24 bg-pr-primary/20 rounded-full blur-[20px]"></div>
                    <div class="absolute bottom-10 right-10 w-32 h-32 bg-pr-secondary/20 rounded-full blur-[25px]"></div>

                    <div class="relative z-10">
                        <span class="text-6xl mb-6 block animate-bounce">💌</span>
                        <h2 class="text-5xl md:text-6xl font-display font-bold text-pr-text mb-4 tracking-tight">Get The
                            Perks</h2>
                        <p class="text-pr-textMuted text-xl mb-12 font-medium max-w-lg mx-auto">Drop your email to get 15%
                            off your first order, plus updates on strictly fun stuff.</p>

                        <form action="{{ route('newsletter.subscribe') }}" method="POST"
                            class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            @csrf
                            <input type="email" name="email" required placeholder="Enter your email address"
                                class="flex-1 bg-pr-bg border-2 border-pr-border rounded-2xl font-sans font-bold text-pr-text px-6 py-5 focus:outline-none focus:border-pr-primary focus:bg-white transition shadow-inner">
                            <button type="submit" class="btn btn-primary px-10 border-none shadow-lg text-lg">Join The
                                Party</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .animate-bounce-slow {
                animation: bounce-slow 3s infinite ease-in-out;
            }

            @keyframes bounce-slow {

                0%,
                100% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(-10px);
                }
            }
        </style>
    </div>

    @include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe' ?? 'Subscribe'])
@endsection


