import { Button } from "@mui/material"
import { BiSearch } from 'react-icons/bi'

export const BoardMiddleTop = () => {


  return <section className='board-middletop'>
    <div className="flex board-actions">
      <Button variant="contained" color="primary">New Item</Button>
      <div className="flex align-center search-container">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </section>
}
