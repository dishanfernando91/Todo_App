import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

const taskList = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

function App() {

  const [ tasks, setTasks ] = useState(taskList);

  const [ todo, setTodo ] = useState({
      id: '',
      task: '',
      isCompleted: false,
      isImportant: false,
      edit: false
  });

  const handleChange = e => {
      setTodo({...todo,
          task: e.target.value,
          isCompleted: false,
          isImportant: false,
      })  
  }

  const handleSubmit = (e, id) => {
      e.preventDefault()

      if(!todo.edit){
            if(todo.task.trim() !== ''){
                setTasks(tasks => [...tasks, {...todo, id: uuidv4()}])
                setTodo({id:'', task: '', isCompleted: false, isImportant: false, edit: false})
            } else {
                console.log("Enter a task")
            }
        } else {
            if(todo.task.trim() !== ''){
                const updatedTodos = tasks.map(task => {
                    if(task.id === id){
                        task.task = todo.task
                        task.edit = false
                        }
                    return task
                    } 
                )
                setTasks(updatedTodos)
                setTodo({id:'', task: '', isCompleted: false, isImportant: false, edit: false})
            } else {
                console.log("Cannot process empty field...")
            }
        }
    }

  const handleDelete = id => {
    const updatedTodo = tasks.filter(task => task.id !== id)
    setTasks(updatedTodo)
  }

//   ----------------Task Completion Settings-----------

  const toggleCompleted = id => {
      const updatedTodo = tasks.map(task => {
          if(task.id === id){
              task.isCompleted = !task.isCompleted
          } 
          return task
        })
        setTasks(updatedTodo.sort((a, b) => {
            if(a.isCompleted){
                return 1
            } else {
                return -1
            }
        }))
    }
 
// **********************************************************
// ***********************************************************

//   --------------Priority Settings------------

  const togglePriority = id => {
    const updatedTodo = tasks.map(task => {
        if(task.id === id){
            task.isImportant = !task.isImportant
        } 
        return task
      })
      setTasks(updatedTodo.sort((a, b) => {
          if(a.isImportant){
              return -1
          } else {
              return 1
          }
      }))  
}

    const handleEdit = id => {
        tasks.forEach(task => {
            if(task.id === id){
                task.edit = true
                setTodo({
                    id: task.id,
                    task: task.task,
                    isCompleted: task.isCompleted,
                    isImportant: task.isImportant,
                    edit: task.edit
                })
            }
        });
    }

    // ----------------------localStorage setting---------------------
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
      })
    
  return (
    <div className="main-wrapper">
        <div className="secondary-wrapper">
        <h2 className="header">To-Do Application with React Hooks</h2>
        <TodoInput handleChange={handleChange} handleSubmit={handleSubmit} todo={todo} tasks={tasks}/>
        <TodoList 
            key={tasks.forEach(task => { return task.id })}
            tasks={tasks} 
            handleDelete={handleDelete} 
            toggleCompleted={toggleCompleted}
            togglePriority={togglePriority}
            handleEdit={handleEdit}   
        />
        </div>
    </div>
  );
}

export default App;
