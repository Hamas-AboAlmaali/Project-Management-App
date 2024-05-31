import React, { useState } from 'react'

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState('')

  function handleChange(e) {
    setEnteredTask(e.target.value)
  }

  function handleAddTask() {
    if (enteredTask.trim() === '') return;
    onAddTask(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className='flex items-center gap-4'>
      <input type='text'
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        value={enteredTask}
        onChange={handleChange}
      />
      <button className='text-stone-700 hover:text-stone-950'
        onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  )
}

export default NewTask
