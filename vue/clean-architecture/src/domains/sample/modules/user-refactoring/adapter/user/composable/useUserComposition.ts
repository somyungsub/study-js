import {ref, type Ref, watch} from "vue";
import type {useUserType} from "@/domains/sample/modules/user-refactoring/adapter/user/composable/useUser";
import type {useUserListType} from "@/domains/sample/modules/user-refactoring/adapter/user/composable/useUserList";
import type {
  useEventHistoryType
} from "@/domains/sample/modules/user-refactoring/adapter/event/composable/useEventHistory";

export type useUserCompositionType = {
  setChildComposable<T extends ChildComposableType>(
    composable: ComposableType[T],
    type: T
  ): void;
  totalCount: Ref<number>;
}

type ComposableType = {
  useUser: useUserType;
  useUserList: useUserListType | null;
  useEventHistory: useEventHistoryType | null;
  totalCount: Ref<number>
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
    useEventHistory: null,
    totalCount: ref(0)
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
    _state.totalCount.value = countObj.total();
  }

  function registerWatch(type: ChildComposableType, sourceFunc: any): void {
    watch(
      sourceFunc,
      value => updateUserCount(type, value),
      {deep: true}
    );
  }

  return {
    setChildComposable,
    totalCount: _state.totalCount
  }
}