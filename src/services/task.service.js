import { utilService } from './util.service'

export const taskService = {
    save
}

function save(group, task) {
    if (task.id) return _updateTask(group, task)
    else return _addTask(group, task)
}

function _updateTask(group, task) {
    group.tasks.find(t => t.id === task.id ? t = task : t)
    return new Promise((resolve, reject) => {
        resolve(group)
    })
}
function _addTask(group, task) {
    task.id = utilService.makeId(3)
    group.tasks.push(task)
    return Promise.resolve(group)
}