<script setup>
import {onMounted, ref, watch} from 'vue';

const _state = {
  count: ref(0)
};

console.log('1. watch 등록 전');

watch(_state.count, (newVal, oldVal) => {
  console.log('3. watch 콜백 실행', newVal, oldVal);
});

console.log('2. count 변경 전');

_state.count.value++;

console.log('4. count 변경 후');

function test() {
  console.log('=========== test 변경 전 ');
  _state.count.value++;
  console.log('=========== test 변경 후 ');
}
onMounted(() => {
  test();
})
</script>

<template>
  {{_state.count}}
</template>

<style scoped>

</style>