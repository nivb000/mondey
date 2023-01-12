import { asyncStorageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

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
    if(group.id) return asyncStorageService.put(KEY, group)
    else {
        group.id = utilService.makeId(3)
        return Promise.resolve(group)
    }
}