<script lang="ts">
import { defineComponent, ref } from "vue";

import AppButton, { ButtonTypes, ButtonSizes, ButtonColors } from "@/components/UI/Button.vue";
import AppBurger from "@/components/Section/Burger.vue";
import AppMobileMenu from "@/components/Section/MobileMenu.vue";

export default defineComponent({
  name: "AppHeader",
  components: { AppMobileMenu, AppBurger, AppButton },
  setup() {
    const { VITE_SUPPORT_LINK, VITE_VOLUNTEERS_LINK } = import.meta.env;
    const isMobileMenuOpened = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpened.value = !isMobileMenuOpened.value;
    };

    return {
      toggleMobileMenu,
      isMobileMenuOpened,
      ButtonTypes: ButtonTypes,
      ButtonSizes: ButtonSizes,
      ButtonColors: ButtonColors,
      VITE_SUPPORT_LINK,
      VITE_VOLUNTEERS_LINK,
    };
  },
});
</script>

<template>
  <header class="app-header">
    <section class="app-header__container container">
      <div class="app-header__logo">
        <img src="/src/assets/icons/logo.svg" alt="" />
      </div>

      <div class="app-header__controls">
        <AppButton
          text="Поддержать фонд"
          :href="VITE_SUPPORT_LINK"
          :color="ButtonColors.Primary"
          :size="ButtonSizes.Small"
        />
        <AppButton
          text="Стать волонтером"
          :href="VITE_VOLUNTEERS_LINK"
          :color="ButtonColors.Primary"
          :size="ButtonSizes.Small"
          :type="ButtonTypes.Outline"
        />
      </div>

      <div class="app-header__burger">
        <AppBurger @click="toggleMobileMenu" :is-open="true" />
      </div>
    </section>

    <AppMobileMenu :is-active="isMobileMenuOpened" @close="toggleMobileMenu" />
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";
.app-header {
  padding: 32px 0;

  @include --tablet {
    padding: 24px 0;
  }

  @include --mobile {
    padding: 12px 0;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;

    > img {
      width: 183px;
      height: 53px;
    }
  }

  &__controls {
    display: flex;
    column-gap: 8px;

    @include --mobile {
      display: none;
    }
  }

  &__burger {
    display: flex;
    align-items: center;
    color: #fff;

    @include --from-mobile {
      display: none;
    }
  }
}
</style>
