import { useSelector } from 'react-redux'
import { Group } from './group'

export const GroupList = ({ labels }) => {

    const { groups } = useSelector(state => state.groupModule)


    return <section className='main-board-section'>
        {groups?.map(group => <Group key={group.id} group={group} labels={labels} />)}
    </section>


}
