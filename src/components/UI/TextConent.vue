<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTextContent",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="text-content" v-html="text"></div>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";

.text-content {
  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0 0 8px;
  }

  ul {
    margin: 0 0 8px;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      padding: 0 0 0 24px;

      @include --mobile {
        padding-left: 20px;
      }

      &::before {
        position: absolute;
        top: 1px;
        left: 0;
        width: 16px;
        height: 20px;
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='10' r='3' fill='%23AED47C'/%3E%3C/svg%3E%0A");
        content: "";

        @include --mobile {
          top: 0;
        }
      }
    }
  }
}
</style>
