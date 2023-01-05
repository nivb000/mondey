import { Task } from "./task"
import { useDispatch } from "react-redux"
import { taskService } from "../../services/task.service"
import { updateGroup } from '../../store/actions/group.action'
import { NewTask } from './new-task'

export const Group = ({ group, labels, handleBoardUpdate }) => {

    const dispatch = useDispatch()

    const handleSaveTask = (task) => {
        taskService.save(group, task)
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
                {group.tasks.map(task => <Task key={task.id} 
                task={task} 
                labels={labels} 
                coloredDivStyle={coloredDivStyle}
                handleSaveTask={handleSaveTask} />)}

                <NewTask handleSaveTask={handleSaveTask} coloredDivStyle={coloredDivStyle} />
            </div>

        </div>
    )
}
