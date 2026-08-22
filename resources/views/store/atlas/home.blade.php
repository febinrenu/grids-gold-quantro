@extends('store.atlas.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-atlas a-offset" style="background:#EDE8E0; color:#262421;">

  <!-- ============ FEATURE ROW — text + image side-by-side, not a full-bleed hero ============ -->
  <section class="px-6 md:px-12 pt-14 pb-10">
    <div class="a-feature-row max-w-5xl">
      <div>
        <p class="a-label mb-4">Collection {{ now()->format('Y') }}</p>
        <h1 style="font-family:'Sora',sans-serif; font-weight:700; font-size:clamp(2.2rem,5vw,3.6rem); line-height:1.08; letter-spacing:-.01em;">{{ $s->hero_title ?? 'Built With Intention' }}</h1>
        <p class="text-sm mt-5 max-w-sm" style="opacity:.7;">{{ $s->hero_subtitle ?? 'Every piece considered from material to finish. No shortcuts, no filler.' }}</p>
        <div class="flex flex-wrap gap-3 mt-7">
          <a href="{{ route('store.shop') }}" class="a-btn">Browse Collection</a>
          <a href="{{ route('store.contact') }}" class="a-btn a-btn-outline">Book a Fitting</a>
        </div>
      </div>
      <div style="border-radius:4px; overflow:hidden; aspect-ratio: 4/5;">
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" alt="" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </section>

  <!-- ============ CATEGORY INDEX — simple text list, not image tiles ============ -->
  <section class="px-6 md:px-12 py-10" style="border-top:1px solid #DDD5C4;">
    <p class="a-label mb-5">Departments</p>
    <div class="grid md:grid-cols-2 gap-x-10 max-w-5xl">
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="flex items-center justify-between py-3.5" style="border-bottom:1px solid #DDD5C4;">
          <span style="font-family:'Sora',sans-serif; font-weight:600; font-size:1.1rem;">{{ $cat->name }}</span>
          <span style="opacity:.5;">→</span>
        </a>
      @empty
        <p class="text-sm" style="opacity:.6;">No categories yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product cards ============ -->
  <section class="px-6 md:px-12 py-10" style="border-top:1px solid #DDD5C4;">
    <div class="flex items-end justify-between mb-6 max-w-6xl">
      <p style="font-family:'Sora',sans-serif; font-weight:700; font-size:1.6rem;">Featured Pieces</p>
      <a href="{{ route('store.shop') }}" class="a-label" style="text-decoration:underline;">View All</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
      @php $currency = $s->currency_code ?? '$'; $items = ($products ?? collect())->take(8); @endphp
      @forelse($items as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm" style="opacity:.6;">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ SECOND FEATURE ROW — reversed, different product spotlighted ============ -->
  <section class="px-6 md:px-12 py-14" style="border-top:1px solid #DDD5C4;">
    <div class="a-feature-row max-w-5xl" style="grid-template-columns: .9fr 1.1fr;">
      <div style="border-radius:4px; overflow:hidden; aspect-ratio: 4/5; order:2;" class="md:order-1">
        <img src="https://images.unsplash.com/photo-1611591437281-460914d6cd52?auto=format&fit=crop&w=900&q=80" alt="" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="order-1 md:order-2">
        <p class="a-label mb-4">The Process</p>
        <p style="font-family:'Sora',sans-serif; font-weight:700; font-size:clamp(1.6rem,3.5vw,2.4rem); line-height:1.15;">{{ $s->footer_text ?? 'Sourced Responsibly. Finished By Hand.' }}</p>
        <p class="text-sm mt-4 max-w-sm" style="opacity:.7;">Every piece passes through the same small team, start to finish.</p>
        <a href="{{ route('store.contact') }}" class="a-btn a-btn-outline mt-6 w-fit">Learn More</a>
      </div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
