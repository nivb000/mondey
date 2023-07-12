import { httpService } from './http.service.js'
import { createBoard } from '../Data/boardTemplate.js'

export const boardService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'board'

async function query(userId) {
    const boards = await httpService.get(KEY, {userId})
    if (!boards || !boards.length) {
        let board = createBoard()
        return await httpService.post(KEY, board)
    }
    return boards
}

function getById(boardId) {
    const board = httpService.get(`${KEY}/${boardId}`)
    return board
}

function remove(boardId) {
    return httpService.delete(`${KEY}/${boardId}`)
}

async function save(board) {
    if (board.id) return await httpService.put(`${KEY}/${board.id}`, board)
    else return await httpService.post(KEY, board) 
}