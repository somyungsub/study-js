<script setup lang="ts">
import {onMounted} from 'vue';
import {useUser} from './composables/useUser';
import {User} from './domain/entity/User';
import {UserEventHistory} from "./domain/entity/UserEventHistory.ts";

const useUserComp = useUser();

onMounted(async () => {
  await useUserComp.fetchAllUser();
  await useUserComp.fetchAllHistory();
});

</script>

<template>
  <div>
    <h2>사용자 목록</h2>
    <ul>
      <li v-for="user in useUserComp.users.value" :key="user.id">
        {{user.id}} - {{ user.name }} - {{ user.email }} - {{ user.gender }} - {{ user.userType }}
      </li>
    </ul>

    <h3>새 사용자 추가</h3>
    <button @click="useUserComp.saveUser(User.testValue())">저장</button>
  </div>
  <div>
    <h2>이벤트 히스토리</h2>
    <ul>
      <li v-for="history in useUserComp.histories.value" :key="history.eventId">
        {{ history.eventId }} - {{ history.eventName }} - {{ history.createDate }}
      </li>
    </ul>

    <h3>이벤트 추가</h3>
    <button @click="useUserComp.saveHistory(UserEventHistory.testValue())">저장</button>
  </div>
</template>

<style scoped>
h2, h3 {
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1rem;
}
</style>
