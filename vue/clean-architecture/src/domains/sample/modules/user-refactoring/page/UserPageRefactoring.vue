<script setup lang="ts">
import EventHistoryList from "./components/EventHistoryList.vue";
import UserList from "./components/UserList.vue";
import {useUser} from "../composable/useUser.ts";
import {useUserComposition} from "../composable/composition/useUserComposition.ts";
import {onBeforeMount} from "vue";
import {CONTEXT_KEYS, ContextContainer} from "../../../../../common/core/context/ContextContainer.ts";

// 상위 전용
const useUserPageComp = useUser();

// 상하위 통합
const useUserCompositionComp = useUserComposition(useUserPageComp);

onBeforeMount(() => {
  ContextContainer.provide({
    [CONTEXT_KEYS.SAMPLE.USER_REFACTORING]: useUserCompositionComp
  });
});

</script>

<template>
  <div class="section">
    <UserList @composable="(comp) => useUserCompositionComp.setChildComposable(comp, 'useUserList')"/>
  </div>

  <div class="section">
<!--    <EventHistoryList @composable="(comp) => useUserCompositionComp.setChildComposable(comp, 'useEventHistory')"/>-->
    <EventHistoryList/>
  </div>
  <div class="summary">
    상위영역 (사용자 + 히스토리 목록 합계) : <strong>{{ useUserPageComp.userCount }}</strong>
  </div>
</template>

<style scoped>
.section {
  background-color: #1f2a3c;
  color: #f2f2f2;
  padding: 24px;
  border-radius: 10px;
  margin-bottom: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

.summary {
  margin-top: 16px;
  padding: 10px 14px;
  background-color: #334155;
  border-radius: 6px;
  font-size: 14px;
  font-family: monospace;
}
</style>
