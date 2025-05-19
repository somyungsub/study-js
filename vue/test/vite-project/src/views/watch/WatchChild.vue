<script setup>

import {useCount} from "./useCount.js";

const _compo = {
  count1: useCount(),
  count2: useCount(),
}

</script>
<template>
  {{_compo.count1.count.value}}
  <button @click="_compo.count1.increment" v-text="'클릭'" style="background-color: red"/>
  {{_compo.count2.count.value}}
  <button @click="_compo.count2.increment" v-text="'클릭2'" style="background-color: red"/>
</template>
