@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 243 244 246 !important;
    --color-bg-surface: 255 255 255 !important;
    --color-bg-elevated: 229 231 235 !important;
    --color-fg-primary: 17 24 39 !important;
    --color-fg-secondary: 107 114 128 !important;
    --color-accent-500: 138 79 255 !important;
    --color-accent-glow: rgba(138 79 255, 0.4) !important;
  }
</style>

@push('styles')
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Nunito', 'sans-serif'],
                        display: ['Quicksand', 'sans-serif'],
                    },
                    colors: {
                        pr: {
                            bg: '#FDFBF7', /* Off white */
                            surface: '#FFFFFF',
                            primary: '#8A4FFF', /* Bright Purple */
                            secondary: '#FF4FA7', /* Hot Pink */
                            tertiary: '#00D2FF', /* Cyan */
                            text: '#2D3748',
                            textMuted: '#718096',
                            border: '#EDF2F7',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* PRISM THEME OVERRIDES v2 - HOLOGRAPHIC HOLOGRAPHIC */
        #app.theme-prism {
            background-color: theme('colors.pr.bg');
            color: theme('colors.pr.text');
            font-family: theme('fontFamily.sans');
            overflow-x: hidden;
        }

        /* Typography */
        #app.theme-prism h1,
        #app.theme-prism h2,
        #app.theme-prism h3,
        #app.theme-prism h4,
        #app.theme-prism h5,
        #app.theme-prism h6 {
            font-family: theme('fontFamily.display');
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        /* Form Controls */
        #app.theme-prism .form-control {
            border: 2px solid theme('colors.pr.border');
            border-radius: 16px;
            padding: 0.8rem 1.5rem;
            background-color: theme('colors.pr.surface');
            color: theme('colors.pr.text');
            font-family: inherit;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        #app.theme-prism .form-control:focus {
            box-shadow: 0 8px 20px rgba(138, 79, 255, 0.15);
            border-color: theme('colors.pr.primary');
            outline: none;
            transform: translateY(-2px);
        }

        /* Buttons */
        #app.theme-prism .btn {
            border-radius: 16px;
            font-family: theme('fontFamily.display');
            font-weight: 700;
            padding: 0.8rem 2rem;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-size: 1rem;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        #app.theme-prism .btn-primary {
            background: linear-gradient(135deg, theme('colors.pr.primary'), theme('colors.pr.secondary'), theme('colors.pr.tertiary'));
            background-size: 200% 200%;
            color: white;
            border: none;
            box-shadow: 0 10px 20px rgba(138, 79, 255, 0.25);
            animation: pr-gradient-shift 5s ease infinite;
        }

        @keyframes pr-gradient-shift {
            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }
        }

        #app.theme-prism .btn-primary:hover {
            box-shadow: 0 15px 30px rgba(255, 79, 167, 0.35);
            transform: translateY(-4px) scale(1.02);
            color: white;
        }

        #app.theme-prism .btn-outline {
            background-color: theme('colors.pr.surface');
            color: theme('colors.pr.primary');
            border: 2px solid theme('colors.pr.primary');
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
        }

        #app.theme-prism .btn-outline:hover {
            background-color: theme('colors.pr.primary');
            color: white;
            transform: translateY(-4px);
            box-shadow: 0 15px 25px rgba(138, 79, 255, 0.2);
        }

        /* Radical Product Card Override */
        #app.theme-prism .product-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 30px;
            padding: 1.25rem;
            text-align: center;
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            overflow: visible;
        }

        #app.theme-prism .product-card::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 32px;
            background: linear-gradient(135deg, theme('colors.pr.primary'), theme('colors.pr.tertiary'));
            z-index: -1;
            opacity: 0;
            transition: opacity 0.5s ease;
            filter: blur(8px);
        }

        #app.theme-prism .product-card:hover {
            transform: translateY(-10px) rotate(-1deg);
            background: white;
        }

        #app.theme-prism .product-card:hover::before {
            opacity: 0.3;
        }

        #app.theme-prism .product-media {
            border-radius: 20px;
            overflow: hidden;
            aspect-ratio: 4/5;
            background: theme('colors.pr.surface');
            position: relative;
            margin-bottom: 1.5rem;
            mask-image: radial-gradient(white, black);
            -webkit-mask-image: -webkit-radial-gradient(white, black);
        }

        #app.theme-prism .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        #app.theme-prism .product-card:hover .product-media img {
            transform: scale(1.1) rotate(2deg);
        }

        #app.theme-prism .product-meta {
            font-size: 0.8rem;
            color: theme('colors.pr.secondary');
            font-weight: 800;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        #app.theme-prism .product-title {
            font-size: 1.25rem;
            color: theme('colors.pr.text');
            margin-bottom: 0.75rem;
            line-height: 1.2;
        }

        #app.theme-prism .price {
            font-family: theme('fontFamily.display');
            font-size: 1.4rem;
            color: theme('colors.pr.primary');
            font-weight: 700;
        }

        #app.theme-prism .product-actions {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%) scale(0.8);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            display: flex;
            gap: 0.5rem;
            background: white;
            padding: 0.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(138, 79, 255, 0.2);
            border: 2px solid theme('colors.pr.primary');
        }

        #app.theme-prism .product-card:hover .product-actions {
            opacity: 1;
            transform: translateX(-50%) scale(1);
            bottom: -25px;
        }

        #app.theme-prism .product-action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: theme('colors.pr.surface');
            color: theme('colors.pr.primary');
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-weight: bold;
        }

        #app.theme-prism .product-action-btn:hover {
            background: theme('colors.pr.primary');
            color: white;
            transform: scale(1.1);
        }

        /* Specific styles within card */
        #app.theme-prism article.product-card .btn {
            background: white;
            color: theme('colors.pr.primary');
            border: 2px solid theme('colors.pr.primary');
            width: 100%;
        }

        #app.theme-prism article.product-card .btn:hover {
            background: theme('colors.pr.primary');
            color: white;
        }

        /* Topbar & Header */
        #app.theme-prism .topbar {
            background: linear-gradient(90deg, theme('colors.pr.primary'), theme('colors.pr.secondary'), theme('colors.pr.tertiary'));
            background-size: 200% 200%;
            animation: pr-gradient-shift 10s ease infinite;
            color: white;
            font-size: 0.85rem;
            font-weight: 700;
            padding: 0.5rem;
            text-align: center;
        }

        #app.theme-prism .main-header {
            background: rgba(253, 251, 247, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 2px solid theme('colors.pr.border');
            padding: 0.5rem 0;
        }

        #app.theme-prism .nav-link {
            font-weight: 700;
            font-size: 1rem;
            color: theme('colors.pr.text');
            position: relative;
            padding: 0.5rem 1rem;
            border-radius: 12px;
            transition: all 0.3s;
        }

        #app.theme-prism .nav-link:hover {
            color: theme('colors.pr.primary');
            background: rgba(138, 79, 255, 0.05);
            transform: translateY(-2px);
        }

        /* Badges */
        #app.theme-prism .product-badge {
            background: theme('colors.pr.secondary');
            color: white;
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            font-family: theme('fontFamily.display');
            font-weight: 800;
            text-transform: uppercase;
            position: absolute;
            top: 2rem;
            left: -0.5rem;
            z-index: 10;
            border-radius: 8px;
            box-shadow: 4px 4px 0 rgba(138, 79, 255, 0.3);
            transform: rotate(-5deg);
        }

        /* Footer */
        #app.theme-prism .store-footer {
            background: linear-gradient(to bottom, transparent, rgba(237, 242, 247, 0.5));
            border-top: 2px dashed theme('colors.pr.border');
            color: theme('colors.pr.text');
            padding-top: 5rem;
            padding-bottom: 2rem;
        }

        /* Abstract Shapes */
        .pr-shape {
            position: absolute;
            z-index: 0;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.4;
            animation: pr-float 20s infinite alternate cubic-bezier(0.5, 0, 0.5, 1);
        }

        @keyframes pr-float {
            0% {
                transform: translate(0, 0) rotate(0deg) scale(1);
            }

            50% {
                transform: translate(5%, 10%) rotate(180deg) scale(1.1);
            }

            100% {
                transform: translate(-5%, -5%) rotate(360deg) scale(0.9);
            }
        }
    </style>
