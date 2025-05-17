<script setup>
import {nextTick, onMounted} from "vue";

onMounted(async () => {
  console.log("하위2 st");
  await Promise.resolve().then(value => console.log("하위2 promise"));
  console.log("하위2 end");
});
</script>
<template>
  <p>하위2</p>
</template>
