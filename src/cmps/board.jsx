import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BiInfoCircle } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { useDispatch } from "react-redux"
import { loadSelectedBoard, updateBoard } from '../store/actions/board.action'
import { useSelector } from "react-redux"
import { GroupList } from "./board-cmps/group-list"
import { BoardTabs } from './mui/board-tabs'
import { FcInvite } from 'react-icons/fc'
import { MembersModal } from "./board-cmps/members-modal"


export const Board = () => {

  const dispatch = useDispatch()
  const params = useParams()
  const { selectedBoard: board } = useSelector(state => state.boardModule)
  const { boardId } = params
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleModalClose = () => setOpenModal(false)

  useEffect(() => {
    setIsLoading(true)
    if (!isLoading) {
      try {
        dispatch(loadSelectedBoard(boardId)) 
      } catch (error) {
        console.log('err', error)
      } finally {
        setIsLoading(false)
      }
    }

    return () => setIsLoading(false)

  }, [boardId, isLoading])

  const handleTitleUpdate = ({ target }) => {
    const value = target.innerText
    board.title = value
    saveBoardChanges()
  }

  const saveBoardChanges = () => {
    dispatch(updateBoard(board))
  }

  useEffect(() => {
    if(board){
      document.title = board.title
    }
    return () => document.title = 'Mondey'
  }, [board?.title])

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
      members={board?.members}
      handleModalClose={handleModalClose}
      openModal={openModal}
      saveBoardChanges={saveBoardChanges} />

    <BoardTabs groupsTab={<GroupList labels={board?.labels} />} />
  </section>
}
