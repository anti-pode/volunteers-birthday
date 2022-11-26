<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/UI/AppButton.vue";

export default defineComponent({
  name: "AppPromoModal",
  components: { AppButton },
  props: {
    title: {
      type: String,
      required: true,
    },
    gift: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const copyCodeToClipboard = () => {
      navigator.clipboard.writeText(props.code);
    };

    return {
      copyCodeToClipboard,
    };
  },
});
</script>

<template>
  <section class="promo-popup">
    <header class="promo-popup__header">
      <img src="/src/assets/icons/gift.svg" alt="" />

      <h3 class="promo-popup__title">{{ title }}</h3>
    </header>

    <div class="promo-popup__content">
      <div class="promo-popup__info">{{ gift }}</div>

      <div class="promo-popup__code">
        {{ code }}

        <img src="/src/assets/icons/copy.svg" alt="" @click="copyCodeToClipboard" />
      </div>

      <div class="promo-popup__button">
        <AppButton text="Использовать промокод" :href="link" />
      </div>

      <div v-if="description" class="promo-popup__description">{{ description }}</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.promo-popup {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    img {
      width: 60px;
      height: 88px;
      margin-bottom: 8px;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
  }

  &__info {
    margin-bottom: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
  }

  &__code {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    padding: 4px 0;
    border-radius: 4px;
    background: #fffbf2;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;

    img {
      width: 24px;
      height: 24px;
      margin-left: 8px;
      cursor: pointer;
    }
  }

  &__button {
    .btn {
      width: 100%;
    }
  }

  &__description {
    margin-top: 24px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }
}
</style>
