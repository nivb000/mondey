import { useDispatch, useSelector } from 'react-redux'
import { Group } from './group'
import { NewGroup } from './new-group'

export const GroupList = ({ labels }) => {

    // const dispatch = useDispatch()
    const { selectedBoard: board } = useSelector(state => state.boardModule)
    


    return <section className='main-board-section'>
        {board.groups?.map(group => <Group key={group.id} group={group} labels={labels} />)}
        <NewGroup />
    </section>

}
