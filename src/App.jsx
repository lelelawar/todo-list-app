import { useState } from 'react'

import Header from './components/Header'
import TaskStats from './components/TaskStats'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React Fundamentals',
      completed: true,
    },
    {
      id: 2,
      title: 'Build To-Do List UI',
      completed: false,
    },
    {
      id: 3,
      title: 'Practice useState Hook',
      completed: false,
    },
  ])

  const [filter, setFilter] = useState('all')

  // Menambahkan tugas
  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  // Mengubah status tugas
  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  // Menghapus tugas
  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    )
  }

  // Mengedit tugas
  function editTask(id, newTitle) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    )
  }

  // Filter tugas
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed

    return true
  })

  // Statistik tugas
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length
  const activeTasks = totalTasks - completedTasks

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-8">

        <Header />

        <section>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Good Morning!
          </h2>

          <p className="mb-6 text-slate-500">
            Here's what's happening with your tasks today.
          </p>

          <TaskStats
            total={totalTasks}
            active={activeTasks}
            completed={completedTasks}
          />
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              Add New Task
            </h2>

            <TaskForm onAdd={addTask} />
          </div>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="text-lg font-bold text-slate-900">
              Your Tasks
            </h2>

            <TaskFilter
              filter={filter}
              onFilterChange={setFilter}
            />
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </section>

      </div>
    </main>
  )
}

export default App