import React,{useContext} from 'react';
import './components.css';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineMore} from 'react-icons/ai';
import NoteContext from '../../contextAPI';


const BodyTitle = () => {
  const { category } = useContext(NoteContext)
  return (
    <div className='b__title'>
        <div className="main--title">
        <div className="style__icon book_icon">
            <AiOutlineArrowLeft className='icon__book'/>
            </div>
            <span>{category}</span>
        </div>

        {/* DISPLAY OPTIONS */}

        <div className="option__menu">
            <AiOutlineMore/>
        </div>

    </div>
  )
}

export default BodyTitle