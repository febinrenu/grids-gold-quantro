@extends('layouts.store')

@push('head')
<style>
  :root {
    --color-bg-base: 255 255 255 !important;
    --color-bg-surface: 250 250 250 !important;
    --color-bg-elevated: 245 245 245 !important;
    --color-fg-primary: 0 0 0 !important;
    --color-fg-secondary: 107 114 128 !important;
    --color-accent-500: 0 0 0 !important;
    --color-accent-glow: rgba(0 0 0, 0.4) !important;
  }
</style>

@push('styles')
    <link href="https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&family=Archivo+Black&display=swap"
        rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
                        display: ['"Archivo Black"', 'sans-serif'],
                    },
                    colors: {
                        mn: {
                            bg: '#FFFFFF',
                            surface: '#F4F4F4',
                            primary: '#000000',
                            text: '#000000',
                            border: '#000000',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* MINIMAL THEME OVERRIDES v2 - BRUTALIST */
        #app.theme-minimal {
            background-color: theme('colors.mn.bg');
            color: theme('colors.mn.text');
            font-family: theme('fontFamily.sans');
        }

        /* Typography */
        #app.theme-minimal h1,
        #app.theme-minimal h2,
        #app.theme-minimal h3,
        #app.theme-minimal h4,
        #app.theme-minimal h5,
        #app.theme-minimal h6 {
            font-family: theme('fontFamily.display');
            text-transform: uppercase;
            letter-spacing: -0.02em;
        }

        /* Form Controls */
        #app.theme-minimal .form-control {
            border: 3px solid theme('colors.mn.text');
            border-radius: 0;
            padding: 1rem;
            background-color: transparent;
            color: theme('colors.mn.text');
            font-family: inherit;
            font-weight: 700;
        }

        #app.theme-minimal .form-control:focus {
            box-shadow: 4px 4px 0 theme('colors.mn.text');
            outline: none;
        }

        /* Buttons */
        #app.theme-minimal .btn {
            border-radius: 0;
            font-family: theme('fontFamily.sans');
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0;
            padding: 1rem 2rem;
            transition: all 0.2s ease;
            font-size: 0.9rem;
            border: 3px solid theme('colors.mn.text');
        }

        #app.theme-minimal .btn-primary {
            background-color: theme('colors.mn.text');
            color: theme('colors.mn.bg');
        }

        #app.theme-minimal .btn-primary:hover {
            box-shadow: 6px 6px 0 theme('colors.mn.text');
            transform: translate(-2px, -2px);
            background-color: theme('colors.mn.bg');
            color: theme('colors.mn.text');
        }

        #app.theme-minimal .btn-outline {
            background-color: theme('colors.mn.bg');
            color: theme('colors.mn.text');
        }

        #app.theme-minimal .btn-outline:hover {
            box-shadow: 6px 6px 0 theme('colors.mn.text');
            transform: translate(-2px, -2px);
        }

        /* Radical Product Card Override */
        #app.theme-minimal .product-card {
            background: theme('colors.mn.bg');
            border: 3px solid theme('colors.mn.text');
            padding: 1rem;
            text-align: left;
            transition: all 0.2s ease;
            display: flex;
            flex-direction: column;
        }

        #app.theme-minimal .product-card:hover {
            box-shadow: 8px 8px 0 theme('colors.mn.text');
            transform: translate(-4px, -4px);
        }

        #app.theme-minimal .product-media {
            overflow: hidden;
            aspect-ratio: 1/1;
            background: theme('colors.mn.surface');
            position: relative;
            margin-bottom: 1.5rem;
            border: 3px solid theme('colors.mn.text');
        }

        #app.theme-minimal .product-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            transition: all 0.2s;
        }

        #app.theme-minimal .product-card:hover .product-media img {
            filter: grayscale(0%);
        }

        #app.theme-minimal .product-meta {
            font-size: 0.75rem;
            font-weight: 700;
            color: theme('colors.mn.text');
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        #app.theme-minimal .product-title {
            font-family: theme('fontFamily.display');
            font-size: 1.25rem;
            color: theme('colors.mn.text');
            margin-bottom: 0.5rem;
            line-height: 1.1;
        }

        #app.theme-minimal .price {
            font-family: theme('fontFamily.sans');
            font-size: 1.25rem;
            color: theme('colors.mn.text');
            font-weight: 700;
        }

        #app.theme-minimal .product-actions {
            margin-top: 1.5rem;
            display: flex;
            gap: 0.5rem;
        }

        #app.theme-minimal .product-action-btn {
            width: 48px;
            height: 48px;
            background: theme('colors.mn.bg');
            color: theme('colors.mn.text');
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid theme('colors.mn.text');
            transition: all 0.2s;
        }

        #app.theme-minimal .product-action-btn:hover {
            background: theme('colors.mn.text');
            color: theme('colors.mn.bg');
        }

        /* Specific styles within card */
        #app.theme-minimal article.product-card .btn {
            width: 100%;
        }

        /* Topbar & Header */
        #app.theme-minimal .topbar {
            background: theme('colors.mn.text');
            color: theme('colors.mn.bg');
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: -0.01em;
            padding: 0.5rem;
        }

        #app.theme-minimal .main-header {
            background: theme('colors.mn.bg');
            border-bottom: 4px solid theme('colors.mn.border');
            padding: 1.5rem 0;
        }

        #app.theme-minimal .nav-link {
            font-weight: 700;
            text-transform: uppercase;
            font-size: 1rem;
            color: theme('colors.mn.text');
            position: relative;
        }

        #app.theme-minimal .nav-link:hover {
            text-decoration: underline;
            text-decoration-thickness: 3px;
            text-underline-offset: 4px;
        }

        /* Badges */
        #app.theme-minimal .product-badge {
            background: theme('colors.mn.text');
            color: theme('colors.mn.bg');
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            position: absolute;
            top: -3px;
            left: -3px;
            border: 3px solid theme('colors.mn.text');
            z-index: 10;
        }

        /* Footer */
        #app.theme-minimal .store-footer {
            background-color: theme('colors.mn.bg');
            border-top: 4px solid theme('colors.mn.border');
            color: theme('colors.mn.text');
            padding-top: 4rem;
            padding-bottom: 2rem;
        }
    </style>
