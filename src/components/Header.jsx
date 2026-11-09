import { CheckSquare, CalendarDays } from 'lucide-react'

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-600 p-2.5 text-white">
          <CheckSquare size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            TaskFlow
          </h1>
          <p className="text-sm text-slate-500">
            Organize your daily tasks
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
        <CalendarDays size={18} />
        <span>My Workspace</span>
      </div>
    </header>
  )
}

export default Header