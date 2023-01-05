import { useState } from "react"
import { Labels } from "./labels"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export const Task = ({ task, labels, coloredDivStyle, handleSaveTask }) => {

    const [labelsIsOpen, setLabelsIsOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date())


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


    return <div className="flex task-row">
        <div className="flex justify-center align-center checkbox-cell task-cell">
            <div className="colored" style={coloredDivStyle}></div>
            <input type="checkbox" id={`task-checkbox`} value={task.id} />
        </div>
        <div className="flex align-center item-cell task-cell">
            <span contentEditable spellCheck={false} suppressContentEditableWarning={true} className="title" onBlur={handleUpdate}>{task.title}</span>
        </div>
        <div className="flex justify-center align-center person-cell task-cell">
            {task.members ? task.members.map(member => <img key={member.id} src={member.imgUrl} />) :
                <img src="https://cdn.monday.com/icons/dapulse-person-column.svg" />
            }
        </div>
        <div className="flex justify-center align-center status-cell task-cell" style={{ backgroundColor: labels[task.statusLabel].color }} onClick={() => setLabelsIsOpen(prev => !prev)}>
            <span>{labels[task.statusLabel].title}</span>
            {labelsIsOpen && <Labels labels={labels} handleUpdate={handleUpdate} />}
        </div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
}
