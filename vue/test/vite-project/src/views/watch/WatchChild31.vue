<script setup>

import {ref} from "vue";

const _states = Array.from({length: 10}, () => ref(0));
function onClick(index) {
  _states[index].value++;
}
</script>
<template>
  <div v-for="(item, index) in _states" :key="index">
    {{item.value}}
    <button @click="onClick(index)" v-text="'클릭'" style="background-color: red"/>
  </div>
</template>
