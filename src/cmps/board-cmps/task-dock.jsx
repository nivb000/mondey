import { BsTrash } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'

export const TaskDock = () => {

  const [counter, setCounter] = useState(0)
  const [taskIds, setTaskIds] = useState([])
  const [dockIsOpen, setDockIsOpen] = useState(false)

  return <section className="flex space-between task-dock" style={{display: 'none'}}>
    <div className='flex space-between dock-left'>
      <div className='flex justify-center align-center counter'>
        <span>{counter}</span>
      </div>
      <p>Items Selected</p>
    </div>
    <div className="flex align-center space-around dock-right">
      <div className="flex col align-center option-item">
        <BsTrash />
        <p>Delete</p>
      </div>
    </div>
    <div className='flex justify-center align-center dock-close'>
      <GrClose />
    </div>
  </section>

}