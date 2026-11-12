import { useState } from 'react'
import {
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Trash2,
  Edit3,
  Calendar,
  AlertCircle,
  Tag,
  Check,
  X
} from 'lucide-react'

export default function TaskManager({ tasks, setTasks }) {
  // Local state for input, filters, search, and editing
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All') // All | Active | Completed
  const [categoryFilter, setCategoryFilter] = useState('All')
  
  // New task form state
  const [isAdding, setIsAdding] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newCategory, setNewCategory] = useState('Development')
  const [newPriority, setNewPriority] = useState('Medium')
  const [newDueDate, setNewDueDate] = useState('')

  // Edit task state
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editCategory, setEditCategory] = useState('Development')
  const [editPriority, setEditPriority] = useState('Medium')

  const categories = ['Development', 'Study', 'Design', 'Personal', 'Health']

  // Handle Create
  const handleCreateTask = (e) => {
    e.preventDefault()
    if (!newTitle.trim()) return

    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      dueDate: newDueDate || 'Today',
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTasks([newTask, ...tasks])
    setNewTitle('')
    setNewDueDate('')
    setIsAdding(false)
  }

  // Handle Edit
  const startEditing = (task) => {
    setEditingId(task.id)
    setEditTitle(task.title)
    setEditCategory(task.category)
    setEditPriority(task.priority)
  }

  const saveEdit = (id) => {
    if (!editTitle.trim()) return
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: editTitle.trim(),
              category: editCategory,
              priority: editPriority,
            }
          : task
      )
    )
    setEditingId(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Clear completed
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  // Filter & Search logic
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === 'All'
        ? true
        : statusFilter === 'Active'
        ? !task.completed
        : task.completed
    const matchesCategory =
      categoryFilter === 'All' ? true : task.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  return (
    <div className="task-manager-container">
      {/* Top Header & Quick Action */}
      <div className="section-header">
        <div>
          <h1 className="section-title">Mission Tasks</h1>
          <p className="section-subtitle">
            Organize, prioritize, and execute your high-leverage goals
          </p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="btn btn-primary"
        >
          <Plus size={18} />
          <span>{isAdding ? 'Close Form' : 'New Task'}</span>
        </button>
      </div>

      {/* Collapsible New Task Card */}
      {isAdding && (
        <form onSubmit={handleCreateTask} className="task-creation-card">
          <h3 className="card-heading">Create New Objective</h3>
          <div className="form-grid">
            <div className="form-group span-2">
              <label>Task Description</label>
              <input
                type="text"
                placeholder="e.g. Build authentication middleware in React..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="input-field"
                autoFocus
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="select-field"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="select-field"
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
          </div>

          <div className="form-footer">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Plus size={16} />
              <span>Add to Queue</span>
            </button>
          </div>
        </form>
      )}

      {/* Control Bar: Search & Filters */}
      <div className="task-control-bar">
        {/* Search */}
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search objectives..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="search-clear">
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="filter-group">
          {['All', 'Active', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`filter-pill ${statusFilter === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <div className="category-select-wrapper">
          <Tag size={16} className="category-icon" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="category-dropdown"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Completed */}
        {tasks.some((t) => t.completed) && (
          <button onClick={clearCompleted} className="btn-clean-text">
            Clear Finished
          </button>
        )}
      </div>

      {/* Task List */}
      <div className="tasks-container">
        {filteredTasks.length === 0 ? (
          <div className="empty-tasks-state">
            <CheckCircle2 size={48} className="empty-icon" />
            <h3>No objectives found</h3>
            <p>
              {searchTerm || statusFilter !== 'All' || categoryFilter !== 'All'
                ? 'Try tweaking your filters or search keywords.'
                : 'Your backlog is empty. Start your flow by creating a new task above!'}
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`task-row ${task.completed ? 'is-completed' : ''}`}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleComplete(task.id)}
                className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                aria-label="Toggle task"
              >
                {task.completed && <Check size={14} />}
              </button>

              {/* Main Content or Edit Form */}
              {editingId === task.id ? (
                <div className="edit-inline-form">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="edit-input"
                    autoFocus
                  />
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="edit-select"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <select
                    value={editPriority}
                    onChange={(e) => setEditPriority(e.target.value)}
                    className="edit-select"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  <div className="edit-actions">
                    <button
                      onClick={() => saveEdit(task.id)}
                      className="icon-action-btn check"
                      title="Save"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="icon-action-btn cancel"
                      title="Cancel"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="task-details">
                    <span className="task-title-text">{task.title}</span>
                    <div className="task-meta-tags">
                      <span className="meta-category">{task.category}</span>
                      <span className={`meta-priority ${task.priority.toLowerCase()}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>

                  <div className="task-actions">
                    <button
                      onClick={() => startEditing(task)}
                      className="action-btn edit"
                      title="Edit task"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="action-btn delete"
                      title="Delete task"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
