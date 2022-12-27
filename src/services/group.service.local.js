import { asyncStorageService } from './async-storage.service.js'

export const selectedBoardService = {
    getById,
    remove,
    save
}

const KEY = 'group'

function getById(boardId) {
    return asyncStorageService.get(KEY, boardId)
}

function remove(boardId) {
    return asyncStorageService.remove(KEY, boardId)
}

function save(board) {
    if(board._id) return asyncStorageService.put(KEY, board)
    else return asyncStorageService.post(KEY, board)
}
