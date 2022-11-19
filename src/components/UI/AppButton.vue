<script lang="ts">
import { defineComponent } from "vue";

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
  },
  setup() {},
});
</script>

<template>
  <a
    :href="href"
    class="btn btn-primary"
    target="_blank"
    rel="noreferrer nofollow"
    >{{ text }}</a
  >
</template>

<style lang="scss" scoped>
@import "@/assets/styles/fonts";
@import "@/assets/styles/colors";

.btn {
  display: inline-block;
  margin: 0;
  padding: 16px 24px;
  border: 0;
  border-radius: 3px;
  color: $color-text;
  background: $color-green;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background: $color-green-hover;
  }

  &:active {
    background: $color-green-active;
  }
}
</style>
