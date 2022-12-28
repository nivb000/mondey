import { groupService } from '../../services/group.service.local'

export function setGroup(groups) {
    return (dispatch) => dispatch({ type: 'SET_GROUPS', groups })
}
export function addGroup(group) {
    return (dispatch) => {
        groupService.save(group)
            .then(group => dispatch({ type: 'ADD_GROUP', group }))
    }
}
export function updateGroup(group) {
    return (dispatch) => {
        groupService.save(group)
            .then(group => dispatch({ type: 'UPDATE_GROUP', group }))
    }
}
export function removeGroup(groupId) {
    return (dispatch) => {
        groupService.remove(groupId)
            .then(() => dispatch({ type: 'REMOVE_GROUP', groupId }))
    }
}