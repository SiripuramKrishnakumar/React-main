import { createStore } from "redux";

// const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "Increment" && parseInt(action.val) > 0) {
    return {
      counter: state.counter + parseInt(action.val),
    };
  }
  if (action.type === "Decrement" && parseInt(action.val) > 0) {
    return {
      counter: state.counter - parseInt(action.val),
    };
  }
  return state;
};

//const store = redux.createStore(counterReducer);
const store = createStore(counterReducer);

export default store;
