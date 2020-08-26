import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ tasks, handleDelete, toggleCompleted, togglePriority, handleEdit, checkPriority }) {

    const todoItem = tasks.map(entry => {
        return <li> <TodoItem 
                        key={entry.id} 
                        entry={entry} 
                        handleDelete={handleDelete}
                        toggleCompleted={toggleCompleted}
                        togglePriority={togglePriority}
                        handleEdit={handleEdit}
                        checkPriority={checkPriority}
                    /></li>
    })

    return (
        <div className="todo-list">
            <ul>
                {todoItem}
            </ul>
        </div>
    )
}
