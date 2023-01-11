import React,{useContext,useRef} from 'react'
import './header.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiFillDashboard} from 'react-icons/ai';
import {AiFillFolder} from 'react-icons/ai';
import { AiFillPlusSquare } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import NoteContext from '../../contextAPI';


const Header = () => {
    const checked = useRef()

    const {showSideBar} = useContext(NoteContext);

    function checkedButton(){
        console.log(checked.current.checked)
        if(checked.current.checked === false){
            checked.current.checked = true
        }else{
            checked.current.checked = false
        }

    }
  return (
   <nav>
        <div className="nav-menu">
            <div className="menu-icon-ctx">
                <input ref={checked} type="checkbox" name="checked" id="checked" className='check-box'/>
                <AiOutlineMenu className='icon__ctx outline_menu' onClick={checkedButton}/>
            </div>
            <div className="menu-icon-ctx">
                <AiFillDashboard className='icon__ctx'/>
                <span>Dashboard</span>
            </div>
            <div className="menu-icon-ctx">
                <AiFillFolder className='icon__ctx'/>
                <span>Collection</span>
            </div>
        </div>

        {/* RIGHT SIDE BAR MENU */}

        <div className="nav-menu-right">
            <Button size='sm' ><AiFillPlusSquare/></Button>
            
        </div>
   </nav>
  )
}

export default Header