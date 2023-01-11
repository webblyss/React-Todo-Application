import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import NoteContext from './contextAPI';

const CompleteTask = () => {
    const {completed,deleteCompleteTask,category} = useContext(NoteContext)

  return (
    <div className='task__section'>
    <h6>Completed - {completed.length}</h6>
      {
      completed.map((item,index)=>(
        item.item.category === category ? <div className="task__card" key={index}>
        <span> <strike>{item.item.title}</strike> </span>
        <div className="button-controller">
        <Button variant='danger' size="sm" onClick={()=>{deleteCompleteTask(item)}}>Delete</Button>
        </div>
    </div> : <span></span>
        ))
      }
    </div>
  )
}

export default CompleteTask