import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({ onAdd, onCancel }) => {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()
  const modal = useRef()

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDueDate
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className="mb-4 text-stone-600">Oops ... You entered not valid data.</p>
        <p className="mb-4 text-stone-600">Please check that your data is correct.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex gap-4 my-4 items-center justify-end">
          <li>
            <button className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}>
            Save
          </button>
          </li>
        </menu>

        <Input ref={title} type="text" label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} type="date" label="Due Date" />
      </div>
    </>
  )
}

export default NewProject
