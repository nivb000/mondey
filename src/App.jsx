import { HomePage } from './views/home-page'
import { MainBoard } from './views/main-board'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './views/login-page'
// import { Helmet } from 'react-helmet'
import './assets/styles/main.scss'

function App() {

  return (
    <div className="App">
      {/* <Helmet>
        <meta http-equiv="Referrer-Policy" content="no-referrer-when-downgrade" />
      </Helmet> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/board/*' element={<MainBoard />} />
      </Routes>
    </div>
  )
}

export default App
