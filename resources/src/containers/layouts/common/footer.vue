<template>
  <div class="footer_wrap">
    <div class="flex-grow-1"></div>
    <div class="app-footer" v-if="currentUser">
      <div class="app-footer__top">
        <div class="app-footer__brand">
          <img v-if="currentUser.logo" class="logo" :src="$imgUrl('settings', currentUser.logo)" alt width="60" height="60">
          <img v-else class="logo" :src="$imgUrl('settings', 'logo-default.png')" alt width="60" height="60">
          <div>
            <span class="app-footer__eyebrow">{{ currentUser.company || 'Stocky' }}</span>
            <p class="app-footer__title">{{ currentUser.footer || 'Crafted for precision, clarity, and confident daily operations.' }}</p>
          </div>
        </div>
        <div class="app-footer__meta">
          <p>&copy; {{ new Date().getFullYear() }} {{ currentUser.developed_by || 'Stocky' }}</p>
          <p>Version 1.2</p>
        </div>
      </div>
      <div class="footer-bottom border-top">
        <span>{{ $t('developed_by') }} {{ currentUser.developed_by || 'Stocky' }}</span>
        <span>All rights reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "currentUser",
    ]),
  },
};
</script>

<style scoped>
.app-footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.app-footer__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.app-footer__brand .logo {
  width: 56px;
  height: 56px;
  border-radius: 18px;
}

.app-footer__eyebrow {
  display: inline-flex;
  margin-bottom: 0.3rem;
  color: var(--lux-accent-strong, #8b622f);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-footer__title {
  margin: 0;
  color: var(--lux-heading, #1e170f);
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1rem;
}

.app-footer__meta {
  text-align: right;
  color: var(--lux-muted, #746555);
  font-size: 0.82rem;
}

.app-footer__meta p,
.footer-bottom span {
  margin: 0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 0.95rem;
  color: var(--lux-muted, #746555);
  font-size: 0.82rem;
}

@media (max-width: 767px) {
  .app-footer__top,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .app-footer__meta {
    text-align: left;
  }
}
</style>
