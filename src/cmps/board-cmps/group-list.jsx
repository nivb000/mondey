import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBoardGroups } from '../../store/actions/group.action'
import { Group } from './group'
import { NewGroup } from './new-group'
import { DragDropContext } from 'react-beautiful-dnd'

export const GroupList = ({ labels }) => {

    const dispatch = useDispatch()
    const { selectedBoard: board } = useSelector(state => state.boardModule)

    const handleBoardGroups = () => {
        dispatch(setSelectedBoardGroups(board.groups))
    }
    const handleDragEnd = (groups) => {
        console.log('groups is', groups)
        // TODO: ON DRAG END
    }


    return <DragDropContext onDragEnd={(groups) => handleDragEnd(groups)}>
        <section className='main-board-section'>
            {board?.groups?.map(group => <Group key={group.id} 
            group={group} 
            labels={labels} 
            handleBoardGroups={handleBoardGroups} />
            )}
            <NewGroup handleBoardGroups={handleBoardGroups} />
        </section>
    </DragDropContext>

}
