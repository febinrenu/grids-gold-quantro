@extends('store.meridian.layout')

@php use Illuminate\Support\Str; @endphp

@section('content')
@php $currency = $s->currency_code ?? '$'; @endphp
<div class="theme-meridian">

  <!-- ============ HERO — left-aligned headline, coordinate grid, no photo dominance ============ -->
  <section class="px-6 md:px-12 pt-14 pb-10 md-hairline" style="border-color:#181818;">
    <div class="max-w-6xl mx-auto">
      <p class="md-label mb-6"><span class="md-num">01</span> {{ __('messages.Meridian_SectionCollections') }}</p>
      <div class="md-grid items-end" style="row-gap:2rem;">
        <div style="grid-column: span 12 / span 12;" class="md:col-span-8">
          <h1 class="md-display" style="font-weight:700; font-size:clamp(2.4rem,6vw,4.6rem); line-height:1.03; letter-spacing:-.02em;">
            {{ $s->hero_title ?? __('messages.Meridian_DefaultHeroTitle') }}
          </h1>
        </div>
        <div style="grid-column: span 12 / span 12;" class="md:col-span-4 md-hr-v md:pl-6">
          <p class="text-sm" style="color:#545249; line-height:1.6;">
            {{ $s->hero_subtitle ?? __('messages.Meridian_DefaultHeroSubtitle') }}
          </p>
          <div class="flex flex-wrap gap-3 mt-6">
            <a href="{{ route('store.shop') }}" class="md-btn">{{ __('messages.Meridian_ExploreIndex') }}</a>
            <a href="{{ route('store.contact') }}" class="md-btn md-btn-outline">{{ __('messages.Meridian_BookConsultation') }}</a>
          </div>
        </div>
      </div>

      <div class="md-grid mt-10" style="row-gap:0;">
        <div style="grid-column: span 12 / span 12;" class="md:col-span-9 md:col-start-1">
          <div class="md-hairline" style="border-color:#181818; aspect-ratio: 21/8; overflow:hidden;">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80" alt="{{ __('messages.Meridian_DefaultHeroTitle') }}" style="width:100%; height:100%; object-fit:cover; filter:grayscale(.12);">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ TRUST STRIP — 4 items, numbered, hairline-divided columns ============ -->
  <section class="px-6 md:px-12 py-10">
    <div class="max-w-6xl mx-auto md-grid" style="row-gap:1.75rem;">
      @php
        $features = [
          ['n' => '01', 'icon' => 'M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z', 'title' => __('messages.Meridian_FeatureAuthTitle'), 'body' => __('messages.Meridian_FeatureAuthBody')],
          ['n' => '02', 'icon' => 'M4 7h16M4 12h10M4 17h13', 'title' => __('messages.Meridian_FeatureTraceTitle'), 'body' => __('messages.Meridian_FeatureTraceBody')],
          ['n' => '03', 'icon' => 'M3 12l3-8h12l3 8-9 10-9-10zM3 12h18M9 4l3 18M15 4l-3 18', 'title' => __('messages.Meridian_FeatureCraftTitle'), 'body' => __('messages.Meridian_FeatureCraftBody')],
          ['n' => '04', 'icon' => 'M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2M3 10h18M16 15h3', 'title' => __('messages.Meridian_FeatureReturnsTitle'), 'body' => __('messages.Meridian_FeatureReturnsBody')],
        ];
      @endphp
      @foreach($features as $f)
        <div style="grid-column: span 6 / span 6;" class="md:col-span-3 {{ !$loop->last ? 'md:border-r' : '' }} md:pr-5" @if(!$loop->last) style="border-color:#D6D3CA;" @endif>
          <div class="flex items-center gap-2 mb-3">
            <span class="md-num">{{ $f['n'] }}</span>
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#181818" stroke-width="1.4"><path d="{{ $f['icon'] }}"/></svg>
          </div>
          <p class="md-display font-semibold text-sm mb-1">{{ $f['title'] }}</p>
          <p class="text-xs" style="color:#807d74; line-height:1.5;">{{ $f['body'] }}</p>
        </div>
      @endforeach
    </div>
  </section>

  <!-- ============ SHOP BY CATEGORY — cartographic index/legend list, not a photo grid ============ -->
  <section class="px-6 md:px-12 py-14 md-hairline">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-8 flex-wrap gap-3">
        <p class="md-label"><span class="md-num">02</span> {{ __('messages.Meridian_SectionCategoryIndex') }}</p>
        <a href="{{ route('store.shop') }}" class="md-label" style="border-bottom:1px solid #181818; padding-bottom:2px;">{{ __('messages.ViewAll') }}</a>
      </div>
      <div class="md-hairline" style="border-color:#181818;">
        @php $catImgs = ['1611652022419-a9419f74343d','1605100804763-247f67b3557e','1599643478518-a784e5dc4c8f','1616401784845-180882ba9ba8','1611591437281-460bfbe1220a','1573408301185-9146fe634ad0','1620656798579-1984d9e87df7','1587467512961-120760940315']; @endphp
        @forelse(($categories ?? collect())->take(8) as $i => $cat)
          <a href="{{ route('store.shop', ['category' => $cat->id]) }}" class="flex items-center gap-5 py-4 px-2 group" style="border-bottom:1px solid #D6D3CA;">
            <span class="md-num" style="width:2.5rem; flex-shrink:0;">{{ sprintf('%02d', $i + 1) }}</span>
            <span style="width:3.4rem; height:3.4rem; overflow:hidden; flex-shrink:0; background:#EDEBE5;">
              <img src="{{ $cat->cover_image_url ?? 'https://images.unsplash.com/photo-'.$catImgs[$i % count($catImgs)].'?auto=format&fit=crop&w=200&q=70' }}" alt="{{ $cat->name }}" style="width:100%; height:100%; object-fit:cover;">
            </span>
            <span class="md-display font-medium" style="font-size:1.15rem; flex:1;">{{ $cat->name }}</span>
            <span class="text-xs hidden sm:inline" style="color:#807d74;">{{ __('messages.Meridian_ViewSection') }}</span>
            <span style="color:#C1442A;">→</span>
          </a>
        @empty
          <p class="text-sm py-6" style="opacity:.6;">{{ __('messages.Meridian_NoCategoriesYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ FEATURED PIECES — real product grid ============ -->
  <section class="px-6 md:px-12 py-14 md-hairline">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-8 flex-wrap gap-3">
        <p class="md-label"><span class="md-num">03</span> {{ __('messages.Meridian_SectionFeatured') }}</p>
        <a href="{{ route('store.shop') }}" class="md-label" style="border-bottom:1px solid #181818; padding-bottom:2px;">{{ __('messages.ViewAll') }}</a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        @php $items = ($products ?? collect())->take(12); @endphp
        @forelse($items as $p)
          @include('store.partials.product-card', ['p' => $p, 'currency' => $currency])
        @empty
          <p class="col-span-full text-sm" style="opacity:.6;">{{ __('messages.Meridian_NoProductsYet') }}</p>
        @endforelse
      </div>
    </div>
  </section>

  <!-- ============ BRAND STORY — editorial copy, technical-drawing framing ============ -->
  <section class="px-6 md:px-12 py-14 md-hairline">
    <div class="max-w-6xl mx-auto md-grid" style="row-gap:2rem;">
      <div style="grid-column: span 12 / span 12;" class="md:col-span-5">
        <p class="md-label mb-5"><span class="md-num">04</span> {{ __('messages.Meridian_SectionProcess') }}</p>
        <h2 class="md-display" style="font-weight:700; font-size:clamp(1.7rem,3.5vw,2.6rem); line-height:1.15; letter-spacing:-.01em;">
          {{ __('messages.Meridian_StoryHeadline') }}
        </h2>
        <a href="{{ route('store.contact') }}" class="md-btn md-btn-outline mt-7 w-fit">{{ __('messages.Meridian_LearnOurProcess') }}</a>
      </div>
      <div style="grid-column: span 12 / span 12;" class="md:col-span-1"></div>
      <div style="grid-column: span 12 / span 12;" class="md:col-span-6 md-hr-v md:pl-6">
        <p class="text-sm mb-4" style="color:#545249; line-height:1.7;">{{ __('messages.Meridian_StoryParagraphOne') }}</p>
        <p class="text-sm" style="color:#545249; line-height:1.7;">{{ __('messages.Meridian_StoryParagraphTwo') }}</p>
        <div class="grid grid-cols-3 gap-4 mt-8">
          <div class="md-hairline" style="border-color:#181818; padding-top:.75rem;">
            <p class="md-num text-lg">18k</p>
            <p class="text-xs" style="color:#807d74;">{{ __('messages.Meridian_StatGold') }}</p>
          </div>
          <div class="md-hairline" style="border-color:#181818; padding-top:.75rem;">
            <p class="md-num text-lg">VS1+</p>
            <p class="text-xs" style="color:#807d74;">{{ __('messages.Meridian_StatClarity') }}</p>
          </div>
          <div class="md-hairline" style="border-color:#181818; padding-top:.75rem;">
            <p class="md-num text-lg">100%</p>
            <p class="text-xs" style="color:#807d74;">{{ __('messages.Meridian_StatTraceable') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER — precise coordinate-style closing band ============ -->
  <section class="px-6 md:px-12 py-14 md-hairline" style="background:#181818; color:#F7F6F3; border-color:#181818;">
    <div class="max-w-6xl mx-auto md-grid items-center" style="row-gap:1.5rem;">
      <div style="grid-column: span 12 / span 12;" class="md:col-span-7">
        <p class="md-label mb-3" style="color:#a9a69f;"><span class="md-num">05</span> {{ __('messages.Meridian_Newsletter') }}</p>
        <p class="md-display" style="font-weight:600; font-size:clamp(1.4rem,2.6vw,2rem); line-height:1.25;">{{ __('messages.Meridian_NewsletterHeadline') }}</p>
      </div>
      <div style="grid-column: span 12 / span 12;" class="md:col-span-5">
        <form action="{{ route('newsletter.subscribe') }}" method="POST" class="flex gap-2" id="newsletterForm">
          @csrf
          <input type="email" name="email" id="newsletterEmail" required placeholder="{{ __('messages.Email') }}" class="flex-1 min-w-0 text-sm outline-none px-4 py-3" style="background:transparent; border:1px solid rgba(247,246,243,.35); color:#F7F6F3;" />
          <button type="submit" id="newsletterBtn" class="md-btn md-btn-accent">{{ __('messages.Subscribe') }}</button>
        </form>
        <div id="newsletterMsg" class="text-xs mt-2"></div>
      </div>
    </div>
  </section>

</div>

@include('store.partials.home-modals-scripts', ['currency' => $currency, 'nlBtn' => __('messages.Subscribe')])
@endsection
