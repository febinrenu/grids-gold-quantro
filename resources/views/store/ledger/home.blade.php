@extends('store.ledger.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-ledger" style="background:#FAF7F0; color:#1A1E2B;">

  <!-- ============ MASTHEAD — magazine cover-style split: huge italic title + editorial photo ============ -->
  <section class="l-masthead">
    <div>
      <p class="l-label mb-4">N°01 — The {{ now()->format('Y') }} Catalogue</p>
      <h1 class="l-mast-title">{{ $s->hero_title ?? 'An Auction of Fine Things' }}</h1>
      <p class="text-sm mt-5 max-w-sm" style="opacity:.7;">{{ $s->hero_subtitle ?? 'A formally catalogued selection of gold, gemstones, and heirloom pieces.' }}</p>
      <a href="{{ route('store.shop') }}" class="l-btn mt-7 w-fit">View The Catalogue</a>
    </div>
    <div style="aspect-ratio: 4/5; overflow:hidden;">
      <img src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80" alt="" style="width:100%; height:100%; object-fit:cover; filter:saturate(.85);">
    </div>
  </section>

  <!-- ============ INDEX — categories as a numbered list, not tiles ============ -->
  <section class="max-w-6xl mx-auto px-6 md:px-8 py-10 l-rule">
    <p class="l-label mb-5">Index of Lots</p>
    <div class="grid md:grid-cols-2 gap-x-12">
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="l-plate">
          <span class="l-plate-no">{{ str_pad($i + 1, 2, '0', STR_PAD_LEFT) }}</span>
          <span class="l-plate-name">{{ $cat->name }}</span>
          <span class="l-plate-leader"></span>
          <span style="opacity:.5;">→</span>
        </a>
      @empty
        <p class="text-sm" style="opacity:.6;">The catalogue is currently empty.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ LOT PRICE LIST — formal dotted-leader pricing (real products) ============ -->
  <section class="max-w-3xl mx-auto px-6 md:px-8 py-10">
    <p class="l-label mb-1">Featured Lots</p>
    <p class="l-serif" style="font-style:italic; font-size:1.9rem;">Now Cataloguing</p>
    <div class="mt-6">
      @php $currency = $s->currency_code ?? '$'; $items = ($products ?? collect())->take(8); @endphp
      @forelse($items as $i => $p)
        @php $price = (float) ($p->display_price ?? ($p->price ?? 0)); @endphp
        <div class="l-plate">
          <span class="l-plate-no">{{ str_pad($i + 1, 2, '0', STR_PAD_LEFT) }}</span>
          <span class="l-plate-name">{{ $p->name }}</span>
          <span class="l-plate-leader"></span>
          <span class="l-plate-price">{{ $currency }}{{ number_format($price, 2) }}</span>
        </div>
      @empty
        <p class="text-sm" style="opacity:.6;">No lots catalogued yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ PLATE GALLERY — real product cards for shared cart/quickview wiring ============ -->
  <section class="max-w-6xl mx-auto px-6 md:px-8 py-10 l-rule">
    <p class="l-label mb-6">Selected Plates</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      @php $more = ($products ?? collect())->slice(0, 8); @endphp
      @forelse($more as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm" style="opacity:.6;">No products available yet.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ PROVENANCE STATEMENT ============ -->
  <section class="max-w-2xl mx-auto px-6 py-16 text-center">
    <p class="l-serif" style="font-style:italic; font-size:clamp(1.4rem,3.5vw,2rem); line-height:1.4;">"{{ $s->footer_text ?? 'Every lot examined, graded, and catalogued before it ever reaches you.' }}"</p>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
