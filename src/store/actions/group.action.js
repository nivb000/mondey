export function setSelectedBoardGroups(groups) {
    return (dispatch) => dispatch({ type: 'SET_SELECTED_GROUPS', groups })
}
export function updateSelectedBoardGroup(group) {
    return (dispatch) => dispatch({ type: 'UPDATE_SELECTED_GROUP', group })
}
export function removeSelectedBoardGroup(groupId) {
    return (dispatch) => dispatch({ type: 'REMOVE_GROUP', groupId })
}
export function addSelectedBoardGroup(group) {
    return (dispatch) => dispatch({ type: 'ADD_GROUP', group })
}