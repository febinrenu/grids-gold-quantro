<template>
  <div>
    <div class="customizer" :class="{ open: isOpen }">
      <div class="handle" @click="isOpen = !isOpen">
        <lucide-icon :name="isOpen ? 'x' : 'sparkles'" />
      </div>

      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="customizer-body ps rtl-ps-none"
      >
        <section class="customizer-section customizer-intro">
          <span class="customizer-kicker">Appearance Atelier</span>
          <h3>Jewelry-grade workspace polish</h3>
          <p>Choose the mood that fits the room, then refine the navigation and reading direction without breaking the luxury palette.</p>
        </section>

        <section class="customizer-section">
          <div class="section-heading">
            <p>Theme</p>
            <span>Two independently crafted modes</span>
          </div>

          <div class="theme-options">
            <button
              type="button"
              class="theme-option"
              :class="{ active: !getThemeMode.dark }"
              @click="setThemeMode(false)"
            >
              <span class="theme-preview theme-preview--light">
                <span></span><span></span><span></span>
              </span>
              <span class="theme-copy">
                <strong>Ivory Atelier</strong>
                <small>Soft ivory panels, brushed gold accents, warm editorial contrast.</small>
              </span>
              <lucide-icon v-if="!getThemeMode.dark" name="check" class="theme-check" />
            </button>

            <button
              type="button"
              class="theme-option"
              :class="{ active: getThemeMode.dark }"
              @click="setThemeMode(true)"
            >
              <span class="theme-preview theme-preview--dark">
                <span></span><span></span><span></span>
              </span>
              <span class="theme-copy">
                <strong>Noir Vault</strong>
                <small>Obsidian surfaces, champagne highlights, deeper contrast for night operations.</small>
              </span>
              <lucide-icon v-if="getThemeMode.dark" name="check" class="theme-check" />
            </button>
          </div>
        </section>

        <section class="customizer-section">
          <div class="section-heading">
            <p>Navigation</p>
            <span>Match your team’s browsing style</span>
          </div>

          <div class="layout-options">
            <label class="layout-option" :class="{ active: getSidebarLayout === 'horizontal' }">
              <input
                type="radio"
                name="sidebar-layout"
                value="horizontal"
                @change="changeSidebarLayout('horizontal')"
                :checked="getSidebarLayout === 'horizontal'"
              />
              <span class="layout-preview layout-preview--rail">
                <span class="rail"></span>
                <span class="panel"></span>
                <span class="canvas"></span>
              </span>
              <span class="option-copy">
                <strong>Split rail</strong>
                <small>Primary navigation in a compact icon rail with a focused sub-panel.</small>
              </span>
            </label>

            <label class="layout-option" :class="{ active: getSidebarLayout === 'vertical' }">
              <input
                type="radio"
                name="sidebar-layout"
                value="vertical"
                @change="changeSidebarLayout('vertical')"
                :checked="getSidebarLayout === 'vertical'"
              />
              <span class="layout-preview layout-preview--column">
                <span class="column"></span>
                <span class="canvas"></span>
              </span>
              <span class="option-copy">
                <strong>Column menu</strong>
                <small>A fuller navigation column ideal for dense catalog and reporting workflows.</small>
              </span>
            </label>
          </div>
        </section>

        <section
          class="customizer-section"
          v-if="getThemeMode.layout != 'vertical-sidebar' && getThemeMode.layout != 'vertical-sidebar-two'"
        >
          <div class="section-heading">
            <p>Reading direction</p>
            <span>Switch instantly for RTL languages</span>
          </div>

          <label class="toggle-row">
            <span>
              <strong>RTL layout</strong>
              <small>Mirror navigation, forms, and content flow.</small>
            </span>
            <span class="switch switch-primary">
              <input type="checkbox" id="rtl-checkbox" :checked="getThemeMode.rtl" @change="changeThemeRtl" />
              <span class="slider"></span>
            </span>
          </label>
        </section>

        <section class="customizer-section">
          <div class="section-heading">
            <p>Language</p>
            <span>Choose the workspace language</span>
          </div>

          <div class="language-list">
            <button v-for="lang in getAvailableLanguages" :key="lang.locale" type="button" class="language-item" @click="SetLocal(lang.locale)">
              <img :src="`/flags/${lang.flag}`" :alt="lang.name" class="flag-icon" />
              <span>{{ lang.name }}</span>
            </button>
          </div>
        </section>
      </vue-perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    ...mapGetters("config", ["getThemeMode"]),
    ...mapGetters(["getAvailableLanguages", "getSidebarLayout"]),
  },

  methods: {
    ...mapActions("config", ["changeThemeMode", "changeThemeRtl"]),
    ...mapActions([
      "setSidebarLayout",
    ]),

    setThemeMode(dark) {
      if (this.getThemeMode.dark !== dark) {
        this.changeThemeMode();
      }
    },

    changeSidebarLayout(layout) {
      this.setSidebarLayout(layout);
      this.$root.$bvToast.toast(
        `Workspace layout updated to ${layout === 'vertical' ? 'column menu' : 'split rail'}.`,
        {
          title: 'Appearance updated',
          variant: 'success',
          solid: true,
          autoHideDelay: 2200,
        }
      );
    },

    SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    },
  },

  created() {
    this.$store.dispatch("loadAvailableLanguages");
  }
};
</script>

<style lang="scss" scoped>
.customizer-intro {
  padding-bottom: 0.35rem;
}

.customizer-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(180, 136, 82, 0.12);
  color: var(--lux-accent-strong, #8b622f);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.customizer-section {
  padding: 1.2rem 1.25rem;
  border-bottom: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));
}

