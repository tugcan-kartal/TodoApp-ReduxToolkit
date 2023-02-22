import React,{useState,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addToList,removeFromList,updateFromList,selectTaskList } from './todoSlice';

const Todo = () => {

  const allTasks=useSelector(selectTaskList);
  const dispatch=useDispatch();
  const inputRef=useRef(null);

  const [task,setTask]=useState("");

  const addTask=(e)=>{
    task && dispatch(addToList(task));
    inputRef.current.value="";
    inputRef.current.focus();
    setTask("");
  }

  return (
    
    <div className='bg-gray-200 h-[100vh] flex flex-col'>

      <div className='flex flex-col gap-y-8 mb-8'>
        <input placeholder='enter task' className='text-center w-[20vw] flex ml-[40vw] outline-none py-2 rounded-full mt-16' onChange={(e)=>setTask(e.target.value)} ref={inputRef}/>
        <button className='bg-white p-2 w-20 ml-[47.5vw] rounded-full text-md' onClick={addTask}>Add Task</button>
      </div>
      
      <div>

        {allTasks && allTasks.map((val,key)=>(
          <div className='flex flex-col justify-center items-center w-[50vw] h-[15vh] ml-[25vw] mb-10 bg-white shadow-md rounded-lg overflow-x-hidden' key={key}>
            
            <div className='mb-8 text-lg'>
              {val}
            </div>

            <div>
              <button className='mx-4 text-gray-500 bg-gray-200 rounded-lg p-2' onClick={()=>dispatch(removeFromList(val))}>Remove</button>
              <button className='mx-4 text-gray-500 bg-gray-200 rounded-lg p-2' onClick={()=>dispatch(updateFromList(val))}>Update</button>
            </div>

          </div>
        ))}
      
      </div>

    </div>
  
  )
}

export default Todo