import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBoardGroups } from '../../store/actions/group.action'
import { Group } from './group'
import { NewGroup } from './new-group'

export const GroupList = ({ labels }) => {

    const dispatch = useDispatch()
    const { selectedBoard: board } = useSelector(state => state.boardModule)

    const handleBoardGroups = () => {
        dispatch(setSelectedBoardGroups(board.groups))
    }

    return <section className='main-board-section'>
        {board?.groups?.map(group => <Group key={group.id} group={group} labels={labels} handleBoardGroups={handleBoardGroups} />)}
        <NewGroup handleBoardGroups={handleBoardGroups} />
    </section>

}
