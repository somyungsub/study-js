import type {Order} from "@/domains/sample/modules/order/domain/entity/Order";

export interface OrderApiOut {
  // 1. 주문목록 전제 조회 (하위컴포넌트1 : OrderList.vue)
  fetchAllOrder(): Promise<Order[]>;
}
