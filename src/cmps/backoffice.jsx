import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend)

export const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Num of tasks',
        },
    },
}

export const BackOffice = ({ groups }) => {

    const groupTasksCounts = groups?.map((group) => group.tasks.length)
    const doneTasks = groups?.map((group) => {
        return group?.tasks?.filter((task) => task.statusLabel === 2).length
    })
    const stuckTasks = groups?.map((group) => {
        return group?.tasks?.filter((task) => task.statusLabel === 1).length
    })
    const workingOnItTasks = groups?.map((group) => {
        return group?.tasks?.filter((task) => task.statusLabel === 0).length
    })


    const barChartData = {
        labels: groups?.map((group) => group.title),
        datasets: [
            {
                label: 'Done',
                data: doneTasks,
                backgroundColor: [
                    '#00c875',
                ],
            },
            {
                label: 'Stuck',
                data: stuckTasks,
                backgroundColor: [
                    '#e2445c'
                ],
            },
            {
                label: 'Working on it',
                data: workingOnItTasks,
                backgroundColor: [
                    '#fdab3d'
                ],
            },
        ],
    }

    const pieChartData = {
        labels: groups?.map((group) => group.title),
        datasets: [
            {
                label: 'Number of tasks',
                data: groupTasksCounts,
                backgroundColor: [
                    '#FF5733',
                    '#47AADD',
                    '#C2A2D9',
                    '#FFD700',
                    '#8A2BE2',
                    '#FFA07A',
                    '#00FF7F'
                ]
            },
        ],
    }

    return <section className="flex space-around align-center backoffice">
        {groups ?
        <>
            <div className="barchart-wrapper">
                <Bar data={barChartData} options={barChartOptions} />
            </div>
            <div className="piechart-wrapper">
                <Pie data={pieChartData} />
            </div>
        </>
            : null
        }
    </section>
}
