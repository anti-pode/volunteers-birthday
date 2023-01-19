<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import type { Ref } from "vue";

import AppBurger from "@/components/Section/Burger.vue";

export default defineComponent({
  name: "AppMobileMenu",
  components: { AppBurger },
  emits: ["close"],
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const { VITE_SUPPORT_LINK, VITE_VOLUNTEERS_LINK } = import.meta.env;
    const body: Ref<HTMLElement | null> = ref(null);

    onMounted(() => {
      body.value = document.body;
    });

    watch(
      () => props.isActive,
      (state: boolean) => {
        body.value?.classList.toggle("overflow-hidden", state);
      }
    );

    const closeMobileMenu = () => {
      ctx.emit("close");
      body.value?.classList.remove("overflow-hidden");
    };

    return {
      closeMobileMenu,
      VITE_SUPPORT_LINK,
      VITE_VOLUNTEERS_LINK,
    };
  },
});
</script>

<template>
  <section :class="['app-mobile-menu', { _active: isActive }]" @click="closeMobileMenu">
    <section class="app-mobile-menu__panel" @click.stop>
      <header class="app-mobile-menu__header">
        <div class="app-mobile-menu__logo">
          <img src="/src/assets/icons/logo-small.svg" alt="" />
        </div>

        <div class="app-header__burger">
          <AppBurger @click="closeMobileMenu" :is-open="false" />
        </div>
      </header>

      <nav class="app-mobile-menu__content">
        <a :href="VITE_SUPPORT_LINK" class="app-mobile-menu__link" target="_blank" rel="noreferrer nofollow">
          <img src="/src/assets/icons/arrow-btn-primary.svg" alt="" />

          <span>Поддержать фонд</span>
        </a>

        <a :href="VITE_VOLUNTEERS_LINK" class="app-mobile-menu__link" target="_blank" rel="noreferrer nofollow">
          <img src="/src/assets/icons/arrow-btn-accent.svg" alt="" />

          <span>Стать волонтером</span>
        </a>
      </nav>

      <footer class="app-mobile-menu__footer">
        Благотворительный фонд «Волонтеры в помощь детям-сиротам». Свидетельство о регистрации №1077799002490 от 1
        февраля 2007 года.
      </footer>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/colors";
@import "@/assets/styles/fonts";
@import "@/assets/styles/breakpoints";

.app-mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(#979797, 0.6);
  transition: background-color 0.3s ease;

  @include --from-mobile {
    display: none;
  }

  &:not(._active) {
    opacity: 0;
    visibility: hidden;
    background-color: transparent;
  }

  &__panel {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    height: 100vh;
    background: #fff;
    transform: translate(100%, 0);
    transition: transform 0.5s ease;

    ._active & {
      transform: translate(0, 0);
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 13px 27px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 30px 16px 13px 27px;
  }

  &__link {
    display: flex;
    align-items: center;
    color: $color-text;
    text-decoration: none;
    font-family: $font-menu;
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 3px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }

    img {
      display: block;
      width: 36px;
      height: 36px;
      margin-right: 12px;
    }
  }

  &__footer {
    padding: 16px 8px;
    border-top: 1px solid #e9e9ea;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
  }
}
</style>
