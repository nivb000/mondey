import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BiInfoCircle } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { useDispatch } from "react-redux"
import { loadSelectedBoard, updateBoard, updateSelectedBoard } from '../store/actions/board.action'
import { userService } from "../services/user.service"
import { useSelector } from "react-redux"
import { GroupList } from "./board-cmps/group-list"
import { BoardTabs } from './mui/board-tabs'
import { TaskDock } from "./board-cmps/task-dock"
import { FcInvite } from 'react-icons/fc'
import { MembersModal } from "./board-cmps/members-modal"


export const Board = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { boards, selectedBoard: board } = useSelector(state => state.boardModule)
  const { boardId } = params
  const [openModal, setOpenModal] = useState(false)
  const [boardUsers, setBoardUsers] = useState([])

  const handleModalClose = () => setOpenModal(false)

  useEffect(() => {
    if (!boardId.startsWith(":")) {
      dispatch(loadSelectedBoard(boardId))
      getBoardUsers()
    } else {
      navigate(`/board/${boards[0]?.id}`)
    }

  }, [boardId])

  const handleTitleUpdate = ({ target }) => {
    const value = target.innerText
    board.title = value
    dispatch(updateSelectedBoard(board))
  }

  useEffect(() => {
    if (board) {
      document.title = board.title
      dispatch(updateBoard(board))
    }

    return () => document.title = 'Mondey'
  }, [board])

  const getBoardUsers = async () => {
    const users = await userService.getBoardUsers(boardId)
    setBoardUsers(users)
  }

  return <section className="board">
    <header className="top-section flex space-between">
      <div className="flex align-center top-l">
        <h1
          contentEditable
          spellCheck={false}
          suppressContentEditableWarning={true}
          onBlur={handleTitleUpdate}>
          {board?.title}
        </h1>
        <BiInfoCircle />
        <CiStar />
      </div>
      <div className="flex align-center top-r">
        <button className="flex align-center board-invite-btn" onClick={() => setOpenModal(true)}>
          <FcInvite />
          Invite / 1
        </button>
      </div>
    </header>

    <MembersModal
      boardId={boardId}
      handleModalClose={handleModalClose}
      openModal={openModal}
      boardUsers={boardUsers} />

    <BoardTabs groupsTab={<GroupList labels={board?.labels} />} />
    <TaskDock />

  </section>
}
