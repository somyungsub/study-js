<script setup>

import {onMounted} from "vue";

const emit = defineEmits(['close']);
const props = defineProps({
  usePopup: {
    type: Object,
    required: true,
  }
});

function close() {
  emit('close');
}

onMounted(()=>{
  console.log("mounted :  ", props.usePopup);
})

</script>

<template>
  <div class="popup-mask">
    <div class="popup-box" :style="`width: ${props.usePopup.width}; height: ${props.usePopup.height}`">
      <h2 class="text">{{ props.usePopup.title }}</h2>
      <slot/>
      <button @click="close">닫기</button>
    </div>
  </div>
</template>

<style scoped>
.text {
  color: #1a1a1a;
}
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.popup-box {
  background: white;
  padding: 20px;
  margin: 100px auto;
  width: 300px;
  border-radius: 8px;
}
</style>