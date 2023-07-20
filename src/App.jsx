import { HomePage } from './views/home-page'
import { MainBoard } from './views/main-board'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './views/login-page'
import { SignUpPage } from './views/signup-page'
import { useEffect } from 'react'
import { socketService } from './services/socket.service'
import './assets/styles/main.scss'

function App() {

  useEffect(() => {
    return () => socketService.terminate() 
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/board/*' element={<MainBoard />} />
      </Routes>
    </div>
  )
}

export default App
