<script setup>

import {ref} from "vue";

const _state = {
  count1: ref(0),
  count2: ref(0),
}

function onClick1() {
  _state.count1.value++;
}

function onClick2() {
  _state.count2.value++;
}

</script>
<template>
  {{_state.count1.value}}
  <button @click="onClick1" v-text="'클릭'" style="background-color: red"/>
  {{_state.count2.value}}
  <button @click="onClick2" v-text="'클릭2'" style="background-color: red"/>
</template>
