import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedBoard } from "../../store/actions/board.action" 
import { Group } from './group'
import { NewGroup } from './new-group'
import { useEffect } from 'react'

export const GroupList = ({ labels }) => {

    const dispatch = useDispatch()
    const { groups } = useSelector(state => state.groupModule)
    const { selectedBoard: board } = useSelector(state => state.boardModule)
    
    useEffect(() => {
     handleBoardUpdate()
    }, [groups,board])
    

    const handleBoardUpdate = () => {
        if(board && groups){
            board.groups = groups
            dispatch(updateSelectedBoard(board))
        }
    }

    return <section className='main-board-section'>
        {groups?.map(group => <Group key={group.id} group={group} labels={labels} handleBoardUpdate={handleBoardUpdate} />)}
        <NewGroup />
    </section>

}
