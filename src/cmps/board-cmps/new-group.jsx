import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addSelectedBoardGroup } from '../../store/actions/group.action'
import { utilService } from '../../services/util.service'

export const NewGroup = () => {

    const dispatch = useDispatch()
    const group = {
        id: utilService.makeId(),
        title: "New Group",
        archivedAt: Date.now(),
        tasks: [
            {
                id: utilService.makeId(),
                title: "New Task 1",
                statusLabel: 0,
                members: [],
                date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
            },
            {
                id: utilService.makeId(),
                title: "New Task 2",
                statusLabel: 0,
                members: [],
                date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
            }
        ],
        style: { backgroundColor: "#579bfc", color: "#579bfc" }
    }

    const handleAddGroup = () => {
        dispatch(addSelectedBoardGroup(group))
    }

    return <button onClick={handleAddGroup} className="flex align-center space-around btn-new-group">
        <AiOutlinePlus />
        Add new group
    </button>
}
