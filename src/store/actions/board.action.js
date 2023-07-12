import { boardService } from "../../services/board.service"

export function loadBoards() {
    return (dispatch, getState) => {
        const { user } = getState().userModule
        if(user){
            boardService.query(user.id)
                .then(boards => dispatch({ type: 'SET_BOARDS', boards }))
        }
    }
}
export function loadSelectedBoard(boardId) {
    return (dispatch) => {
        boardService.getById(boardId)
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