import { useDispatch } from 'react-redux'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { MdLogout } from 'react-icons/md'
import { logoutUser } from '../../store/actions/user.action'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { useState } from 'react'
import logo from '../../assets/imgs/logo.png'

export const UserMenu = ({ user }) => {

    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogOut = () => {
        dispatch(logoutUser())
    }

    return <section>
        <div className='flex space-between align-center user-menu' onClick={handleClick}>
            <img src={logo} alt="logo" />
            <img src={user.imgUrl} alt="user-pic" />
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                    <MdLogout />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </MenuItem>
        </Menu>
    </section>
}