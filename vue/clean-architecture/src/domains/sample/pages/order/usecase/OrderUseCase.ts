import  {type Order} from "../domain/entity/Order.ts";
import type {User} from "../../user-refactoring/domain/entity/User.ts";

export interface OrderUseCase {
  // 1. 주문목록 전제 조회 (하위컴포넌트1 : OrderList.vue)
  fetchAllOrder(): Promise<Order[]>;

  // 2. 사용자별 주문목록 조회 (하위컴포넌트2 : OrderUserList.vue)
  joinUserOrder(userId: number): Promise<User>;
}
