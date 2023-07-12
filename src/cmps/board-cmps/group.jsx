import { Task } from "./task"
import { useDispatch } from "react-redux"
import { updateSelectedBoardGroup } from '../../store/actions/group.action'
import { NewTask } from './new-task'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from "react"
import { GroupOptions } from "../mui/group-options-menu"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { taskService } from "../../services/task.service"

export const Group = ({ group, labels, handleBoardGroups }) => {

    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleGroupTitle = ({ target }) => {
        group.title = target.innerText
        dispatch(updateSelectedBoardGroup(group))
    }

    const handleMenuModal = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleSaveTask = async (task) => {
        try {
            const savedGroup = await taskService.save(group, task)
            dispatch(updateSelectedBoardGroup(savedGroup))
            handleBoardGroups()
        } catch (err) {
            console.error(err)
        }
    }
    const handleRemoveTask = async(taskId) => {
        try {
            const savedGroup = await taskService.remove(group, taskId)
            dispatch(updateSelectedBoardGroup(savedGroup))
            handleBoardGroups()
        } catch (err) {
            console.error(err)
        }
    }

    let coloredDivStyle = {
        width: '7px',
        height: '100%',
        backgroundColor: group.style.color,
    }

    return (
        <Droppable key={group.id} droppableId={group.id} >
            {(provided) => (
                <div className="group">
                    <div className="flex align-center">
                        <BsThreeDots className="group-menu" onClick={handleMenuModal} />
                        <GroupOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open} group={group} />
                        <h3 className="group-title"
                            contentEditable
                            spellCheck={false}
                            suppressContentEditableWarning={true}
                            onBlur={handleGroupTitle}
                            style={{ color: group.style.color }}>
                            {group.title}
                        </h3>
                    </div>
                    <div className="flex col group-container" ref={provided.innerRef} {...provided.droppableProps}>
                        <div className="flex group-header">
                            <div className="flex justify-center align-center header-checkbox header-cell" >
                                <div className="colored" style={coloredDivStyle}></div>
                                <input type="checkbox" name="all-tasks-checkbox" />
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
                        {group.tasks.map((task,index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                                <Task key={task.id}
                                task={task}
                                labels={labels}
                                coloredDivStyle={coloredDivStyle}
                                handleSaveTask={handleSaveTask}
                                handleRemoveTask={handleRemoveTask}
                                provided={provided}/>
                            )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                        <NewTask handleSaveTask={handleSaveTask} coloredDivStyle={coloredDivStyle} />
                    </div>
                </div>
            )}
        </Droppable>
    )
}
