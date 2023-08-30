import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'

export const TaskMembers = ({ members, handleUpdate, membersRef }) => {

    return (
        <Paper className='flex col space-around align-center task-members-list' ref={membersRef}>
            <h5>Suggested peoples</h5>
            <MenuList>
                {members.length === 0 && <div>First, Add Members to board</div>}
                {members?.map(member => <li key={member.id}
                    className='flex align-center member'
                    id='member'
                    onClick={(ev) => handleUpdate(ev, member)}>
                    <img src={member.imgUrl} alt="member-img" />
                    <span id='member'>{member.fullname}</span>
                </li>)}
            </MenuList>
        </Paper>
    )
}