import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BiInfoCircle } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { useDispatch } from "react-redux"
import { updateBoard, updateSelectedBoard } from '../store/actions/board.action'
import { setGroup } from '../store/actions/group.action'
import { setSelectedBoard } from '../store/actions/board.action'
import { useSelector } from "react-redux"
import { BoardMiddleTop } from "./board-cmps/board-middletop"
import { GroupList } from "./board-cmps/group-list"


export const Board = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { boards, selectedBoard: board } = useSelector(state => state.boardModule)
  const { boardId } = params

  useEffect(() => {
    if (!boardId.startsWith(":")) {
      dispatch(setSelectedBoard(boardId))
    } else {
      navigate(`/board/${boards[0]?._id}`)
    }

  }, [boardId])

  const handleTitleUpdate = ({ target }) => {
    const value = target.innerText
    board.title = value
    dispatch(updateSelectedBoard(board))
  }

  useEffect(() => {
    if (board) {
      dispatch(updateBoard(board))
      dispatch(setGroup(board.groups))
    }
  }, [board])

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
      <div className="flex align-center top-r"></div>
    </header>

    <BoardMiddleTop />

    <GroupList labels={board?.labels} />
    
  </section>
}
