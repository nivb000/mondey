const INITIAL_STATE = {
    boards: null,
    selectedBoard: null,
}


export function boardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }

        case 'SET_SELECTED':
            return { ...state, selectedBoard: action.board }
    
        case 'SET_SELECTED_GROUPS':
            return { ...state, selectedBoard: {...state.selectedBoard, groups: action.groups }}
    
        case 'ADD_GROUP':
            return { ...state, selectedBoard: {...state.selectedBoard, groups: [...state.selectedBoard.groups, action.group ]}}
        case 'REMOVE_GROUP':
            return { ...state, 
                selectedBoard: {...state.selectedBoard, groups: state.selectedBoard.groups.filter(group=>group.id !== action.groupId)}}
    
        case 'UPDATE_SELECTED_GROUP':
            return { 
                ...state, 
                selectedBoard: {...state.selectedBoard, 
                    groups:  state.selectedBoard.groups.filter(g => g.id === action.group.id ? g = action.group : g)}}

        case 'ADD_BOARD':
            return { ...state, boards: [...state.boards, action.board] }

        case 'REMOVE_BOARD':
            return { ...state, boards: state.boards.filter(board => board.id !== action.boardId) }

        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => board.id === action.board.id ? action.board : board)
            }
        case 'SOCKET_HANDLER':
            return {...state, selectedBoard: action.board}
        default:
            return state
    }
}