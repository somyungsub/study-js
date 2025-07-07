<script setup>
import {onMounted, ref, watch, watchEffect} from "vue";

const count = ref(0);

Promise.resolve().then(() => {
  console.log("Promise1 count :: ", count.value);
});

watch(
    count,
    (value, oldValue) => {
      console.log("watch, value 언제 실행될까? : ", value);
      Promise.resolve().then(() => {
        console.log("Promise2 count :: ", count.value);
      });
    }
);

onMounted(()=>{
  // count.value++;
  Promise.resolve().then(() => {
    console.log("Promise3 count :: ", count.value);
  });

  count.value++;
})

</script>

<template>
  <div>
    watch 비동기 순서 테스트
  </div>
  <div>
    {{count}}
  </div>
</template>

<style scoped>

</style>