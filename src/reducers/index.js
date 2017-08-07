import { SUBMIT_TODO } from '../actions/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    default:
      return state;
  }
};
