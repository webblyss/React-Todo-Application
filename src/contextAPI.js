import { createContext,useState } from "react";


const NoteContext = createContext();

export function NoteProvider ({children}){
    const [note,setNote] = useState([]);
    const [ completed,setCompleted] = useState([]);
    const [category,setCategory] = useState('School');

    const addNote = (id,title,category,completed,date)=>{
        setNote((prevState)=>[...prevState,{id,title,category,completed,date}]);
        console.log(note);
    }

    const completeTask = (item)=>{
        setCompleted((prevState)=>[...prevState,{item}])
        deleteTask(item)
        console.log(item)
    }

    const selectCategory = (category)=>{
        setCategory(category)
    }
    
    const deleteTask=(item)=>{
        setNote(note.filter((c) => c !== item));
    }

    const deleteCompleteTask = (item)=>{
        setCompleted(completed.filter((c) => c !== item));
    }
    
    

 
    return (<NoteContext.Provider value={{note,completed,category,selectCategory,deleteCompleteTask,addNote,completeTask,deleteTask}}>{children}</NoteContext.Provider>);
}




export default NoteContext

