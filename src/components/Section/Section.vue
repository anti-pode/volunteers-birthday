<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSection",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<template>
  <section class="section">
    <header class="section__title">
      <h1>{{ title }}</h1>
    </header>

    <section class="section__content">
      <slot></slot>
    </section>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles/fonts";
@import "@/assets/styles/colors";
@import "@/assets/styles/breakpoints";

.section {
  position: relative;
  margin-top: 86px;
  padding: 0 30px;

  &::before {
    position: absolute;
    top: 60px;
    left: 50%;
    z-index: -1;
    width: 100vw;
    height: 100%;
    max-width: 1366px;
    transform: translate(-50%, 0);
    background: url("@/assets/icons/background/stars1.png") no-repeat top center / 100%;
    content: "";

    @include --tablet {
      top: 0;
      background-image: url("@/assets/icons/background/stars1-tablet.png");
    }

    @include --mobile {
      top: 32px;
      height: 252px;
      background-image: url("@/assets/icons/background/stars1-mobile.png");
    }
  }

  @include --tablet {
    margin-top: 43px;
    padding: 0;
  }

  @include --mobile {
    margin-top: 32px;
  }

  &__title {
    max-width: 768px;
    margin-bottom: 32px;

    @include --mobile {
      margin-bottom: 16px;
    }

    h1 {
      font-family: $font-title;
      font-weight: 700;
      font-size: 72px;
      line-height: 1;

      @include --mobile {
        font-size: 32px;
      }
    }
  }

  &__content {
    max-width: 768px;
    font-weight: 300;

    b {
      font-weight: 400;
    }

    p {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 12px;

        @include --mobile {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
