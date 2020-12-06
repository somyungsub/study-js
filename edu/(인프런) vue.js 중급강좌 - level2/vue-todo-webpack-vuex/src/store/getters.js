const storedTodoItems = (state) => {
  return state.todoItems;
};

const headerText = (state) => {
  return state.headerText;
};

const originalPrice = (state) => {
  return state.price;
};

const doublePrice = (state) => {
  return state.price * 2;
};

const triplePrice = (state) => {
  return state.price * 3;
};

const userData = (state) => {
  return state.userData;
};

export {userData, headerText, originalPrice, triplePrice, doublePrice, storedTodoItems};
