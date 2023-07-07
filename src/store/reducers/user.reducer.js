import { userService } from "../../services/user.service.js"

const INITIAL_STATE = {
    user: userService.getLoggedinUser() || null
}


export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'LOGOUT':
            return { ...state, user: null }
        default:
            return state
    }
}