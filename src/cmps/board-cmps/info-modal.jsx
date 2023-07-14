import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    display: 'flex',
    justifyContent: 'space-between',
    bgcolor: 'background.paper',
    borderRadius: '7px',
    boxShadow: 24
}
export const InfoModal = ({ boardTitle, createdAt, createdByName, createdByImg, handleClose, open }) => {

    return <Modal open={open} onClose={handleClose}>
        <Box sx={style} className='info-modal'>
            <div className='right-info'>
                <h1>{boardTitle}</h1>
            </div>
            <div className='left-info'>
                <h3>Board info</h3>
                <div>
                    <h4>My Workspace</h4>
                    <span style={{marginLeft: '1rem'}}>Main Workspace</span>
                </div>
                <div>
                    <h4>Created At</h4>
                    <span>{new Date(+createdAt).toString().substring(0, 24)}</span>
                </div>
                <div>
                    <h4>Created By</h4>
                    <div className='flex align-center'>
                        <img src={createdByImg} alt='created-by-img' />
                        <span>{createdByName}</span>
                    </div>
                </div>
                <div>
                    <h4>Board type</h4>
                    <span>This board is public, visible to all team members.</span>
                </div>
            </div>
        </Box>
    </Modal>
}