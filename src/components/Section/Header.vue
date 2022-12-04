<script lang="ts">
import { defineComponent, ref } from "vue";

import AppButton, { ButtonTypes, ButtonSizes, ButtonColors } from "@/components/UI/Button.vue";
import AppBurger from "@/components/Section/Burger.vue";
import AppMobileMenu from "@/components/Section/MobileMenu.vue";

export default defineComponent({
  name: "AppHeader",
  components: { AppMobileMenu, AppBurger, AppButton },
  setup() {
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
    };
  },
});
</script>

<template>
  <header class="app-header">
    <section class="app-header__container container">
      <div class="app-header__logo">
        <a href="/" class="app-header__link">
          <img src="/src/assets/icons/arrow-left.svg" alt="" />
        </a>

        <img src="/src/assets/icons/logo.svg" alt="" />

        <span>Новый год 2023</span>
      </div>

      <div class="app-header__controls">
        <AppButton
          text="Поддержать фонд"
          href="https://www.google.ru/"
          :color="ButtonColors.Secondary"
          :size="ButtonSizes.Small"
        />
        <AppButton
          text="Стать волонтером"
          href="https://www.google.ru/"
          :color="ButtonColors.Secondary"
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
  background-color: #fff;

  @include --tablet {
    padding: 24px 0;
  }

  @include --mobile {
    padding: 12px 0;
  }

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__link {
    margin-right: 14px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;

    > img {
      width: 45px;
      height: 33px;
      margin-right: 16px;
    }

    span {
      font-size: 20px;

      @include --mobile {
        font-size: 16px;
      }
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
