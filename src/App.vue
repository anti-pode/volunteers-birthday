<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import AppCalendar from "@/components/Calendar/Calendar.vue";
import AppSection from "@/components/Section/Section.vue";
import AppButton from "@/components/UI/Button.vue";
import AppHeader from "@/components/Section/Header.vue";

// import mockItems from "@/api/items";
import type { IItem } from "@/api/items.types";

export default defineComponent({
  components: { AppButton, AppSection, AppCalendar, AppHeader },
  setup() {
    const items = ref<IItem[] | null>(null);

    onMounted(async () => {
      const _items = await fetch("https://otkazniki.ru/api/advent/", {
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });

      items.value = await _items.json();
    });

    return {
      items,
    };
  },
});
</script>

<template>
  <div id="#app">
    <AppHeader />

    <section class="container">
      <AppSection title="Адвент-календарь добрых дел">
        <p>
          <b>Дорогой друг! Поздравляем вас с&nbsp;Новым годом и&nbsp;Рождеством!</b>
        </p>
        <p>
          Наш фонд помогает детям, оказавшимся в&nbsp;сложной жизненной ситуации, в&nbsp;сиротских учреждениях, кровных
          и&nbsp;приемных семьях. Мы&nbsp;верим, что благодаря участию неравнодушных людей мы&nbsp;можем изменить судьбы
          этих детей к&nbsp;лучшему. Наша миссия&nbsp;&mdash; сделать все, чтобы дети жили в&nbsp;семье,
          а&nbsp;не&nbsp;в&nbsp;детских домах.
        </p>
        <p>
          Каждый день нашего адвент-календаря посвящен добрым делам. Вы&nbsp;узнаете о том, что нам уже удалось сделать
          в&nbsp;этом году благодаря вашей поддержке, как можно помочь фонду, какие дела могут стать полезными
          привычками. А еще мы&nbsp;приготовили для вас небольшие подарки.
        </p>
        <p>
          Открывайте окошки нашего календаря, делитесь историями, и&nbsp;пусть уходящий год для каждого из&nbsp;нас
          станет немного теплее.
        </p>
      </AppSection>

      <AppCalendar v-if="items && items.length > 0" :items="items" />

      <AppButton text="Поддержать фонд" href="https://www.google.ru/" />
    </section>
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

  .container {
    > .btn {
      position: relative;
      z-index: 3;
      display: table;
      margin: 0 auto;
    }
  }
}
</style>
