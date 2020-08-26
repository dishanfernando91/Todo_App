import React from 'react'


export default function TodoInput( {handleChange, handleSubmit, todo, tasks }) {
    return (
        <div className="input-wrapper">
            <form className="form-parent" onSubmit={ e => handleSubmit(e, todo.id) }>
                <input className="search-bar" type="text" placeholder="Enter Task" onChange={handleChange} value={todo.task}/>
                <input className="searchBtn" type="submit" value={todo.edit ? "Edit Task" : tasks.length === 0 ? "Create List" : "Add to List"}
                />
            </form>
        </div>
    )
}
