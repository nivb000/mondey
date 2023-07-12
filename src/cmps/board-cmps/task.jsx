import { useState } from "react"
import { Labels } from "./labels"
import DatePicker from "react-datepicker";
import { IoIosResize } from 'react-icons/io'
import { TaskMenu } from '../mui/task-menu'
import "react-datepicker/dist/react-datepicker.css";



export const Task = ({ task, labels, coloredDivStyle, handleSaveTask, handleRemoveTask, provided }) => {

    const [labelsIsOpen, setLabelsIsOpen] = useState(false)
    const [taskDate, setTaskDate] = useState(new Date(task.date))


    const handleUpdate = ({ target }, status) => {
        const name = target.className
        switch (name) {
            case 'title':
                task[name] = target.innerText
                break;
            case 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root':
                task.statusLabel = status
                break;
            default:
                break;
        }

        handleSaveTask(task)
    }

    const handleDatePicker = (date) => {
        const formatedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        task.date = formatedDate
        setTaskDate(new Date(formatedDate))
        handleSaveTask(task)
    }



    return <div className="flex task-row" ref={provided.innerRef}   {...provided.draggableProps} {...provided.dragHandleProps}>
        <TaskMenu taskId={task.id} handleRemoveTask={handleRemoveTask} />
        <div className="flex justify-center align-center checkbox-cell task-cell">
            <div className="colored" style={coloredDivStyle}></div>
            <input type="checkbox" id={`task-checkbox`} value={task.id} />
        </div>
        <div className="flex space-between align-center item-cell task-cell">
            <span contentEditable spellCheck={false} suppressContentEditableWarning={true} className="title" onBlur={handleUpdate}>{task.title}</span>
            <div>
                <IoIosResize />
                Open
            </div>
        </div>
        <div className="flex justify-center align-center person-cell task-cell">
            {task.members.length > 0 ? task.members.map(member => <img key={member.id} src={member.imgUrl} />) :
                <img src="https://cdn.monday.com/icons/dapulse-person-column.svg" />
            }
        </div>
        <div className="flex justify-center align-center status-cell task-cell" style={{ backgroundColor: labels[task.statusLabel].color }} onClick={() => setLabelsIsOpen(prev => !prev)}>
            <span>{labels[task.statusLabel].title}</span>
            {labelsIsOpen && <Labels labels={labels} handleUpdate={handleUpdate} />}
        </div>
        <div className="flex justify-center align-center date-cell task-cell">
            <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={taskDate}
                onChange={(date) => handleDatePicker(date)} />
        </div>
    </div>
}
