@extends('layouts.store')

@section('content')
@php
  use App\Models\StoreSetting;
  $s = $s ?? StoreSetting::first();
  $currency = $s->currency_code ?? '$';
@endphp

<section class="border-b border-line-subtle"
         style="background: linear-gradient(135deg, rgb(var(--color-accent-500) / .04), rgb(var(--color-bg-surface)));">
  <div class="container py-6">
    <span class="section-kicker">Build Your Own</span>
    <h1 class="section-title mt-1">Custom Order Builder</h1>
    <p class="text-sm mt-2" style="opacity:.7; max-width:40rem;">
      Choose your metal, karat, and stones — get a live price estimate, then submit your
      request and our team will follow up with a final quote.
    </p>
  </div>
</section>

<section class="container py-8" style="max-width:48rem;">
  <div id="co-alert" class="hidden mb-4 p-3 rounded text-sm"></div>

  <form id="co-form">
    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-1">Starting point (optional)</label>
        <select id="co-template" class="w-full border rounded px-3 py-2 text-sm"></select>
      </div>
      <div></div>

      <div>
        <label class="block text-sm font-medium mb-1">Metal type</label>
        <select id="co-metal" class="w-full border rounded px-3 py-2 text-sm" required></select>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Karat / purity</label>
        <select id="co-karat" class="w-full border rounded px-3 py-2 text-sm" required></select>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Target weight (grams)</label>
        <input id="co-weight" type="number" step="0.01" min="0.01" class="w-full border rounded px-3 py-2 text-sm" required>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Making charge (flat, {{ $currency }})</label>
        <input id="co-making-charge" type="number" step="0.01" min="0" value="0" class="w-full border rounded px-3 py-2 text-sm">
      </div>
    </div>

    <div class="mt-5">
      <label class="block text-sm font-medium mb-1">Stones (optional)</label>
      <div id="co-stones"></div>
      <button type="button" id="co-add-stone" class="btn mt-2" style="padding:.4rem .9rem; font-size:.8rem;">+ Add a stone</button>
    </div>

    <div class="mt-5">
      <label class="block text-sm font-medium mb-1">Design reference (optional)</label>
      <input id="co-design-file" type="file" accept="image/*,.pdf" class="w-full text-sm">
    </div>

    <div class="mt-5">
      <label class="block text-sm font-medium mb-1">Notes</label>
      <textarea id="co-notes" rows="3" class="w-full border rounded px-3 py-2 text-sm"></textarea>
    </div>

    <div class="mt-6 p-4 rounded" style="background: rgb(var(--color-bg-surface)); border:1px solid rgb(var(--color-border) / .5);">
      <div class="flex items-center justify-between">
        <span class="text-sm" style="opacity:.7;">Estimated price</span>
        <span id="co-estimate" class="text-xl font-semibold">—</span>
      </div>
      <button type="button" id="co-quote-btn" class="btn mt-3" style="padding:.5rem 1rem;">Get Estimate</button>
    </div>

    <button type="submit" id="co-submit-btn" class="btn mt-5" style="padding:.6rem 1.4rem;" disabled>
      Submit Custom Order Request
    </button>
  </form>
</section>

