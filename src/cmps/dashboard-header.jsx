import headerBg from '../assets/imgs/header-background.svg'
import { AiOutlineThunderbolt } from 'react-icons/ai'


export const DashHeader = ({ user }) => {

    const headerSentence = () => {
        const hour = new Date().getHours()
        let p
        let h3 = 'Quickly access your recent boards, Inbox and workspaces'

        if (hour >= 21 && hour <= 23) {
            p = `Good night`
        } else if (hour >= 18 && hour <= 20) {
            p = `Good evening`
        } else if (hour >= 13 && hour <= 17) {
            p = `Good afternoon`
        } else {
            p = `Good morning`
            h3 = `Let's start the day off right :)`
        }

        return <div className='header-text'>
            <p>{p}, {user?.fullname}!</p>
            <h3>{h3}</h3>
        </div>
    }

    return <header>
        <div className='flex space-between align-center'>
            {headerSentence()}
            <img src={headerBg} alt="header-background" />
            <div className='flex space-between align-center header-lside'>
                <span>Give feedback</span>
                <button className='flex align-center'>
                    <AiOutlineThunderbolt />
                    Quick Search
                </button>
            </div>
        </div>
    </header>
}
