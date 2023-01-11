import React,{useContext} from 'react';
import {AiOutlineBook} from 'react-icons/ai';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {AiOutlineAntDesign} from 'react-icons/ai';
import {AiOutlineCode} from 'react-icons/ai';
import TextBox from './components/Showcase/TextBox';
import BodyTitle from './components/Showcase/BodyTitle';
import TaskContainer from './TaskContainer';
import NoteContext from './contextAPI';
import CompleteTask from './CompleteTask';

const BodyContainer = () => {
  const {selectCategory} = useContext(NoteContext);
  return (
    <div className='body-container'>
    {/* SIDEBAR */}
    <div className={"sidebar--section" }>
        <h6>Collections</h6>
        <div className="side--menu--ctx--icon">
          <div className="nav--card"  onClick={()=>{selectCategory("School")}}>
            <div className="style__icon book_icon">
            <AiOutlineBook className='icon__book'/>
            </div>
            <span>School</span>
          </div>
          <div className="nav--card" onClick={()=>{selectCategory("Design")}}>
            <div className="style__icon design__icon">
            <AiOutlineAntDesign className='icon__book'/>
            </div>
            <span>Design</span>
          </div>
          <div className="nav--card" onClick={()=>{selectCategory("Code")}}>
            <div className="style__icon">
            <AiOutlineCode className='icon__book'/>
            </div>
            <span>Code</span>
          </div>
          <div className="nav--card" onClick={()=>{selectCategory("Personal")}}>
            <div className="style__icon" >
            <AiOutlineUserAdd className='icon__book'/>
            </div>
            <span>Personal</span>
          </div>
        </div>
    </div>

    <div className="main--container">
    <BodyTitle/>
    <TextBox/>
    <TaskContainer/>
    <CompleteTask/>

    </div>
    </div>
  )
}

export default BodyContainer