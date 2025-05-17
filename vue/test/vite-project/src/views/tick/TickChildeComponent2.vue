<script setup>
import {nextTick, onMounted} from "vue";

const emit = defineEmits(['test']);
onMounted(() => {
  console.log("하위2 st");
  nextTick(()=>{
    console.log("하위2 nextTick");
    emit("test", '테스트입니다');
  })
  console.log("하위2 end");
});
</script>
<template>
  <p>하위2</p>
</template>
