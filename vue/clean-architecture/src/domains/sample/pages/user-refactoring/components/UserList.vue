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
        {{useUserComp.toStringUser(user)}}
<!--
TODO 아래 같은 형식에서 만약 . 앞뒤로 라인을 추가해달라는 요구사항 발생 -> function으로 이 컴포넌트에서 처리하거나
template 영역에 추가해야하거나 해야하는데
이럴 경우, composable 내에서 처리한다면 깔끔
따라서, 아래 같은 구조로도 할 수 있지만 접근 방향은 단방향유지 되긴함 (vue -> entity)
이방법보단 (composable->entity)로 주로 접근하고 있으니 여기서 처리하는게 낫지 않을까? entity와 관련된 어떤 로직이라면

-->
<!--        {{User.from(user).toString()}}-->
      </li>
    </ul>

    <h3>새 사용자 추가-리팩토링</h3>
    <button @click="useUserComp.saveUser(User.testValue())">저장</button>
  </div>
</template>

<style scoped>

</style>