import { Task } from "./task"
import { useDispatch } from "react-redux"
import { groupService } from "../../services/group.service.local"
import { updateGroup } from '../../store/actions/group.action'

export const Group = ({ group, labels, handleBoardUpdate }) => {

    const dispatch = useDispatch()
    

    const handleTaskUpdate = (task) => {
        console.log('received task', task);
    }

    const handleGroupUpdate = (task) => {
        groupService.updateTask(group, task)
            .then(group => dispatch(updateGroup(group)))
            .then(handleBoardUpdate())
    }

    let coloredDivStyle = {
        width: '7px',
        height: '100%',
        backgroundColor: group.style.color,
    }

    return (
        <div className="group">
            <h3 className="group-title" style={{ color: group.style.color }}>{group.title}</h3>
            <div className="flex col group-container">
                <div className="flex group-header">
                    <div className="flex justify-center align-center header-checkbox header-cell" >
                        <div className="colored" style={coloredDivStyle}></div>
                        <input type="checkbox" name="all-tasks-checkbox" onChange={() => checkAllTasks(group.id)} />
                    </div>
                    <div className="flex justify-center align-center header-item header-cell">
                        <span>Item</span>
                    </div>
                    <div className="flex justify-center align-center header-person header-cell">
                        <span>Person</span>
                    </div>
                    <div className="flex justify-center align-center header-status header-cell">
                        <span>Status</span>
                    </div>
                    <div className="flex justify-center align-center header-date header-cell">
                        <span>Date</span>
                    </div>
                </div>
                {group.tasks.map(task => <Task key={task.id} task={task} labels={labels} coloredDivStyle={coloredDivStyle} handleGroupUpdate={handleGroupUpdate} />)}
            </div>

        </div>
    )
}
