import { Task } from "./task"

export const Group = ({ group, labels }) => {

    const checkAllTasks = (groupId) => {
        const checkBoxs = document.querySelectorAll(`input[id="${groupId} task-checkbox"]`)
        checkBoxs.forEach(checkbox => checkbox.checked ? checkbox.checked = false : checkbox.checked = true)
    }

    //Maybe later details summary for each group
    return (
        <div className="group">
            <h3 className="group-title">{group.title}</h3>
            <div className="flex col group-container">
                <div className="flex group-header">
                    <div className="flex justify-center align-center header-checkbox header-cell">
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
                {group.tasks.map(task => <Task key={task.id} task={task} labels={labels} groupId={group.id} />)}
            </div>

        </div>
    )
}
