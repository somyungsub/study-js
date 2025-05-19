import {ref, watch} from "vue";

export function useCount() {
  const _state = {
    count: ref(0),
  };

  function increment() {
    _state.count.value++;
  }

  function getCount() {
    return _state.count.value;
  }

  watch(_state.count, (newVal, oldVal) => {
    console.log("newVal : ", newVal, " oldVal : ", oldVal, "");
  });

  return {
    increment,
    count: _state.count,
  }
}