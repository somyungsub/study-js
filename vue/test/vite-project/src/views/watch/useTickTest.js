import {ref, watch} from "vue";

export function useTickTest() {
  const _state = {
    count: ref(0),
  };

  watch(_state.count, (newVal, oldVal) => {
    console.log("newVal : ", newVal, " oldVal : ", oldVal, "");
  });

  return {
    count: _state.count,
  }
}