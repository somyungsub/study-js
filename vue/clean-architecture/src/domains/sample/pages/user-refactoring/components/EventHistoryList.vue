<script setup lang="ts">

import {UserEventHistory} from "../domain/entity/UserEventHistory.ts";
import {useEventHistory} from "../composables/useEventHistory.ts";
import {onMounted} from "vue";

const emit = defineEmits(['useEventHistory']);
const useEventHistoryComp = useEventHistory();

onMounted(async () => {
  emit("useEventHistory", useEventHistoryComp);
  await useEventHistoryComp.fetchAllHistory();
});

</script>

<template>
  <div>
    <h2>이벤트 히스토리-리팩토링</h2>
    <ul>
      <li v-for="history in useEventHistoryComp.histories.value" :key="history.eventId">
        {{ history.eventId }} - {{ history.eventName }} - {{ history.createDate }}
      </li>
    </ul>

    <h3>이벤트 추가-리팩토링</h3>
    <button @click="useEventHistoryComp.saveHistory(UserEventHistory.testValue())">저장</button>
  </div>
</template>

<style scoped>

</style>