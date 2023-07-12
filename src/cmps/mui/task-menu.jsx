import { useDispatch } from 'react-redux'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { AiOutlineDelete } from 'react-icons/ai'
import { Divider } from '@mui/material'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'

export const TaskMenu = ({ taskId, handleRemoveTask }) => {

    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDeleteTask = () => {
        handleRemoveTask(taskId)
        handleClose()
    }

    return <div>
        <BsThreeDots className="task-three-dots" onClick={handleClick} />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleDeleteTask}>
                <ListItemIcon>
                    <AiOutlineDelete />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
            </MenuItem>
        </Menu>
    </div>
}