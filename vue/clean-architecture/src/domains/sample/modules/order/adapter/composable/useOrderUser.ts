import {type Ref, ref} from "vue";
import type {User} from "@/domains/sample/modules/user-refactoring/domain/user/entity/User";
import type {Order} from "@/domains/sample/modules/order/domain/entity/Order";
import {createService} from "@/domains/sample/modules/order/application/OrderUseCaseService";
import {createService as createUserService} from "@/domains/sample/modules/user-refactoring/application/user/UserService";
import type {OrderItem} from "@/domains/sample/modules/order/domain/entity/OrderItem";

export type useOrderUserType = {
  orderUsers: Ref<userOrderDataType[]>;
  joinUserOrder(): Promise<void>;
  getSumUserOrderItemPrice(): number;
}

export type userOrderDataType = {
  user: User;
  order: Order;
}

export function useOrderUser(): useOrderUserType {
  const {useCase} = createService();
  const {query: userQuery} = createUserService();
  const _state: {
    orderUsers: Ref<userOrderDataType[]>;
  } = {
    orderUsers: ref([])
  }

  async function joinUserOrder(): Promise<void> {
    clearData();
    const users = await userQuery.getUserList();
    const orders = await useCase.fetchAllOrder();

    // TODO 리스트로 리팩토링 필요
    for (const user of users) {
      const userData = await useCase.joinUserOrder(user.id);
      const findOrder = orders.find(order => order.userId === user.id);
      const orderUser = findOrder ? {user: userData, order: findOrder} : null;
      if (orderUser) {
        _state.orderUsers.value.push(orderUser);
      }
    }
  }

  function clearData() {
    _state.orderUsers.value = [];
  }

  function getSumUserOrderItemPrice(): number {
    return  _state.orderUsers?.value
      .flatMap(userOrder => userOrder.order.orderItems as OrderItem[])
      .map((orderItem: OrderItem) => orderItem.price * orderItem.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  return {
    orderUsers: _state.orderUsers,
    joinUserOrder,
    getSumUserOrderItemPrice
  }
}