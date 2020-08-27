import React from 'react'
import { MdDelete, MdDoneAll, MdEdit } from 'react-icons/md'
import { FcHighPriority } from "react-icons/fc";

export default function TodoItem( { entry, handleDelete, toggleCompleted, togglePriority, handleEdit } ) {

    return (
        <div className="item-group">
                <p 
                className={`${entry.isCompleted ? 'completed' : ''}  ${entry.isImportant ? 'important' : ''}`}
                >
                    {entry.task}</p>
                <div className="item-btns">
                <button onClick={()=>handleDelete(entry.id)}>
                    <MdDelete size={18} style={{ color: 'red'}} />
                </button>
                <button onClick={() => {toggleCompleted(entry.id)}}>
                    <MdDoneAll  size={20} style={{ color: entry.isCompleted ? 'green' : 'grey' }} />
                </button>
                <button onClick={() => { togglePriority(entry.id); }}>
                    <FcHighPriority  size={18} />
                </button>
                <button onClick={() => handleEdit(entry.id)}>
                    <MdEdit size={18} style={{ color: '#cccc00'}}/>
                </button>
            </div>
        </div>
    )
}
