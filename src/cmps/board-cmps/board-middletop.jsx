import { Button } from "@mui/material"

export const BoardMiddleTop = () => {


  return <section className='board-middletop'>
    <div className="flex board-actions">
      <Button variant="contained" color="primary">New Item</Button>
      <input type="text" placeholder="🔍 Search" />
    </div>
  </section>
}
