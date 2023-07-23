import { useState, useEffect } from 'react'
import { Modal, Box } from '@mui/material'
import logo from '../../assets/imgs/logo.png'
import { IoCloseOutline } from 'react-icons/io5'
import { useDebounce } from "@uidotdev/usehooks"
import { userService } from '../../services/user.service'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '530px',
    height: '500px',
    bgcolor: 'background.paper',
    borderRadius: '7px',
    boxShadow: 24,
    padding: '24px 32px 8px 32px'
}

export const MembersModal = ({ members,boardUsers, handleModalClose, openModal, saveBoardChanges }) => {

    const [emailToSearch, setEmailToSearch] = useState('')
    const [usersFound, setUsersFound] = useState([])
    const debouncedSearchTerm = useDebounce(emailToSearch, 500)
    const [buttonText, setButtonText] = useState('Invite')
    const [buttonClassname, setButtonClassname] = useState('')

    useEffect(() => {
        const searchUsers = async () => {
            if (debouncedSearchTerm) {
                const users = await userService.getUsersByEmail(debouncedSearchTerm)
                setUsersFound(users)
            }
        }

        searchUsers()
    }, [debouncedSearchTerm])

    const inviteUser = (userId) => {
        if (!members.includes(userId.toString())) {
            members.push(userId.toString())
        }
        saveBoardChanges()
        setButtonText('Sent')
        setButtonClassname('sent')
        setTimeout(() => {
            setButtonClassname('')
            setButtonText('Invite')
            setEmailToSearch('')
        }, 3000)
    }

    return <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="board-users">
        <Box sx={modalStyle} className="board-members-modal">
            <IoCloseOutline onClick={handleModalClose} />
            <h2>Board Members</h2>
            <input type="text" placeholder="Search by email"
                onChange={({ target }) => setEmailToSearch(target.value)} />
            {usersFound.length > 0 && <ul className='search-result-list'>
                {usersFound.map(user => <li key={user.id} className='flex space-between align-center'>
                    <div style={{ display: 'inline-flex' }}>
                        <img src={user.imgUrl} alt="user-profile-pic" />
                        <p>{user.fullname}</p>
                    </div>
                    <button className={buttonClassname} onClick={() => inviteUser(user.id)}>{buttonText}</button>
                </li>)}
            </ul>}
            <ul className="board-members-list">
                <li className="flex align-center">
                    <img src={logo} alt="logo" />
                    <p>Anyone at {userService.getLoggedinUser().fullname} account can find and access this board</p>
                </li>
                {boardUsers?.map(boardUser => (
                    <li key={boardUser.id} className="flex align-center">
                        <img src={boardUser.imgUrl} alt="user-profile-pic" />
                        <p>{boardUser.fullname}</p>
                    </li>
                ))}

            </ul>
        </Box>
    </Modal>
}