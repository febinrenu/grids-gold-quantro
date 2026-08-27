@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 244 236 224 !important;
    --color-bg-surface: 250 246 240 !important;
    --color-bg-elevated: 239 228 211 !important;
    --color-fg-primary: 62 39 35 !important;
    --color-fg-secondary: 93 64 55 !important;
    --color-accent-500: 139 90 43 !important;
    --color-accent-glow: rgba(139 90 43, 0.4) !important;
  }
</style>

@push('styles')
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Lora', 'serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    },
                    colors: {
                        vt: {
                            bg: '#F4F1EA', /* Sepia/cream */
                            surface: '#FCFAF5',
                            primary: '#8B5A2B', /* Classic warm brown/gold */
                            secondary: '#D2B48C', /* Tan */
                            text: '#2C2519', /* Dark brown-black */
                            textMuted: '#6B5E4A',
                            border: '#D5C8B5',
                            accent: '#660000', /* Deep red */
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* VINTAGE THEME OVERRIDES v2 */
        #app.theme-vintage {
            background-color: theme('colors.vt.bg');
            color: theme('colors.vt.text');
            font-family: theme('fontFamily.sans');
            background-image: url('https://www.transparenttextures.com/patterns/old-mathematics.png');
        }

        /* Form Controls */
        #app.theme-vintage .form-control {
            border: 1px solid theme('colors.vt.border');
            border-radius: 2px;
            padding: 0.75rem 1rem;
            background-color: theme('colors.vt.surface');
            color: theme('colors.vt.text');
            font-family: inherit;
        }

        #app.theme-vintage .form-control:focus {
            box-shadow: none;
            border-color: theme('colors.vt.primary');
        }

        /* Buttons */
        #app.theme-vintage .btn {
            border-radius: 2px;
            font-family: theme('fontFamily.serif');
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 0.75rem 2rem;
            transition: all 0.3s ease;
            font-size: 0.8rem;
            border: 1px solid transparent;
        }

        #app.theme-vintage .btn-primary {
            background-color: theme('colors.vt.text');
            color: theme('colors.vt.surface');
            border-color: theme('colors.vt.text');
        }

        #app.theme-vintage .btn-primary:hover {
            background-color: theme('colors.vt.primary');
            border-color: theme('colors.vt.primary');
            color: white;
        }

        #app.theme-vintage .btn-outline {
            background-color: transparent;
            color: theme('colors.vt.text');
            border: 1px solid theme('colors.vt.text');
        }

        #app.theme-vintage .btn-outline:hover {
            border-color: theme('colors.vt.primary');
            color: theme('colors.vt.primary');
            background: transparent;
        }

        /* Radical Product Card Override */
        #app.theme-vintage .product-card {
            background: theme('colors.vt.surface');
            border: 4px double theme('colors.vt.border');
            padding: 1rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
        }

        #app.theme-vintage .product-card:hover {
            border-color: theme('colors.vt.primary');
        }

        #app.theme-vintage .product-media {
            overflow: hidden;
            aspect-ratio: 4/5;
            background: theme('colors.vt.bg');
            margin-bottom: 1.25rem;
            border: 1px solid theme('colors.vt.border');
            position: relative;
        }

        #app.theme-vintage .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: sepia(30%) contrast(110%);
            transition: all 0.7s ease;
        }

        #app.theme-vintage .product-card:hover .product-media img {
            transform: scale(1.05);
            filter: sepia(0%) contrast(100%);
        }

        #app.theme-vintage .product-meta {
            font-size: 0.7rem;
            color: theme('colors.vt.textMuted');
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.5rem;
            font-style: italic;
        }

        #app.theme-vintage .product-title {
            font-family: theme('fontFamily.serif');
            font-size: 1.2rem;
            color: theme('colors.vt.text');
            margin-bottom: 0.5rem;
        }

        #app.theme-vintage .price {
            font-family: theme('fontFamily.sans');
            font-size: 1rem;
            color: theme('colors.vt.accent');
            font-weight: 500;
        }

        #app.theme-vintage .product-actions {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all 0.3s ease;
            display: flex;
            gap: 0.5rem;
        }

        #app.theme-vintage .product-card:hover .product-actions {
            opacity: 1;
        }

        #app.theme-vintage .product-action-btn {
            width: 40px;
            height: 40px;
            background: theme('colors.vt.surface');
            color: theme('colors.vt.text');
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid theme('colors.vt.text');
            transition: all 0.2s;
            border-radius: 50%;
        }

        #app.theme-vintage .product-action-btn:hover {
            background: theme('colors.vt.text');
            color: theme('colors.vt.surface');
        }

        /* Specific Add to Cart buttons for cards */
        #app.theme-vintage article.product-card .btn {
            background: transparent;
            border: 1px solid theme('colors.vt.border');
            color: theme('colors.vt.text');
            width: 100%;
        }

        #app.theme-vintage article.product-card .btn:hover {
            background: theme('colors.vt.text');
            border-color: theme('colors.vt.text');
            color: theme('colors.vt.surface');
        }

        /* Topbar & Header */
        #app.theme-vintage .topbar {
            background: theme('colors.vt.text');
            color: theme('colors.vt.surface');
            font-size: 0.75rem;
            font-style: italic;
            border-bottom: 3px double theme('colors.vt.primary');
        }

        #app.theme-vintage .main-header {
            background: theme('colors.vt.surface');
            border-bottom: 1px solid theme('colors.vt.border');
            position: relative;
        }

        #app.theme-vintage .main-header::after {
            content: '';
            position: absolute;
            bottom: 3px;
            left: 0;
            right: 0;
            height: 1px;
            background: theme('colors.vt.border');
        }

        #app.theme-vintage .nav-link {
            font-family: theme('fontFamily.serif');
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            color: theme('colors.vt.text');
            transition: color 0.3s;
        }

        #app.theme-vintage .nav-link:hover {
            color: theme('colors.vt.primary');
        }

        /* Badges */
        #app.theme-vintage .product-badge {
            background: theme('colors.vt.accent');
            color: white;
            padding: 0.25rem 0.75rem;
            font-size: 0.65rem;
            font-family: theme('fontFamily.serif');
            text-transform: uppercase;
            letter-spacing: 0.1em;
            position: absolute;
            top: 0.5rem;
            left: -0.5rem;
            z-index: 10;
            box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
        }

        /* Footer */
        #app.theme-vintage .store-footer {
            background-color: theme('colors.vt.text');
            color: theme('colors.vt.surface');
            padding-top: 5rem;
            padding-bottom: 3rem;
            border-top: 5px double theme('colors.vt.border');
            background-image: url('https://www.transparenttextures.com/patterns/old-mathematics.png');
        }
    </style>
