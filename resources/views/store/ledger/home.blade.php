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

  <!-- ============ INDEX — categories as a numbered list with small plates, not tiles ============ -->
  <section class="max-w-6xl mx-auto px-6 md:px-8 py-10 l-rule">
    <p class="l-label mb-5">Index of Lots</p>
    <div class="grid md:grid-cols-2 gap-x-12">
      @php
        $catImgs = ['1611652022419-a9419f74343d','1605100804763-247f67b3557e','1599643478518-a784e5dc4c8f','1616401784845-180882ba9ba8','1587467512961-120760940315','1573408301185-9146fe634ad0','1620656798579-1984d9e87df7','1611591437281-460914d6cd52'];
      @endphp
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="l-plate">
          <span class="l-plate-no">{{ str_pad($i + 1, 2, '0', STR_PAD_LEFT) }}</span>
          <span style="width:2.6rem; height:2.6rem; border-radius:2px; overflow:hidden; flex-shrink:0;">
            <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-'.$catImgs[$i % count($catImgs)].'?auto=format&fit=crop&w=150&q=70' }}" alt="{{ $cat->name }}" style="width:100%; height:100%; object-fit:cover; filter:saturate(.85);">
          </span>
          <span class="l-plate-name">{{ $cat->name }}</span>
          <span class="l-plate-leader"></span>
          <span style="opacity:.5;">→</span>
        </a>
      @empty
        <p class="text-sm" style="opacity:.6;">The catalogue is currently empty.</p>
      @endforelse
    </div>
  </section>

  <!-- ============ PLATES OF NOTE — editorial gallery, 3 images ============ -->
  <section class="max-w-6xl mx-auto px-6 md:px-8 py-10 l-rule">
    <p class="l-label mb-1">Plates of Note</p>
    <p class="l-serif" style="font-style:italic; font-size:1.7rem; margin-bottom:1.5rem;">From the Archive</p>
    <div class="grid md:grid-cols-3 gap-4">
      <div style="overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=700&q=80" alt="Provenance detail" style="width:100%; height:100%; object-fit:cover; filter:saturate(.85);">
      </div>
      <div style="overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=700&q=80" alt="Gold detail" style="width:100%; height:100%; object-fit:cover; filter:saturate(.85);">
      </div>
      <div style="overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1611591437281-460914d6cd52?auto=format&fit=crop&w=700&q=80" alt="Workshop detail" style="width:100%; height:100%; object-fit:cover; filter:saturate(.85);">
      </div>
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

  <!-- ============ PROVENANCE STATEMENT — with portrait image ============ -->
  <section class="max-w-4xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-[auto_1fr] gap-6 items-center">
      <div style="width:7rem; height:7rem; border-radius:50%; overflow:hidden; flex-shrink:0; margin:0 auto;">
        <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=200&q=80" alt="" style="width:100%; height:100%; object-fit:cover; filter:saturate(.85);">
      </div>
      <p class="l-serif text-center md:text-left" style="font-style:italic; font-size:clamp(1.3rem,3vw,1.9rem); line-height:1.4;">"{{ $s->footer_text ?? 'Every lot examined, graded, and catalogued before it ever reaches you.' }}"</p>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => __('messages.Subscribe')])
@endsection
