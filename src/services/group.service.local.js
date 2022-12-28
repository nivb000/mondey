import { asyncStorageService } from './async-storage.service.js'

export const groupService = {
    getById,
    remove,
    save,
    updateTask
}

const KEY = 'group'

function getById(groupId) {
    return asyncStorageService.get(KEY, groupId)
}

function remove(groupId) {
    return asyncStorageService.remove(KEY, groupId)
}

function save(group) {
    if(group._id) return asyncStorageService.put(KEY, group)
    else return asyncStorageService.post(KEY, group)
}

function updateTask(group, task) {
    group.tasks.find(t => t.id === task.id ? t = task : t)
    return new Promise((resolve, reject) => { 
        resolve(group)
     })
}
