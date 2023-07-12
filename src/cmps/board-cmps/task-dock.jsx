import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

export const TaskDock = () => {

  const [counter, setCounter] = useState(0)
  const [taskIds, setTaskIds] = useState(["1", "2", "3"])
  const [dockIsOpen, setDockIsOpen] = useState(false)

  const handleClose = () => {
    setTaskIds([])
    setDockIsOpen(false)
  }

  return dockIsOpen &&
    <section className="flex space-between task-dock">
      <div className='flex space-between dock-left'>
        <div className='flex justify-center align-center counter'>
          <span>{taskIds.length}</span>
        </div>
        <div className='flex col'>
          <p>Items Selected</p>
          <div className='flex'>
            {taskIds.map(id => <span>🔵</span>)}
          </div>
        </div>
      </div>
      <div className="flex align-center space-around dock-right">
        <div className="flex col align-center option-item">
          <BsTrash />
          <p>Delete</p>
        </div>
      </div>
      <div className='flex justify-center align-center dock-close' onClick={handleClose}>
        <GrClose />
      </div>
    </section>
}