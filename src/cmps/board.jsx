import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BiInfoCircle } from 'react-icons/bi'
import { useDispatch } from "react-redux"
import { loadSelectedBoard, updateBoard, handleSocket } from '../store/actions/board.action'
import { useSelector } from "react-redux"
import { GroupList } from "./board-cmps/group-list"
import { BoardTabs } from './mui/board-tabs'
import { FcInvite } from 'react-icons/fc'
import { IoChevronBack } from 'react-icons/io5'
import { MembersModal } from "./board-cmps/members-modal"
import { InfoModal } from "./board-cmps/info-modal"
import { SOCKET_EVEVT_UPDATE_BOARD, SOCKET_EVENT_BOARD_UPDATED, socketService } from '../services/socket.service'


export const Board = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const { selectedBoard: board } = useSelector(state => state.boardModule)
  const { boardId } = params
  const [openModal, setOpenModal] = useState(false)
  const [infoModal, setInfoModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleModalClose = () => setOpenModal(false)
  const handleInfoModalClose = () => setInfoModal(false)

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
    socketService.emit(SOCKET_EVEVT_UPDATE_BOARD, board)
  }

  useEffect(() => {
    socketService.on(SOCKET_EVENT_BOARD_UPDATED, (updatedBoard) => {
      dispatch(handleSocket(updatedBoard))
    })
  }, [])

  useEffect(() => {
    if (board) {
      document.title = board.title
    }
    return () => document.title = 'Mondey'
  }, [board?.title])

  return <section className="board">
    <header className="flex space-between align-center top-section">
      <IoChevronBack className="mobile-back-btn" onClick={() => navigate(-1)} />
      <div className="flex align-center top-l">
        <h1
          contentEditable
          spellCheck={false}
          suppressContentEditableWarning={true}
          onBlur={handleTitleUpdate}>
          {board?.title}
        </h1>
        <BiInfoCircle onClick={() => setInfoModal(true)} />
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" onClick={() => {
          board.isFavorite = !board.isFavorite
          saveBoardChanges()
        }}>
          <path fill={board?.isFavorite ? '#ffcb00' : 'none'} stroke={board?.isFavorite ? '#ffcb00' : 'currentColor'} strokeWidth="1" d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"></path>
        </svg>
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

    {
      board &&
      <InfoModal
        boardTitle={board.title}
        createdAt={board.createdat}
        createdByName={board["createdby.fullname"]}
        createdByImg={board["createdby.imgurl"]}
        handleClose={handleInfoModalClose}
        open={infoModal} />
    }

    <BoardTabs groupsTab={<GroupList labels={board?.labels} />} />
  </section>
}
