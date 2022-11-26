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
.text-content {
  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 8px;
  }
}
</style>
