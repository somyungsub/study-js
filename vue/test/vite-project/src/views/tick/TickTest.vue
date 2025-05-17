<script setup>

import {nextTick, onMounted, ref} from "vue";
import TickChildComponent from "./TickChildComponent.vue";

const _state = {
  data: ref('')
}
function test(data){
  console.log("상위 emit");
  _state.data.value = data;
}

onMounted(() => {
  console.log("상위1 st");
  for (let i = 0; i < 1_000; i++) {
    console.log("상위1 : ", i);
  }
  console.log("하위1 end");


  setTimeout(() => {
    console.log("값은 setTimeout ? ", _state.data.value);
  });

  console.log("값은 ? ",_state.data.value);

  nextTick(() => {
    console.log("값은 nextTick ? ", _state.data.value);
  });

});
</script>

<template>
  <p>상위</p>
  <TickChildComponent
      @test="test"
  />
  {{_state.data}}
</template>