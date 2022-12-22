

export const Task = ({ task, labels, groupId }) => {

    return <div className="flex task-row">
        <div className="flex justify-center align-center checkbox-cell task-cell">
            <input type="checkbox" id={`${groupId} task-checkbox`} value={task.id} />
        </div>
        <div className="flex justify-center align-center item-cell task-cell">
            <span>{task.title}</span>
        </div>
        <div className="flex justify-center align-center person-cell task-cell">
            {task.members ? task.members.map(member => <img key={member.id} src={member.imgUrl}/>) :
            <img src="https://cdn.monday.com/icons/dapulse-person-column.svg"/>
            }
        </div>
        <div className="flex justify-center align-center status-cell task-cell" style={{backgroundColor: labels[task.statusLabel].color}}>
            <span>{task.title}</span>
        </div>
        <div className="flex justify-center align-center date-cell task-cell">
            <span>{task.date}</span>
        </div>
    </div>
}
