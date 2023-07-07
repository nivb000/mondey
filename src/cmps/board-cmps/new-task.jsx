import { useState } from "react"

export const NewTask = ({ handleSaveTask, coloredDivStyle }) => {

  const [task, setTask] = useState({
    title: "",
    statusLabel: 0,
    memebers: [],
    date: new Date()
  })

  const handleChange = ({ target }) => {
    const name = target.name
    const value = target.value
    setTask(prev => ({ ...prev, [name]: value }))
  }

  return <div className="flex new-task task-row">
    <div className="flex justify-center align-center checkbox-cell task-cell">
      <div className="colored" style={coloredDivStyle}></div>
      <input type="checkbox" id={`task-checkbox`} />
    </div>
    <div className="flex align-center item-cell task-cell">
      <input contentEditable spellCheck={false}
        suppressContentEditableWarning={true}
        name="title"
        placeholder="Add Item"
        onChange={handleChange}
        onBlur={() => handleSaveTask(task)}>
        </input>
    </div>
  </div>

}
