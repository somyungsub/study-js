<script setup>
import {nextTick, onBeforeMount, onMounted} from "vue";

console.log("start 1");

Promise.resolve().then(value => console.log("promise전"));
nextTick(() => {
  console.log("nextTick promise 전");
  Promise.resolve().then(() => console.log("nextTick promise"))
  console.log("nextTick promise 후");
});

nextTick(() => {
  console.log("nextTick");
});

setTimeout(() =>{
  console.log("setTimeout");
},0);

setTimeout(() =>{
  console.log("setTimeout2");
},0);

Promise.resolve().then(value => console.log("promise후"));
Promise.resolve().then(value => {
  console.log("promise2");
  setTimeout(() => {
    console.log("promise2 setTimeout");
  }, 0);
});

setTimeout(() =>{
  Promise.resolve().then(value => {
    console.log("setTimeout3")
  });
},0);

setTimeout(() =>{
  console.log("setTimeout4");
},0);
console.log("end 1");

onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("Mounted");
});

</script>

<template>
  TEST!!
</template>

<style scoped>

</style>