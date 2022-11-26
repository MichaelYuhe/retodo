import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from "../../components/basic/Header";
import Tasks from "../../components/todo/Tasks";
import AddTask from "../../components/todo/AddTask";

import './index.css'

const Todo = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios
      .get('https://retodo-server.zeabur.app/get')
      .then(res => setTasks(res.data.items))
  }, [])

  const addTask = async (task) => {
    try {
      const _id = Math.floor(Math.random() * 10000) + 1
      const newTask = { _id, text: task.text, date: task.day }
      
      await axios.post('https://retodo-server.zeabur.app:8090/add', newTask)

      setTasks([...tasks, newTask])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (_id) => {
    setTasks(tasks.filter((task) => task._id !== _id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <>
      <Header
        title="Todoist"
        onClick={() => setShowAdd(!showAdd)}
        cardName='Arrange my day'
      />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />) :
        ('No Tasks')}
    </>


  );
}

export default Todo;
