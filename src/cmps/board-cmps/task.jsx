import { useState } from "react"
import { Labels } from "./labels"
import { TaskMembers } from "./task-members";
import DatePicker from "react-datepicker";
import { IoIosResize } from 'react-icons/io'
import { TaskMenu } from '../mui/task-menu'
import "react-datepicker/dist/react-datepicker.css";



export const Task = ({ task, labels, boardUsers, coloredDivStyle, handleSaveTask, handleRemoveTask, provided }) => {

    const [labelsIsOpen, setLabelsIsOpen] = useState(false)
    const [membersIsOpen, setMembersIsOpen] = useState(false)
    const [taskDate, setTaskDate] = useState(new Date(task.date))


    const handleUpdate = async ({ target }, value) => {
        const name = target.id
        switch (name) {
            case 'title':
                task[name] = target.innerText
                break;
            case 'label':
                task.statusLabel = value
                break;
            case 'member':
                handleTaskMembers(value)
                break;
            default:
                break;
        }
        await handleSaveTask(task)
    }

    const handleTaskMembers = (member) => {
        const memberIsFound = task.members.findIndex(m => m.id === member.id)
        if (memberIsFound < 0) {
            task.members.push({ id: member?.id, imgUrl: member?.imgUrl })
        } else {
            task.members.splice(memberIsFound, 1)
        }
    }

    const handleDatePicker = async (date) => {
        const formatedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        task.date = formatedDate
        setTaskDate(new Date(formatedDate))
        await handleSaveTask(task)
    }



    return <div className="flex task-row" ref={provided.innerRef}   {...provided.draggableProps} {...provided.dragHandleProps}>
        <TaskMenu taskId={task.id} handleRemoveTask={handleRemoveTask} />
        <div className="flex justify-center align-center checkbox-cell task-cell">
            <div className="colored" style={coloredDivStyle}></div>
            <input type="checkbox" id={`task-checkbox`} value={task.id} />
        </div>
        <div className="flex space-between align-center item-cell task-cell">
            <span contentEditable spellCheck={false} suppressContentEditableWarning={true} id="title" onBlur={handleUpdate}>{task.title}</span>
            <div>
                <IoIosResize />
                Open
            </div>
        </div>
        <div className="flex justify-center align-center person-cell task-cell" onClick={() => setMembersIsOpen(prev => !prev)}>
            {task.members.length > 0 ?
                task.members.map(member => <img key={member.id} src={member.imgUrl} />) :
                <img src="https://cdn.monday.com/icons/dapulse-person-column.svg" />
            }
            {membersIsOpen && <TaskMembers members={boardUsers} handleUpdate={handleUpdate} />}
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
