<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export enum ButtonTypes {
  Fill = "btn-fill",
  Outline = "btn-outline",
}

export enum ButtonSizes {
  Small = "btn-sm",
  Middle = "btn-md",
}

export enum ButtonColors {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
}

export default defineComponent({
  name: "AppButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<ButtonTypes>,
      default: ButtonTypes.Fill,
    },
    size: {
      type: String as PropType<ButtonSizes>,
      default: ButtonSizes.Middle,
    },
    color: {
      type: String as PropType<ButtonColors>,
      default: ButtonColors.Primary,
    },
  },
  setup() {},
});
</script>

<template>
  <a :href="href" :class="['btn', type, color, size]" target="_blank" rel="noreferrer nofollow"
    ><span>{{ text }}</span></a
  >
</template>

<style lang="scss" scoped>
@import "@/assets/styles/fonts";
@import "@/assets/styles/colors";
@import "@/assets/styles/breakpoints";

.btn {
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  text-align: center;

  span {
    color: $color-text;
  }
}

/* Тип кнопки */

.btn-fill {
  background: currentColor;
}

.btn-outline {
  border: 1px solid currentColor;
  background: #fff;

  &:hover,
  &:active {
    border-color: transparent;
  }
}

/* Цвет кнопки */

.btn-primary {
  color: $color-primary;

  &:hover {
    background: $color-primary-hover;
  }

  &:active {
    background: $color-primary-active;
  }
}

.btn-secondary {
  color: $color-accent;

  &:hover {
    background: $color-accent-hover;
  }

  &:active {
    background: $color-accent-active;
  }
}

/* Размер кнопки */

.btn-sm {
  padding: 8px 24px;
  font-size: 16px;
}

.btn-md {
  padding: 16px 24px;
  font-size: 18px;

  @include --mobile-sm {
    width: 100%;
    padding: 11px 24px;
    border-radius: 10px;
    font-size: 16px;
  }
}
</style>
