import React,{useState} from 'react';

import './App.css';
import Addtodo from './Addtodo';
import TodoList from './todoList';

function App() {
  const [todos,setTodos]=useState(["safa","islem"])
  return (
    <div className="App">
     <Addtodo/>
     <TodoList todos=todos />
    </div>
  );
}

export default App;