@endpush

@section('header')
    <div class="theme-minimal">
        @if(($s->topbar_text_left ?? null) || ($s->topbar_text_right ?? null))
            <div class="topbar flex justify-between px-6">
                <span>{{ $s->topbar_text_left }}</span>
                <span>{{ $s->topbar_text_right }}</span>
            </div>
        @endif

        <header class="main-header sticky top-0 z-50">
            <div class="px-6 mx-auto flex items-center justify-between">
                <button class="lg:hidden p-2 -ml-2 js-mobile-menu-toggle focus:outline-none text-mn-text">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <!-- Logo -->
                <a href="{{ route('store.index') }}" class="flex-shrink-0 flex items-center">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-12 w-auto object-contain">
                    @else
                        <span
                            class="font-display text-3xl md:text-5xl text-mn-text uppercase tracking-tighter">{{ $s->store_name }}</span>
                    @endif
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-8 border-l-4 border-r-4 border-mn-text px-8">
                    <a href="{{ route('store.shop') }}" class="nav-link">{{ 'Shop' }}</a>
                    @foreach(($categories ?? collect())->take(3) as $cat)
                        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="nav-link">{{ $cat->name }}</a>
                    @endforeach
                    <a href="{{ route('store.contact') }}" class="nav-link">{{ 'Contact' }}</a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center gap-6">
                    <button type="button" class="text-mn-text transition js-search-toggle" @click="window.StoreUI.open('searchModal')" >
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="square" stroke-linejoin="miter"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    @if(Auth::guard('store')->check())
                        <a href="{{ url('/online_store/account') }}"  class="text-mn-text">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="square" stroke-linejoin="miter"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </a>
                    @else
                        <button type="button" @click="window.StoreUI.open('authModal')"  class="text-mn-text">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="square" stroke-linejoin="miter"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </a>
                    @endif

                    <button type="button"
                        class="relative text-mn-text js-cart-toggle cursor-pointer bg-red-600 text-mn-bg p-2 border-2 border-mn-text">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="square" stroke-linejoin="miter"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span
                            class="absolute -top-3 -right-3 bg-mn-bg text-mn-text border-2 border-mn-text text-xs font-bold w-6 h-6 flex items-center justify-center rounded-none cart-count js-cart-count">0</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
@endsection

@section('footer')
    <div class="theme-minimal">
        <footer class="store-footer">
            <div class="px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="md:col-span-2">
                    @if($s->logo_path)
                        <img src="{{ global_asset($s->logo_path) }}" alt="{{ $s->store_name }}"
                            class="h-16 w-auto object-contain mb-8">
                    @else
                        <span class="font-display text-4xl block mb-6 leading-none uppercase">{{ $s->store_name }}</span>
                    @endif
                    <p class="text-xl font-bold leading-tight mb-8 max-w-lg">
                        {{ $s->footer_text ?? 'RAW. UNFILTERED. BOLD.' }}
                    </p>
                    <div class="flex items-center gap-4">
                        @php $socials = is_string($s->social_links) ? json_decode($s->social_links, true) : ($s->social_links ?? []); @endphp
                        @foreach($socials as $soc)
                            <a href="{{ $soc['url'] }}" target="_blank"
                                class="px-4 py-2 border-3 border-mn-text font-bold uppercase hover:bg-red-600 hover:text-mn-bg transition">
                                {{ $soc['platform'] }}
                            </a>
                        @endforeach
                    </div>
                </div>

                <div>
                    <h4 class="font-display text-2xl mb-6 border-b-4 border-mn-text pb-2 uppercase">INDEX</h4>
                    <ul class="space-y-4 font-bold text-lg uppercase">
                        <li><a href="{{ route('store.shop') }}" class="hover:underline underline-offset-4 decoration-4">ALL
                                ITEMS</a></li>
                        @foreach(($categories ?? collect())->take(4) as $cat)
                            <li><a href="{{ route('store.shop', ['category' => $cat->id]) }}"
                                    class="hover:underline underline-offset-4 decoration-4">{{ $cat->name }}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div>
                    <h4 class="font-display text-2xl mb-6 border-b-4 border-mn-text pb-2 uppercase">SYSTEM</h4>
                    <ul class="space-y-4 font-bold text-lg uppercase">
                        <li><a href="{{ route('store.contact') }}"
                                class="hover:underline underline-offset-4 decoration-4">CONTACT LOG</a></li>
                        <li><a href="#" class="hover:underline underline-offset-4 decoration-4">DATA POLICY</a></li>
                        <li><a href="#" class="hover:underline underline-offset-4 decoration-4">RETURN UNIT</a></li>
                    </ul>
                </div>
            </div>
            <div
                class="px-6 pt-6 border-t-4 border-mn-text text-sm font-bold uppercase flex flex-col md:flex-row justify-between items-center bg-mn-surface py-4">
                <p>&copy; {{ date('Y') }} {{ $s->store_name }}. ESTABLISHED IN THE METROPOLIS.</p>
            </div>
        </footer>
    </div>
@endsection






