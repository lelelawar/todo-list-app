function TaskStats({ total, active, completed }) {
  const stats = [
    {
      label: 'Total Tasks',
      value: total,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'In Progress',
      value: active,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    {
      label: 'Completed',
      value: completed,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div
            className={`mb-3 inline-flex rounded-lg p-2 ${stat.bg} ${stat.color}`}
          >
            <span className="text-lg font-bold">*</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            {stat.value}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskStats