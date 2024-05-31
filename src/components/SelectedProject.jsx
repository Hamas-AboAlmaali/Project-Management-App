import React from 'react'
import Tasks from './Tasks'

const SelectedProject = ({ project, onDelete, onAddTask, onDeleteTask, tasks }) => {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  console.log(formattedDate)

  return (
    <div className='mt-16 w-[35rem]'>
      <header className='mb-t pb-4 border-b-2 border-stone-400'>
        <div className='flex justify-between items-center'>
          <h1 className='mb-2 text-3xl font-bold text-stone-600'>{project.title}</h1>
          <button className='text-stone-600 hover:text-slate-950'
            onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className='mb-4 text-slate-400'>{formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  )
}

export default SelectedProject
