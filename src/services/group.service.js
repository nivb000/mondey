import { utilService } from './util.service.js'

export const groupService = {
    save
}


function save(groups, group) {
    if (group.id) return _updateGroup(groups, group)
    else return _addGroup(groups, group)
}

function _updateGroup(groups, updatedGroup) {
    groups.find(group => group.id === updatedGroup.id ? group = updatedGroup : group)
    return new Promise((resolve, reject) => {
        resolve(updatedGroup)
    })
}
function _addGroup(groups, newGroup) {
    newGroup.id = utilService.makeId(3)
    groups.push(newGroup)
    return Promise.resolve(groups)
}