import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

export const NewGroup = () => {

    const dispatch = useDispatch()
    const group = {
        title: "New Group",
        archivedAt: Date.now(),
        tasks: [
            {
                id: "c101",
                title: "New Task 1",
                statusLabel: 0,
                memebers: [],
                date: new Date()
            },
            {
                id: "c102",
                title: "New Task 2",
                statusLabel: 0,
                memebers: [],
                date: new Date()
            }
        ],
        style: { backgroundColor: "#579bfc", color: "#579bfc" }
    }

    const handleAddGroup = () => {
        console.log('new group')
    }

    return <button onClick={handleAddGroup}>
        <AiOutlinePlus />
        Add new group
    </button>
}
