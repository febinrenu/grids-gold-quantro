@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 253 252 249 !important;
    --color-bg-surface: 255 255 255 !important;
    --color-bg-elevated: 248 243 234 !important;
    --color-fg-primary: 26 26 26 !important;
    --color-fg-secondary: 74 74 74 !important;
    --color-accent-500: 200 176 132 !important;
    --color-accent-glow: rgba(200 176 132, 0.4) !important;
  }
</style>

@push('styles')
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Outfit:wght@200;300;400;500&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                        serif: ['"Cormorant Garamond"', 'serif'],
                    },
                    colors: {
                        lm: {
                            bg: '#FDFBF7',
                            surface: '#FFFFFF',
                            surfaceHover: '#F5F2EB',
                            primary: '#B69E6D', // soft gold
                            secondary: '#E8DFCE', // light gold/beige
                            accent: '#64748B', // slate
                            text: '#2D3748', // dark slate
                            textMuted: '#718096',
                            border: '#E2E8F0',
                        }
                    },
                    boxShadow: {
                        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
                    }
                }
            }
        }
    </script>
    <style>
        /* LUMIERE THEME OVERRIDES v2 */
        #app.theme-lumiere {
            background-color: theme('colors.lm.bg');
            color: theme('colors.lm.text');
            font-family: theme('fontFamily.sans');
        }

        /* Glassmorphism utility */
        #app.theme-lumiere .glass-effect {
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }

        /* Form Controls */
        #app.theme-lumiere .form-control {
            border: 1px solid theme('colors.lm.border');
            border-radius: 9999px;
            /* Pill shape */
            padding: 0.75rem 1.5rem;
            background-color: theme('colors.lm.surface');
            color: theme('colors.lm.text');
            font-family: inherit;
        }

        #app.theme-lumiere .form-control:focus {
            box-shadow: 0 0 0 3px rgba(182, 158, 109, 0.15);
            border-color: theme('colors.lm.primary');
        }

        /* Typography */
        #app.theme-lumiere h1,
        #app.theme-lumiere h2,
        #app.theme-lumiere h3,
        #app.theme-lumiere h4,
        #app.theme-lumiere h5,
        #app.theme-lumiere h6 {
            font-family: theme('fontFamily.serif');
            font-weight: 400;
        }

        #app.theme-lumiere .text-serif {
            font-family: theme('fontFamily.serif');
        }

        /* Buttons */
        #app.theme-lumiere .btn {
            border-radius: 9999px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 0.75rem 2rem;
            transition: all 0.3s ease;
            font-size: 0.75rem;
        }

        #app.theme-lumiere .btn-primary {
            background-color: theme('colors.lm.text');
            color: #FFFFFF;
            border: 1px solid theme('colors.lm.text');
        }

        #app.theme-lumiere .btn-primary:hover {
            background-color: theme('colors.lm.primary');
            border-color: theme('colors.lm.primary');
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(182, 158, 109, 0.15);
        }

        #app.theme-lumiere .btn-outline {
            background-color: transparent;
            color: theme('colors.lm.text');
            border: 1px solid theme('colors.lm.text');
        }

        #app.theme-lumiere .btn-outline:hover {
            background-color: theme('colors.lm.text');
            color: white;
        }

        /* Radical Product Card Override */
        #app.theme-lumiere .product-card {
            background: transparent;
            border: none;
            padding: 0;
            text-align: center;
        }

        #app.theme-lumiere .product-media {
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 3/4;
            background: theme('colors.lm.surface');
            position: relative;
            margin-bottom: 1.25rem;
        }

        #app.theme-lumiere .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        #app.theme-lumiere .product-card:hover .product-media img {
            transform: scale(1.05);
        }

        #app.theme-lumiere .product-meta {
            font-size: 0.75rem;
            color: theme('colors.lm.textMuted');
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.25rem;
        }

        #app.theme-lumiere .product-title {
            font-family: theme('fontFamily.serif');
            font-size: 1.25rem;
            color: theme('colors.lm.text');
            margin-bottom: 0.5rem;
        }

        #app.theme-lumiere .price {
            font-family: theme('fontFamily.sans');
            font-size: 0.9rem;
            color: theme('colors.lm.primary');
            font-weight: 300;
        }

        #app.theme-lumiere .product-actions {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
            transition: all 0.3s ease;
            display: flex;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.9);
            padding: 0.5rem;
            border-radius: 9999px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        #app.theme-lumiere .product-card:hover .product-actions {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }

        #app.theme-lumiere .product-action-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: transparent;
            color: theme('colors.lm.text');
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid transparent;
            transition: all 0.2s;
        }

        #app.theme-lumiere .product-action-btn:hover {
            background: theme('colors.lm.primary');
            color: white;
        }

        /* Topbar & Header */
        #app.theme-lumiere .topbar {
            background: theme('colors.lm.secondary');
            color: theme('colors.lm.text');
            font-size: 0.75rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        #app.theme-lumiere .main-header {
            background: rgba(253, 251, 247, 0.85) !important;
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        #app.theme-lumiere .nav-link {
            font-weight: 300;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            font-size: 0.8rem;
            color: theme('colors.lm.text');
            position: relative;
        }

        #app.theme-lumiere .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            width: 0;
            height: 1px;
            background: theme('colors.lm.primary');
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        #app.theme-lumiere .nav-link:hover::after {
            width: 100%;
        }

        /* Badges */
        #app.theme-lumiere .product-badge {
            background: theme('colors.lm.surface');
            color: theme('colors.lm.text');
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        /* Footer */
        #app.theme-lumiere .store-footer {
            background-color: theme('colors.lm.surface');
            border-top: 1px solid theme('colors.lm.secondary');
            color: theme('colors.lm.textMuted');
            padding-top: 5rem;
            padding-bottom: 3rem;
        }
    </style>
