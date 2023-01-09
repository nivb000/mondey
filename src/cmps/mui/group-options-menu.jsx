import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ColorPallete } from '../board-cmps/color-pallete'
import { useState } from 'react';

export const GroupOptions = ({ anchorEl, setAnchorEl, open, group, boardUpdate }) => {

    const [openColors, setOpenColors] = useState(false)


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleColorOpen=(value)=>{
        setOpenColors(value)
        handleClose()
    }

    return (
        <div>
            <Menu
                id="basic-menu"
                style={{position: "absolute"}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>

                <MenuItem onClick={() => handleColorOpen(true)}>Change Color</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
            {openColors && <ColorPallete setOpenColors={setOpenColors} group={group} boardUpdate={boardUpdate} />}
        </div>
    );
}