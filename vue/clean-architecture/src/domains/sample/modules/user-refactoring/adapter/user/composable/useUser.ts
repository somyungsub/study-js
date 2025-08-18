import {ref, type Ref} from "vue";

export type useUserType = {
  userCount: Ref<number>;
  updateUserCount(value: number): void;
};

export function useUser(): useUserType {
  const _state: {
    userCount: Ref<number>;
  } = {
    userCount: ref(0),
  };

  function updateUserCount(value: number) {
    _state.userCount.value = value;
  }

  return {
    userCount: _state.userCount,
    updateUserCount
  };
}
