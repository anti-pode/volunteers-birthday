<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/Section/Header.vue";
import AppBackground from "@/components/Section/Background.vue";
import AppFirstSlide from "@/components/Section/FirstSlide.vue";
import AppInfoSlide from "@/components/Section/InfoSlide.vue";

export default defineComponent({
  components: { AppInfoSlide, AppFirstSlide, AppBackground, AppHeader },
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

    <AppInfoSlide
      title="2017 — 2020"
      subtitle="Системная работа и работа со сложными случаями и категориями подопечных"
      text="<p>Волонтеры работают с выпускниками детских домов для детей с инвалидностью - молодыми людьми в ПНИ.</p><p>Открылась Школа приемных родителей и специальные модули, чтобы родители лучше понимали проблемы подростков, детей с ОВЗ. Мы впервые ищем семьи для временного размещения детей. Разработаны поправки в законодательство, чтобы не разделяли братьев и сестер и не переводили детей из одного учреждения в другое.</p>"
    />

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