@endpush

@section('header')
    <div class="theme-lumiere">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar py-2 px-4 text-center">
                <span class="inline-block mx-4">{{ $s->topbar_text_left }}</span>
                <span class="inline-block mx-4">{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header sticky top-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <!-- Mobile Menu Toggle -->
                <button class="lg:hidden p-2 -ml-2 js-mobile-menu-toggle cursor-pointer focus:outline-none" @click="window.StoreUI.open('mobileCategorySidebar')" >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 flex items-center gap-3">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 md:h-12 w-auto object-contain">
                    @else
                        <span
                            class="font-serif italic text-2xl md:text-3xl text-lm-text tracking-wide">{{ $s->store_name }}</span>
                    @endif
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-8">
                    <a href="{{ route('store.index') }}" class="nav-link">{{ 'Home' }}</a>
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(3) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center gap-4 md:gap-6">
                    <!-- Search -->
                    <button type="button" class="text-lm-text hover:text-lm-primary transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    <!-- Auth/Account -->
                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}"  class="hidden md:block text-lm-text hover:text-lm-primary transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')" 
                            class="hidden md:block text-lm-text hover:text-lm-primary transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif

                    <!-- Cart -->
                    <button type="button"
                        class="relative text-lm-text hover:text-lm-primary transition js-cart-toggle cursor-pointer"
                        aria-label="{{ 'Cart' }}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-2 -right-2 bg-lm-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full cart-count js-cart-count">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-lumiere">
        <footer class="store-footer">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="md:col-span-1">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 w-auto object-contain mb-6 opacity-80">
                    @else
                        <span class="font-serif italic text-3xl text-lm-text block mb-6">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-sm leading-relaxed mb-6">
                        {{ $s->footer_text ?? 'Fine jewelry crafted with elegance and timeless design.' }}
                    </p>
                    <div class="flex items-center gap-4">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="w-8 h-8 rounded-full bg-lm-border flex items-center justify-center text-lm-text hover:bg-lm-primary hover:text-white transition">
                                <span class="text-xs uppercase">{{ substr($soc['platform'], 0, 1) }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>

                <div>
                    <h4 class="font-serif text-lg text-lm-text mb-6">{{ 'Shop' }}</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="{{ route('store.shop') }}"
                                class="hover:text-lm-primary transition">{{ 'AllJewelry' }}</a></li>
                        @foreach(($categories ?? collect())->take(4) as $cat)
                            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                    class="hover:text-lm-primary transition">{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div>
                    <h4 class="font-serif text-lg text-lm-text mb-6">{{ 'HelpInfo' }}</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="{{ route('store.contact') }}"
                                class="hover:text-lm-primary transition">{{ 'ContactUs' }}</a></li>
                        <li><a href="#" class="hover:text-lm-primary transition">Shipping & Returns</a></li>
                        <li><a href="#" class="hover:text-lm-primary transition">Jewelry Care</a></li>
                        <li><a href="#" class="hover:text-lm-primary transition">Size Guide</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-serif text-lg text-lm-text mb-6">Explore</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="#" class="hover:text-lm-primary transition">Our Story</a></li>
                        <li><a href="#" class="hover:text-lm-primary transition">Sustainability</a></li>
                        <li><a href="#" class="hover:text-lm-primary transition">Journal</a></li>
                    </ul>
                </div>
            </div>
            <div
                class="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-lm-border text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {{ date('Y') }} {{ $s->store_name }}. All rights reserved.</p>
                <div class="flex gap-4">
                    <a href="#" class="hover:text-lm-text leading-none">Privacy Policy</a>
                    <a href="#" class="hover:text-lm-text leading-none">Terms of Service</a>
                </div>
            </div>
        </footer>
    </div>
@endsection






