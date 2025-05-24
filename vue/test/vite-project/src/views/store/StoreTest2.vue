<script setup>

import {useCountStore} from "../../store/button/useCountStore.js";

const countStore = useCountStore();
</script>

<template>
  <div>Count22: {{ countStore.getCount }}</div>
  <button @click="countStore.increaseCount">+</button>
</template>
