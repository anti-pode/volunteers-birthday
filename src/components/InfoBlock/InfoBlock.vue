<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType, Ref } from "vue";

import AppTextContent from "@/components/UI/TextConent.vue";
import AppBaseModal from "@/components/Modals/BaseModal.vue";
import AppStoryModal from "@/components/Modals/StoryModal.vue";
import AppStatisticPopup from "@/components/Modals/StatisticModal.vue";

import type { IStatisticPopup, IStoryPopup } from "@/api/items.types";
import { PopupTypes } from "@/api/items.types";

const TYPES = ["_statistic", "_story", "_text"];

export default defineComponent({
  name: "AppInfoBlock",
  components: { AppBaseModal, AppTextContent, AppStoryModal, AppStatisticPopup },
  props: {
    year: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
    popup: {
      type: Object as PropType<IStatisticPopup | IStoryPopup>,
      default: null,
    },
  },
  setup(props) {
    const type = props.popup ? TYPES[props.popup.type] : TYPES[2];

    const activeModal: Ref<IStatisticPopup | IStoryPopup | null> = ref(null);

    const setActiveModal = (popup: IStatisticPopup | IStoryPopup) => {
      if (!popup) return;

      activeModal.value = popup;
    };

    const clearActiveModal = () => {
      activeModal.value = null;
    };

    const getModalByType = (type: PopupTypes): string => {
      switch (type) {
        case PopupTypes.Statistic:
          return "AppStatisticPopup";
        case PopupTypes.Story:
          return "AppStoryModal";
        default:
          return "";
      }
    };

    return {
      type,
      PopupTypes,
      activeModal,
      setActiveModal,
      clearActiveModal,
      getModalByType,
    };
  },
});
</script>

<template>
  <div class="info-block" :class="type" @click="setActiveModal(popup)">
    <div class="info-block__year">{{ year }}</div>

    <div v-if="text" class="info-block__text">
      <AppTextContent :text="text" />
    </div>

    <div v-if="popup" class="info-block__title">
      <span v-if="popup.type === PopupTypes.Story">Читать историю</span>
      <span v-if="popup.type === PopupTypes.Statistic">Смотреть инфографику</span>
    </div>

    <div v-if="popup" class="info-block__image">
      <img v-if="popup.type === PopupTypes.Statistic" src="/src/assets/images/toy.png" alt="" />
      <img v-if="popup.type === PopupTypes.Story" src="/src/assets/images/cube.png" alt="" />
    </div>

    <teleport to="body">
      <AppBaseModal v-if="activeModal" @close="clearActiveModal">
        <component :is="getModalByType(activeModal.type)" v-bind="activeModal" />
      </AppBaseModal>
    </teleport>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/breakpoints";

.info-block {
  $this: &;

  position: relative;
  width: 270px;
  max-width: 500px;
  padding: 24px;
  background: #fff;
  border: 1px solid #49413c;
  border-radius: 20px;

  @include --mobile {
    width: 100%;
  }

  &._statistic {
    background: #dfe7e2;
    cursor: pointer;
  }

  &._story {
    background: #dfe7e2;
    cursor: pointer;
  }

  &._text {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: #e1f1d4;
      border: 1px solid #49413c;
      border-radius: 20px;
      transform: rotate(-2deg);
      content: "";
    }

    #{$this}__year {
      background: #f2eed7;
    }
  }

  &__year {
    position: absolute;
    top: -13px;
    left: 1px;
    display: flex;
    align-items: center;
    min-height: 26px;
    padding: 2px 8px;
    background: #fff;
    border-radius: 20px;
    font-weight: 600;
    font-size: 18px;

    ._reverse & {
      left: auto;
      right: -1px;
    }
  }

  &__image {
    position: absolute;
    right: -7px;
    bottom: -15px;
    width: 38px;
    height: 40px;

    ._reverse & {
      right: auto;
      left: -4px;
    }

    image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
  }
}
</style>
