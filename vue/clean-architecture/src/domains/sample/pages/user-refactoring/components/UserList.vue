<script setup lang="ts">

import {User} from "../domain/entity/User.ts";
import {useUser} from "../composables/useUser.ts";
import {onMounted} from "vue";

const emit = defineEmits(['useUser']);
const useUserComp = useUser();

onMounted(async () => {
  emit("useUser", useUserComp);
  await useUserComp.fetchAllUser();
});
</script>

<template>
  <div>
    <h2>사용자 목록-리팩토링</h2>
    <ul>
      <li v-for="user in useUserComp.users.value" :key="user.id">
<!--        {{useUserComp.toStringUser(user)}}-->
        {{User.from(user).toString()}}
      </li>
    </ul>

    <h3>새 사용자 추가-리팩토링</h3>
    <button @click="useUserComp.saveUser(User.testValue())">저장</button>
  </div>
</template>

<style scoped>

</style>