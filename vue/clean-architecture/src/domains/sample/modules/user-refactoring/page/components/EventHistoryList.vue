<script setup lang="ts">

import {onBeforeMount, onMounted} from "vue";
import {EventKey} from "@/common/constant/EventKey";
import {UserEventHistory} from "@/domains/sample/modules/user-refactoring/domain/entity/UserEventHistory";
import {useEventHistory} from "@/domains/sample/modules/user-refactoring/adapter/event/in/composable/useEventHistory";

const emit = defineEmits([EventKey.COMPOSABLE]);
const useEventHistoryComp = useEventHistory();

/*
  이경우도 가능하나, provide/inject 해서
  상/하위간비즈니스 처리를 사용할 이유가 없다면,
  기본적으로 emit이 낫지 않을까 -> emit -> 상위가 하위의 처리가 필요로 하는경우
  ////
  emit : 상위가 판단 (상위 -> 하위 처리로직 활용, 기본적으로 emit은 디폴트 설정 - 사용할지말지는 상위판단)
  inject : 하위가 판단 (하위 -> 상위 처리로직 활용, 필요한 경우만 inject)
 */

// const useUserCompositionComp = ContextContainer.inject<useUserCompositionType>(CONTEXT_KEYS.SAMPLE.USER_REFACTORING);
// useUserCompositionComp?.setChildComposable(useEventHistoryComp,'useEventHistory')

onBeforeMount(() => {
  emit(EventKey.COMPOSABLE, useEventHistoryComp);
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
@import "./UserRefactoringChild.css";
</style>