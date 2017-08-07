/* globals describe, expect, it */
import { submitTodo, SUBMIT_TODO } from '.';

describe('Actions', () => {
  const todoText = 'A todo';
  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: SUBMIT_TODO,
      id: 1,
      text: todoText,
    };

    expect(submitTodo(todoText)).toEqual(expectedAction);
  });
});
