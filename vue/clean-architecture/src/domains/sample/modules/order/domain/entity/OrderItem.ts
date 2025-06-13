import {ToString} from "../../../../../../common/core/decorator/ToString.ts";
import {Currency, Price} from "../vo/Price.ts";

@ToString
export class OrderItem {
  constructor(
    readonly id: number,
    private _name: string,
    // private _price: number,
    private _price: Price,  // TODO 가격에 통화코드도 추가하고싶다, (_price: number 기존 데이터를 -> Price vo 로 수정)
    private _quantity: number
  ) {
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price.amount;
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
    return new OrderItem(dto.id, dto.name, Price.from({amount: dto.price, currency: Currency.KRW}), dto.quantity);
    // return new OrderItem(dto.id, dto.name, dto.price, dto.quantity);
  }
}