import type {useUserListType} from "../useUserList.ts";
import type {useEventHistoryType} from "../useEventHistory.ts";
import type {useUserType} from "../useUser.ts";
import {watch} from "vue";

export type useUserCompositionType = {
  setChildComposable<T extends ChildComposableType>(
    composable: ComposableType[T],
    type: T
  ): void;
}

type ComposableType = {
  useUser: useUserType;
  useUserList: useUserListType | null;
  useEventHistory: useEventHistoryType | null;
};
type ChildComposableType = 'useUserList' | 'useEventHistory';

const countObj = {
  userCount: 0,
  historyCount: 0,
  setCount(type: ChildComposableType, count: number) {
    if (type === 'useUserList') {
      this.userCount = count;
    } else {
      this.historyCount = count;
    }
  },
  total() {
    return this.userCount + this.historyCount;
  },
};

export function useUserComposition(useUser: useUserType): useUserCompositionType {
  const _state: ComposableType = {
    useUser: useUser,
    useUserList: null,
    useEventHistory: null
  };

  function setChildComposable<T extends ChildComposableType>(
    composable: ComposableType[T],
    type: T
  ): void {
    _state[type] = composable;
    if (type === 'useUserList') {
      registerWatch(type,() => _state.useUserList?.users.value);
    } else {
      registerWatch(type,() => _state.useEventHistory?.histories.value);
    }
  }

  function updateUserCount(type: ChildComposableType, value: any[]) {
    const size: number = value?.length;
    countObj.setCount(type, size);
    _state.useUser.updateUserCount(countObj.total());
  }

  function registerWatch(type: ChildComposableType, sourceFunc: any): void {
    watch(
      sourceFunc,
      value => updateUserCount(type, value),
      {deep: true}
    );
  }

  return {
    setChildComposable
  }
}