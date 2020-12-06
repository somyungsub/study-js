import Vue from 'vue';
import Vuex from 'vuex';

// vue의 플러그인 사용하겠다
Vue.use(Vuex);

// 데이터를 받는 부분
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    headerText: 'TODO it!!!!',
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));   // application tab에서 데이터 보기 가능해짐
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      console.log("index : ", payload.index);
      localStorage.removeItem(payload.todoItem);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !payload.todoItem.completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(state.todoItems[payload.index], JSON.stringify(state.todoItems[payload.index]));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }

});
