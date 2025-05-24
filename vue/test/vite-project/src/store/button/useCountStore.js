import {defineStore} from "pinia";

export const useCountStore = defineStore('countStore', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  actions: {
    increaseCount() {
      this.count++;
    }
  }
})