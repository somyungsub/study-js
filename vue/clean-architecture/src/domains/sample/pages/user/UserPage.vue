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
  <div class="section">
    <h2>👤 사용자 목록</h2>
    <ul>
      <li v-for="user in useUserComp.users.value" :key="user.id" class="list-item">
        {{ user.id }} // {{ user.name }} // {{ user.email }} // {{ user.gender }} // {{ user.userType }}
      </li>
    </ul>

    <button class="action-btn" @click="useUserComp.saveUser(User.testValue())">사용자 추가</button>
  </div>

  <div class="section">
    <h2>📜 이벤트 히스토리</h2>
    <ul>
      <li v-for="history in useUserComp.histories.value" :key="history.eventId" class="list-item">
        {{ history.eventId }} // {{ history.eventName }} // {{ history.createDate }}
      </li>
    </ul>

    <button class="action-btn" @click="useUserComp.saveHistory(UserEventHistory.testValue())">이벤트 추가</button>
  </div>
</template>


<style scoped>
.section {
  background-color: #1f2a3c;
  color: #f2f2f2;
  padding: 24px;
  border-radius: 10px;
  margin-bottom: 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #ffffff;
  border-bottom: 1px solid #3a4a5c;
  padding-bottom: 8px;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  background-color: #2b3a50;
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
}

.list-item {
  padding: 8px 12px;
  margin-bottom: 6px;
  background-color: #334155;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}

.action-btn {
  margin-top: 8px;
  background-color: #409eff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.action-btn:hover {
  background-color: #66b1ff;
}
</style>
