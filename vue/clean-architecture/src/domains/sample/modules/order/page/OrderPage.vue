<script setup lang="ts">

import {onMounted, ref} from "vue";
import {type ChildComposableType, useOrder} from "@/domains/sample/modules/order/adapter/composable/useOrder";
import type {useOrderUserType} from "@/domains/sample/modules/order/adapter/composable/useOrderUser";
import type {useOrderListType} from "@/domains/sample/modules/order/adapter/composable/useOrderList";
import OrderList from "@/domains/sample/modules/order/page/components/OrderList.vue";
import UserOrderList from "@/domains/sample/modules/order/page/components/UserOrderList.vue";

const _state = {
  // TODO 여기에서 상태값 반응형데이터로 조절하는게 맞을까? composable에 캡슐화가 맞을까?
  totalPrice: ref(0),
}

const orderComp = useOrder();

function setComposable(composable: useOrderUserType | useOrderListType, type: ChildComposableType) {
  orderComp.setChildComposable(composable, type);
}

onMounted(() => {
  orderComp.setStateValue(); // TODO 로직 Composable에 캡슐화해서 데이터(상태,반응형데이터) 공개 처리

  setTimeout(() => {
    // order 조회시점에 따른 지연 실행 -> TODO 리팩토링 :: Composable로 캡슐화하기, 현재는 데이터를 받아서 -> 해당 컴포넌트에서 사용중 (_state.totalPrice)
    _state.totalPrice.value = orderComp.sumTotalItemPrice();
  });

})

</script>

<template>
  <OrderList @composable="(composable) => setComposable(composable, 'orderList')"/>
  <UserOrderList @composable="(composable) => setComposable(composable, 'userOrder')"/>

  <div class="info-card">
    <h2>📦 상위 컴포넌트 로직 테스트 -OrderPage.vue (주문/유저별 관련) </h2>

    <div class="info-row">
      <div class="label">
        1. (테스트용 랜덤 상태값 갱신) : <strong>{{ orderComp.itemTestValue }}</strong>
      </div>
      <button class="action-btn" @click="orderComp.setSumItemPriceTest(Number((Math.random()*100).toFixed(0)))">
        상태값 변경
      </button>
    </div>

    <div class="info-row">
      <div class="label">
        <!--  TODO composable 캡슐화? 컴포넌트에서 처리? -->
        2. 주문 총합 (디폴트) : <strong>{{ _state.totalPrice }}</strong>
      </div>
    </div>

    <div class="info-row">
      <div class="label">
        3. 사용자 가격*수량 총합 <strong>(사용자ID : 5,10,15,20 존재시)</strong> : <strong>{{
          orderComp.sumUserOrderItemPrice
        }}</strong>
      </div>
      <button class="action-btn" @click="orderComp.updateUserOrder">
        위에서 사용자 추가 → 가격 갱신
      </button>
    </div>

    <!-- TODO 구현하기: 사용자도 숫자 업데이트    -->
    <div class="info-row">
      <div class="label">
        4. 사용자 수 : <strong>{{ orderComp.sumUsers() }}</strong>
      </div>
      <button class="action-btn">
        TODO 사용자 수 갱신
      </button>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  background-color: #1f2a3c;
  border-radius: 10px;
  padding: 20px;
  color: #f2f2f2;
  margin-top: 24px;
  max-width: 800px;
  margin-inline: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  font-family: 'Segoe UI', sans-serif;
}

.info-card h2 {
  margin-bottom: 20px;
  font-size: 18px;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed #444;
  gap: 12px;
  flex-wrap: wrap;
}

.info-row:last-child {
  border-bottom: none;
}

.label {
  font-size: 15px;
  font-weight: 400;
  color: #ccc;
}

.action-btn {
  background-color: #409eff;
  color: white;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.action-btn:hover {
  background-color: #66b1ff;
}
</style>
