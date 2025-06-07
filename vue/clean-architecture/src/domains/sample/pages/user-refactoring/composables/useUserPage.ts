import type {useUserType} from "./useUser.ts";
import type {useEventHistoryType} from "./useEventHistory.ts";
import {ref, type Ref, watch} from "vue";

export type useUserPageType = {
  userCount: Ref<number>;
  setChildComposable<T extends 'useUser' | 'useEventHistory'>(
    composable: T extends 'useUser' ? useUserType : useEventHistoryType,
    type: T
  ): void
};

export function useUserPage(): useUserPageType {
  const _state: {
    userCount: Ref<number>;
    useUser: useUserType | null;
    useEventHistory: useEventHistoryType | null;
  } = {
    userCount: ref(0),
    useUser: null,
    useEventHistory: null
  };

  function sumUserCount(): number {
    const baseUser = _state.useUser?.getUserCount() ?? 0;
    const historyUser = _state.useEventHistory?.getEventHistoryCount() ?? 0;
    return baseUser + historyUser;
  }

  function updateUserCount() {
    _state.userCount.value = sumUserCount();
  }

  function setChildComposable<T extends 'useUser' | 'useEventHistory'>(
    composable: T extends 'useUser' ? useUserType : useEventHistoryType,
    type: T
  ): void {
    _state[type] = composable as any;
    if (type === 'useUser') {
      registerWatch(() => _state.useUser?.users.value);
    } else {
      registerWatch(() => _state.useEventHistory?.histories.value);
    }
  }

  function registerWatch(sourceFunc: any): void {
    watch(
      sourceFunc,
      updateUserCount,
      { deep: true, immediate: true }
    );
  }


  return {
    userCount: _state.userCount,
    setChildComposable
  };
}
