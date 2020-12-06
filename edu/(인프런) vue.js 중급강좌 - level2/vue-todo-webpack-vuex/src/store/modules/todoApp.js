import * as mutations from '../mutations'

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

const state = {
  headerText: 'TODO it!!',
  todoItems: storage.fetch(),
  price: 100,
  userData: {}
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
  headerText(state) {
    return state.headerText;
  },
  originalPrice(state) {
    return state.price;
  },
  doublePrice(state) {
    return state.price * 2;
  },
  triplePrice(state) {
    return state.price * 3;
  },
  userData(state) {
    return state.userData;
  }
}

const actions = {
  getUserData(context) {
    context.commit('getUserData');  // mutations으로 전달
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
