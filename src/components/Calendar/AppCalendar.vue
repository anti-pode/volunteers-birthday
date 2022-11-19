<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCalendar",
  setup() {},
});
</script>

<template>
  <section class="calendar">
    <header class="calendar-header">
      <h2>Рождественский</h2>
      <h3>адвент-календарь</h3>
    </header>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/fonts";
@import "@/assets/styles/colors";

.calendar {
  width: 100%;
  height: 500px;
  margin: 56px 0 40px 0;
  background: url("@/assets/icons/main-background.svg") no-repeat top center /
    100%;
}

.calendar-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 185px;

  h2 {
    margin-bottom: 12px;
    color: $color-primary;
    font-family: $font-creative;
    font-weight: 400;
    font-size: 80px;
    line-height: 100%;
  }

  h3 {
    font-family: $font-title;
    font-weight: 600;
    font-size: 40px;
    line-height: 100%;
  }
}
</style>
