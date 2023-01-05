import { asyncStorageService } from './async-storage.service.js'

export const groupService = {
    getById,
    remove,
    save
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
