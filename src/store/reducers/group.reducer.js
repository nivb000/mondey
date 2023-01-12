const INITIAL_STATE = {
    groups: null
}


export function groupReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_GROUPS':
            return { ...state, groups: action.groups }
        case 'ADD_GROUP':
            return { ...state, groups: [...state.groups, action.group] }

        case 'REMOVE_GROUP':
            return { ...state, groups: state.groups.filter(group => group.id !== action.groupId) }

        case 'UPDATE_GROUP':
            return {
                ...state,
                groups: state.groups.map(group => group._id === action.group._id ? action.group : group)
            }
        default:
            return state
    }
}