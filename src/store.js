import { combineReducers, createStore } from 'redux';
import { reducer as todoListApp } from './reducers/';

const reducers = combineReducers({
  todoListApp,
});

export default createStore(reducers);
