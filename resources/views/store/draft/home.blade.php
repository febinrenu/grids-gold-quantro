@extends('store.draft.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-draft bg-draft-slate text-draft-ink font-draft-sans">

  <!-- ============ HERO SECTION (exposed layout specs) ============ -->
  <section class="border-b border-draft-ink py-12 bg-draft-white">
    <div class="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-8 items-center">
      <div class="md:col-span-7 space-y-6">
        <div class="inline-block border border-draft-blue text-draft-blue font-draft-mono text-xs px-3 py-1 bg-draft-blue/5">
          [RELEASE_LOT // LOT_N°009]
        </div>
        <h1 class="font-draft-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none text-draft-ink">
          {{ $s->hero_title ?? 'Precision Metal & Hand-Cut Diamonds' }}
        </h1>
        <p class="text-sm md:text-base leading-relaxed text-draft-grey max-w-lg font-light">
          {{ $s->hero_subtitle ?? 'Every piece is mapped in our drafting room, verified under microscopic tolerances, and set in certified gold. No approximations, only absolute precision.' }}
        </p>
        
        <div class="pt-4 flex flex-wrap gap-3">
          <a href="{{ route('store.shop') }}" class="draft-btn draft-btn-solid">EXPLORE_INDEX</a>
          <a href="{{ route('store.contact') }}" class="draft-btn">BOOK_ salon_FITTING</a>
        </div>
      </div>
      
      <div class="md:col-span-5 relative border border-draft-ink p-1 bg-draft-slate">
        <div class="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" alt="Technical view of gold chain and pendant" class="w-full h-full object-cover">
        </div>
        <div class="absolute bottom-3 left-3 bg-draft-ink/80 text-white font-draft-mono text-[9px] px-2 py-1 select-none backdrop-blur-sm">
          //SPEC: 18K_GOLD // WT_4.85G // LEN_45CM
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PRECISION IN EVERY DETAIL ============ -->
  <section class="max-w-7xl mx-auto px-4 md:px-8 py-16 border-b border-draft-border">
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-6 bg-draft-white border border-draft-border space-y-3">
        <div class="font-draft-mono text-draft-blue text-xs font-bold">[01_MATERIAL]</div>
        <h3 class="font-draft-mono text-sm font-bold">Gold Alloy Tolerances</h3>
        <p class="text-xs text-draft-grey leading-relaxed">We work strictly in 18-karat (75.0% purity) and 22-karat (91.6% purity) gold. Every batch is assayed and certified conflict-free, ensuring alloy density is balanced to the decimal milligram.</p>
      </div>
      <div class="p-6 bg-draft-white border border-draft-border space-y-3">
        <div class="font-draft-mono text-draft-blue text-xs font-bold">[02_STONES]</div>
        <h3 class="font-draft-mono text-sm font-bold">Micro-Pave Mapping</h3>
        <p class="text-xs text-draft-grey leading-relaxed">Each diamond setting is calculated using digital mapping software to prevent stone-on-stone friction. Stone weights are recorded individually and verified by independent GIA certificates.</p>
      </div>
      <div class="p-6 bg-draft-white border border-draft-border space-y-3">
        <div class="font-draft-mono text-draft-blue text-xs font-bold">[03_FINISH]</div>
        <h3 class="font-draft-mono text-sm font-bold">Technical Finishes</h3>
        <p class="text-xs text-draft-grey leading-relaxed">From highly polished mirror reflections to sand-blasted matte finishes, our metal treatments are completed under 10x magnification to guarantee perfect surface uniformity.</p>
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PRODUCTS (TECHNICAL LOG INDEX) ============ -->
  <section class="max-w-7xl mx-auto px-4 md:px-8 py-16">
    <div class="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-10 border-b border-draft-ink pb-4">
      <div>
        <p class="font-draft-mono text-xs text-draft-blue font-bold">//RECORD_STREAM</p>
        <h2 class="font-draft-mono text-xl font-bold uppercase text-draft-ink">Atelier Specification Sheets</h2>
      </div>
      <a href="{{ route('store.shop') }}" class="font-draft-mono text-xs text-draft-blue hover:underline">VIEW_ALL_SPEC_SHEETS &rarr;</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @php $currency = $s->currency_code ?? '$'; @endphp
      @forelse(($products ?? collect())->take(6) as $p)
        @php
          $productSlug = $p->slug ?? (string) $p->id;
          $galleryFilenames = $p->productGalleryFilenames();
          $galleryUrls = collect($galleryFilenames)->map(fn ($f) => $f ? global_asset(upload_path('products') . '/' . $f) : null)->filter()->values()->all();
          $primaryFile = $p->primaryProductImageFilename();
          $imgUrl = $primaryFile ? global_asset(upload_path('products') . '/' . $primaryFile) : global_asset(upload_path('products') . '/no-image.png');
          $descShort = Str::limit(strip_tags($p->note ?? ''), 400);
          $price = (float) ($p->display_price ?? ($p->price ?? 0));
          $isJewelry = (bool) ($p->is_jewelry_item ?? false);
          $metalTypeName = $isJewelry && $p->metalType ? $p->metalType->name : 'N/A';
          $karatName = $isJewelry && $p->karat ? $p->karat->name : 'N/A';
          
          // Technical metrics from existing product details
          $grossWeight = $isJewelry ? (float) ($p->jewelry_gross_weight ?? 0.0) : 0.0;
          $netWeight = $isJewelry ? (float) ($p->jewelry_net_weight ?? 0.0) : 0.0;
          $metalWeight = $isJewelry ? (float) ($p->jewelry_metal_weight ?? 0.0) : 0.0;
          
          $variants = $p->relationLoaded('variants') ? $p->variants : collect($p->variants ?? []);
          $variants = collect($variants);
          $variantPayload = $variants->map(function($v) use ($currency) {
            $final = (float) ($v->display_price ?? ($v->price ?? 0));
            return [
              'id' => (int) ($v->id ?? 0),
              'name' => (string) ($v->name ?? ''),
              'price' => (float) ($v->price ?? 0),
              'display_price' => $final,
              'display_price_formatted' => $currency . number_format($final, 2, '.', ','),
              'image' => !empty($v->image) ? global_asset(upload_path('products') . '/' . $v->image) : null,
              'stock' => (int) max(0, $v->stock ?? $v->qty ?? 0),
            ];
          })->values();
          $productStock = $variants->isEmpty() ? (int) max(0, $p->stock ?? 0) : null;
          $isAvailable = $variants->isEmpty() ? ($productStock > 0) : $variantPayload->contains(fn($v) => ($v['stock'] ?? 0) > 0);
          $isPreorder = (bool) ($p->is_preorder ?? false);
          $isPreorderActive = $isPreorder && !$isAvailable;
        @endphp
        
        <div class="draft-spec-card">
          <div class="draft-spec-header">
            <span class="font-draft-mono text-[10px] text-draft-grey">//ID: {{ str_pad($p->id, 5, '0', STR_PAD_LEFT) }}</span>
            @if($isPreorderActive)
              <span class="draft-badge">PRE-ORDER</span>
            @elseif(!$isAvailable)
              <span class="draft-badge bg-red-700">OUT OF STOCK</span>
            @else
              <span class="draft-badge bg-emerald-600">IN STOCK</span>
            @endif
          </div>

          <div class="aspect-video overflow-hidden border-b border-draft-border bg-draft-slate">
            <a href="#" class="block w-full h-full js-quick-view"
               data-id="{{ $p->id }}"
               data-slug="{{ $productSlug }}"
               data-name="{{ e($p->name) }}"
               data-price="{{ number_format($price, 2, '.', '') }}"
               data-image="{{ $imgUrl }}"
               data-gallery='@json($galleryUrls)'
               data-currency="{{ $currency }}"
               data-description="{{ e($descShort) }}"
               data-stock="{{ $productStock }}"
               data-variants='@json($variantPayload)'
               data-is-jewelry="{{ $isJewelry ? '1' : '0' }}"
               data-metal-type="{{ e($metalTypeName) }}"
               data-karat="{{ e($karatName) }}"
               data-gross-weight="{{ $grossWeight }}"
               data-net-weight="{{ $netWeight }}"
               data-metal-weight="{{ $metalWeight }}"
               @click.prevent>
              <img src="{{ $imgUrl }}" alt="{{ $p->name }}" class="w-full h-full object-cover">
            </a>
          </div>

          <div class="draft-spec-body">
            <div class="space-y-1">
              <h3 class="font-draft-mono text-sm font-bold text-draft-ink line-clamp-1" title="{{ $p->name }}">
                {{ $p->name }}
              </h3>
              
              {{-- Technical specs table --}}
              <table class="draft-spec-table font-draft-mono">
                <tbody>
                  <tr>
                    <td>METAL_TYPE:</td>
                    <td class="text-right text-draft-ink">{{ $metalTypeName }}</td>
                  </tr>
                  <tr>
                    <td>KARAT_INDEX:</td>
                    <td class="text-right text-draft-ink">{{ $karatName }}</td>
                  </tr>
                  @if($isJewelry)
                    <tr>
                      <td>GROSS_WEIGHT:</td>
                      <td class="text-right text-draft-ink">{{ $grossWeight > 0 ? $grossWeight . ' g' : 'N/A' }}</td>
                    </tr>
                    <tr>
                      <td>METAL_WEIGHT:</td>
                      <td class="text-right text-draft-ink">{{ $metalWeight > 0 ? $metalWeight . ' g' : 'N/A' }}</td>
                    </tr>
                  @endif
                </tbody>
              </table>
            </div>

            <div class="pt-3 border-t border-draft-border mt-3 flex items-center justify-between gap-4">
              <div>
                <p class="font-draft-mono text-[9px] text-draft-grey">VALUE_EST</p>
                <p class="font-draft-mono text-sm font-bold text-draft-blue">
                  {{ $currency }}{{ number_format($price, 2, '.', ',') }}
                </p>
              </div>
              
              <button type="button" 
                      class="draft-btn py-1.5 px-4 text-[9px] js-add-to-cart"
                      @if(!$isAvailable) disabled @endif
                      data-id="{{ $p->id }}"
                      data-slug="{{ $productSlug }}"
                      data-name="{{ e($p->name) }}"
                      data-price="{{ number_format($price, 2, '.', '') }}"
                      data-image="{{ $imgUrl }}"
                      data-gallery='@json($galleryUrls)'
                      data-currency="{{ $currency }}"
                      data-qty="1"
                      data-product-id="{{ $p->id }}"
                      data-product-image="{{ $imgUrl }}"
                      data-variants='@json($variantPayload)'
                      data-stock="{{ $productStock }}"
                      data-is-jewelry="{{ $isJewelry ? '1' : '0' }}"
                      data-added-label="ADDED">
                [ADD_TO_CART]
              </button>
            </div>
          </div>
        </div>
      @empty
        <div class="col-span-full text-center text-sm font-draft-mono opacity-50">//NO_ACTIVE_LOTS_LOADED</div>
      @endforelse
    </div>
  </section>

  <!-- ============ CRAFTSMANSHIP WORKSHOP IMAGE BARS ============ -->
  <section class="bg-draft-white border-t border-b border-draft-ink py-16 px-4 md:px-8">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div class="relative border border-draft-ink p-1 bg-draft-slate">
        <div class="aspect-video overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80" alt="Jewelry Workbench Craftsmanship" class="w-full h-full object-cover">
        </div>
        <div class="absolute bottom-3 left-3 bg-draft-ink/80 text-white font-draft-mono text-[9px] px-2 py-1 select-none">
          //WORKSHOP_SESSION: ACTIVE //TOLERANCE: 0.05MM
        </div>
      </div>
      <div class="space-y-5">
        <div class="font-draft-mono text-draft-blue text-xs font-bold">//CRAFTSMANSHIP_RECORD</div>
        <h2 class="font-draft-mono text-2xl font-bold text-draft-ink">ATELIER CRAFT METHODOLOGY</h2>
        <p class="text-xs text-draft-grey leading-relaxed">
          Every gemstone lot arriving at our workshop is assigned a unique tracking identifier. In our polishing room, lapidaries adjust facets manually under digital loupes, ensuring each stone reflects light along calculated mathematical vectors.
        </p>
        <p class="text-xs text-draft-grey leading-relaxed">
          We maintain absolute transparency regarding alloy composition, metal weight logs, and setting techniques. No hidden variables.
        </p>
      </div>
    </div>
  </section>

</div>
@endsection
