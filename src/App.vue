<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/Section/Header.vue";
import AppBackground from "@/components/Section/Background.vue";

export default defineComponent({
  components: { AppBackground, AppHeader },
  setup() {
    const { VITE_SUPPORT_LINK } = import.meta.env;

    return {
      VITE_SUPPORT_LINK,
    };
  },
});
</script>

<template>
  <div id="#app">
    <AppHeader />
    <AppBackground />

    <section class="container"></section>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";

#app {
  //position: relative;
  //z-index: 0;
  overflow: hidden;
  padding-top: 118px;
  padding-bottom: 56px;

  @include --tablet {
    padding-top: 100px;
    padding-bottom: 43px;
  }

  @include --mobile {
    padding-top: 77px;
  }
}
</style>
