<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

// @ts-ignore
import "@/assets/libs/yandex-share.js";

export default defineComponent({
  name: "AppShareButton",
  props: {
    shareUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const share = ref<HTMLElement | null>(null);

    onMounted(() => {
      // @ts-ignore
      window.Ya.share2(share.value, {
        content: {
          description:
            "Мы постарались объяснить, в каких случаях стоит дарить подарок, а в каких — выбрать другой вид помощи.",
          image: "https://otkazniki.ru/upload/iblock/f89/f892d9a9b3681c428a5567c9ac59b421.jpg",
          url: props.shareUrl,
          title: "Дарить или не дарить. О новогодних подарках в детские дома",
        },

        theme: {
          services: "vkontakte,telegram,odnoklassniki,viber,whatsapp",
          lang: "ru",
          copy: "first",
          curtain: true,
          shape: "round",
          size: "l",
        },
      });
    });

    return {
      share,
    };
  },
});
</script>

<template>
  <div class="share">
    <p class="share__text">Поделиться в соцсетях:</p>

    <div ref="share" class="ya-share2"></div>
  </div>
</template>

<style lang="scss" scoped>
.share {
  &__text {
    margin: 0 0 8px;
  }

  ::v-deep(.ya-share2) {
    .ya-share2__item {
      margin: 0 8px 0 0;

      .ya-share2__icon {
        width: 40px;
        height: 40px;
        background-size: 80%;
      }
    }
  }
}
</style>
