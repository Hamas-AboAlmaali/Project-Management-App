import React from 'react'
import NewTask from './NewTask'

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section className='mt-4'>
      <h2 className='mb-4 text-2xl font-bold text-stone-700'>Tasks</h2>
      <NewTask onAddTask={onAddTask} />

      {tasks.length === 0 && <p className='my-4 text-stone-800'>
        This project does not have any tasks yet.
      </p>}
      {tasks.length > 0 && <ul className='mt-8 bg-stone-100 p-4'>
        {tasks.map(task => {
          return (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button className='text-stone-700 hover:text-red-500'
                onClick={() => onDeleteTask(task.id)}>
                Clear
              </button>
            </li>
          )
        })}
      </ul>}
    </section>
  )
}

export default Tasks
