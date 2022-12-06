import { WorkNavbar } from '../cmps/work-navbar'
import { Board } from '../cmps/board'

export const WorkManagement = ({ boards }) => {
  return <section className='flex work-management'>
    <WorkNavbar boards={boards} />
    <Board />
  </section>
}
