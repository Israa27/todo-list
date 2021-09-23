import React from 'react'

export default function Todo({todos,todo,setTodo}) {
       // finish the task
       const finishItem=(event)=>{
        if (event.target.classList.contains('pre')) {
            event.target.classList.toggle("finish");
        }
    };

  
    //delete item from list
    const deleteItem=(event)=>{
        if (event.target.className ==="delete") {
            event.target.parentNode.remove()
        }
    
    };
const changeColorSt =()=>{
    setTodo(
        todo.map((item)=>{
            if(item.id === todos.id){
                return{
                    ...item, color:!item.color,
                };
            }
            return item;
           
        })
        
    );
};


    return (

        
        <div>
             <div key ={todos.id}  className="new-task pre" onClick={finishItem} >
                <div className="text">
                     <i className="fas fa-check-circle "></i> <p >{todos.name}</p>
                     <button className={`color ${todos.color ?'red':""}`} onClick={changeColorSt}></button>
                </div>
                <button className="delete" onClick={deleteItem} >Delete <i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
}
