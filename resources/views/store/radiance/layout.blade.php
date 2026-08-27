@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 11 15 25 !important;
    --color-bg-surface: 19 27 44 !important;
    --color-bg-elevated: 30 41 59 !important;
    --color-fg-primary: 248 250 252 !important;
    --color-fg-secondary: 148 163 184 !important;
    --color-accent-500: 245 158 11 !important;
    --color-accent-glow: rgba(245 158 11, 0.4) !important;
  }
</style>

@push('styles')
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Space Grotesk"', 'sans-serif'],
                        display: ['"Space Grotesk"', 'sans-serif'],
                    },
                    colors: {
                        rad: {
                            bg: '#050510',
                            surface: '#0F1020',
                            surfaceHover: '#171930',
                            accent1: '#00F0FF', /* Neon Cyan */
                            accent2: '#FF0055', /* Neon Pink */
                            accent3: '#7000FF', /* Violet */
                            text: '#FFFFFF',
                            textMuted: '#8B94B0',
                            border: '#242850',
                        }
                    },
                    animation: {
                        'gradient-x': 'gradient-x 5s ease infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        'gradient-x': {
                            '0%, 100%': {
                                'background-size': '200% 200%',
                                'background-position': 'left center'
                            },
                            '50%': {
                                'background-size': '200% 200%',
                                'background-position': 'right center'
                            },
                        },
                        'float': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* RADIANCE THEME OVERRIDES v2 */
        #app.theme-radiance {
            background-color: theme('colors.rad.bg');
            color: theme('colors.rad.text');
            font-family: theme('fontFamily.sans');
        }

        .rad-gradient-text {
            background: linear-gradient(90deg, theme('colors.rad.accent1'), theme('colors.rad.accent2'));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .rad-gradient-bg {
            background: linear-gradient(90deg, theme('colors.rad.accent3'), theme('colors.rad.accent2'), theme('colors.rad.accent1'));
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
        }

        /* Form Controls */
        #app.theme-radiance .form-control {
            border: 2px solid theme('colors.rad.border');
            border-radius: 8px;
            padding: 0.875rem 1.25rem;
            background-color: rgba(15, 16, 32, 0.6);
            color: theme('colors.rad.text');
            font-family: inherit;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5) inset;
        }

        #app.theme-radiance .form-control:focus {
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
            border-color: theme('colors.rad.accent1');
            outline: none;
        }

        /* Buttons */
        #app.theme-radiance .btn {
            border-radius: 8px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 0.875rem 2rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 0.85rem;
            position: relative;
            z-index: 1;
            overflow: hidden;
            border: none;
        }

        #app.theme-radiance .btn-primary {
            background: linear-gradient(90deg, theme('colors.rad.accent3'), theme('colors.rad.accent2'));
            color: white;
            box-shadow: 0 4px 15px rgba(255, 0, 85, 0.3);
        }

        #app.theme-radiance .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, theme('colors.rad.accent2'), theme('colors.rad.accent1'));
            z-index: -1;
            transition: opacity 0.3s ease;
            opacity: 0;
        }

        #app.theme-radiance .btn-primary:hover::before {
            opacity: 1;
        }

        #app.theme-radiance .btn-primary:hover {
            box-shadow: 0 6px 20px rgba(0, 240, 255, 0.4);
            transform: translateY(-2px);
        }

        #app.theme-radiance .btn-outline {
            background: theme('colors.rad.surface');
            color: theme('colors.rad.text');
            border: 2px solid theme('colors.rad.accent1');
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
        }

        #app.theme-radiance .btn-outline:hover {
            background: theme('colors.rad.accent1');
            color: theme('colors.rad.bg');
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
        }

        /* Radical Product Card Override */
        #app.theme-radiance .product-card {
            background: theme('colors.rad.surface');
            border: 1px solid theme('colors.rad.border');
            border-radius: 16px;
            padding: 1rem;
            text-align: left;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        #app.theme-radiance .product-card:hover {
            border-color: theme('colors.rad.accent1');
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 240, 255, 0.15);
        }

        #app.theme-radiance .product-media {
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 1/1;
            background: #000;
            position: relative;
            margin-bottom: 1.25rem;
        }

        #app.theme-radiance .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.9;
            transition: all 0.5s ease;
            mix-blend-mode: luminosity;
        }

        #app.theme-radiance .product-card:hover .product-media img {
            opacity: 1;
            mix-blend-mode: normal;
            transform: scale(1.05);
        }

        #app.theme-radiance .product-meta {
            font-size: 0.7rem;
            color: theme('colors.rad.accent2');
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        #app.theme-radiance .product-title {
            font-family: theme('fontFamily.display');
            font-weight: 700;
            font-size: 1.1rem;
            color: theme('colors.rad.text');
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }

        #app.theme-radiance .price {
            font-family: theme('fontFamily.sans');
            font-size: 1rem;
            color: theme('colors.rad.accent1');
            font-weight: 700;
        }

        #app.theme-radiance .product-actions {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            opacity: 0;
            transition: all 0.3s ease;
        }

        #app.theme-radiance .product-card:hover .product-actions {
            opacity: 1;
        }

        #app.theme-radiance .product-action-btn {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: rgba(15, 16, 32, 0.8);
            backdrop-filter: blur(4px);
            color: theme('colors.rad.text');
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid theme('colors.rad.border');
            transition: all 0.2s;
        }

        #app.theme-radiance .product-action-btn:hover {
            background: theme('colors.rad.accent1');
            color: theme('colors.rad.bg');
            border-color: theme('colors.rad.accent1');
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
        }

        /* Specific Add to Cart buttons for cards */
        #app.theme-radiance article.product-card .btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid theme('colors.rad.border');
            color: white;
            box-shadow: none;
            width: 100%;
        }

        #app.theme-radiance article.product-card .btn:hover {
            background: theme('colors.rad.accent1');
            border-color: theme('colors.rad.accent1');
            color: theme('colors.rad.bg');
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
        }

        /* Topbar & Header */
        #app.theme-radiance .topbar {
            background: theme('colors.rad.surface');
            color: theme('colors.rad.textMuted');
            font-size: 0.75rem;
            font-weight: 500;
            border-bottom: 1px solid theme('colors.rad.border');
        }

        #app.theme-radiance .main-header {
            background: rgba(5, 5, 16, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid theme('colors.rad.border');
        }

        #app.theme-radiance .nav-link {
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.85rem;
            color: theme('colors.rad.text');
            transition: all 0.3s;
        }

        #app.theme-radiance .nav-link:hover {
            color: theme('colors.rad.accent1');
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        /* Badges */
        #app.theme-radiance .product-badge {
            background: theme('colors.rad.accent2');
            color: white;
            border-radius: 4px;
            padding: 0.25rem 0.75rem;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            position: absolute;
            top: 0.75rem;
            left: 0.75rem;
            z-index: 10;
            box-shadow: 0 0 10px rgba(255, 0, 85, 0.5);
        }

        /* Footer */
        #app.theme-radiance .store-footer {
            background-color: theme('colors.rad.surface');
            border-top: 2px solid theme('colors.rad.border');
            color: theme('colors.rad.textMuted');
            padding-top: 4rem;
            padding-bottom: 2rem;
        }
    </style>
