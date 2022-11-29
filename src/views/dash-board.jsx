import { BoardsList } from '../cmps/board-list'
import { Inbox } from '../cmps/inbox'
import headerBg from '../assets/imgs/header-background.svg'
import { AiOutlineThunderbolt } from 'react-icons/ai'


export const DashBoard = ({ boards }) => {


  //TODO: Smart sentences by new Date()

  return (
    <section className="dash-board">
      <header>
        <div className='main-content flex space-between'>
          <div className='flex col justify-center header-text'>
            <p>Good morning, User!</p>
            <h3>Let's start the day off right :) </h3>
            <img src={headerBg} alt="header-background" />
          </div>
          <div className='flex space-between align-center header-lside'>
            <span>Give feedback</span>
            <button className='flex space-between align-center'>
              <AiOutlineThunderbolt />
              Quick Search
            </button>
          </div>
        </div>
      </header>
      <main className="main-content flex">
        <section className='sections-wrapper flex col'>
          <section className='boards-show'>
            <details>
              <summary>Recently visited</summary>
              <BoardsList boards={boards} />
            </details>
          </section>
          <section className='boards-show'>
            <details>
              <summary data-count="0" className='inbox'>Inbox</summary>
              <Inbox />
            </details>
          </section>
          <section className='boards-show'>
            <details>
              <summary>My workspaces</summary>
            </details>
          </section>
        </section>
        <section className='left-side'>
          <h4>Learn & get inspired</h4>
        </section>
      </main>
    </section>
  )
}
