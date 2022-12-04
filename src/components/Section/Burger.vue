<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBurger",
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<template>
  <div class="app-burger">
    <svg v-if="isOpen" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.8862 32.7723C25.6598 32.7723 32.7723 25.6598 32.7723 16.8862C32.7723 8.11248 25.6598 1 16.8862 1C8.11248 1 1 8.11248 1 16.8862C1 25.6598 8.11248 32.7723 16.8862 32.7723Z"
        fill="currentColor"
        stroke="#AED57C"
        stroke-width="0.5"
      />
      <path
        d="M10.2495 11.1865V12.3115H23.7495V11.1865H10.2495ZM10.2495 15.6865V16.8115H23.7495V15.6865H10.2495ZM10.2495 20.1865V21.3115H23.7495V20.1865H10.2495Z"
        fill="#AED57C"
      />
    </svg>

    <svg v-else width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.8862 32.7723C25.6598 32.7723 32.7723 25.6598 32.7723 16.8862C32.7723 8.11248 25.6598 1 16.8862 1C8.11248 1 1 8.11248 1 16.8862C1 25.6598 8.11248 32.7723 16.8862 32.7723Z"
        fill="currentColor"
        stroke="#AED57C"
        stroke-width="0.5"
      />
      <path
        d="M12.0601 10.501L11.2515 11.3096L16.1909 16.249L11.2515 21.1885L12.0601 21.9971L16.9995 17.0576L21.939 21.9971L22.7476 21.1885L17.8081 16.249L22.7476 11.3096L21.939 10.501L16.9995 15.4404L12.0601 10.501Z"
        fill="#AED57C"
      />
    </svg>
  </div>
</template>

<style lang="scss">
.app-burger {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
