@extends('store.atlas.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
<div class="theme-atlas a-offset" style="background:#EDE8E0; color:#262421;">

  <!-- ============ FEATURE ROW — text + paired overlapping images ============ -->
  <section class="px-6 md:px-12 pt-14 pb-10">
    <div class="a-feature-row max-w-5xl">
      <div>
        <p class="a-label mb-4">Collection {{ now()->format('Y') }}</p>
        <h1 style="font-family:'Sora',sans-serif; font-weight:700; font-size:clamp(2.2rem,5vw,3.6rem); line-height:1.08; letter-spacing:-.01em;">{{ $s->hero_title ?? 'Built With Intention' }}</h1>
        <p class="text-sm mt-5 max-w-sm" style="opacity:.7;">{{ $s->hero_subtitle ?? 'Every piece considered from material to finish. No shortcuts, no filler.' }}</p>
        <div class="flex flex-wrap gap-3 mt-7">
          <a href="{{ route('store.shop') }}" class="a-btn">{{ 'Atlas_BrowseCollection' }}</a>
          <a href="{{ route('store.contact') }}" class="a-btn a-btn-outline">{{ 'Atlas_BookAFitting' }}</a>
        </div>
      </div>
      <div class="relative">
        <div style="border-radius:4px; overflow:hidden; aspect-ratio: 4/5;">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" alt="Diamond ring on velvet" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="hidden md:block absolute -bottom-8 -left-8" style="width:48%; aspect-ratio:1; border-radius:4px; overflow:hidden; border:6px solid #EDE8E0; box-shadow:0 16px 32px -10px rgba(38,36,33,.3);">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80" alt="Gold necklace detail" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CATEGORY INDEX — text list with small thumbnails, not bare text ============ -->
  <section class="px-6 md:px-12 py-14" style="border-top:1px solid #DDD5C4;">
    <p class="a-label mb-5">{{ 'Atlas_Departments' }}</p>
    <div class="grid md:grid-cols-2 gap-x-10 max-w-5xl">
      @php
        $catImgs = ['1611652022419-a9419f74343d','1605100804763-247f67b3557e','1611652022419-a9419f74343d','1616401784845-180882ba9ba8','1611591437281-460bfbe1220a','1573408301185-9146fe634ad0','1620656798579-1984d9e87df7','1611652022419-a9419f74343d'];
      @endphp
      @forelse(($categories ?? collect())->take(8) as $i => $cat)
        <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="flex items-center gap-4 py-3.5" style="border-bottom:1px solid #DDD5C4;">
          <span style="width:3.2rem; height:3.2rem; border-radius:4px; overflow:hidden; flex-shrink:0; background:#DDD5C4;">
            <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-'.$catImgs[$i % count($catImgs)].'?auto=format&fit=crop&w=200&q=70' }}" alt="{{ $cat->name }}" style="width:100%; height:100%; object-fit:cover;">
          </span>
          <span style="font-family:'Sora',sans-serif; font-weight:600; font-size:1.1rem; flex:1;">{{ $cat->name }}</span>
          <span style="opacity:.5;">→</span>
        </a>
      @empty
        <p class="text-sm" style="opacity:.6;">{{ 'Atlas_NoCategoriesYet' }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ LOOKBOOK GALLERY — three-image editorial strip ============ -->
  <section class="px-6 md:px-12 py-14" style="border-top:1px solid #DDD5C4;">
    <div class="flex items-end justify-between mb-6 max-w-6xl">
      <p style="font-family:'Sora',sans-serif; font-weight:700; font-size:1.6rem;">{{ 'Atlas_TheLookbook' }}</p>
      <p class="a-label">{{ 'Atlas_Studio' }} {{ now()->format('Y') }}</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl">
      <div style="border-radius:4px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80" alt="Artisan at work" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:4px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80" alt="Studio workbench" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:4px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80" alt="Finished pieces on linen" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:4px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80" alt="Jewelry flatlay" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:4px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=900&q=80" alt="Gold rings detail" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="border-radius:4px; overflow:hidden; aspect-ratio:4/5;">
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" alt="Diamond ring on velvet" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product cards ============ -->
  <section class="px-6 md:px-12 py-10" style="border-top:1px solid #DDD5C4;">
    <div class="flex items-end justify-between mb-6 max-w-6xl">
      <p style="font-family:'Sora',sans-serif; font-weight:700; font-size:1.6rem;">{{ 'Atlas_FeaturedPieces' }}</p>
      <a href="{{ route('store.shop') }}" class="a-label" style="text-decoration:underline;">{{ 'ViewAll' }}</a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
      @php $currency = $s->currency_code ?? '$'; $items = ($products ?? collect())->take(8); @endphp
      @forelse($items as $p)
        @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
      @empty
        <p class="col-span-full text-sm" style="opacity:.6;">{{ 'Atlas_NoProductsYet' }}</p>
      @endforelse
    </div>
  </section>

  <!-- ============ TESTIMONIAL — portrait image + quote ============ -->
  <section class="px-6 md:px-12 py-14" style="border-top:1px solid #DDD5C4;">
    <div class="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-6 items-center">
      <div style="width:6rem; height:6rem; border-radius:50%; overflow:hidden; flex-shrink:0;">
        <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=200&q=80" alt="Customer portrait" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div>
        <p style="font-family:'Sora',sans-serif; font-style:italic; font-size:1.3rem; line-height:1.4;">"{{ $s->footer_text ?? 'Sourced responsibly, finished by hand — every piece feels like it was made specifically for me.' }}"</p>
        <p class="a-label mt-3">— {{ 'Atlas_AStudioClient' }}</p>
      </div>
    </div>
  </section>

  <!-- ============ SECOND FEATURE ROW — reversed, different product spotlighted ============ -->
  <section class="px-6 md:px-12 py-14" style="border-top:1px solid #DDD5C4;">
    <div class="a-feature-row max-w-5xl" style="grid-template-columns: .9fr 1.1fr;">
      <div style="border-radius:4px; overflow:hidden; aspect-ratio: 4/5; order:2;" class="md:order-1">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80" alt="" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="order-1 md:order-2">
        <p class="a-label mb-4">{{ 'Atlas_TheProcess' }}</p>
        <p style="font-family:'Sora',sans-serif; font-weight:700; font-size:clamp(1.6rem,3.5vw,2.4rem); line-height:1.15;">{{ 'Atlas_SourcedResponsiblyHeadline' }}</p>
        <p class="text-sm mt-4 max-w-sm" style="opacity:.7;">{{ 'Atlas_ProcessDescription' }}</p>
        <a href="{{ route('store.contact') }}" class="a-btn a-btn-outline mt-6 w-fit">{{ 'Atlas_LearnMore' }}</a>
      </div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $s->currency_code ?? '$', 'nlBtn' => 'Subscribe'])
@endsection


