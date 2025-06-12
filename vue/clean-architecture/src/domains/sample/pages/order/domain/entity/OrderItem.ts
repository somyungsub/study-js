import {ToString} from "../../../../../../common/core/decorator/ToString.ts";

@ToString()
export class OrderItem {
  constructor(
    readonly id: number,
    private _name: string,
    private _price: number,
    private _quantity: number
  ) {
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  static from(dto: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }): OrderItem {
    return new OrderItem(dto.id, dto.name, dto.price, dto.quantity);
  }
}