@endpush

@section('header')
    <div class="theme-radiance">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar py-2 px-4 text-center max-w-7xl mx-auto flex justify-between">
                <span>{{ $s->topbar_text_left }}</span>
                <span class="text-rad-accent1">{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header sticky top-0 z-50 py-4 px-6 md:px-8">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <button class="lg:hidden p-2 -ml-2 js-mobile-menu-toggle text-rad-text focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 flex items-center gap-3 group">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 w-auto object-contain">
                    @else
                        <span
                            class="font-display font-bold text-2xl text-white tracking-widest uppercase group-hover:rad-gradient-text transition-all">{{ $s->store_name }}</span>
                    @endif
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-8 pl-8 border-l border-rad-border">
                    <a href="{{ route('store.index') }}" class="nav-link">{{ 'Home' }}</a>
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(2) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center justify-end flex-1 gap-4 md:gap-6">
                    <button type="button" class="text-rad-text hover:text-rad-accent1 transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}" 
                            class="hidden md:block text-rad-text hover:text-rad-accent1 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')" 
                            class="hidden md:block text-rad-text hover:text-rad-accent1 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif

                    <button type="button"
                        class="relative text-rad-text hover:text-rad-accent2 transition js-cart-toggle cursor-pointer"
                        aria-label="{{ 'Cart' }}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-2 -right-2 bg-rad-accent2 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-sm cart-count js-cart-count shadow-[0_0_10px_rgba(255,0,85,0.7)]">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-radiance">
        <footer class="store-footer">
            <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
                <div class="md:col-span-1">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 w-auto object-contain mb-6">
                    @else
                        <span
                            class="font-display font-bold text-2xl text-white tracking-widest uppercase block mb-4">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-sm leading-relaxed mb-6">
                        {{ $s->footer_text ?? 'Futuristic design meets timeless craftsmanship.' }}</p>
                    <div class="flex items-center gap-4">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="w-10 h-10 rounded-lg bg-rad-bg border border-rad-border flex items-center justify-center text-rad-text hover:border-rad-accent1 hover:text-rad-accent1 transition shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                <span class="text-xs font-bold uppercase">{{ substr($soc['platform'], 0, 2) }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>

                <div>
                    <h4 class="font-display font-bold text-rad-text mb-6 tracking-widest uppercase">
                        {{ 'Shop' }}</h4>
                    <ul class="space-y-3 text-sm font-medium">
                        <li><a href="{{ route('store.shop') }}"
                                class="hover:text-rad-accent1 transition">{{ 'AllJewelry' }}</a></li>
                        @foreach(($categories ?? collect())->take(4) as $cat)
                            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                    class="hover:text-rad-accent1 transition">{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div>
                    <h4 class="font-display font-bold text-rad-text mb-6 tracking-widest uppercase">Support</h4>
                    <ul class="space-y-3 text-sm font-medium">
                        <li><a href="{{ route('store.contact') }}"
                                class="hover:text-rad-accent2 transition">{{ 'ContactUs' }}</a></li>
                        <li><a href="#" class="hover:text-rad-accent2 transition">FAQ & Orders</a></li>
                        <li><a href="#" class="hover:text-rad-accent2 transition">Returns Policy</a></li>
                        <li><a href="#" class="hover:text-rad-accent2 transition">Maintenance</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-display font-bold text-rad-text mb-6 tracking-widest uppercase">Location</h4>
                    <p class="text-sm leading-relaxed text-rad-textMuted mb-4">
                        {{ $s->contact_address ?? 'Cyber City, Neo District 09' }}<br>Phone: <span
                            class="text-white">{{ $s->contact_phone }}</span><br>Email: <span
                            class="text-rad-accent1">{{ $s->contact_email }}</span></p>
                    <div class="h-1 w-20 rad-gradient-bg mt-6 rounded-full"></div>
                </div>
            </div>

            <div
                class="max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-rad-border/50 text-xs text-center md:flex md:justify-between items-center">
                <p class="mb-4 md:mb-0 text-rad-textMuted font-medium">&copy; {{ date('Y') }} {{ $s->store_name }}. SYSTEM
                    ACTIVE.</p>
                <div class="flex justify-center gap-6 text-rad-text font-bold tracking-wider uppercase">
                    <a href="#" class="hover:text-rad-accent1 transition">Transmission Secure</a>
                </div>
            </div>
        </footer>
    </div>
@endsection







