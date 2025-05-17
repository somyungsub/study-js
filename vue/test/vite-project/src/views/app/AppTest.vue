<script setup>
import {onMounted, ref} from "vue";
import OptionTest from "./OptionTest.vue";
import CompositionTest from "./CompositionTest.vue";
import AsyncTest from "./AsyncTest.vue";

const refs = {
  refStandard: ref(null),
};

// function fetchUser() {
//   refs.refStandard.value.fetchUser();
// }
onMounted(() => {
  // refs.refStandard.value.fetchUser();
});

</script>

<template>

  <button @click="fetchUser">유저조회</button>
  <div>
    <p>Option Test</p>
  </div>
  <OptionTest/>
  <div>
    <p>Composition Test</p>
  </div>
  <CompositionTest/>
  <!--  <Suspense>-->
  <!--    <template #default>-->
  <!--      <AsyncTest2 />-->
  <!--    </template>-->
  <!--    <template #fallback>-->
  <!--      <div>로딩중...</div>-->
  <!--    </template>-->
  <!--  </Suspense>-->
  <!--  <AsyncTest2 />-->
  <AsyncTest/>
  <!--  <StandardTest-->
  <!--      :ref="refs.refStandard"-->
  <!--      :message="'apptest111 message'"-->
  <!--  />-->
</template>