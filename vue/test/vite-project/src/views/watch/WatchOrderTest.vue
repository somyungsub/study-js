<script setup>
import {ref, watch, watchEffect} from "vue";

const count = ref(0);

count.value++;

watch(
    count,
    (value, oldValue) => {
      console.log("watch, value : ", value);
    }
);

watchEffect((oldValue, newValue) => {
  console.log("watchEffect value : ", oldValue);
  console.log("watchEffect count.value : ", count.value);
})

count.value++;

</script>

<template>
  <div>
    watch 순서 테스트
  </div>
  <div>
    {{count}}
  </div>
</template>

<style scoped>

</style>