import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'

export const Labels = ({ labels, handleUpdate }) => {

    return (
        <Paper className='flex col space-around align-center label-list'>
            <MenuList>
                {labels?.map((label, idx) => <div key={label.id}
                    className='flex align-center justify-center label'
                    id='label'
                    onClick={(ev) => handleUpdate(ev, idx)}
                    style={{ backgroundColor: label.color }}>
                    <span className='label-text' id='label'>{label.title}</span>
                </div>)}
            </MenuList>
        </Paper>
    )
}