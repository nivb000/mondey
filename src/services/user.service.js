import { httpService } from "./http.service"

const KEY = 'auth'
const KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUpdatedUser,
    getBoardUsers,
    getUsersByEmail,
    updateUser
}

window.us = userService

async function login(credentials) {
    try {
        const user = await httpService.post(`${KEY}/login`, credentials)
        sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
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
}

async function getBoardUsers(boardId){
    return await httpService.get('user', {boardId})
}

async function getUsersByEmail(email){
    return await httpService.get('user/byemail/', {email})
}
async function updateUser(user){
    return await httpService.put(`user/${user.id}`, {user})
}

async function getUpdatedUser() {
    const loggedinUser = getLoggedinUser()
    httpService.get('user', loggedinUser.id)
    .then((user) => {
        sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
    })
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(KEY_LOGGEDIN))
}