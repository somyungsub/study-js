<script setup lang="ts">

import {onBeforeMount, onMounted} from "vue";
import {EventKey} from "@/common/constant/EventKey";
import {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";
import {useUserList} from "@/domains/sample/modules/user-refactoring/adapter/user/composable/useUserList";

const emit = defineEmits([EventKey.COMPOSABLE]);
const useUserListComp = useUserList();

onBeforeMount(() => {
  emit(EventKey.COMPOSABLE, useUserListComp);
});

onMounted(async () => {
  await useUserListComp.fetchAllUser();
});
</script>

<template>
  <div>
    <h2>👤 사용자 목록 - 리팩토링</h2>
    <ul>
      <li v-for="user in useUserListComp.users.value" :key="user.id" class="list-item">
        {{useUserListComp.toStringUser(user)}}
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

    <button
        class="action-btn"
        @click="useUserListComp.saveUser(User.testValue())">
      사용자 추가 (ID 랜덤생성 : 같은 ID 존재시 추가 안됨)
    </button>
  </div>
</template>

<style scoped>
@import "./UserRefactoringChild.css";
</style>