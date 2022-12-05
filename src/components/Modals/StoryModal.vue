<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/UI/Button.vue";
import AppTextContent from "@/components/UI/TextConent.vue";
import AppSocials from "@/components/UI/Socials.vue";
import AppShareButton from "@/components/UI/ShareButton.vue";

export default defineComponent({
  name: "AppStoryModal",
  components: { AppShareButton, AppSocials, AppTextContent, AppButton },
  props: {
    tag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    video: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      required: true,
    },
    hasSocialBlock: {
      type: Boolean,
      default: false,
    },
    supportLink: {
      type: String,
      default: "",
    },
    shareUrl: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <article class="story-popup">
    <p class="story-popup__tag">{{ tag }}</p>
    <h3 class="story-popup__title">{{ title }}</h3>

    <div v-if="image" class="story-popup__image">
      <img :src="image" alt="" />
    </div>

    <div v-if="video" class="story-popup__video">
      <iframe :src="`https://www.youtube.com/embed/${video}?autoplay=1`" allowfullscreen />
    </div>

    <section class="story-popup__text">
      <AppTextContent :text="text" />
    </section>

    <section class="story-popup__socials">
      <AppSocials />
    </section>

    <div v-if="supportLink || shareUrl" class="story-popup__button">
      <AppButton v-if="supportLink" text="Поддержать фонд" :href="supportLink" />
      <AppShareButton v-else-if="shareUrl" :share-url="shareUrl" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/breakpoints";

.story-popup {
  &__tag {
    margin: 0 0 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;

    @include --mobile {
      font-size: 14px;
    }
  }

  &__title {
    margin: 0 0 8px;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;

    @include --mobile {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 16px;

    img {
      display: block;
      width: 100%;
    }
  }

  &__video {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
    padding-bottom: 56.2%;

    iframe {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
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
