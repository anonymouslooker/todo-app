export const SUBMIT_TODO = 'SUBMIT_TODO';

let todoID = 0;

const nextID = () => {
  todoID += 1;
  return todoID;
}

export const submitTodo = (todoText) => {
  return {
    type: SUBMIT_TODO,
    id: nextID(),
    text: todoText,
  };
};
