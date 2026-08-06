<template>
  <div class="page-heading-wrap">
    <slot name="header">
      <section class="page-heading">
        <div class="page-heading__copy">
          <span class="page-heading__eyebrow">{{ folder || 'Workspace' }}</span>
          <div class="page-heading__title-row">
            <h1>{{ page }}</h1>
            <div class="page-heading__trail" v-if="folder || page">
              <span v-if="folder">{{ folder }}</span>
              <i v-if="folder && page"></i>
              <span v-if="page">{{ page }}</span>
            </div>
          </div>
        </div>
      </section>
    </slot>
    <div class="separator-breadcrumb border-top"></div>
  </div>
</template>

<script>
export default {
  props: ['page', 'folder'],
}
</script>

<style scoped>
.page-heading-wrap {
  margin-bottom: 1.35rem;
}

.page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  border-radius: 24px;
  background: rgba(255, 251, 245, 0.72);
  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));
  box-shadow: 0 18px 36px rgba(58, 36, 16, 0.08);
}

.page-heading__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.55rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(180, 136, 82, 0.12);
  color: var(--lux-accent-strong, #8b622f);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.page-heading__title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem 1rem;
}

.page-heading h1 {
  margin: 0;
  color: var(--lux-heading, #1e170f);
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: clamp(1.45rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

.page-heading__trail {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--lux-muted, #746555);
  font-size: 0.86rem;
}

.page-heading__trail i {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(180, 136, 82, 0.5);
}

.separator-breadcrumb {
  margin-top: 0.85rem;
  opacity: 0.7;
}

body.dark-theme .page-heading {
  background: rgba(27, 23, 19, 0.84);
}

@media (max-width: 767px) {
  .page-heading {
    padding: 1.15rem 1rem;
    border-radius: 20px;
  }
}
</style>
