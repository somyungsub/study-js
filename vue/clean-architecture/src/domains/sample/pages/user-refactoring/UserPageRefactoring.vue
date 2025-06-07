<script setup lang="ts">
import EventHistoryList from "./components/EventHistoryList.vue";
import UserList from "./components/UserList.vue";
import {useUserPage} from "./composables/useUserPage.ts";

const useUserPageComp = useUserPage();

</script>

<template>
  <UserList @useUser="(comp) => useUserPageComp.setChildComposable(comp, 'useUser')"/>
  <EventHistoryList @useEventHistory="(comp) => useUserPageComp.setChildComposable(comp, 'useEventHistory')"/>
  <div>
    사용자 목록합계 : {{useUserPageComp.userCount}}
  </div>
</template>
