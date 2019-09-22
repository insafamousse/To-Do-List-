import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="app-title">Daily Todo Lists</h1>
        <AddTodo />
      </div>
      <TodoList/>
    </div>
  );
}

export default  App;
