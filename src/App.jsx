import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { submitTodo } from './actions/';

import AddTodo from './components/AddTodo/';

export const App = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React: Todo in action!</h2>
    </div>
    <div className="todo-container">
      <AddTodo submitTodo={props.submitTodo} />
    </div>
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default connect(state => state.todoListApp, { submitTodo })(App);
