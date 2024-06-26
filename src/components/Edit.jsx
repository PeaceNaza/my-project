/* eslint-disable react/prop-types */
import { useState } from "react"
import "../Styles/todo.css"

//Props from TodoItemlist
const Edit = ({editTodo, task,}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    //prevent the default action of the form
    e.preventDefault();
    
    //edit todo 
    if (value) {
      editTodo(value, task.id); //edit todo
      
      setValue();//clear the input field after submitting
    }  
  }

  return (
     <form  className="lg:ml-5 mb-2 text-xs whitespace-pre-wrap" onSubmit={handleSubmit}>
      <div className="container">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Edit task" className="placeholder:text-indigo-950 placeholder:text-xs p-2 lg:w-[350px] sm:w-[200px] h-8 rounded-md outline-none mt-2 shadow shrink" />

          <button type="submit" onClick={handleSubmit} className="ml-2 p-2 text-white bg-indigo-950 rounded-md shadow">Add Task</button>
      </div>
        
     </form>

  )
}

export default Edit