<script setup>
import {usePopup} from "../../composables/usePopup.js";
import BridgePopup from "../../components/BridgePopup.vue";

const popup = usePopup({title: '제목 테스트', width: 25, height: 25});

function close() {
  console.log('close 상위')
}

</script>

<template>
  테스트!!
  <button @click="popup.open">오픈</button>
  <BridgePopup
      :usePopup="popup"
      @close="close"
  >
    <p style="color: #de4343">상위데이터!!! </p>
  </BridgePopup>
</template>