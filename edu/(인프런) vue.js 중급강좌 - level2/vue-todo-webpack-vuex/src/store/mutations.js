import axios from "axios";

const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));   // application tab에서 데이터 보기 가능해짐
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  console.log("index : ", payload.index);
  localStorage.removeItem(payload.todoItem);
  state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !payload.todoItem.completed;
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(state.todoItems[payload.index], JSON.stringify(state.todoItems[payload.index]));
}
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

const getUserData = (state) => {
  axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(function(response) {
      console.log(response.data);
      state.userData = response.data;   // this.data = response.data 에서 this 유의!!
      console.log(state.userData);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export {addOneItem, toggleOneItem, clearAllItems, getUserData, removeOneItem}
