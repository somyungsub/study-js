import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

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
    headerText: 'TODO it!!',
    todoItems: storage.fetch(),
    price: 100,
    userData: {}
  },
  getters,
  actions,
  mutations
});
