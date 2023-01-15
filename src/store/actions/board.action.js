import { boardService } from "../../services/board.service.local";
import { groupService } from '../../services/group.service'

export function loadBoards() {
    return (dispatch, getState) => {
        const { filter } = getState().boardModule
        boardService.query(filter)
            .then(boards => dispatch({ type: 'SET_BOARDS', boards }))
    }
}
export function loadSelectedBoard(boardId) {
    return (dispatch) => {
        boardService.getById(boardId)
            .then(board => dispatch({ type: 'SET_SELECTED', board }))
    }
}
export function updateSelectedBoard(board) {
    return (dispatch) => {
        boardService.save(board)
            .then(board => dispatch({ type: 'SET_SELECTED', board }))
        }
    }
export function addBoard(board) {
    return (dispatch) => {
        boardService.save(board)
        .then(board => dispatch({ type: 'ADD_BOARD', board }))
    }
}
export function updateBoard(board) {
    return (dispatch) => {
        boardService.save(board)
        .then(board => dispatch({ type: 'UPDATE_BOARD', board }))
    }
}
export function removeBoard(boardId) {
    return (dispatch) => {
        boardService.remove(boardId)
        .then(() => dispatch({ type: 'REMOVE_BOARD', boardId }))
    }
}
export function setQueryFilter(filter) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER', filter })
    }
}
export function setSelectedBoardGroups(groups) {
    return (dispatch) => dispatch({ type: 'SET_SELECTED_GROUPS', groups })
}
export function updateSelectedBoardGroup(updatedGroup) {
    return (dispatch, getState) => {
        const { selectedBoard } = getState().boardModule
        groupService.save(selectedBoard.groups, updatedGroup)
            .then(group => dispatch({ type: 'UPDATE_SELECTED_GROUP', group }))
    }
}