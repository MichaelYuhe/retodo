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
      .get('https://retodo-server.zeabur.app/api/get')
      .then(res => setTasks(res.data.items))
  }, [])

  const addTask = async (task) => {
    try {
      const _id = Math.floor(Math.random() * 10000) + 1
      const newTask = { _id, text: task.text, date: task.day }

      await axios.post('https://retodo-server.zeabur.app/api/add', newTask)

      setTasks([...tasks, newTask])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (_id) => {
    try {
      await axios.delete('https://retodo-server.zeabur.app/api/delete', {
        data: { _id }
      })

      setTasks(tasks.filter((task) => task._id !== _id))
    } catch (error) {
      console.log(error)
    }
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
        (<Tasks tasks={tasks} onDelete={deleteTask} />) :
        ('No Tasks')}
    </>


  );
}

export default Todo;
