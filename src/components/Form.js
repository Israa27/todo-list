


export default function Form({input ,setInput,todo ,setTodo}) {
    //set value of input 
    const onInputChange =(event)=>{
        setInput(event.target.value);
       
      };
      // set value of todo array
    const addNewTask=()=>{
        if(input !== ''){
            const newTask ={
                name:input,
                id:Math.floor(Math.random()*1000),
                color:false
            };
            setTodo([...todo,newTask]) ;
        }
        
    };

      const onSubForm=(event)=>{
          event.preventDefault();
          setInput('')
      };
       
     
    return(
    
            <form onSubmit={onSubForm}>
                <input  className="input-task" type="text" placeholder="Add new task ... " value={input} required  onChange={onInputChange}/>
                <button className="bt-task" type="submit"   onClick={addNewTask}>Add</button>  
            </form>
           

)
}
