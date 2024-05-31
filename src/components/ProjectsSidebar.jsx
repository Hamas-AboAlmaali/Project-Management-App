import React from 'react'
import Button from './Button'

const ProjectsSidebar = ({ onStartAddProject, projects, onSelectedProject, selectedProjectId }) => {
  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72 rounded-r-xl">
      <h2 className="uppercase text-stone-200 font-bold mb-8 md:text-xl">your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map(project => {
          let cssClasses = 'w-full text-left px-2 py-1 my-1 rounded-sm hover:text-stone-200 hover:bg-stone-800'

          if (project.id === selectedProjectId) {
            cssClasses += ' text-stone-200 bg-stone-800 '
          } else {
            cssClasses += ' text-stone-400 '
          }

          return (
            <li key={project.id}>
              <button className={cssClasses}
                onClick={() => onSelectedProject(project.id)}>
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default ProjectsSidebar
