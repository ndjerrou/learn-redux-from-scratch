import { createStore } from 'redux'; // a global state management library

// Initial State
const initialState = {
  counter: 0,
};

// A reducer - a pure function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

// creating an action...

const increment = {
  type: 'INCREMENT',
};

const decrement = {
  type: 'DECREMENT',
};

function getNotified() {
  const state = store.getState();
  console.log(state);
}

store.subscribe(getNotified);

// dispatching an action...
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);
store.dispatch(decrement);
