import React from 'react'
import Todo from './todo'
const TodoList=(todos)=>{
    return(  
      todos.map(el=><Todo el={el}/>)

    )

}
export default TodoList