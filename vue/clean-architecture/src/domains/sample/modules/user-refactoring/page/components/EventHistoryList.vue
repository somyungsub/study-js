<script setup lang="ts">

import {UserEventHistory} from "../../domain/entity/UserEventHistory.ts";
import {useEventHistory} from "../../composable/useEventHistory.ts";
import {onBeforeUnmount, onMounted} from "vue";

const emit = defineEmits(['composable']);
const useEventHistoryComp = useEventHistory();

onBeforeUnmount(() => {
  emit("composable", useEventHistoryComp);
});

onMounted(async () => {
  await useEventHistoryComp.fetchAllHistory();
});

</script>

<template>
  <div>
    <h2>📜 이벤트 히스토리 - 리팩토링</h2>
    <ul>
      <li v-for="history in useEventHistoryComp.histories.value" :key="history.eventId" class="list-item">
        {{useEventHistoryComp.toStringHistory(history)}}
      </li>
    </ul>

    <button
        class="action-btn"
        @click="useEventHistoryComp.saveHistory(UserEventHistory.testValue())">
      이벤트 추가
    </button>
  </div>
</template>
<style scoped>
@import "UserRefactoringChild.css";
</style>