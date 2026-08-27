@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 15 23 42 !important;
    --color-bg-surface: 30 41 59 !important;
    --color-bg-elevated: 51 65 85 !important;
    --color-fg-primary: 248 250 252 !important;
    --color-fg-secondary: 148 163 184 !important;
    --color-accent-500: 59 130 246 !important;
    --color-accent-glow: rgba(59 130 246, 0.4) !important;
  }
</style>

@push('styles')
    <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:ital,wght@0,300;0,400;0,700;1,400&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Exo 2"', 'sans-serif'],
                        display: ['Rajdhani', 'sans-serif'],
                    },
                    colors: {
                        nv: {
                            bg: '#08080C',
                            surface: '#11121A',
                            surfaceHover: '#181A26',
                            primary: '#B026FF', /* Neon Purple */
                            secondary: '#00F0FF', /* Cyan */
                            text: '#E2E8F0',
                            textMuted: '#64748B',
                            border: '#1E293B',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* NOVA THEME OVERRIDES v2 - CYBERPUNK */
        #app.theme-nova {
            background-color: theme('colors.nv.bg');
            color: theme('colors.nv.text');
            font-family: theme('fontFamily.sans');
        }

        /* Typography */
        #app.theme-nova h1,
        #app.theme-nova h2,
        #app.theme-nova h3,
        #app.theme-nova h4,
        #app.theme-nova h5,
        #app.theme-nova h6 {
            font-family: theme('fontFamily.display');
            text-transform: uppercase;
        }

        /* Form Controls */
        #app.theme-nova .form-control {
            border: 1px solid theme('colors.nv.border');
            border-radius: 4px;
            padding: 0.75rem 1rem;
            background-color: rgba(17, 18, 26, 0.8);
            color: theme('colors.nv.text');
            font-family: inherit;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
        }

        #app.theme-nova .form-control:focus {
            box-shadow: 0 0 15px rgba(176, 38, 255, 0.3), inset 0 2px 10px rgba(0, 0, 0, 0.5);
            border-color: theme('colors.nv.primary');
            outline: none;
        }

        /* Buttons */
        #app.theme-nova .btn {
            border-radius: 4px;
            font-family: theme('fontFamily.display');
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 0.8rem 2rem;
            transition: all 0.3s ease;
            font-size: 1rem;
            overflow: hidden;
            position: relative;
            z-index: 1;
        }

        #app.theme-nova .btn-primary {
            background: linear-gradient(45deg, theme('colors.nv.primary'), #DA00FF);
            color: white;
            border: none;
            box-shadow: 0 4px 15px rgba(176, 38, 255, 0.4);
        }

        #app.theme-nova .btn-primary::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            background: theme('colors.nv.bg');
            z-index: -1;
            transition: opacity 0.3s ease;
            border-radius: 3px;
            opacity: 0;
        }

        #app.theme-nova .btn-primary:hover::before {
            opacity: 1;
        }

        #app.theme-nova .btn-primary:hover {
            color: theme('colors.nv.primary');
            box-shadow: 0 0 25px rgba(176, 38, 255, 0.6);
            transform: translateY(-2px);
        }

        #app.theme-nova .btn-outline {
            background-color: theme('colors.nv.surface');
            color: theme('colors.nv.secondary');
            border: 1px solid theme('colors.nv.secondary');
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        #app.theme-nova .btn-outline:hover {
            background-color: theme('colors.nv.secondary');
            color: theme('colors.nv.bg');
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
        }

        /* Radical Product Card Override */
        #app.theme-nova .product-card {
            background: rgba(17, 18, 26, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid theme('colors.nv.border');
            border-radius: 8px;
            padding: 1rem;
            text-align: left;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        #app.theme-nova .product-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, theme('colors.nv.primary'), transparent);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        #app.theme-nova .product-card:hover {
            border-color: rgba(176, 38, 255, 0.4);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(176, 38, 255, 0.15);
        }

        #app.theme-nova .product-card:hover::before {
            opacity: 1;
        }

        #app.theme-nova .product-media {
            border-radius: 4px;
            overflow: hidden;
            aspect-ratio: 1/1;
            background: #000;
            position: relative;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        #app.theme-nova .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.8;
            filter: saturate(1.2) contrast(1.1);
            transition: all 0.5s ease;
        }

        #app.theme-nova .product-card:hover .product-media img {
            opacity: 1;
            transform: scale(1.08);
        }

        #app.theme-nova .product-meta {
            font-size: 0.75rem;
            color: theme('colors.nv.secondary');
            text-transform: uppercase;
            letter-spacing: 0.15em;
            margin-bottom: 0.5rem;
            font-family: theme('fontFamily.display');
            font-weight: 600;
        }

        #app.theme-nova .product-title {
            font-family: theme('fontFamily.display');
            font-size: 1.2rem;
            font-weight: 700;
            color: theme('colors.nv.text');
            margin-bottom: 0.5rem;
            line-height: 1.2;
        }

        #app.theme-nova .price {
            font-family: theme('fontFamily.display');
            font-size: 1.1rem;
            color: theme('colors.nv.text');
            font-weight: 600;
        }

        #app.theme-nova .product-actions {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            opacity: 0;
            transition: all 0.3s ease;
            transform: translateX(10px);
        }

        #app.theme-nova .product-card:hover .product-actions {
            opacity: 1;
            transform: translateX(0);
        }

        #app.theme-nova .product-action-btn {
            width: 44px;
            height: 44px;
            border-radius: 4px;
            background: theme('colors.nv.primary');
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            box-shadow: 0 0 15px rgba(176, 38, 255, 0.4);
        }

        #app.theme-nova .product-action-btn:hover {
            background: white;
            color: theme('colors.nv.primary');
            box-shadow: 0 0 25px rgba(176, 38, 255, 0.8);
        }

        /* Specific styles within card */
        #app.theme-nova article.product-card .btn {
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid theme('colors.nv.border');
            font-size: 0.8rem;
        }

        #app.theme-nova article.product-card .btn:hover {
            border-color: theme('colors.nv.primary');
            background: rgba(176, 38, 255, 0.1);
            color: theme('colors.nv.primary');
        }

        /* Topbar & Header */
        #app.theme-nova .topbar {
            background: rgba(17, 18, 26, 0.9);
            color: theme('colors.nv.textMuted');
            font-size: 0.75rem;
            font-family: theme('fontFamily.display');
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        #app.theme-nova .main-header {
            background: rgba(8, 8, 12, 0.85);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid theme('colors.nv.border');
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        #app.theme-nova .nav-link {
            font-family: theme('fontFamily.display');
            font-weight: 600;
            text-transform: uppercase;
            font-size: 1rem;
            color: theme('colors.nv.text');
            transition: all 0.3s;
            letter-spacing: 0.05em;
        }

        #app.theme-nova .nav-link:hover {
            color: theme('colors.nv.secondary');
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        /* Badges */
        #app.theme-nova .product-badge {
            background: theme('colors.nv.primary');
            color: white;
            padding: 0.25rem 0.75rem;
            font-size: 0.7rem;
            font-family: theme('fontFamily.display');
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            position: absolute;
            top: 1rem;
            left: 1rem;
            z-index: 10;
            border-radius: 2px;
            box-shadow: 0 0 10px rgba(176, 38, 255, 0.6);
        }

        /* Footer */
        #app.theme-nova .store-footer {
            background-color: theme('colors.nv.surface');
            border-top: 1px solid theme('colors.nv.border');
            color: theme('colors.nv.textMuted');
            padding-top: 5rem;
            padding-bottom: 3rem;
            position: relative;
            overflow: hidden;
        }

        #app.theme-nova .store-footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, theme('colors.nv.primary'), transparent);
            opacity: 0.5;
        }
    </style>
