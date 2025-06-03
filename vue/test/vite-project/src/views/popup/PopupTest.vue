<script setup>
import {usePopup} from "../../composables/usePopup.js";
import BridgePopup from "../../components/BridgePopup.vue";
import {ref} from "vue";

const popup = usePopup({title: '제목 테스트', width: 25, height: 25});

const countState = ref(0);
let count = 0;

function close() {
  console.log('close 상위')
  countState.value++;
  count++;
}

</script>

<template>
  테스트!!
  {{countState}} <br/>
  {{count}}
  <button @click="popup.open">오픈</button>
  <BridgePopup
      :usePopup="popup"
      @close="close"
  >
    <p style="color: #de4343">상위데이터!!! </p>
  </BridgePopup>
</template>