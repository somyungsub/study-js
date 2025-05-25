<script setup>
import Popup from "../../components/Popup.vue";
import {usePopup} from "../../composables/usePopup.js";

const popup = usePopup({title: '제목 테스트', width: 25, height: 25});

function close() {
  console.log('close 상위')
}

</script>

<template>
  테스트!!
  <button @click="popup.open">오픈</button>
  <Popup
      v-if="popup.isShow.value"
      :usePopup="popup"
      @close="close"
  >
    <p style="color: #de4343">상위데이터!!! </p>
  </Popup>
</template>