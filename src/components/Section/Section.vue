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

.section {
  max-width: 768px;
  margin-top: 86px;

  &__title {
    margin-bottom: 32px;

    h1 {
      font-family: $font-title;
      font-weight: 700;
      font-size: 72px;
      line-height: 1;
    }
  }

  &__content {
    font-weight: 300;

    b {
      font-weight: 400;
    }

    p {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
