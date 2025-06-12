import {createService} from "../usecase/service/OrderUseCaseService.ts";
import type {Order} from "../domain/entity/Order.ts";

export type useOrderListType = {
  fetchAllOrder(): Promise<Order[]>;
  testSize(): number;
  getSumOrderPrice(): number;
}

export function useOrderList() : useOrderListType{
  const {useCase} = createService();
  const _var = {
    orders: [] as Order[]
  }

  async function fetchAllOrder(): Promise<Order[]> {
    _var.orders =  await useCase.fetchAllOrder().then(orders => orders);
    return _var.orders;
  }

  function testSize(): number {
    return 1000;
  }

  function getSumOrderPrice(): number {
    return _var.orders.flatMap((order: Order) => order.orderItems)
      .map(orderItem => orderItem.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  return {
    fetchAllOrder,
    testSize,
    getSumOrderPrice
  }
}