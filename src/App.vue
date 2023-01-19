<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/Section/Header.vue";

export default defineComponent({
  components: { AppHeader },
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

    <section class="container"></section>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";

#app {
  overflow: hidden;
  padding-bottom: 56px;

  @include --tablet {
    padding-bottom: 43px;
  }
}
</style>
