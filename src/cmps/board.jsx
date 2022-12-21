import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { boardService } from "../services/board.service.local"
import { BiInfoCircle } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { useDispatch } from "react-redux"
import { updateBoard } from '../store/actions/board.action'
import { useSelector } from "react-redux"
import { BoardMiddleTop } from "./board-cmps/board-middletop"
import { Group } from "./board-cmps/Group"


export const Board = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const [board, setBoard] = useState(null)
  const { boards } = useSelector(state => state.boardModule)
  const { boardId } = params

  useEffect(() => {
    if (!boardId.startsWith(":")) {
      boardService.getById(boardId)
        .then(board => setBoard(board))
    } else {
      navigate(`/board/${boards[0]?._id}`)
    }

  }, [boardId])

  const handleTitleUpdate = ({ target }) => {
    const value = target.innerText
    setBoard(prevBoard => ({ ...prevBoard, title: value }))
  }

  useEffect(() => {
    if (board) dispatch(updateBoard(board))
  }, [board?.title])

  //TODO: For every group render <Group /> componenet iside it will be AG-GRID
  //TODO EXTRA: Maybe for every task <Task /> component

  return <section className="board">
    <header className="top-section flex space-between">
      <div className="flex align-center top-l">
        <h1 contentEditable spellCheck={false} suppressContentEditableWarning={true} onBlur={handleTitleUpdate}>
          {board?.title}
        </h1>
        <BiInfoCircle />
        <CiStar />
      </div>
      <div className="flex align-center top-r"></div>
    </header>


    <BoardMiddleTop />

    <section className="main-board-section">
      {board?.groups?.map(group => 
        <Group key={group.id} group={group} labels={board.labels} />
      )}
    </section>
  </section>
}
