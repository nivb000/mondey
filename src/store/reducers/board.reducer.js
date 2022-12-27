const INITIAL_STATE = {
    boards: null,
    selectedBoard: null,
    filter: null
}


export function boardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }

        case 'SET_SELECTED':
            return { ...state, selectedBoard: action.board }

        case 'ADD_BOARD':
            return { ...state, boards: [...state.boards, action.board] }

        case 'REMOVE_BOARD':
            return { ...state, boards: state.boards.filter(board => board._id !== action.boardId) }

        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => board._id === action.board._id ? action.board : board)
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: {...action.filter}
            }
        default:
            return state
    }
}