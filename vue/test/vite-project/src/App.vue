<script setup>
import AppTest from "./views/app/AppTest.vue";
import TickTest from "./views/tick/TickTest.vue";
import ComposableTest from "./views/test/ComposableTest.vue";
import WatchTest from "./views/watch/WatchTest.vue";
import AsyncTest from "./views/app/AsyncTest.vue";
import WatchTest2 from "./views/watch/WatchTest2.vue";
import StoreTest from "./views/store/StoreTest.vue";
import StoreTest2 from "./views/store/StoreTest2.vue";
import PopupTest from "./views/popup/PopupTest.vue";
import WatchOrderTest from "./views/watch/WatchOrderTest.vue";
import WatchOrderAsyncTest from "./views/watch/WatchOrderAsyncTest.vue";
</script>

<template>
<!--  <AppTest/>-->
<!--  <TickTest/>-->
<!--  <ComposableTest/>-->
<!--  <AsyncTest/>-->
<!--    <WatchTest/>-->
<!--  <WatchTest2/>-->
<!--  <StoreTest/>-->
<!--  <StoreTest2/>-->
<!--  <PopupTest/>-->
<!--  <WatchOrderTest/>-->
  <WatchOrderAsyncTest/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
