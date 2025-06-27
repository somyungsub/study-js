<script setup>
import UserPage from "./domains/sample/modules/user/page/UserPage.vue";
import UserPageRefactoring from "./domains/sample/modules/user-refactoring/page/UserPageRefactoring.vue";
import OrderPage from "./domains/sample/modules/order/page/OrderPage.vue";
import UserPageJs from "./domains/sample/modules/use-js/page/UserPageJs.vue";

const _var = {
  textColor:{
    get red() {
      return this.color('red');
    },
    get yellow() {
      return this.color('yellow');
    },
    color(color) {
      return {'--textColorVar': `${color}`};
    },
  }
}
</script>

<template>
  <div class="section-box">
    <h2 class="section-header" :style="_var.textColor.red">
    1. [JS] 사용자 목록 테스트
    </h2>
    <UserPageJs />
  </div>

  <div class="section-box">
    <h2 class="section-header" :style="_var.textColor.yellow">
      2. [TS] 사용자 목록 테스트
    </h2>
    <UserPage />
  </div>

  <div class="section-box">
    <h2 class="section-header" :style="_var.textColor.yellow">
      3. [TS] 사용자 목록 리팩토링
    </h2>
    <UserPageRefactoring />
  </div>

  <div class="section-box">
    <h2 class="section-header">
      4. [TS] 주문 목록 (사용자 협력)
    </h2>
    <OrderPage />
  </div>
</template>


<style scoped>
:root {
  --textColorVar: #cccccc;
}

.section-box {
  background-color: #1e293b;
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #f1f5f9;
  font-family: 'Segoe UI', sans-serif;
}

.section-header {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #888888;
  color: var(--textColorVar, #42b983);
}
</style>

