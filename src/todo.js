import React from 'react';
const Todo=({el})=>{
    return (  <div>
     <p>{el}</p>
     <button>delete</button>
     <button>complete</button>
     <button>edite</button>
     </div>
    )

}
export default Todo