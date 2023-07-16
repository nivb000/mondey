import { useDispatch } from 'react-redux'
import { removeBoard } from '../../store/actions/board.action'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { AiOutlineDelete } from 'react-icons/ai'
import { CiStar } from 'react-icons/ci'
import { FiEdit2 } from 'react-icons/fi'
import { Divider } from '@mui/material'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationModal } from './notification-modal'

export const BoardMenu = ({ boardId, handleBoardFav, isFavorite }) => {

    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const [msg, setMsg] = useState('')
    const [notificationIsOpen, setNotificationIsOpen] = useState(false)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDeleteBoard = () => {
        dispatch(removeBoard(boardId))
        setMsg(`Board ${boardId} Deleted Successfully`)
        setNotificationIsOpen(true)
        handleClose()
        navigate("/board")
    }

    return <div>
        <BsThreeDots className="three-dots" onClick={handleClick} />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={() => handleBoardFav(boardId)}>
                <ListItemIcon>
                    <CiStar />
                </ListItemIcon>
                {isFavorite ?
                <ListItemText>Remove from favorites</ListItemText>
                :
                <ListItemText>Add to favorites</ListItemText>}
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <FiEdit2 />
                </ListItemIcon>
                <ListItemText>Rename Board</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleDeleteBoard}>
                <ListItemIcon>
                    <AiOutlineDelete />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
            </MenuItem>
        </Menu>
        <NotificationModal msg={msg} severity="success" open={notificationIsOpen} setOpen={setNotificationIsOpen} />
    </div>
}