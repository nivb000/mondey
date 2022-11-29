import { asyncStorageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import boardsFile from '../Data/boards.json' assert {type: 'json'};

export const boardService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'board'

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

function query() {

    return asyncStorageService.query(KEY)
        .then(boards => {
            if (!boards || !boards.length) {
                console.log('creating Demo Boards...');
                boards = boardsFile
                return asyncStorageService.postMany(KEY, boards)
            }
            return boards
        })
}
