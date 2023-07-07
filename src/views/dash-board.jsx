import { BoardsList } from '../cmps/board-list'
import { DashHeader } from '../cmps/dashboard-header'
import { Inbox } from '../cmps/inbox'
import { useSelector } from "react-redux"


export const DashBoard = ({ boards }) => {

  const user = useSelector(state => state.userModule.user)
  document.title = 'mondey - Home'


  return (
    <section className="flex col dash-board">
      <DashHeader user={user} />
      <main className='flex'>
        <section className='sections-wrapper flex col'>
          <section className='boards-show'>
            <details open>
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
    </section >
  )
}