.customizer-section:last-child {
  border-bottom: none;
}

.customizer-intro h3,
.section-heading p,
.option-copy strong,
.theme-copy strong,
.toggle-row strong {
  color: var(--lux-heading, #1e170f);
}

.customizer-intro h3 {
  margin: 0.85rem 0 0.45rem;
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.25rem;
  letter-spacing: -0.03em;
}

.customizer-intro p,
.section-heading span,
.option-copy small,
.theme-copy small,
.toggle-row small {
  display: block;
  color: var(--lux-muted, #746555);
  line-height: 1.6;
}

.section-heading {
  margin-bottom: 0.95rem;
}

.section-heading p {
  margin: 0;
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1rem;
}

.section-heading span {
  margin-top: 0.2rem;
  font-size: 0.82rem;
}

.theme-options,
.layout-options {
  display: grid;
  gap: 0.85rem;
}

.theme-option,
.layout-option {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.85rem;
  align-items: center;
  width: 100%;
  padding: 0.95rem;
  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));
  border-radius: 18px;
  background: rgba(255, 251, 245, 0.74);
  cursor: pointer;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
}

.theme-option:hover,
.layout-option:hover {
  transform: translateY(-1px);
  border-color: rgba(180, 136, 82, 0.28);
  box-shadow: 0 14px 24px rgba(58, 36, 16, 0.08);
}

.theme-option.active,
.layout-option.active {
  border-color: rgba(180, 136, 82, 0.34);
  background: rgba(180, 136, 82, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.34), 0 16px 30px rgba(58, 36, 16, 0.08);
}

.theme-option {
  text-align: left;
}

.theme-option:focus,
.layout-option:focus-within,
.language-item:focus,
.toggle-row input:focus + .slider {
  outline: none;
  box-shadow: var(--lux-ring, 0 0 0 3px rgba(180, 136, 82, 0.14));
}

.theme-preview,
.layout-preview {
  position: relative;
  display: inline-grid;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(96, 74, 48, 0.14);
}

.theme-preview {
  width: 62px;
  height: 62px;
  grid-template-columns: 14px 1fr;
  gap: 5px;
  padding: 6px;
}

.theme-preview span:nth-child(1) {
  border-radius: 10px;
}

.theme-preview span:nth-child(2),
.theme-preview span:nth-child(3) {
  border-radius: 10px;
}

.theme-preview span:nth-child(2) {
  height: 16px;
}

.theme-preview span:nth-child(3) {
  margin-top: auto;
  height: 28px;
}

.theme-preview--light {
  background: #f8f2e7;
}

.theme-preview--light span:nth-child(1) {
  background: linear-gradient(180deg, #efe1cc, #e5d3b8);
}

.theme-preview--light span:nth-child(2) {
  background: #fffdf8;
}

.theme-preview--light span:nth-child(3) {
  background: linear-gradient(180deg, #d2b183, #b48852);
}

.theme-preview--dark {
  background: #17120f;
}

.theme-preview--dark span:nth-child(1) {
  background: linear-gradient(180deg, #2d241e, #241c17);
}

.theme-preview--dark span:nth-child(2) {
  background: #201914;
}

.theme-preview--dark span:nth-child(3) {
  background: linear-gradient(180deg, #f0d5a4, #d6b17a);
}

.theme-copy,
.option-copy {
  display: block;
  text-align: left;
}

.theme-copy strong,
.option-copy strong,
.toggle-row strong {
  display: block;
  font-size: 0.92rem;
  margin-bottom: 0.18rem;
}

.theme-check {
  color: var(--lux-accent-strong, #8b622f);
}

.layout-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.layout-preview {
  width: 70px;
  height: 56px;
  padding: 6px;
  background: #f6efe4;
}

.layout-preview--rail {
  grid-template-columns: 10px 18px 1fr;
  gap: 5px;
}

.layout-preview--rail .rail,
.layout-preview--rail .panel,
.layout-preview--rail .canvas,
.layout-preview--column .column,
.layout-preview--column .canvas {
  border-radius: 10px;
}

.layout-preview--rail .rail {
  background: linear-gradient(180deg, #d4ba93, #b48852);
}

.layout-preview--rail .panel {
  background: #ebe0cf;
}

.layout-preview--rail .canvas {
  background: #fffdf8;
}

.layout-preview--column {
  grid-template-columns: 22px 1fr;
  gap: 6px;
}

.layout-preview--column .column {
  background: linear-gradient(180deg, #3a2f25, #201812);
}

.layout-preview--column .canvas {
  background: linear-gradient(180deg, #fffdf8, #f3eadc);
}

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));
  background: rgba(255, 251, 245, 0.72);
}

.language-list {
  display: grid;
  gap: 0.65rem;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.85rem 0.9rem;
  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));
  border-radius: 16px;
  background: rgba(255, 251, 245, 0.74);
  color: var(--lux-text, #2f261d);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.language-item:hover {
  transform: translateY(-1px);
  border-color: rgba(180, 136, 82, 0.28);
  background: rgba(180, 136, 82, 0.08);
}

.flag-icon {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  object-fit: cover;
  box-shadow: 0 4px 14px rgba(58, 36, 16, 0.12);
}

body.dark-theme .theme-option,
body.dark-theme .layout-option,
body.dark-theme .toggle-row,
body.dark-theme .language-item {
  background: rgba(31, 27, 24, 0.82);
}

body.dark-theme .layout-preview {
  background: #17120f;
}

body.dark-theme .layout-preview--rail .panel {
  background: #2a221b;
}

body.dark-theme .layout-preview--rail .canvas,
body.dark-theme .layout-preview--column .canvas {
  background: #231c17;
}
</style>
