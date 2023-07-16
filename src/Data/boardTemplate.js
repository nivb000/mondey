import { utilService } from "../services/util.service"
import { userService } from "../services/user.service"



export const createBoard = (title = "Board 1") => {

    const user = userService.getLoggedinUser()
    
    return {
        title,
        archivedAt: Date.now(),
        createdAt: Date.now(),
        createdBy: {
            id: user.id,
            fullname: user.fullname,
            imgUrl: user.imgUrl
        },
        isFavorite: false,
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
                id: utilService.makeId(3),
                title: "Group 1",
                archivedAt: Date.now(),
                tasks: [
                    {
                        id: utilService.makeId(3),
                        title: "Replace logo",
                        statusLabel: 0,
                        members: [],
                        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
                    },
                    {
                        id: utilService.makeId(3),
                        title: "Add Samples",
                        statusLabel: 0,
                        members: [],
                        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
                    }
                ],
                style: { "backgroundColor": "#579bfc", "color": "#579bfc" }
            },
            {
                id: utilService.makeId(3),
                title: "Group 2",
                tasks: [
                    {
                        id: utilService.makeId(3),
                        title: "Do that",
                        statusLabel: 2,
                        members: [],
                        archivedAt: 1589983468418,
                        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
                    },
                    {
                        id: utilService.makeId(3),
                        title: "Help me",
                        members: [],
                        statusLabel: 1,
                        status: "in-progress",
                        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
                        description: "description",
                        comments: [
                            {
                                id: utilService.makeId(3),
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
                                id: utilService.makeId(3),
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
                style: { "backgroundColor": "#a25ddc", "color": "#a25ddc" }
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
        ],
        members: [
            user.id.toString()
        ]
    }
}