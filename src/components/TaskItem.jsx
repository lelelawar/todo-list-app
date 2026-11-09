import { useState } from 'react'
import { Circle, CheckCircle2, Pencil, Trash2, Save, X } from 'lucide-react'

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)

  function handleSave() {
    if (!editTitle.trim()) return

    onEdit(task.id, editTitle)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <button
        onClick={() => onToggle(task.id)}
        className="shrink-0"
        aria-label="Toggle task"
      >
        {task.completed ? (
          <CheckCircle2 className="text-green-500" size={22} />
        ) : (
          <Circle className="text-slate-400" size={22} />
        )}
      </button>

      <div className="min-w-0 flex-1">
        {isEditing ? (
          <input
            autoFocus
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave()
              if (e.key === 'Escape') setIsEditing(false)
            }}
            className="w-full rounded-lg border border-blue-300 px-3 py-2 text-sm outline-none"
          />
        ) : (
          <p
            className={`break-words text-sm font-medium ${
              task.completed
                ? 'text-slate-400 line-through'
                : 'text-slate-800'
            }`}
          >
            {task.title}
          </p>
        )}
      </div>

      {isEditing ? (
        <>
          <button onClick={handleSave} aria-label="Save task">
            <Save size={18} className="text-green-600" />
          </button>

          <button
            onClick={() => setIsEditing(false)}
            aria-label="Cancel editing"
          >
            <X size={18} className="text-slate-500" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
          >
            <Pencil size={18} className="text-slate-500 hover:text-blue-600" />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            aria-label="Delete task"
          >
            <Trash2 size={18} className="text-slate-500 hover:text-red-600" />
          </button>
        </>
      )}
    </div>
  )
}

export default TaskItem