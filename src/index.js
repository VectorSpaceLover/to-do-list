import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// const DATA = [
//   { id: "todo-0", name: "Eat", completed: false },
//   { id: "todo-1", name: "Sleep", completed: false },
//   { id: "todo-2", name: "Repeat", completed: false }
// ];

var DATA = JSON.parse(localStorage.getItem('todo_list_data')) || [];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
