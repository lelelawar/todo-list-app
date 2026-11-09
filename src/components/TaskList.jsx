import { ListTodo } from 'lucide-react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-12 text-center">
        <ListTodo size={40} className="mb-3 text-slate-300" />

        <h3 className="font-semibold text-slate-700">
          No tasks found
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Add a new task to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default TaskList