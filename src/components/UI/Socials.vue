<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSocials",
  setup() {
    const socials = [
      {
        name: "vk",
        icon: new URL(`/src/assets/icons/socials/vk.svg`, import.meta.url).href,
        link: "https://vk.com/otkaznikiru",
      },
      {
        name: "tg",
        icon: new URL(`/src/assets/icons/socials/tg.svg`, import.meta.url).href,
        link: "https://t.me/otkazniki",
      },
      {
        name: "ok",
        icon: new URL(`/src/assets/icons/socials/ok.svg`, import.meta.url).href,
        link: "https://ok.ru/bfotkaznikiru",
      },
      {
        name: "yt",
        icon: new URL(`/src/assets/icons/socials/yt.svg`, import.meta.url).href,
        link: "https://www.youtube.com/user/otkazniki/videos",
      },
      {
        name: "yd",
        icon: new URL(`/src/assets/icons/socials/yd.svg`, import.meta.url).href,
        link: "https://dzen.ru/id/5cb4865f24122700afbddb59",
      },
    ];

    return {
      socials,
    };
  },
});
</script>

<template>
  <div class="socials">
    <p class="socials__text">Наш фонд в соцсетях:</p>

    <div class="socials__items">
      <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank" rel="noreferrer nofollow">
        <img :src="social.icon" :alt="social.name" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/breakpoints";

.socials {
  &__text {
    margin: 0 0 8px;
    font-weight: 400;
    font-size: 16px;

    @include --mobile {
      text-align: center;
    }
  }

  &__items {
    display: flex;
    column-gap: 8px;

    @include --mobile {
      justify-content: center;
    }
  }
}
</style>
