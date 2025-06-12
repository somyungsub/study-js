<script setup lang="ts">
import {useOrderList} from "../composables/useOrderList.ts";
import {onBeforeMount, onMounted, ref} from "vue";
import type {Order} from "../domain/entity/Order.ts";

const emit = defineEmits(['composable']);
const _state = {
  orders: ref<Order[]>([])
}

const orderList = useOrderList();

onBeforeMount(() => {
  emit('composable', orderList);
});

onMounted(async () => {
  _state.orders.value = await orderList.fetchAllOrder();
});

</script>

<template>
  <div class="order-list-container">
    <h2>주문목록 (디폴트 테스트 데이터)</h2>
    <ul class="order-list">
      <!--  TODO 반응형 데이터 Composable 내부로 캡슐화?     -->
      <li v-for="order in _state.orders.value" :key="order.id" class="order-item">
        {{ order.toString()}}
      </li>
    </ul>
  </div>
  <!--    TODO 추가 요구사항 -> 목록 상세 만들어주세요 => 구현해보기  -->
</template>

<style scoped>
.order-list-container {
  padding: 12px;
  border-radius: 8px;
  background-color: #2e3b4e;
  width: fit-content;
  max-width: 100%;
  text-align: left;
}

.order-item {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  font-family: monospace;
  font-size: 13px;
  padding: 6px 10px;
  background-color: #1a1a1a;
  color: #f2f2f2;
  border-radius: 4px;
  margin-bottom: 6px;
  display: block;
  min-width: 400px;
}


.order-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>
