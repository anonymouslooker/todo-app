import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from './components/AddTodo/';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React: Todo in action!</h2>
    </div>
    <div className="todo-container">
      <AddTodo submitTodo={() => {}} />
    </div>
  </div>
);

export default App;
