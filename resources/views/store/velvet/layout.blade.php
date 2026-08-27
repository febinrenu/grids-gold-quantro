@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 49 16 42 !important;
    --color-bg-surface: 74 25 64 !important;
    --color-bg-elevated: 101 37 88 !important;
    --color-fg-primary: 255 255 255 !important;
    --color-fg-secondary: 244 143 177 !important;
    --color-accent-500: 255 193 7 !important;
    --color-accent-glow: rgba(255 193 7, 0.4) !important;
  }
</style>

@push('styles')
    <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Jost:wght@300;400;500;600&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Jost', 'sans-serif'],
                        serif: ['"Cinzel Decorative"', 'serif'],
                    },
                    colors: {
                        vv: {
                            bg: '#3B0918', /* Deep Burgundy */
                            surface: '#4A1121',
                            surfaceHover: '#5C162A',
                            primary: '#E5C07B', /* Soft Gold */
                            primaryDark: '#C9A358',
                            accent: '#FFF0E0', /* Cream */
                            text: '#FFF0E0',
                            textMuted: '#EBCBCC',
                            border: '#5C162A',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* VELVET THEME OVERRIDES v2 - ROYAL PLUSH */
        #app.theme-velvet {
            background-color: theme('colors.vv.bg');
            color: theme('colors.vv.text');
            font-family: theme('fontFamily.sans');
        }

        /* Typography */
        #app.theme-velvet h1,
        #app.theme-velvet h2,
        #app.theme-velvet h3,
        #app.theme-velvet h4,
        #app.theme-velvet h5,
        #app.theme-velvet h6 {
            font-family: theme('fontFamily.serif');
            font-weight: 400;
        }

        /* Form Controls */
        #app.theme-velvet .form-control {
            border: 1px solid theme('colors.vv.border');
            border-radius: 9999px;
            /* Fully rounded */
            padding: 0.8rem 1.5rem;
            background-color: theme('colors.vv.surface');
            color: theme('colors.vv.text');
            font-family: inherit;
        }

        #app.theme-velvet .form-control:focus {
            box-shadow: 0 0 10px rgba(229, 192, 123, 0.2);
            border-color: theme('colors.vv.primary');
            outline: none;
        }

        /* Buttons */
        #app.theme-velvet .btn {
            border-radius: 9999px;
            /* Pill */
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            padding: 0.8rem 2.5rem;
            transition: all 0.4s ease;
            font-size: 0.8rem;
        }

        #app.theme-velvet .btn-primary {
            background-color: theme('colors.vv.primary');
            color: theme('colors.vv.bg');
            border: 1px solid theme('colors.vv.primary');
        }

        #app.theme-velvet .btn-primary:hover {
            background-color: theme('colors.vv.accent');
            color: theme('colors.vv.bg');
            border-color: theme('colors.vv.accent');
            box-shadow: 0 8px 25px rgba(229, 192, 123, 0.3);
            transform: translateY(-2px);
        }

        #app.theme-velvet .btn-outline {
            background-color: transparent;
            color: theme('colors.vv.primary');
            border: 1px solid theme('colors.vv.primary');
        }

        #app.theme-velvet .btn-outline:hover {
            background-color: theme('colors.vv.primary');
            color: theme('colors.vv.bg');
            transform: translateY(-2px);
        }

        /* Radical Product Card Override */
        #app.theme-velvet .product-card {
            background: theme('colors.vv.surface');
            border: 1px solid theme('colors.vv.border');
            border-radius: 20px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.4s ease;
        }

        #app.theme-velvet .product-card:hover {
            border-color: theme('colors.vv.primary');
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        #app.theme-velvet .product-media {
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 4/5;
            background: theme('colors.vv.bg');
            position: relative;
            margin-bottom: 1.5rem;
        }

        #app.theme-velvet .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.85;
            transition: all 0.6s ease;
        }

        #app.theme-velvet .product-card:hover .product-media img {
            opacity: 1;
            transform: scale(1.05);
        }

        #app.theme-velvet .product-meta {
            font-size: 0.75rem;
            color: theme('colors.vv.primaryDark');
            text-transform: uppercase;
            letter-spacing: 0.15em;
            margin-bottom: 0.75rem;
        }

        #app.theme-velvet .product-title {
            font-family: theme('fontFamily.serif');
            font-size: 1.25rem;
            color: theme('colors.vv.text');
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }

        #app.theme-velvet .price {
            font-family: theme('fontFamily.sans');
            font-size: 1rem;
            color: theme('colors.vv.primary');
            font-weight: 500;
        }

        #app.theme-velvet .product-actions {
            position: absolute;
            bottom: 0.75rem;
            left: 50%;
            transform: translate(-50%, 10px);
            opacity: 0;
            transition: all 0.4s ease;
            display: flex;
            gap: 0.5rem;
            background: theme('colors.vv.surfaceHover');
            padding: 0.5rem;
            border-radius: 9999px;
            border: 1px solid theme('colors.vv.primaryDark');
        }

        #app.theme-velvet .product-card:hover .product-actions {
            opacity: 1;
            transform: translate(-50%, 0);
        }

        #app.theme-velvet .product-action-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: transparent;
            color: theme('colors.vv.primary');
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }

        #app.theme-velvet .product-action-btn:hover {
            background: theme('colors.vv.primary');
            color: theme('colors.vv.bg');
        }

        /* Specific Add to Cart buttons for cards */
        #app.theme-velvet article.product-card .btn {
            background: transparent;
            border: 1px solid theme('colors.vv.primary');
            color: theme('colors.vv.primary');
            width: 100%;
        }

        #app.theme-velvet article.product-card .btn:hover {
            background: theme('colors.vv.primary');
            color: theme('colors.vv.bg');
        }

        /* Topbar & Header */
        #app.theme-velvet .topbar {
            background: theme('colors.vv.surfaceHover');
            color: theme('colors.vv.primary');
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        #app.theme-velvet .main-header {
            background: theme('colors.vv.bg');
            border-bottom: 1px solid theme('colors.vv.border');
        }

        #app.theme-velvet .nav-link {
            font-weight: 400;
            text-transform: uppercase;
            font-size: 0.85rem;
            color: theme('colors.vv.accent');
            transition: color 0.3s;
            letter-spacing: 0.15em;
        }

        #app.theme-velvet .nav-link:hover {
            color: theme('colors.vv.primary');
        }

        /* Badges */
        #app.theme-velvet .product-badge {
            background: theme('colors.vv.primary');
            color: theme('colors.vv.bg');
            padding: 0.4rem 1.25rem;
            font-size: 0.65rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            position: absolute;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            border-radius: 9999px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Footer */
        #app.theme-velvet .store-footer {
            background-color: theme('colors.vv.surface');
            border-top: 1px solid theme('colors.vv.border');
            color: theme('colors.vv.textMuted');
            padding-top: 6rem;
            padding-bottom: 4rem;
            text-align: center;
        }
    </style>
