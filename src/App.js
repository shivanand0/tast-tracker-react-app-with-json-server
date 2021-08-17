// import React from 'react'
import './App.css';
import { useState, useEffect } from "react";

import {Header} from './components/Header';
import {Tasks} from './components/Tasks';
import {AddTask} from './components/AddTask';
import { wait } from '@testing-library/react';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const  getTasks = async () => {
      const tasksFromServer = await fetchTasks() 
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // console.log(data)
    return data
  }

  //fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    // console.log(data)
    return data
  }

  //Delete a task
  const deleteTask = async (id) => {
    // console.log('delete', id)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    // alert(id);
    //save task to toggle
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    
    setTasks(
      tasks.map((task) => 
      // task.id === id ? {...task, reminder: !task.reminder } : task))
      task.id === id ? {...task, reminder: data.reminder } : task))
  }

  //add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
    // console.log(task)
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* <Header title = "task manager"/> */}
      { showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : <p style={{ textAlign: 'center', color: 'red'}}>Nothing to show</p>
      }
    </div>
  );
}

// class method
// class App extends React.Component{
//   render() {
//   return <h1>Hello from class</h1>
//   }
// }



export default App;
