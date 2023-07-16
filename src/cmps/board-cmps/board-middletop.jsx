import { Button } from "@mui/material"
import { BiSearch } from 'react-icons/bi'

export const BoardMiddleTop = ({ handleNewTask }) => {

  const currDate = new Date()

  const task = {
    title: "",
    statusLabel: 0,
    members: [],
    date: `${currDate.getMonth() + 1}/${currDate.getDate()}/${currDate.getFullYear()}`
  }

  return <section className='board-middletop'>
    <div className="flex board-actions">
      <Button variant="contained" color="primary" onClick={() => handleNewTask(task)}>New Item</Button>
      <div className="flex align-center search-container">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </section>
}
