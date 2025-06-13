import type {useOrderListType} from "./useOrderList.ts";
import {type Ref, ref} from "vue";
import type {useOrderUserType} from "./useOrderUser.ts";

export type useOrderType = {
  sumUserOrderItemPrice: Ref<number>;
  itemTestValue: Ref<number>;
  setChildComposable(
    childComposable: useOrderListType | useOrderUserType,
    type: ChildComposableType
  ): void;
  sumTotalItemPrice(): number;
  sumUsers(): number;
  setStateValue(): void;
  setSumItemPriceTest(randomValue: number): void;
  updateUserOrder(): Promise<void>;
}

export type ChildComposableType = 'orderList' | 'userOrder';

export function useOrder(): useOrderType {

  const _comp: {
    useOrderList?: useOrderListType,
    useUserOrder?: useOrderUserType,
  } = {}

  const _state = {
    sumUserOrderItemPrice: ref(0),
    itemTestValue: ref(0),
  }

  function sumTotalItemPrice(): number {
    return _comp.useOrderList?.getSumOrderPrice() ?? 0;
  }

  function setChildComposable(
    childComposable: useOrderListType | useOrderUserType,
    type: ChildComposableType
  ): void {
    if (type === "orderList") {
      _comp.useOrderList = childComposable as useOrderListType;
    } else {
      _comp.useUserOrder = childComposable as useOrderUserType;
    }
  }

  function setStateValue(): void {
    updateItemTestValue(_comp.useOrderList?.testSize() ?? 0);
    setTimeout(() => {
      updateSumUserOrderItemPrice();  // _comp.useUserOrder 데이터 조회에 따른 실행 지연
    });
  }

  function setSumItemPriceTest(randomValue: number): void {
    updateItemTestValue(randomValue)
  }

  async function updateUserOrder(): Promise<void> {
    await _comp.useUserOrder?.joinUserOrder();
    updateSumUserOrderItemPrice()
  }

  function updateItemTestValue(value: number): void {
    _state.itemTestValue.value = value;
  }

  function updateSumUserOrderItemPrice(): void {
    _state.sumUserOrderItemPrice.value = _comp.useUserOrder?.getSumUserOrderItemPrice() ?? 0;
  }

  // TODO
  function sumUsers(): number {
    return 0;
  }

  return {
    sumUserOrderItemPrice: _state.sumUserOrderItemPrice,
    itemTestValue: _state.itemTestValue,
    setChildComposable,
    sumTotalItemPrice,
    sumUsers,
    setStateValue,
    setSumItemPriceTest,
    updateUserOrder
  }
}