<script>
(function () {
  var csrfMeta = document.querySelector('meta[name="csrf-token"]');
  var CSRF = csrfMeta ? csrfMeta.content : '';
  var state = { metals: [], karats: [], templates: [] };

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function showAlert(msg, kind) {
    var box = document.getElementById('co-alert');
    box.textContent = msg;
    box.className = 'mb-4 p-3 rounded text-sm ' + (kind === 'error' ? 'text-red-700' : 'text-green-700');
    box.style.background = kind === 'error' ? '#fee2e2' : '#dcfce7';
    box.classList.remove('hidden');
  }

  function populateKarats() {
    var metalId = document.getElementById('co-metal').value;
    var karatSelect = document.getElementById('co-karat');
    karatSelect.innerHTML = '';
    state.karats.filter(function (k) { return String(k.metal_type_id) === String(metalId); })
      .forEach(function (k) {
        karatSelect.appendChild(el('option', { value: k.id }, k.name + ' (' + k.purity_percentage + '%)'));
      });
  }

  function addStoneRow(prefill) {
    prefill = prefill || {};
    var row = el('div', { class: 'grid grid-cols-3 gap-2 mb-2 co-stone-row' });
    row.appendChild(el('input', { type: 'text', placeholder: 'Stone type', class: 'co-stone-type border rounded px-2 py-1 text-sm', value: prefill.type || '' }));
    row.appendChild(el('input', { type: 'number', min: '0', step: '1', placeholder: 'Qty', class: 'co-stone-qty border rounded px-2 py-1 text-sm', value: prefill.quantity || 1 }));
    row.appendChild(el('input', { type: 'number', min: '0', step: '0.01', placeholder: 'Unit cost', class: 'co-stone-cost border rounded px-2 py-1 text-sm', value: prefill.unit_cost_amount || '' }));
    document.getElementById('co-stones').appendChild(row);
  }

  function collectStones() {
    return Array.prototype.slice.call(document.querySelectorAll('.co-stone-row')).map(function (row) {
      return {
        type: row.querySelector('.co-stone-type').value,
        quantity: parseFloat(row.querySelector('.co-stone-qty').value) || 0,
        unit_cost_amount: parseFloat(row.querySelector('.co-stone-cost').value) || 0,
      };
    }).filter(function (s) { return s.quantity > 0; });
  }

  function buildPayload() {
    return {
      product_template_id: document.getElementById('co-template').value || null,
      metal_type_id: document.getElementById('co-metal').value,
      karat_id: document.getElementById('co-karat').value,
      target_weight: parseFloat(document.getElementById('co-weight').value) || null,
      making_charge_type: 'fixed',
      making_charge_value: parseFloat(document.getElementById('co-making-charge').value) || 0,
      stones: collectStones(),
      notes: document.getElementById('co-notes').value,
    };
  }

  fetch('{{ route("store.custom_order.options") }}', { headers: { 'Accept': 'application/json' } })
    .then(function (r) { return r.json(); })
    .then(function (res) {
      var data = res.data || {};
      state.metals = data.metal_types || [];
      state.karats = data.karats || [];
      state.templates = data.product_templates || [];

      var metalSelect = document.getElementById('co-metal');
      state.metals.forEach(function (m) { metalSelect.appendChild(el('option', { value: m.id }, m.name)); });
      metalSelect.addEventListener('change', populateKarats);
      populateKarats();

      var templateSelect = document.getElementById('co-template');
      templateSelect.appendChild(el('option', { value: '' }, 'Start from scratch'));
      state.templates.forEach(function (t) { templateSelect.appendChild(el('option', { value: t.id }, t.template_name)); });

      addStoneRow();
    })
    .catch(function () { showAlert('Could not load builder options. Please refresh the page.', 'error'); });

  document.getElementById('co-add-stone').addEventListener('click', function () { addStoneRow(); });

  document.getElementById('co-quote-btn').addEventListener('click', function () {
    fetch('{{ route("store.custom_order.quote") }}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': CSRF },
      body: JSON.stringify(buildPayload()),
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          document.getElementById('co-estimate').textContent = '{{ $currency }}' + Number(res.data.selling_price).toFixed(2);
          document.getElementById('co-submit-btn').disabled = false;
        } else {
          showAlert(res.message || 'Could not calculate an estimate.', 'error');
        }
      })
      .catch(function () { showAlert('Could not calculate an estimate.', 'error'); });
  });

  document.getElementById('co-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData();
    var payload = buildPayload();
    Object.keys(payload).forEach(function (k) {
      if (k === 'stones') {
        payload.stones.forEach(function (s, i) {
          formData.append('stones[' + i + '][type]', s.type);
          formData.append('stones[' + i + '][quantity]', s.quantity);
          formData.append('stones[' + i + '][unit_cost_amount]', s.unit_cost_amount);
        });
      } else if (payload[k] !== null && payload[k] !== undefined) {
        formData.append(k, payload[k]);
      }
    });
    var fileInput = document.getElementById('co-design-file');
    if (fileInput.files[0]) formData.append('design_file', fileInput.files[0]);

    fetch('{{ route("store.custom_order.submit") }}', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': CSRF },
      body: formData,
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          showAlert('Your custom order request has been submitted (ref: ' + res.data.quotation_ref + '). Our team will follow up with a final quote.', 'success');
          document.getElementById('co-form').reset();
          document.getElementById('co-submit-btn').disabled = true;
          document.getElementById('co-estimate').textContent = '—';
        } else {
          showAlert(res.message || 'Could not submit your request.', 'error');
        }
      })
      .catch(function () { showAlert('Could not submit your request.', 'error'); });
  });
})();
</script>
@endsection
