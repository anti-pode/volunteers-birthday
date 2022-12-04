<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType, Ref } from "vue";
import type { IItem, IPopup } from "@/api/items.types";
import { PopupTypes } from "@/api/items.types";
import AppBaseModal from "@/components/Modals/BaseModal.vue";
import AppPromoModal from "@/components/Modals/PromoModal.vue";
import AppPersonalModal from "@/components/Modals/PersonalModal.vue";
import AppStoryModal from "@/components/Modals/StoryModal.vue";

export default defineComponent({
  name: "AppCalendar",
  components: { AppPersonalModal, AppBaseModal, AppPromoModal, AppStoryModal },
  props: {
    items: {
      type: Array as PropType<IItem[]>,
      required: true,
    },
  },
  setup() {
    const activeModal: Ref<IPopup | null> = ref(null);

    const setActiveModal = (item: IPopup, isActive: boolean) => {
      if (!isActive) return;

      activeModal.value = item;
    };

    const clearActiveModal = () => {
      activeModal.value = null;
    };

    const getModalByType = (type: PopupTypes): string => {
      switch (type) {
        case PopupTypes.Promo:
          return "AppPromoModal";
        case PopupTypes.Personal:
          return "AppPersonalModal";
        case PopupTypes.Story:
          return "AppStoryModal";
        default:
          return "";
      }
    };

    const imagePath = (number: string): string => {
      return `/src/assets/icons/calendar/${number}.svg`;
    };

    return {
      PopupTypes,
      activeModal,
      setActiveModal,
      clearActiveModal,
      getModalByType,
      imagePath,
    };
  },
});
</script>

<template>
  <section class="calendar">
    <header class="calendar__header">
      <h2>Рождественский</h2>
      <h3>адвент-календарь</h3>
    </header>

    <div class="calendar__content">
      <div class="calendar-items">
        <div
          v-for="item in items"
          :key="item.id"
          :class="['calendar-item', { active: item.isActive }]"
          @click="setActiveModal(item.popup, item.isActive)"
        >
          <img :src="imagePath(item.icon)" alt="" />
        </div>
      </div>
    </div>

    <teleport to="body">
      <AppBaseModal v-if="activeModal" @close="clearActiveModal">
        <component :is="getModalByType(activeModal.type)" v-bind="activeModal" />
      </AppBaseModal>
    </teleport>

    <div class="calendar__footer-image">
      <img src="/src/assets/icons/snow.svg" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/fonts";
@import "@/assets/styles/colors";
@import "@/assets/styles/breakpoints";

.calendar {
  position: relative;
  width: 100%;
  margin: 56px 0 40px 0;
  background: url("@/assets/icons/main-background.svg") no-repeat top center / 100%;

  @include --tablet {
    margin: 40px 0 10px 0;
    background-image: url("@/assets/icons/main-background-tablet.svg");
  }

  @include --mobile {
    margin-bottom: 30px;
    background-image: url("@/assets/icons/main-background-mobile.svg");
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 0;
    height: 300px;
    width: 100vw;
    background-color: #fff;
    transform: translate(-50vw, 278px);
    content: "";

    @include --mobile-sm {
      transform: translate(-50vw, 290px);
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 185px;

    @include --tablet {
      padding-top: 15vw;
    }

    @include --mobile-sm {
      padding-top: 54px;
    }

    h2 {
      margin-bottom: 12px;
      color: #11574f;
      font-family: $font-creative;
      font-weight: 400;
      font-size: 80px;
      line-height: 100%;

      @include --tablet {
        font-size: 48px;
      }

      @include --mobile {
        margin-bottom: 4px;
        font-size: 34px;
      }

      @include --mobile-sm {
        font-size: 28px;
      }
    }

    h3 {
      font-family: $font-title;
      font-weight: 600;
      font-size: 40px;
      line-height: 100%;

      @include --tablet {
        font-size: 24px;
      }

      @include --mobile {
        font-size: 20px;
      }

      @include --mobile-sm {
        font-size: 16px;
      }
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin-top: 22px;

    @include --tablet {
      margin-top: 18px;
    }
  }

  &__footer-image {
    position: absolute;
    bottom: -150px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 192px;

    @include --mobile {
      bottom: -160px;
    }

    @include --mobile-sm {
      bottom: -180px;
    }
  }
}

.calendar-items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4px;
  padding: 0 60px;

  @include --tablet {
    grid-template-columns: repeat(4, 1fr);
  }

  @include --mobile {
    padding: 0 20px;
  }

  @include --mobile-sm {
    grid-template-columns: repeat(2, 1fr);
  }
}

.calendar-item {
  position: relative;
  cursor: pointer;

  @include --tablet {
    &:last-child {
      display: none;
    }
  }

  &:not(.active) {
    pointer-events: none;

    &::after {
      display: block;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.5;
    content: "";
  }
}
</style>
