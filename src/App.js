/* eslint-disable jsx-a11y/alt-text */
import React, {useState,useEffect} from 'react';
import img from './images/43029.jpg';
import './App.css';
import Form  from './components/Form';
import List from './components/List';




function App() {
  const [input,setInput]=useState("");
  const [todo,setTodo]=useState([]);
  const[searchTask,setsearchTask]=useState("");
  const[selectitem,setSelectItem]=useState()
  const[filterTag,setfilterTag]=useState([]);
  
useEffect(() => {
  filterByTag();
}, [todo,selectitem]);

// filter function
const filterByTag =()=>{
  switch(selectitem){
  case 'red':
    setfilterTag(todo.filter((item)=> item.color === true));
    break
  case 'yellow':
    setfilterTag(todo.filter((item)=> item.color === false));
    break
  
  default:
    setfilterTag(todo)
}
};

  return (

    
  <div className="container">
    <header>ToDo List </header>
   
    <div className="app-theme">

    <div className="img-todo">
      <img src={img}/>

      </div>
      <div className="form">

        <Form 
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        searchTask={searchTask}
        
      
        />
        
        <List 
        todo={todo}
        setTodo={setTodo}
        searchTask={searchTask}
        setsearchTask={setsearchTask}
        selectitem={selectitem}
        setSelectItem={setSelectItem}
        setfilterTag={setfilterTag}
        filterTag={filterTag}
       
         />

      
        
      </div>

    </div>
  </div>
  );
}

export default App;
