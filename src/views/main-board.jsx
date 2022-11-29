import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { SideBar } from "../cmps/SideBar"
import { Board } from "./board"
import { DashBoard } from "./dash-board"
import { loadBoards } from "../store/actions/board.action"
import { Loader } from "../cmps/loader"

export const MainBoard = () => {

  const { boards } = useSelector(state => state.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoards())
  }, [])


  return <section>
    <SideBar />
    <main className="main-layout">
      {!boards ? <Loader /> :
        <Routes>
          <Route path='/' element={<DashBoard boards={boards} />} />
          <Route path='/:boardId' element={<Board boards={boards} />} />
        </Routes>
      }
    </main>

  </section>
}