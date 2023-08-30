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
      <button onClick={() => handleNewTask(task)}>New Item</button>
      <div className="flex align-center search-container">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </section>
}
