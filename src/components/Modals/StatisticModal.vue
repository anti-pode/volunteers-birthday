<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { StatisticItem } from "@/api/items.types";

import AppButton from "@/components/UI/Button.vue";
import AppSocials from "@/components/UI/Socials.vue";

export default defineComponent({
  name: "AppStatisticModal",
  components: { AppButton, AppSocials },
  props: {
    items: {
      type: Array as PropType<StatisticItem[]>,
      required: true,
    },
  },
  setup(props) {
    const { VITE_SUPPORT_LINK } = import.meta.env;

    const isLastItemWide = props.items.length % 2 !== 0;

    return {
      VITE_SUPPORT_LINK,
      isLastItemWide,
    };
  },
});
</script>

<template>
  <article class="statistic-popup">
    <div class="statistic-popup__items" :class="{ '_last-wide': isLastItemWide }">
      <div v-for="item in items" :key="item.title" class="statistic-popup__item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </div>
    </div>

    <section class="statistic-popup__socials">
      <AppSocials />
    </section>

    <div class="statistic-popup__button">
      <AppButton text="Поддержать фонд" :href="VITE_SUPPORT_LINK" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/breakpoints";

.statistic-popup {
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 16px;

    @include --mobile {
      gap: 16px;
    }

    &._last-wide {
      > :last-child {
        width: 100%;
      }
    }
  }

  &__item {
    width: calc(50% - 8px);

    @include --mobile {
      width: 100%;
      text-align: center;
    }

    h2 {
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 48px;
      line-height: 36px;
    }
  }

  &__button {
    margin-top: 24px;

    .btn {
      width: 100%;
    }
  }
}
</style>
