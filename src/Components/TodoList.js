import React from "react";
import { FaTrash } from 'react-icons/fa';
import { CgCheckR } from 'react-icons/cg';
import '../index.css';

const TodoList = ({ items, completeData, deleteData }) => {

    return (
        <>
            {items.map((item, index) => (
                <div className={item.isComplete ? "complete task-div" : "task-div"} key={index}>
                    <div className="todo-text">{item.text}</div>
                    <CgCheckR className={item.isComplete ? 'hide' : 'Checkmark'} onClick={() => {
                        completeData(item.id);
                    }} />
                    <FaTrash className="FaTrash" onClick={() => {
                        deleteData(item.id);
                    }} />
                </div>
            ))}
        </>
    );

};

export default TodoList;