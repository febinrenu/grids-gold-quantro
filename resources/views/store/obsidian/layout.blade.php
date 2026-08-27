@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 10 10 10 !important;
    --color-bg-surface: 18 18 18 !important;
    --color-bg-elevated: 26 26 26 !important;
    --color-fg-primary: 245 245 245 !important;
    --color-fg-secondary: 179 179 179 !important;
    --color-accent-500: 176 141 91 !important;
    --color-accent-glow: rgba(176 141 91, 0.4) !important;
  }
</style>

@push('styles')
    <link
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;1,6..96,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['"Bodoni Moda"', 'serif'],
                    },
                    colors: {
                        ob: {
                            bg: '#0A0A0A',
                            surface: '#121212',
                            surfaceHover: '#1A1A1A',
                            primary: '#D4AF37', /* True Gold */
                            primaryDark: '#B3902E',
                            accent: '#F9F1E7',
                            text: '#FFFFFF',
                            textMuted: '#9CA3AF',
                            border: '#27272A',
                            darkRed: '#4A0404'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* OBSIDIAN THEME OVERRIDES v2 */
        #app.theme-obsidian {
            background-color: theme('colors.ob.bg');
            color: theme('colors.ob.text');
            font-family: theme('fontFamily.sans');
        }

        /* Typography */
        #app.theme-obsidian h1,
        #app.theme-obsidian h2,
        #app.theme-obsidian h3,
        #app.theme-obsidian h4,
        #app.theme-obsidian h5,
        #app.theme-obsidian h6 {
            font-family: theme('fontFamily.serif');
            font-weight: 400;
        }

        /* Form Controls */
        #app.theme-obsidian .form-control {
            border: 1px solid theme('colors.ob.border');
            border-radius: 0;
            padding: 0.75rem 1rem;
            background-color: theme('colors.ob.bg');
            color: theme('colors.ob.text');
            font-family: inherit;
        }

        #app.theme-obsidian .form-control:focus {
            box-shadow: none;
            border-color: theme('colors.ob.primary');
        }

        /* Buttons */
        #app.theme-obsidian .btn {
            border-radius: 0;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            padding: 0.875rem 2.5rem;
            transition: all 0.4s ease;
            font-size: 0.7rem;
            position: relative;
            overflow: hidden;
        }

        #app.theme-obsidian .btn-primary {
            background-color: theme('colors.ob.primary');
            color: theme('colors.ob.bg');
            border: 1px solid theme('colors.ob.primary');
        }

        #app.theme-obsidian .btn-primary:hover {
            background-color: transparent;
            color: theme('colors.ob.primary');
        }

        #app.theme-obsidian .btn-outline {
            background-color: transparent;
            color: theme('colors.ob.text');
            border: 1px solid theme('colors.ob.border');
        }

        #app.theme-obsidian .btn-outline:hover {
            border-color: theme('colors.ob.primary');
            color: theme('colors.ob.primary');
        }

        /* Radical Product Card Override */
        #app.theme-obsidian .product-card {
            background: transparent;
            border: none;
            padding: 0;
            text-align: left;
        }

        #app.theme-obsidian .product-media {
            border-radius: 0;
            overflow: hidden;
            aspect-ratio: 1/1;
            background: theme('colors.ob.surface');
            position: relative;
            margin-bottom: 1rem;
            border: 1px solid theme('colors.ob.border');
        }

        #app.theme-obsidian .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.8;
            filter: grayscale(20%);
            transition: all 0.5s ease;
        }

        #app.theme-obsidian .product-card:hover .product-media img {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.03);
        }

        #app.theme-obsidian .product-meta {
            font-size: 0.65rem;
            color: theme('colors.ob.primary');
            text-transform: uppercase;
            letter-spacing: 0.15em;
            margin-bottom: 0.5rem;
        }

        #app.theme-obsidian .product-title {
            font-family: theme('fontFamily.serif');
            font-size: 1.1rem;
            color: theme('colors.ob.text');
            margin-bottom: 0.5rem;
            opacity: 0.9;
        }

        #app.theme-obsidian .product-card:hover .product-title {
            color: theme('colors.ob.primary');
        }

        #app.theme-obsidian .price {
            font-family: theme('fontFamily.sans');
            font-size: 0.85rem;
            color: theme('colors.ob.text');
            font-weight: 400;
        }

        #app.theme-obsidian .product-actions {
            position: absolute;
            top: 1rem;
            right: 1rem;
            opacity: 0;
            transition: all 0.3s ease;
        }

        #app.theme-obsidian .product-card:hover .product-actions {
            opacity: 1;
        }

        #app.theme-obsidian .product-action-btn {
            width: 40px;
            height: 40px;
            background: theme('colors.ob.bg');
            color: theme('colors.ob.text');
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid theme('colors.ob.border');
            transition: all 0.2s;
        }

        #app.theme-obsidian .product-action-btn:hover {
            background: theme('colors.ob.primary');
            color: theme('colors.ob.bg');
            border-color: theme('colors.ob.primary');
        }

        /* Topbar & Header */
        #app.theme-obsidian .topbar {
            background: theme('colors.ob.surface');
            color: theme('colors.ob.primary');
            font-size: 0.65rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            border-bottom: 1px solid theme('colors.ob.border');
        }

        #app.theme-obsidian .main-header {
            background: theme('colors.ob.bg');
            border-bottom: 1px solid theme('colors.ob.border');
        }

        #app.theme-obsidian .nav-link {
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-size: 0.75rem;
            color: theme('colors.ob.text');
            transition: color 0.3s;
        }

        #app.theme-obsidian .nav-link:hover {
            color: theme('colors.ob.primary');
        }

        /* Badges */
        #app.theme-obsidian .product-badge {
            background: theme('colors.ob.primary');
            color: theme('colors.ob.bg');
            border-radius: 0;
            padding: 0.4rem 1rem;
            font-size: 0.65rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
        }

        /* Footer */
        #app.theme-obsidian .store-footer {
            background-color: theme('colors.ob.surface');
            border-top: 1px solid theme('colors.ob.border');
            color: theme('colors.ob.textMuted');
            padding-top: 5rem;
            padding-bottom: 3rem;
        }

        /* Specific Add to Cart buttons for cards */
        #app.theme-obsidian article.product-card .btn {
            background-color: transparent !important;
            border: 1px solid theme('colors.ob.border');
            color: text-white;
        }

        #app.theme-obsidian article.product-card .btn:hover {
            background-color: theme('colors.ob.surfaceHover') !important;
            border-color: theme('colors.ob.primary');
            color: theme('colors.ob.primary');
        }
    </style>
