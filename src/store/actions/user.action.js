import { userService } from "../../services/user.service.js"

export function loginUser(user, setError) {
    return (dispatch) => {
        userService.login(user)
            .then(user => dispatch({ type: 'SET_USER', user }))
            .catch(err => { setError(err) })
    }
}
export function signupUser(user, setError) {
    return (dispatch) => {
        userService.signup(user)
            .then(user => dispatch({ type: 'SET_USER', user }))
            .catch(err => { setError(err) })
    }
}
export function logoutUser() {
    return (dispatch) => {
        userService.logout()
            .then(dispatch({ type: 'LOGOUT' }))
    }
}