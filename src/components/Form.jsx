/* eslint-disable react/prop-types */
import { useState } from 'react'

//props coming from todolist
const Form = ({addTodo}) => { 
  
  const [value, setValue] = useState("");
   
  const handleSubmit = (e) => {
    //prevent the default action of the form
    e.preventDefault();
     if (value) {
      //call the function addTodo from todolist component and pass the value as an argument
      addTodo(value); //add todo
      //clear the input field after submitting
      setValue("");
     }

  };


  return (
     <form className="p-5" onSubmit={handleSubmit}>

        <input type="text" placeholder="What tasks do you need to accomplish today?" className="placeholder:text-indigo-950 p-2 w-[400px] rounded-md outline-none" value={value} onChange={(e) => setValue(e.target.value)} />
        
        <button type="submit" className="ml-2 p-2 text-white bg-indigo-950 rounded-md">Add Task</button>

     </form>
  )
}

export default Form