<script setup lang="ts">
import {useOrderUser} from "../../composable/useOrderUser.ts";
import {onBeforeMount, onMounted} from "vue";

const emit = defineEmits(['composable']);

const orderUser = useOrderUser();

onBeforeMount(() => {
  emit("composable", orderUser);
})

onMounted(async () => {
  await orderUser.joinUserOrder();
  console.log("orderUser.orderUsers : ", orderUser.orderUsers.value);
});

</script>

<template>
  <div>
    <h2>사용자별 구매 목록</h2>
    <ul v-for="orderUser in orderUser.orderUsers.value" :key="orderUser.order.id" class="order-user-card">
      <li class="info-block-wrapper">
        <div class="info-block order-block">
          <h4>Order</h4>
          <pre>{{ JSON.stringify(orderUser.order, null, 2) }}</pre>
        </div>
        <div class="info-block user-block">
          <h4>User</h4>
          <pre>{{ JSON.stringify(orderUser.user, null, 2) }}</pre>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.order-user-card {
  background-color: #333;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  transition: background-color 0.2s ease;
}

.order-user-card:hover {
  background-color: #2c3e50;
}

.order-user-card > div {
  margin-bottom: 0; /* 개별 박스 내부에서 gap 사용하므로 */
}

.info-block-wrapper {
  display: flex;
  gap: 16px;
  flex-wrap: wrap; /* 좁은 화면 대응 */
  justify-content: space-between;
}

.info-block {
  flex: 1 1 300px;
  border-radius: 8px;
  padding: 14px;
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  min-width: 280px;
  max-width: 100%;
}

.order-block {
  background-color: #eaf5ff;
  border-color: #b3d8ff;
}

.user-block {
  background-color: #fceeff;
  border-color: #dabfff;
}

.info-block h4 {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.info-block pre {
  margin: 0;
  font-family: monospace;
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-word;
  color: #2c2c2c;
  line-height: 1.5;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
