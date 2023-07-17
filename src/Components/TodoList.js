import React from "react";
import { FaTrash} from 'react-icons/fa';
import {CgCheckR} from 'react-icons/cg';

const TodoList = (props,input,index)=>{

    return (
    <>
    <div className= {input.isComplete ? "complete task-div":"task-div"} key={index}>
        <div className="todo-text">{props.text}</div>
    <CgCheckR className = {input.isComplete ? 'hide':'Checkmark'} onClick={()=>{
        props.onSel(props.id);
    }}/>
    <FaTrash className="FaTrash" onClick={()=>{
        props.onSelect(props.id);
    }}/>
    </div>    
    </>  
    )
   
};

export default TodoList;