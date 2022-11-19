<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<template>
  <button class="btn btn-primary">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/fonts";
@import "@/assets/styles/colors";

.btn {
  display: block;
  margin: 0 auto;
  padding: 16px 24px;
  border: 0;
  border-radius: 3px;
  background: $color-green;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background: $color-green-hover;
  }

  &:active {
    background: $color-green-active;
  }
}
</style>
