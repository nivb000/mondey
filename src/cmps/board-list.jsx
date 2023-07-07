import { BoardPreview } from './board-preview.jsx'

export const BoardsList = ({ boards }) => {

  return <div className="board-list flex">
    {boards?.map(board => <BoardPreview board={board} key={board.id} />)}
  </div>
}