@endpush

@section('header')
    <div class="theme-velvet">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar py-2 px-6 flex justify-between items-center text-center">
                <span class="flex-1">{{ $s->topbar_text_left }}</span>
                <span class="hidden md:inline text-vv-border">|</span>
                <span class="flex-1">{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header py-6 px-6">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                <div class="w-full md:w-auto flex justify-between items-center md:hidden">
                    <button class="p-2 -ml-2 js-mobile-menu-toggle focus:outline-none text-vv-primary">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <button type="button" class="relative text-vv-primary js-cart-toggle cursor-pointer">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-2 -right-2 bg-vv-accent text-vv-bg text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full cart-count js-cart-count">0</span>
                    </button>
                </div>

                <!-- Descriptive Nav Left -->
                <nav class="hidden md:flex items-center gap-10 flex-1 justify-end pr-10 border-r border-vv-border">
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(2) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                </nav>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 text-center px-8">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-16 w-auto object-contain mx-auto">
                    @else
                        <span class="font-serif text-4xl lg:text-5xl text-vv-primary font-bold">{{ $s->store_name }}</span>
                    @endif
                </a>

                <!-- Functional Nav Right -->
                <div class="hidden md:flex items-center gap-8 flex-1 justify-start pl-10 border-l border-vv-border">
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>
                    <button type="button" class="text-vv-accent hover:text-vv-primary transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}"  class="text-vv-accent hover:text-vv-primary transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')"  class="text-vv-accent hover:text-vv-primary transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif
                    <button type="button"
                        class="relative text-vv-accent hover:text-vv-primary transition js-cart-toggle cursor-pointer">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-2 -right-2 bg-vv-primary text-vv-bg text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full cart-count js-cart-count">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-velvet">
        <footer class="store-footer">
            <div class="max-w-4xl mx-auto px-6">
                @if($s->logo_path)
                    <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                        class="h-12 w-auto object-contain mb-8 mx-auto filter brightness-0 invert opacity-80">
                @else
                    <span class="font-serif text-3xl text-vv-primary block mb-8">{{ $s->store_name }}</span>
                @endif

                <p class="text-lg leading-relaxed mb-12 max-w-2xl mx-auto text-vv-textMuted/80 font-light">
                    {{ $s->footer_text ?? 'Exquisite jewelry for the most discerning ladies and gentlemen.' }}
                </p>

                <div
                    class="flex justify-center flex-wrap gap-8 md:gap-16 mb-12 uppercase tracking-widest text-xs font-medium">
                    <a href="{{ route('store.shop') }}"
                        class="hover:text-vv-primary transition">{{ 'Shop' }}</a>
                    <a href="{{ route('store.contact') }}" class="hover:text-vv-primary transition">Boutiques</a>
                    <a href="#" class="hover:text-vv-primary transition">Private Client</a>
                    <a href="#" class="hover:text-vv-primary transition">Legal</a>
                </div>

                <div class="flex items-center justify-center gap-6 mb-12">
                    @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                    @foreach($socials as $soc)
                        <a href="{{ $soc['url'] }}" target="_blank"
                            class="w-10 h-10 rounded-full border border-vv-border flex items-center justify-center text-vv-textMuted hover:border-vv-primary hover:text-vv-primary transition">
                            <span class="text-xs font-bold uppercase">{{ substr($soc['platform'], 0, 1) }}</span>
                        </a>
                    @endforeach
                </div>

                <div class="pt-8 border-t border-vv-border/50 text-xs text-vv-textMuted/50 tracking-widest uppercase">
                    <p>&copy; {{ date('Y') }} {{ $s->store_name }}. The epitome of grace.</p>
                </div>
            </div>
        </footer>
    </div>
@endsection






