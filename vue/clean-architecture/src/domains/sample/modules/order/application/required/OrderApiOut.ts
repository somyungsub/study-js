import  {type Order} from "../../domain/entity/Order.ts";
import type {User} from "../../../user-refactoring/domain/entity/User.ts";

export interface OrderApiOut {
  // 1. 주문목록 전제 조회 (하위컴포넌트1 : OrderList.vue)
  fetchAllOrder(): Promise<Order[]>;
}
