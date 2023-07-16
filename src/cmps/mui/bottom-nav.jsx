import { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { logoutUser } from '../../store/actions/user.action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdHomeFilled } from 'react-icons/md'
import { CiStar } from 'react-icons/ci'

export const BottomNav = () => {

    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.userModule)

    const handleLogout = () => {
        dispatch(logoutUser())
        setTimeout(() => {
            navigate("/login")
        }, 300)
    }

    return <Box className='bottom-nav'>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}>
                <BottomNavigationAction label="Home" icon={<MdHomeFilled />} />
                <BottomNavigationAction label="Favorites" icon={<CiStar />} />
                <BottomNavigationAction label={user ? 'Logout' : ''} onClick={handleLogout}
                    icon={<img src={user ? user.imgUrl : 'https://cdn.monday.com/icons/dapulse-person-column.svg'} alt='user-img' style={{ width: '20px', borderRadius: '50%' }} />} />
            </BottomNavigation>
        </Paper>
    </Box>
}