import { createStore } from 'redux';

function notify() {
  const state = store.getState();
  console.log(state);
  console.log('---------------------------------');
  console.log('---------------------------------');
}
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BUG': {
      const bugId = Object.keys(state).length + 1;
      const bug = {
        resolved: false,
        desc: action.payload.desc,
      };

      return {
        ...state,
        [bugId]: bug,
      };
    }
    case 'DELETE_BUG': {
      //   const bugId = action.payload.id;

      //   const updatedBugs = state.bugs.filter(bug => bug.id !== bugId);

      //   return {
      //     ...state,
      //     bugs: updatedBugs,
      //   };
      if (Object.keys(state).includes(action.payload.id)) {
        const deletedState = { ...state };

        delete deletedState[action.payload.id];

        return deletedState;
      }
      return state;
    }
    case 'EDIT_BUG': {
      if (Object.keys(state).includes(action.payload.id)) {
        const updatedState = { ...state };

        updatedState[action.payload.id].desc = action.payload.desc;

        return updatedState;
      }
      return state;
    }
    case 'RESOLVE_BUG': {
      if (Object.keys(state).includes(action.payload.id)) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            resolved: true,
          },
        };
      }
      return state;
    }

    default:
      return state;
  }
};

// creating the store

const store = createStore(reducer);

// action creator for adding bugs - returns an action for adding a bug

const addBug = desc => ({
  type: 'ADD_BUG',
  payload: {
    desc,
  },
});

const deleteBug = id => ({
  type: 'DELETE_BUG',
  payload: {
    id,
  },
});

const editBug = (id, desc) => ({
  type: 'EDIT_BUG',
  payload: {
    desc,
    id,
  },
});

const resolveBug = id => ({
  type: 'RESOLVE_BUG',
  payload: { id },
});

store.subscribe(notify);

// dispatching an action...
store.dispatch(addBug('Incorrect number of articles in the header'));
store.dispatch(addBug('Incorrect color for the footer'));
store.dispatch(deleteBug('2'));
store.dispatch(editBug('1', 'Now, it shows NaN'));
store.dispatch(resolveBug('1'));
store.dispatch(addBug('bug'));
store.dispatch(addBug('Bug 2'));
store.dispatch(addBug('3'));
store.dispatch(addBug('Bug 4'));
store.dispatch(deleteBug('3'));
store.dispatch(deleteBug('4'));
store.dispatch(resolveBug('2'));
console.log('ici');
store.dispatch(resolveBug('4'));
store.dispatch(deleteBug('1'));
store.dispatch(deleteBug('2'));
store.dispatch(deleteBug('3'));
store.dispatch(deleteBug('4'));