@endpush

@section('header')
    <div class="theme-vintage">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar py-2 px-4 text-center mx-auto flex flex-col md:flex-row justify-center md:gap-12">
                <span>{{ $s->topbar_text_left }}</span>
                <span class="hidden md:inline">|</span>
                <span>{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header py-6 px-4 sm:px-8">
            <div class="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 relative">

                <!-- Mobile Toggle / Actions Layer absolute to sides -->
                <div class="w-full flex justify-between lg:hidden absolute top-1/2 -translate-y-1/2 px-4">
                    <button class="p-2 -ml-2 js-mobile-menu-toggle text-vt-text focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <button type="button" class="relative text-vt-text js-cart-toggle cursor-pointer">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-1 -right-1 bg-vt-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full cart-count js-cart-count">0</span>
                    </button>
                </div>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="text-center">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-16 w-auto object-contain mx-auto">
                    @else
                        <span class="font-serif text-4xl md:text-5xl text-vt-text">{{ $s->store_name }}</span>
                        <span class="block text-vt-textMuted text-xs uppercase tracking-[0.3em] mt-2">Established 1892</span>
                    @endif
                </a>

                <!-- Desktop Nav w/ Actions inline -->
                <nav
                    class="hidden lg:flex items-center gap-12 pt-4 border-t border-vt-border w-full justify-center relative">
                    <a href="{{ route('store.index') }}" class="nav-link">{{ 'Home' }}</a>
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(2) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>

                    <div class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-6">
                        <button type="button" class="text-vt-text hover:text-vt-primary transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        @if(Auth::guard('store')->check())
                            <a href="{{ url('/online_store/account') }}"  class="text-vt-text hover:text-vt-primary transition">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </a>
                        @else
                            <button type="button" @click="window.StoreUI.open('authModal')"  class="text-vt-text hover:text-vt-primary transition">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                    </path>
                                </svg>
                            </a>
                        @endif
                        <button type="button"
                            class="relative text-vt-text hover:text-vt-primary transition js-cart-toggle cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                            <span
                                class="absolute -top-2 -right-2 bg-vt-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full cart-count js-cart-count">0</span>
                        </button>
                    </div>
                </nav>

            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-vintage">
        <footer class="store-footer">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                <div class="md:col-span-5 border-b md:border-b-0 md:border-r border-vt-border/30 pb-10 md:pb-0 md:pr-10">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-12 w-auto object-contain mb-6 filter brightness-0 invert">
                    @else
                        <span class="font-serif text-3xl block mb-4">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-sm leading-relaxed mb-8 text-vt-border font-serif italic">
                        {{ $s->footer_text ?? 'Purveyors of fine antiquities and handcrafted jewels. Continuing a legacy of distinction for over a century.' }}
                    </p>
                    <div class="flex items-center gap-4">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="w-8 h-8 flex items-center justify-center text-vt-surface hover:text-vt-secondary transition border border-vt-surface rounded-full">
                                <span class="text-[10px] font-bold uppercase">{{ substr($soc['platform'], 0, 1) }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>

                <div class="md:col-span-4 pl-0 md:pl-10">
                    <h4 class="font-serif text-xl border-b border-vt-border/30 pb-4 mb-6">Collections</h4>
                    <ul class="space-y-3 font-serif italic">
                        <li><a href="{{ route('store.shop') }}"
                                class="hover:text-vt-secondary transition">{{ 'Shop' }}</a></li>
                        @foreach(($categories ?? collect())->take(4) as $cat)
                            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                    class="hover:text-vt-secondary transition">{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div class="md:col-span-3">
                    <h4 class="font-serif text-xl border-b border-vt-border/30 pb-4 mb-6">Dispatch</h4>
                    <ul class="space-y-3 font-serif italic">
                        <li><a href="{{ route('store.contact') }}" class="hover:text-vt-secondary transition">Telegram &
                                Post</a></li>
                        <li><a href="#" class="hover:text-vt-secondary transition">Carriage Details</a></li>
                        <li><a href="#" class="hover:text-vt-secondary transition">Our Registry</a></li>
                    </ul>
                </div>
            </div>
            <div
                class="max-w-7xl mx-auto px-6 pt-8 border-t border-vt-border/30 text-xs text-center flex flex-col md:flex-row justify-between items-center text-vt-border/70 font-serif">
                <p>&copy; {{ date('Y') }} {{ $s->store_name }}. Registered Mark.</p>
                <div class="flex gap-4 mt-4 md:mt-0">
                    <a href="#" class="hover:text-vt-surface">Charter</a>
                    <a href="#" class="hover:text-vt-surface">Agreement</a>
                </div>
            </div>
        </footer>
    </div>
@endsection






