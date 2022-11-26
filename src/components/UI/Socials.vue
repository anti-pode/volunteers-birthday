<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSocials",
  setup() {
    const socials = [
      {
        name: "vk",
        icon: "/src/assets/icons/socials/vk.svg",
        link: "https://vk.com/otkaznikiru",
      },
      {
        name: "tg",
        icon: "/src/assets/icons/socials/tg.svg",
        link: "https://t.me/otkazniki",
      },
      {
        name: "ok",
        icon: "/src/assets/icons/socials/ok.svg",
        link: "https://ok.ru/bfotkaznikiru",
      },
      {
        name: "yt",
        icon: "/src/assets/icons/socials/yt.svg",
        link: "https://www.youtube.com/user/otkazniki/videos",
      },
      {
        name: "yd",
        icon: "/src/assets/icons/socials/yd.svg",
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
.socials {
  &__text {
    margin: 0 0 8px;
    font-weight: 400;
    font-size: 16px;
  }

  &__items {
    display: flex;
    column-gap: 8px;
  }
}
</style>
