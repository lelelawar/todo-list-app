function TaskFilter({ filter, onFilterChange }) {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => onFilterChange(item.value)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            filter === item.value
              ? 'bg-blue-600 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter