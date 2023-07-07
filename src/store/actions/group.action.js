import { groupService } from '../../services/group.service'

export function setSelectedBoardGroups(groups) {
    return (dispatch) => dispatch({ type: 'SET_SELECTED_GROUPS', groups })
}
export function updateSelectedBoardGroup(group) {
    return (dispatch) => dispatch({ type: 'UPDATE_SELECTED_GROUP', group })
}
export function removeSelectedBoardGroup(groupId) {
    return (dispatch) => dispatch({ type: 'REMOVE_GROUP', groupId })
}
export function addSelectedBoardGroup(newGroup) {
    return (dispatch) => {
        groupService.add(newGroup)
            .then(group => dispatch({ type: 'ADD_GROUP', group }))
    }
}