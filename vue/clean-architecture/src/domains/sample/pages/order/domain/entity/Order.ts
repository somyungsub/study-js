import {ToString} from "../../../../../../common/core/decorator/ToString.ts";
import type {OrderItem} from "./OrderItem.ts";

@ToString()
export class Order {
  constructor(
    readonly id: number,
    private _orderNo: number,
    private _userId: number,
    private _orderItems: OrderItem[]
  ) {
  }

  get orderNo(): number {
    return this._orderNo;
  }

  get userId(): number {
    return this._userId;
  }

  get orderItems(): OrderItem[] {
    return this._orderItems;
  }

  static from(dto:{
    id: number,
    orderNo: number,
    userId: number,
    orderItems: OrderItem[]
  }): Order {
    return new Order(dto.id, dto.orderNo, dto.userId, dto.orderItems);
  }
}