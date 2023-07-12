import { useDispatch, useSelector } from 'react-redux'
import { Group } from './group'
import { NewGroup } from './new-group'
import { DragDropContext } from 'react-beautiful-dnd'
import { TaskDock } from "./task-dock"
import { updateBoard } from '../../store/actions/board.action'

export const GroupList = ({ labels }) => {

    const dispatch = useDispatch()
    const { selectedBoard: board } = useSelector(state => state.boardModule)

    const handleBoardGroups = () => {
        dispatch(updateBoard(board))
    }

    const handleDragEnd = (dragObject) => {
        const { draggableId, destination: { droppableId } } = dragObject
        const draggableIdx = dragObject.source.index
        const droppableIdx = dragObject.destination.index

        const draggableGroupIdx = board.groups.findIndex(group =>
            group.tasks.some(task => task.id === draggableId)
        )
        const droppableGroupIdx = board.groups.findIndex(group =>
            group.id === droppableId
        )
        if (draggableGroupIdx !== null && droppableGroupIdx !== null) {
            const draggableTask = board.groups[draggableGroupIdx].tasks[draggableIdx]
            if(draggableGroupIdx === droppableGroupIdx){
                const droppableTask = board.groups[draggableGroupIdx].tasks[droppableIdx]
                board.groups[draggableGroupIdx].tasks[draggableIdx] = droppableTask
                board.groups[draggableGroupIdx].tasks[droppableIdx] = draggableTask
            } else {
                board.groups[droppableGroupIdx].tasks.splice(droppableIdx, 0, draggableTask)
                board.groups[draggableGroupIdx].tasks.splice(draggableIdx,1)
            }
            handleBoardGroups()
        }
    }


    return <DragDropContext onDragEnd={(dragObject) => handleDragEnd(dragObject)}>
        <section className='main-board-section'>
            {board?.groups?.map(group => <Group key={group.id}
                group={group}
                labels={labels}
                handleBoardGroups={handleBoardGroups} />
            )}
            <NewGroup handleBoardGroups={handleBoardGroups} />
        </section>
        <TaskDock />
    </DragDropContext>

}
