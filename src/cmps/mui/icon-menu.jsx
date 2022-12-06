import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { removeBoard } from '../../store/actions/board.action'
import { useDispatch } from 'react-redux';

export const IconMenu = ({ setMenuModal, boardId }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(removeBoard(boardId))
        setMenuModal(prev => !prev)
    }

    return (
        <Paper sx={{ width: 200, maxWidth: '100%' }}>
            <MenuList>
                <MenuItem>
                    <ListItemText onClick={handleDelete}>Delete</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}