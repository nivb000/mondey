import { utilService } from './util.service.js'

export const groupService = {
    save
}


function save(group) {
    if (group.id) return _updateGroup(group)
    else return _addGroup(group)
}
// function _updateGroup(groups, updatedGroup) {
//     groups.find(group => group.id === updatedGroup.id ? group = updatedGroup : group)
//     return new Promise((resolve, reject) => {
//         resolve(updatedGroup)
//     })
// }
function _addGroup(newGroup) {
    newGroup.id = utilService.makeId(3)
    return Promise.resolve(newGroup)
}