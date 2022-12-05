<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/UI/Button.vue";
import AppTextContent from "@/components/UI/TextConent.vue";

export default defineComponent({
  name: "AppPersonalModal",
  components: { AppTextContent, AppButton },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    supportLink: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <article class="personal-popup">
    <h3 class="personal-popup__title">{{ title }}</h3>

    <div class="personal-popup__image">
      <img :src="image" alt="" />
    </div>

    <section class="personal-popup__text">
      <AppTextContent :text="text" />
    </section>

    <div class="personal-popup__author">{{ author }}</div>

    <div class="personal-popup__button">
      <AppButton text="Поддержать фонд" :href="supportLink" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/breakpoints";

.personal-popup {
  &__title {
    margin-bottom: 8px;
    padding-right: 30px;
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
    margin: 0 0 16px;

    img {
      display: block;
      width: 100%;
    }
  }

  &__author {
    margin-top: 8px;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #7e7e7e;

    @include --mobile {
      font-size: 14px;
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