@endpush

@section('header')
    <div class="theme-prism">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 px-6">
                <span>{{ $s->topbar_text_left }}</span>
                <span class="hidden md:block">✦</span>
                <span>{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header sticky top-0 z-50">
            <div class="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between">

                <!-- Mobile Menu Toggle -->
                <button class="lg:hidden p-2 -ml-2 js-mobile-menu-toggle focus:outline-none text-pr-text">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 flex items-center group">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-12 w-auto object-contain group-hover:scale-105 transition duration-300">
                    @else
                        <span
                            class="font-display font-bold text-3xl md:text-4xl text-pr-primary tracking-tight group-hover:text-pr-secondary transition duration-300">{{ $s->store_name }}</span>
                    @endif
                </a>

                <!-- Desktop Nav -->
                <nav
                    class="hidden lg:flex items-center gap-4 bg-white p-2 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-pr-border">
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(4) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center gap-4">
                    <button type="button"
                        class="w-12 h-12 bg-white rounded-xl shadow-sm border border-pr-border flex items-center justify-center text-pr-text hover:text-pr-primary hover:border-pr-primary hover:shadow-md transition-all js-search-toggle transform hover:-translate-y-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}" 
                            class="hidden sm:flex w-12 h-12 bg-white rounded-xl shadow-sm border border-pr-border items-center justify-center text-pr-text hover:text-pr-primary hover:border-pr-primary hover:shadow-md transition-all transform hover:-translate-y-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')" 
                            class="hidden sm:flex w-12 h-12 bg-white rounded-xl shadow-sm border border-pr-border items-center justify-center text-pr-text hover:text-pr-primary hover:border-pr-primary hover:shadow-md transition-all transform hover:-translate-y-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif

                    <button type="button"
                        class="relative w-12 h-12 bg-pr-text text-white rounded-xl shadow-lg border-2 border-pr-text flex items-center justify-center hover:bg-pr-primary hover:border-pr-primary transition-all js-cart-toggle cursor-pointer transform hover:-translate-y-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-3 -right-3 bg-gradient-to-r from-pr-secondary to-pr-primary text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full cart-count js-cart-count shadow-md">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-prism">
        <footer class="store-footer relative overflow-hidden">
            <div class="pr-shape w-[400px] h-auto bg-pr-secondary top-0 left-[-200px]"></div>
            <div class="pr-shape w-[300px] h-[300px] bg-pr-tertiary bottom-[-100px] right-[-100px]"></div>

            <div class="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div class="md:col-span-5">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-16 w-auto object-contain mb-6">
                    @else
                        <span
                            class="font-display font-bold text-5xl text-pr-text block mb-4 tracking-tight">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-xl text-pr-textMuted mb-8 max-w-sm font-medium leading-relaxed">
                        {{ $s->footer_text ?? 'Color full. Life full. Fine jewelry that refuses to blend in.' }}
                    </p>
                    <div class="flex items-center gap-4">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="w-12 h-12 rounded-2xl bg-white border border-pr-border shadow-sm flex items-center justify-center text-pr-text hover:text-pr-secondary hover:border-pr-secondary hover:-translate-y-2 transition-all duration-300">
                                <span
                                    class="font-display font-bold text-sm">{{ ucfirst(substr($soc['platform'], 0, 2)) }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>

                <div class="md:col-span-3 md:col-start-7">
                    <h4 class="font-display font-bold text-2xl text-pr-text mb-6">Shop</h4>
                    <ul class="space-y-4 font-bold text-pr-textMuted">
                        <li><a href="{{ route('store.shop') }}"
                                class="hover:text-pr-primary transition-colors">Everything</a></li>
                        @foreach(($categories ?? collect())->take(4) as $cat)
                            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                    class="hover:text-pr-primary transition-colors">{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div class="md:col-span-3">
                    <h4 class="font-display font-bold text-2xl text-pr-text mb-6">Support</h4>
                    <ul class="space-y-4 font-bold text-pr-textMuted">
                        <li><a href="{{ route('store.contact') }}" class="hover:text-pr-primary transition-colors">Say
                                Hello</a></li>
                        <li><a href="#" class="hover:text-pr-primary transition-colors">FAQ</a></li>
                        <li><a href="#" class="hover:text-pr-primary transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" class="hover:text-pr-primary transition-colors">Size Guide</a></li>
                    </ul>
                </div>
            </div>

            <div
                class="max-w-[1400px] mx-auto px-6 py-6 border-t-2 border-pr-border/50 text-sm font-bold text-pr-textMuted flex flex-col md:flex-row justify-between items-center relative z-10">
                <p>&copy; {{ date('Y') }} {{ $s->store_name }}. Shine bright. ✨</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-pr-primary transition">Privacy Policy</a>
                    <a href="#" class="hover:text-pr-primary transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    </div>
@endsection







