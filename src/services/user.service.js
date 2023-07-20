import { httpService } from "./http.service"
import { socketService } from "./socket.service"
const KEY = 'auth'
const KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getBoardUsers,
    getUsersByEmail,
    updateUser
}

window.us = userService

async function login(credentials) {
    try {
        const user = await httpService.post(`${KEY}/login`, credentials)
        sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
        socketService.login(user.id)
        return user
    } catch (err) {
        throw err.response.data
    }
}

async function signup(userInfo) {
    return await httpService.post(`${KEY}/signup`, userInfo)
        .then((user) => {
            sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
            return user
        })
}

async function logout() {
    await httpService.post(`${KEY}/logout`)
    sessionStorage.setItem(KEY_LOGGEDIN, null)
    // socketService.logout()
}

async function getBoardUsers(members) {
    return await httpService.get('user', { members })
}

async function getUsersByEmail(email) {
    return await httpService.get('user/byemail/', { email })
}
async function updateUser(user) {
    return await httpService.put(`user/${user.id}`, { user })
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(KEY_LOGGEDIN))
}