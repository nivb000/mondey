import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { SideBar } from "../cmps/sideBar"
import { NavBar } from "../cmps/navbar"
import { DashBoard } from "./dash-board"
import { loadBoards } from "../store/actions/board.action"
import { Loader } from "../cmps/loader"
import { WorkNavbar } from "../cmps/work-navbar"
import { Board } from "../cmps/board"

export const MainBoard = () => {

  const { boards } = useSelector(state => state.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoards())
  }, [])


  return <section className="flex col main-board">
    <NavBar />
    {!boards ? <Loader /> :
      <main className="flex main-layout main-content" style={{ backgroundColor: '#eceff8' }}>
        <WorkNavbar boards={boards} />
        <Routes>
          <Route path='/' element={<DashBoard boards={boards} />} />
          <Route path='/:boardId' element={<Board />} />
        </Routes>
      </main>
    }

  </section>
}