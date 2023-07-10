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

export const BoardMenu = ({ anchorEl, setAnchorEl, open, boardId }) => {

    const dispatch = useDispatch()

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDeleteBoard = () => {
        dispatch(removeBoard(boardId))
        handleClose()
        window.location.reload()
    }

    return <div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <CiStar />
                </ListItemIcon>
                <ListItemText>Add to favorites</ListItemText>
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
    </div>
}