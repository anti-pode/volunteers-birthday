<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBackground",
});
</script>

<template>
  <header class="app-background">
    <div class="app-background__back">
      <div class="app-background__top-circle">
        <img src="/src/assets/icons/background/right-top-circle.svg" alt="" />
      </div>
      <div class="app-background__bottom-circle">
        <img src="/src/assets/icons/background/left-bottom-circle.svg" alt="" />
      </div>
    </div>

    <div class="app-background__front">
      <div class="app-background__center-element">
        <img src="/src/assets/icons/background/center-element.png" alt="" />
      </div>
      <div class="app-background__left-elements">
        <img src="/src/assets/icons/background/left-elements.png" alt="" />
      </div>
      <div class="app-background__right-elements">
        <img src="/src/assets/icons/background/right-elements.png" alt="" />
      </div>
    </div>

    <div class="app-background__mobile">
      <div class="app-background__top-circle">
        <img src="/src/assets/icons/background/right-top-circle-mobile.svg" alt="" />
      </div>
      <div class="app-background__bottom-circle">
        <img src="/src/assets/icons/background/left-bottom-circle-mobile.svg" alt="" />
      </div>
      <div class="app-background__elements">
        <picture>
          <source srcset="/src/assets/icons/background/elements-mobile@2x.png" media="(min-width: 400px)" />
          <img src="/src/assets/icons/background/elements-mobile.png" alt="" />
        </picture>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";
.app-background {
  pointer-events: none;

  &__back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    @include --mobile {
      display: none;
    }
  }

  &__front {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100%;
    width: 100%;
    max-width: 1366px;
    z-index: -1;
    transform: translateX(-683px);

    @include --custom(1366px) {
      transform: translateX(-50vw);
    }

    @include --mobile {
      display: none;
    }
  }

  &__mobile {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

    @include --from-mobile {
      display: none;
    }
  }

  &__top-circle {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__bottom-circle {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &__left-elements {
    position: absolute;
    top: 48px;
    left: 23px;
  }

  &__center-element {
    position: absolute;
    top: 48px;
    left: calc(50% - 50px);
    z-index: 0;

    @include --custom(1150px) {
      left: 400px;
    }

    @include --tablet {
      display: none;
    }
  }

  &__right-elements {
    position: absolute;
    top: 125px;
    right: 14px;
  }

  &__elements {
    position: absolute;
    top: 89px;
    left: 0;
    width: 100%;

    @include --from-mobile {
      display: none;
    }

    picture,
    img {
      width: 100%;
    }
  }
}
</style>
