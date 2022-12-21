import { useState } from 'react';


export const Group = ({ group, labels }) => {



    const checkAllTasks = (groupId) => {
        const checkBoxs = document.querySelectorAll(`input[id="${groupId} task-checkbox"]`)
        checkBoxs.forEach(checkbox => checkbox.checked ? false : true)
    }

    return (
        <div className="group">
            <h3 className="group-title">{group.title}</h3>
            <table>
                <thead>
                    <tr>
                        <th className='checkbox-th'><input type="checkbox" name="all-tasks-checkbox" onChange={() => checkAllTasks(group.id)} /></th>
                        <th className='title-th'>Item</th>
                        <th className='person-th'>Person</th>
                        <th className='status-th'>Status</th>
                        <th className='date-th'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {group.tasks.map(task => <tr key={task.id}>
                        <td className='checkbox-td'><input type="checkbox" name={task.title} id={`${group.id} task-checkbox`} value={task.id} /></td>
                        <td className='title-td'>{task.title}</td>
                        <td className='person-td'><img src="https://cdn.monday.com/icons/dapulse-person-column.svg" alt="user-profile-pic" /></td>
                        <td className='status-td' style={{backgroundColor: labels[0].color}}>{labels[0].title}</td>
                        <td className='date-td'>Dec 21, 2022</td>
                    </tr>)}
                </tbody>
            </table>

        </div>
    )
}
