<script setup>
import {nextTick, onMounted, ref, watch} from 'vue';

const _state = {
  count: ref(0)
};

console.log('watch 등록 전');

watch(_state.count, (newVal, oldVal) => {
  console.log('watch 콜백 실행', newVal, oldVal);
});

console.log('count 변경 전');
_state.count.value++;
console.log('count 변경 후');

function test() {
  console.log('=========== test start ');
  Promise.resolve().then(() => {
    console.log("promise");
  })
  nextTick(() => {
    console.log("전");
  })
  _state.count.value++; // 변경 nextTick 보다 먼저 실행됨 flushJob(vue가 내부적으로 nextTick 보다먼저 실행시킴)
  nextTick(() => {
    console.log("후");
  })
  console.log('=========== test end ');
}


async function asyncTest() {
  console.log('=========== test start ');
  await Promise.resolve().then(() => {
    console.log("promise");
  })
  // tick2 (tich 분리 await로 인함)
  console.log("promise 후");
  // 실행순서 우선순위 아닌 -> 경쟁 -> 등록순으로 진행되는듯(기본적으로? 단언은 x)
  nextTick(() => {
    console.log("전");
  })
  _state.count.value++; // 변경
  nextTick(() => {
    console.log("후");
  })
  console.log('=========== test end ');
}

async function testTick() {
  console.log('=========== test start ');
  _state.count.value++; // 변경 tick1
  _state.count.value++; // 변경 tick1 -> 같은팀 flush 한번에 최적화
  console.log('=========== test end ');
  setTimeout(() => {
    _state.count.value++; // 변경 tick2 다른 tick -> watch 한번 더 실행
  })
}

onMounted(() => {
  // test();
  // asyncTest();
  testTick();
})
</script>

<template>
  {{_state.count}}
</template>

<style scoped>

</style>