<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import type { Ref } from "vue";

export default defineComponent({
  name: "AppBaseModal",
  emits: ["close"],
  setup(_, ctx) {
    const body: Ref<HTMLElement | null> = ref(null);

    onMounted(() => {
      body.value = document.body;
      body.value?.classList.add("overflow-hidden");
    });

    const closePopup = () => {
      ctx.emit("close");
      body.value?.classList.remove("overflow-hidden");
    };

    return {
      closePopup,
    };
  },
});
</script>

<template>
  <section class="popup-overlay" @click="closePopup">
    <div class="popup" @click.stop>
      <button class="popup__close" @click="closePopup">
        <img src="@/assets/icons/close.svg" alt="" />
      </button>

      <div class="popup__content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/breakpoints";

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  padding: 40px 0;
  background-color: rgba(#000, 0.5);
  overflow: hidden auto;
}

.popup {
  position: relative;
  width: 618px;
  margin: 0 auto;
  padding: 48px 32px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
  border-radius: 8px;

  @include --mobile {
    width: 90%;
    max-width: 600px;
    padding: 28px 16px;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
