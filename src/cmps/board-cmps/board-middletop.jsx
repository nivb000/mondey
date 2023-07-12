import { Button } from "@mui/material"
import { BiSearch } from 'react-icons/bi'
import { taskService } from "../../services/task.service"

export const BoardMiddleTop = () => {

  const handleNewItem = () => {}

  return <section className='board-middletop'>
    <div className="flex board-actions">
      <Button variant="contained" color="primary" onClick={handleNewItem}>New Item</Button>
      <div className="flex align-center search-container">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </section>
}
