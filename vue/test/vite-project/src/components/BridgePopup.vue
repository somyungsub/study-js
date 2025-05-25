<script setup>
import Popup from "./Popup.vue";
import {computed, useSlots} from "vue";

const emit = defineEmits(['close']);
const props = defineProps({
  usePopup: {
    type: Object,
    required: true,
  }
});

const slots = useSlots();

const _computed = {
  hasSlots: computed(() => {
    return Object.keys(slots).length > 0
  })
}

function close() {
  emit('close');
  props.usePopup.close();
}

</script>

<template>
  <Popup
      v-if="usePopup.isShow.value"
      :usePopup="usePopup"
      @close="close"
  >
    <slot v-if="_computed.hasSlots.value"/>
  </Popup>
</template>

<style scoped>

</style>