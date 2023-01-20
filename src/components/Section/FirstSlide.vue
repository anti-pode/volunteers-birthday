<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFirstSlide",
});
</script>

<template>
  <section class="first-slide container">
    <div class="first-slide__content">
      <h1>19 лет</h1>
      <h2>нашему фонду!</h2>
      <h3>Вступительный текст в 3 строки Вступительный текст в 3 строки Вступительный текст в 3 строки</h3>
    </div>

    <div class="first-slide__images">
      <div class="first-slide__images-left">
        <img src="/src/assets/images/first-slide-left.png" alt="" />
      </div>

      <div class="first-slide__images-right">
        <img src="/src/assets/images/first-slide-right.png" alt="" />
      </div>
    </div>

    <div class="first-slide__sign">
      <img src="/src/assets/icons/sign.svg" alt="" />

      <span>листайте</span>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";
@import "@/assets/styles/fonts";
@import "@/assets/styles/variables";
.first-slide {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  pointer-events: none;

  @include --mobile {
    flex-direction: column;
  }

  &__content {
    max-width: 400px;
    font-family: $font-title;
    text-align: center;

    h1 {
      margin-bottom: -10px;
      font-weight: 700;
      font-size: 120px;
      line-height: 100%;

      @include --mobile {
        margin-bottom: 8px;
        font-size: 64px;
      }
    }

    h2 {
      margin-bottom: 16px;
      font-family: $font-title-italic;
      font-weight: 300;
      font-size: 67px;
      line-height: 100%;
      font-style: italic;

      @include --mobile {
        font-size: 24px;
      }
    }

    h3 {
      max-width: 393px;
      font-family: $font-main;
      font-weight: 400;
      font-size: 18px;
      line-height: 156%;

      @include --mobile {
        font-size: 14px;
      }
    }
  }

  &__images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @include --from-mobile {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
    }

    @include --mobile {
      max-width: 400px;
      margin-top: 40px;
    }
  }

  &__images-left {
    width: 226px;
    height: 421px;

    @include --tablet {
      width: 137px;
      height: 256px;
    }
  }

  &__images-right {
    width: 251px;
    height: 404px;

    @include --tablet {
      width: 154px;
      height: 247px;
    }
  }

  &__sign {
    position: absolute;
    bottom: 32px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);

    img {
      width: 32px;
      height: 52px;
      margin-bottom: 4px;

      @include --mobile {
        width: 25px;
        height: 40px;
      }
    }
  }
}
</style>
