import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'


function App() {
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

    const data = await res.json()
    setTask([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTask(tasks.filter((task) =>
      task.id !== id
    ))
  }

  const toggleReminder = async (id) => {
    const fetched_task = await fetchTask(id)
    const updated = { ...fetched_task, reminder: !fetched_task.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updated)
    })

    const data = await res.json()

    setTask(tasks.map((task) =>
      task.id === id ?
        { ...task, reminder: data.reminder } : task
    ))
  }

  return (
    <Router>
      <div className="container" >
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder} /> : 'No tasks'}
          </>
        )} />
        <Route path='/About' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App