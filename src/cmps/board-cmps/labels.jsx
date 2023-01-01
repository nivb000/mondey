import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export const Labels = ({ labels, handleTaskUpdate}) => {

    return (
        <Paper className='flex col space-around align-center label-list'>
            <MenuList>
                {labels?.map((label,idx) => <MenuItem key={label.id}
                onClick={(ev) => handleTaskUpdate(ev,idx)}
                className="label"
                style={{backgroundColor: label.color}}>
                    <ListItemText>{label.title}</ListItemText>
                </MenuItem>)}
            </MenuList>
        </Paper>
    );
}