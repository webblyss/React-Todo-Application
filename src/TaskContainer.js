import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import NoteContext from './contextAPI';
const TaskContainer = () => {

  const {note,deleteTask,completeTask,category}  = useContext(NoteContext);


  return (
    <div className='task__section'>
        <h6>Task - {note.length}</h6>

        {note.map((item,index)=>(
       item.category === category ? <div className="task__card" key={index}>
          <div className="divider">
          <input onChange={()=>{completeTask(item)}} type="checkbox" name="check" id="" />
          </div>
            <span>{item.title}</span>
            <div className="button-controller">
            <Button className='mx-3' variant='primary' size="sm">Edit</Button>
            <Button variant='danger' size="sm" onClick={()=>{deleteTask(item)}} >Delete</Button>
            </div>
        </div> : <span></span>
        ))}
    </div>
  )
}

export default TaskContainer