@endpush

@section('header')
    <div class="theme-nova">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar py-2 px-6 flex justify-between items-center max-w-[1600px] mx-auto">
                <span class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-nv-primary animate-pulse"></div> {{ $s->topbar_text_left }}
                </span>
                <span class="text-nv-secondary">{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header sticky top-0 z-50 py-4 px-6 md:px-10">
            <div class="max-w-[1600px] mx-auto flex items-center justify-between">
                <button
                    class="lg:hidden p-2 -ml-2 js-mobile-menu-toggle focus:outline-none text-nv-text hover:text-nv-primary transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 flex items-center group relative">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 w-auto object-contain relative z-10">
                    @else
                        <span
                            class="font-display font-bold text-3xl text-white tracking-widest uppercase relative z-10 group-hover:text-nv-secondary transition">{{ $s->store_name }}</span>
                        <div
                            class="absolute inset-0 bg-nv-secondary blur-lg opacity-0 group-hover:opacity-40 transition duration-500">
                        </div>
                    @endif
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-10">
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(3) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center gap-5 md:gap-7">
                    <button type="button" class="text-nv-text hover:text-nv-secondary transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}"  class="text-nv-text hover:text-nv-primary transition hidden sm:block">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')" 
                            class="text-nv-text hover:text-nv-primary transition hidden sm:block">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif

                    <button type="button"
                        class="relative text-nv-text hover:text-nv-primary transition js-cart-toggle cursor-pointer border border-nv-border p-2 rounded bg-nv-bg hover:border-nv-primary shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-2 -right-2 bg-nv-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded cart-count js-cart-count shadow-[0_0_10px_rgba(176,38,255,0.8)]">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-nova">
        <footer class="store-footer">
            <div class="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                <div class="md:col-span-4">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 w-auto object-contain mb-6">
                    @else
                        <span
                            class="font-display font-bold text-3xl text-white tracking-widest uppercase block mb-4">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-sm leading-relaxed mb-8 max-w-sm">Systemized luxury. Bridging the gap between ancient
                        materials and tomorrow's aesthetics.</p>
                    <div class="flex items-center gap-3">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="w-10 h-10 rounded bg-nv-bg border border-nv-border flex items-center justify-center text-nv-text hover:border-nv-primary hover:text-nv-primary transition shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                                <span
                                    class="text-xs font-display font-bold uppercase">{{ substr($soc['platform'], 0, 2) }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>

                <div class="md:col-span-4 md:pl-12 border-l border-nv-border/50">
                    <h4
                        class="font-display font-bold text-lg text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                        <div class="w-1 h-4 bg-nv-primary"></div> NAVIGATION_
                    </h4>
                    <div class="grid grid-cols-2 gap-4">
                        <ul class="space-y-3 text-sm">
                            <li><a href="{{ route('store.shop') }}"
                                    class="hover:text-nv-secondary transition uppercase font-display font-bold tracking-wider">All
                                    Entities</a></li>
                            @foreach(($categories ?? collect())->take(4) as $cat)
                                <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                        class="hover:text-nv-secondary transition uppercase font-display font-bold tracking-wider">{{ $cat->name }}</a>
                                </li>
                            @endforeach
                        </ul>
                        <ul class="space-y-3 text-sm">
                            <li><a href="{{ route('store.contact') }}"
                                    class="hover:text-nv-secondary transition uppercase font-display font-bold tracking-wider">Comms
                                    Link</a></li>
                            <li><a href="#"
                                    class="hover:text-nv-secondary transition uppercase font-display font-bold tracking-wider">Logistics</a>
                            </li>
                            <li><a href="#"
                                    class="hover:text-nv-secondary transition uppercase font-display font-bold tracking-wider">Returns</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="md:col-span-4 border-l border-nv-border/50 pl-0 md:pl-12">
                    <h4
                        class="font-display font-bold text-lg text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                        <div class="w-1 h-4 bg-nv-secondary"></div> LOCATION_
                    </h4>
                    <div class="bg-nv-bg p-4 border border-nv-border rounded font-mono text-xs text-nv-textMuted space-y-2">
                        <p>COORD: <span class="text-nv-secondary">35.6895° N, 139.6917° E</span></p>
                        <p>STATUS: <span class="text-nv-primary font-bold">ACTIVE</span></p>
                        <p>EMAIL: <span class="text-white">{{ $s->contact_email }}</span></p>
                    </div>
                </div>
            </div>

            <div
                class="max-w-[1600px] mx-auto px-6 md:px-10 pt-6 border-t border-nv-border/50 text-xs font-display font-bold text-nv-textMuted flex flex-col md:flex-row justify-between items-center tracking-widest uppercase">
                <p>&copy; {{ date('Y') }} {{ $s->store_name }}. V 2.0_ONLINE.</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition">Privacy.Sys</a>
                    <a href="#" class="hover:text-white transition">Terms.Sys</a>
                </div>
            </div>
        </footer>
    </div>
@endsection






