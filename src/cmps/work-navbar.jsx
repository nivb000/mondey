import { useState } from "react"
import { NavLink } from "react-router-dom"
import { GrHomeRounded } from 'react-icons/gr'
import { BsThreeDots } from 'react-icons/bs'
import { BiFilterAlt, BiSearch } from 'react-icons/bi'
import { BoardMenu } from "./mui/board-menu"
import { useDispatch } from "react-redux"
import { addBoard } from "../store/actions/board.action"
import { createBoard } from "../Data/boardTemplate"

export const WorkNavbar = ({ boards }) => {

  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAddNewBoard = () => {
    const boardName = "Board " + (boards.length + 1)
    const board = createBoard(boardName)
    dispatch(addBoard(board))
  }

  return <section className="work-navbar">
    <div className="top-items">
      <div className="btns-container">
        <NavLink end to="/board">
          <button className="flex align-center">
            <GrHomeRounded />
            <span>Home</span>
          </button>
        </NavLink>
        <button className="flex align-center">
          <BiFilterAlt />
          <span>Filters</span>
        </button>
      </div>
    </div>
    <hr />
    <div className="flex col boards-list">
      <h3>Main workspace</h3>
      <div className="flex space-between list-action">
        <div className="flex align-center input-wrapper">
          <BiSearch />
          <input type="search" placeholder="Search" />
        </div>
        <button onClick={handleAddNewBoard}>+</button>
      </div>
      <ul>
        {boards?.map(board => <li key={board.id}>
          <NavLink to={`/board/${board.id}`} className="flex space-between align-center">
            <div className="flex align-center">
              <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" aria-label="Public board" className="icon_component">
                <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fill="#676879" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              <span>{board.title}</span>
            </div>
            <BsThreeDots className="three-dots" onClick={handleClick} />
          </NavLink>
          <BoardMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            open={open}
            boardId={board.id} />
        </li>)}
      </ul>
    </div>
  </section>
}