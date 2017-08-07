/* global describe, it, expect */
import { reducer, initialState } from '.';
import { SUBMIT_TODO } from '../actions/';

describe('Reducers', () => {
  let todoText = 'A todo';
  it('Should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [{
          id: 1,
          text: todoText,
        }],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
