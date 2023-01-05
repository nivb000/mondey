import { groupService } from '../../services/group.service.local'

export function setGroup(groups) {
    return (dispatch) => dispatch({ type: 'SET_GROUPS', groups })
}
export function addGroup(group) {
    return (dispatch) => {dispatch({ type: 'ADD_GROUP', group })}
}
export function updateGroup(group) {
    return (dispatch) => {dispatch({ type: 'UPDATE_GROUP', group })}
}
export function removeGroup(groupId) {
    return (dispatch) => {
        groupService.remove(groupId)
            .then(() => dispatch({ type: 'REMOVE_GROUP', groupId }))
    }
}