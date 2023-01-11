import React,{useState,useRef,useContext} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import Button  from 'react-bootstrap/Button';
import NoteContext from '../../contextAPI';

const TextBox = () => {
  const {addNote,category} = useContext(NoteContext)
    const [task,setTask] = useState('');    
    const inputText = useRef()
    const time = new Date().getTime()
    function submitTask(){
      if(task === '') return alert('Enter a task')
      addNote(Date.now(),task,category,false,time)
    }

  return ( 
    <div className='input-wrapper'>
   <Button onClick={submitTask} size='sm' className="mx-2" variant='success'> <BsPlusCircle className='button_add'/> </Button>
    <input  onChange={(e)=>{setTask(e.target.value)}} type="text" name="text" id="text" placeholder='Add a task'/>
    </div>
  ) 
}

export default TextBox