@endpush

@section('header')
    <div class="theme-obsidian">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar py-3 px-4 text-center flex justify-between max-w-screen-2xl mx-auto">
                <span>{{ $s->topbar_text_left }}</span>
                <span>{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header sticky top-0 z-50 py-5 px-6 sm:px-12">
            <div class="max-w-screen-2xl mx-auto flex items-center justify-between">
                <button class="lg:hidden p-2 -ml-2 js-mobile-menu-toggle focus:outline-none text-ob-text">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>

                <!-- Desktop Nav (Left) -->
                <nav class="hidden lg:flex items-center gap-10 flex-1">
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(2) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                </nav>

                <!-- Logo (Center) -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 flex items-center justify-center flex-1">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 md:h-12 w-auto object-contain">
                    @else
                        <span
                            class="font-serif text-2xl md:text-3xl text-ob-text tracking-widest uppercase">{{ $s->store_name }}</span>
                    @endif
                </a>

                <!-- Actions (Right) -->
                <div class="flex items-center justify-end gap-6 md:gap-8 flex-1">
                    <a href="{{ route('store.contact') }}" class="hidden lg:block nav-link">{{ 'Contact' }}</a>

                    <button type="button" class="text-ob-text hover:text-ob-primary transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}"  class="hidden md:block text-ob-text hover:text-ob-primary transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')" 
                            class="hidden md:block text-ob-text hover:text-ob-primary transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif

                    <button type="button"
                        class="relative text-ob-text hover:text-ob-primary transition js-cart-toggle cursor-pointer"
                        aria-label="{{ 'Cart' }}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-[5px] -right-[10px] text-ob-primary text-[10px] font-bold cart-count js-cart-count">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-obsidian">
        <footer class="store-footer">
            <div class="max-w-screen-2xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                <div class="md:col-span-5">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-10 w-auto object-contain mb-8">
                    @else
                        <span
                            class="font-serif text-3xl text-ob-text block mb-8 tracking-widest uppercase">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-sm leading-relaxed mb-8 max-w-md">
                        {{ $s->footer_text ?? 'The pinnacle of luxury. We curate the finest stones and metals for a clientele that demands nothing but the extraordinary.' }}
                    </p>
                    <div class="flex items-center gap-6">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="text-ob-text hover:text-ob-primary transition tracking-widest uppercase text-xs">
                                {{ $soc['platform'] }}
                            </a>
                        @endforeach
                    </div>
                </div>

                <div class="md:col-span-2 md:col-start-8">
                    <h4 class="font-serif text-4xl text-ob-primary italic mb-6">I.</h4>
                    <ul class="space-y-4 text-sm font-light">
                        <li><a href="{{ route('store.shop') }}"
                                class="hover:text-ob-text transition tracking-wide uppercase">{{ 'Shop' }}</a>
                        </li>
                        @foreach(($categories ?? collect())->take(4) as $cat)
                            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                    class="hover:text-ob-text transition tracking-wide uppercase">{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div class="md:col-span-2">
                    <h4 class="font-serif text-4xl text-ob-primary italic mb-6">II.</h4>
                    <ul class="space-y-4 text-sm font-light">
                        <li><a href="{{ route('store.contact') }}"
                                class="hover:text-ob-text transition tracking-wide uppercase">{{ 'Contact' }}</a>
                        </li>
                        <li><a href="#" class="hover:text-ob-text transition tracking-wide uppercase">Private Service</a>
                        </li>
                        <li><a href="#" class="hover:text-ob-text transition tracking-wide uppercase">Appointments</a></li>
                        <li><a href="#" class="hover:text-ob-text transition tracking-wide uppercase">Bespoke</a></li>
                    </ul>
                </div>
            </div>
            <div
                class="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-8 text-xs font-light text-ob-border flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {{ date('Y') }} {{ $s->store_name }}. EST 2024.</p>
                <div class="flex gap-6 uppercase tracking-widest">
                    <a href="#" class="hover:text-ob-text transition">Privacy</a>
                    <a href="#" class="hover:text-ob-text transition">Terms</a>
                </div>
            </div>
        </footer>
    </div>
@endsection






