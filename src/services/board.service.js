import { httpService } from './http.service.js'
import { userService } from './user.service.js'

export const boardService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'board'

async function query(user) {

    return httpService.get(KEY, user)
        .then(boards => {
            if (!boards || !boards.length) {
                let board = _createBoard(user)
                userService.getUpdatedUser()
                return httpService.post(KEY, board)
            }
            return boards
        })
}

function getById(boardId) {
    const board =  httpService.get(`${KEY}/${boardId}`)
    return board
}

function remove(boardId) {
    return httpService.delete(`${KEY}/${boardId}`)
}

function save(board) {
    if (board.id) return httpService.put(`${KEY}/${board.id}`, board)
    else return httpService.post(KEY, board)
}

function _createBoard(user) {
    return {
        title: "Board 1",
        archivedAt: Date.now(),
        createdAt: Date.now(),
        createdBy: {
            id: user.id,
            fullname: user.fullname,
            imgUrl: user.imgUrl
        },
        style: {},
        labels: [
            {
                id: "l101",
                title: "Working on it",
                color: "#fdab3d"
            },
            {
                id: "l102",
                title: "Stuck",
                color: "#e2445c"
            },
            {
                id: "l103",
                title: "Done",
                color: "#00c875"
            }
        ],
        groups: [
            {
                id: "g101",
                title: "Group 1",
                archivedAt: Date.now(),
                tasks: [
                    {
                        id: "c101",
                        title: "Replace logo",
                        statusLabel: 0,
                        members: [],
                        date: "22 Dec, 2022"
                    },
                    {
                        id: "c102",
                        title: "Add Samples",
                        statusLabel: 0,
                        members: [],
                        date: "20 Dec, 2022"
                    }
                ],
                style: {"backgroundColor": "#579bfc","color": "#579bfc"}
            },
            {
                id: "g102",
                title: "Group 2",
                tasks: [
                    {
                        id: "c103",
                        title: "Do that",
                        statusLabel: 2,
                        members: [],
                        archivedAt: 1589983468418
                    },
                    {
                        id: "c104",
                        title: "Help me",
                        members: [],
                        statusLabel: 1,
                        status: "in-progress",
                        description: "description",
                        comments: [
                            {
                                id: "ZdPnm",
                                txt: "also @yaronb please CR this",
                                createdAt: 1590999817436.0,
                                byMember: {
                                    id: "u101",
                                    fullname: "Tal Tarablus",
                                    imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        checklists: [
                            {
                                id: "YEhmF",
                                title: "Checklist",
                                todos: [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        createdAt: 1590999730348,
                        dueDate: 16156215211,
                        byMember: {
                            id: "u101",
                            username: "Tal",
                            fullname: "Tal Tarablus",
                            imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        style: {
                            "bgColor": "#26de81"
                        }
                    }
                ],
                style: {"backgroundColor": "#a25ddc","color": "#a25ddc"}
            }
        ],
        activities: [
            {
                id: "a101",
                txt: "Changed Color",
                createdAt: 154514,
                byMember: {
                    id: "u101",
                    fullname: "Abi Abambi",
                    imgUrl: "http://some-img"
                },
                task: {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            }
        ],
        cmpsOrder: [
            "status-picker",
            "member-picker",
            "date-picker"
        ]
    }
}
