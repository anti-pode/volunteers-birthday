<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IItem } from "@/api/items.types";
import AppInfoBlock from "@/components/InfoBlock/InfoBlock.vue";

export default defineComponent({
  name: "AppItemsSlide",
  components: { AppInfoBlock },
  props: {
    items: {
      type: Array as PropType<IItem[]>,
      required: true,
    },
    slide: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const half = Math.ceil(props.items.length / 2);
    const leftItems = props.items.slice(0, half);
    const rightItems = props.items.slice(half);

    return {
      leftItems,
      rightItems,
    };
  },
});
</script>

<template>
  <section class="items-slide container">
    <div class="items-slide__content">
      <div class="items-slide__left-column" :class="{ _line: leftItems.length > 1 }">
        <AppInfoBlock v-for="(item, index) in leftItems" :key="index" v-bind="item" />
      </div>

      <div class="items-slide__right-column" :class="{ _line: rightItems.length > 1 }">
        <AppInfoBlock v-for="(item, index) in rightItems" :key="index" v-bind="item" class="_reverse" />
      </div>

      <div class="items-slide__all-column" :class="{ _line: items.length > 1 }">
        <AppInfoBlock v-for="(item, index) in items" :key="index" v-bind="item" />
      </div>
    </div>

    <div class="items-slide__trigger-line js-tree-change-line" :data-slide="slide"></div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";

.items-slide {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 200px 0;

  @include --tablet {
    padding: 100px 0;
  }

  @include --mobile {
    padding: 80px 0;
  }

  &__trigger-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 100px;

    @include --tablet {
      padding: 0 50px;
    }

    @include --mobile {
      justify-content: center;
      padding: 0;
    }
  }

  &__left-column {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 70px;

    @include --mobile {
      display: none;
    }

    &._line {
      &::after {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        z-index: -1;
        width: 1px;
        background: #49413c;
        content: "";
      }
    }
  }

  &__right-column {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 70px;

    @include --mobile {
      display: none;
    }

    &._line {
      &::after {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        z-index: -1;
        width: 1px;
        background: #49413c;
        content: "";
      }
    }
  }

  &__all-column {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 70px;

    @include --from-mobile {
      display: none;
    }

    &._line {
      &::after {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        z-index: -1;
        width: 1px;
        background: #49413c;
        content: "";
      }
    }
  }
}
</style>
