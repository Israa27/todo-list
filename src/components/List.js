/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './Form';
import Todo from './Todo';
export default function List({setSelectItem,filterTag,todo,setTodo,searchTask,setsearchTask}) {  
    const selectHandler=(event)=>{
        setSelectItem(event.target.value)
    };

    const searchInput=(event)=>{
      event.preventDefault();
     setsearchTask(event.target.value)
    };
    if(searchTask.length > 0){
     filterTag = filterTag.filter((val)=>{
        return val.name.match(searchTask)
         
      });
    };
    return (
        <div>
     
             <div className="search">
             <input  className="input-search" type="text" placeholder="Search for task ..... " value={searchTask} onChange={searchInput} required />
                <select onClick={selectHandler}>
                    <option value="filter by tag">filter by tag</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                </select>  
             </div>
            {todo !== [] ? (
          <div>
              {filterTag.map((todos)=>(
                <Todo 
               key={todos.id}
               todos={todos}
               todo={todo}
               name={todos.name}
               setTodo={setTodo} 
               filterTag={filterTag}

                />
           
        
              ))}
           </div>
           
              ):null}
   
        </div>
    )
}
