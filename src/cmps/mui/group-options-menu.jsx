import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ColorPallete } from '../board-cmps/color-pallete'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSelectedBoardGroup } from '../../store/actions/group.action'

export const GroupOptions = ({ anchorEl, setAnchorEl, open, group, saveGroupChanges }) => {

    const dispatch = useDispatch()
    const [openColors, setOpenColors] = useState(false)


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleColorOpen = (value) => {
        setOpenColors(value)
        handleClose()
    }

    const handleDelete = () => {
        dispatch(removeSelectedBoardGroup(group.id))
    }

    return (
        <div>
            <Menu
                id="basic-menu"
                style={{ position: "absolute" }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>

                <MenuItem onClick={() => handleColorOpen(true)}>Change Color</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            {openColors && <ColorPallete setOpenColors={setOpenColors} group={group} saveGroupChanges={saveGroupChanges} />}
        </div>
    );
}