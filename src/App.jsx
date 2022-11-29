import { HomePage } from './views/home-page'
import { MainBoard } from './views/main-board'
import { Routes, Route } from 'react-router-dom'
import './assets/styles/main.scss'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/board/*' element={<MainBoard />} />
        </Routes>
    </div>
  )
}

export default App
