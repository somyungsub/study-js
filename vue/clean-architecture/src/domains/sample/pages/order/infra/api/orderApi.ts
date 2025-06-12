import {Order} from "../../domain/entity/Order.ts";
import {OrderItem} from "../../domain/entity/OrderItem.ts";

// TODO 임시데이터
const orderRepository: Order[] = [
  Order.from(
    {
      id: 100,
      orderNo: 1000,
      userId: 1,
      orderItems: [
        OrderItem.from({id: 1, name: '선풍기', price: 1000, quantity: 1}),
        OrderItem.from({id: 2, name: '무전기', price: 2000, quantity: 5}),
      ]
    }
  ),
  Order.from(
    {
      id: 101,
      orderNo: 1001,
      userId: 2,
      orderItems: [
        OrderItem.from({id: 3, name: '아이폰', price: 500, quantity: 100}),
        OrderItem.from({id: 4, name: '아이패드', price: 200, quantity: 250}),
      ]
    }
  ),
  Order.from(
    {
      id: 102,
      orderNo: 1002,
      userId: 5,
      orderItems: [
        OrderItem.from({id: 2, name: '무전기', price: 2000, quantity: 2}),
        OrderItem.from({id: 5, name: '맥북', price: 20000, quantity: 2}),
      ]
    }
  ),
  Order.from(
    {
      id: 103,
      orderNo: 1003,
      userId: 10,
      orderItems: [
        OrderItem.from({id: 1, name: '선풍기', price: 1000, quantity: 20}),
        OrderItem.from({id: 3, name: '아이폰', price: 500, quantity: 1}),
        OrderItem.from({id: 4, name: '아이패드', price: 200, quantity: 1}),
      ]
    }
  ),
  Order.from(
    {
      id: 104,
      orderNo: 1004,
      userId: 15,
      orderItems: [
        OrderItem.from({id: 4, name: '아이패드', price: 200, quantity: 15}),
      ]
    }
  ),
  Order.from(
    {
      id: 105,
      orderNo: 1005,
      userId: 20,
      orderItems: [
        OrderItem.from({id: 5, name: '맥북', price: 20000, quantity: 25}),
      ]
    }
  ),
];

export const orderApi = {
  fetchAll(): Promise<Order[]> {
    return Promise.resolve(orderRepository);
  }
}