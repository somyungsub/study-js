<script setup>

import {useCount} from "./useCount.js";

const _comps = Array.from({length: 10}, () => useCount());
</script>
<template>
  <div v-for="(item, index) in _comps" :key="index">
    {{item.count.value}}
    <button @click="item.increment" v-text="'클릭'" style="background-color: red"/>
  </div>
</template>
