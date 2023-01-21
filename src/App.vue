<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";

import AppHeader from "@/components/Section/Header.vue";
import AppBackground from "@/components/Section/Background.vue";
import AppFirstSlide from "@/components/Section/FirstSlide.vue";
import AppInfoSlide from "@/components/Section/InfoSlide.vue";

import info from "@/api/items";
import AppItemsSlide from "@/components/Section/ItemsSlide.vue";

export default defineComponent({
  components: { AppItemsSlide, AppInfoSlide, AppFirstSlide, AppBackground, AppHeader },
  setup() {
    const { VITE_SUPPORT_LINK } = import.meta.env;
    const emitter = inject("emitter");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slide = (entry.target as HTMLElement).dataset.slide;
          if (!slide) return;

          (emitter as any).emit("slide:update", parseInt(slide));
        }
      });
    });

    onMounted(() => {
      const arr = document.querySelectorAll(".js-tree-change-line");
      arr.forEach((i) => {
        observer.observe(i);
      });
    });

    return {
      VITE_SUPPORT_LINK,
      info,
    };
  },
});
</script>

<template>
  <div id="#app">
    <AppHeader />
    <AppBackground />

    <AppFirstSlide />

    <template v-for="(slide, index) in info" :key="slide.title">
      <AppInfoSlide :title="slide.title" :subtitle="slide.subtitle" :text="slide.text" :slide="index + 1" />

      <AppItemsSlide :items="slide.items" :slide="index + 1" />
    </template>
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
