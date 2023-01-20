<script lang="ts">
import { defineComponent } from "vue";
import AppTextContent from "@/components/UI/TextConent.vue";

export default defineComponent({
  name: "AppInfoSlide",
  components: { AppTextContent },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <section class="info-slide container">
    <div class="info-slide__content">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>

      <div class="info-slide__text">
        <AppTextContent :text="text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";
@import "@/assets/styles/fonts";
@import "@/assets/styles/variables";
.info-slide {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @include --mobile {
    flex-direction: column;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 880px;
    padding: 40px 100px;
    font-family: $font-title;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;

    @include --mobile {
      width: calc(100% + 10px);
      padding: 16px 8px;
      border-radius: 8px;
    }

    h2 {
      font-weight: 700;
      font-size: 120px;
      line-height: 100%;

      @include --tablet {
        margin-bottom: 8px;
        font-size: 80px;
      }

      @include --mobile {
        margin-bottom: 8px;
        font-size: 56px;
      }
    }

    h3 {
      margin-bottom: 40px;
      font-family: $font-title;
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;

      @include --tablet {
        margin-bottom: 24px;
        font-size: 24px;
      }

      @include --mobile {
        font-size: 18px;
      }
    }
  }

  &__text {
    font-family: $font-main;
    max-width: 570px;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
  }
}
</style>
