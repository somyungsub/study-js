<script setup>

import {onMounted} from "vue";
import TickChildeComponent2 from "./TickChildeComponent2.vue";

const emit = defineEmits(["test"]);
function test(data){
  console.log("하위1 emit");
  emit("test", data);
}
onMounted(() => {
  console.log("하위1 st");
  for (let i = 0; i < 100; i++) {
    console.log("하위1 : ", i);
  }
  console.log("하위1 end");
});
</script>

<template>
  <p>하위1</p>
  <TickChildeComponent2
      @test="test"
  />
</template>