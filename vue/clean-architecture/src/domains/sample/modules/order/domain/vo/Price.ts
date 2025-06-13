import {ToString} from "../../../../../../common/core/decorator/ToString.ts";

export enum Currency {
  KRW = '₩',
  USD = '$',
  JPY = '¥',
}

@ToString
export class Price {
  constructor(
    private _amount: number,
    private _currency: Currency,
  ) {
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): Currency {
    return this._currency;
  }

  get display() {
    return `${this._currency}${this._amount.toLocaleString()}`;
  }

  static from(dto: {
    amount: number;
    currency: Currency;
  }): Price {
    return new Price(dto.amount, dto.currency);
  }
}