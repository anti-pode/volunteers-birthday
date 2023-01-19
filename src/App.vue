<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/Section/Header.vue";
import AppBackground from "@/components/Section/Background.vue";
import AppFirstSlide from "@/components/Section/FirstSlide.vue";

export default defineComponent({
  components: { AppFirstSlide, AppBackground, AppHeader },
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

    <AppFirstSlide />

    <section class="container"></section>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";
@import "@/assets/styles/variables";

#app {
  overflow: hidden;
  //padding-top: $header-height;

  @include --tablet {
    //padding-top: $header-height-tablet;
  }

  @include --mobile {
    //padding-top: $header-height-mobile;
  }
}
</style>
