import logo from '../assets/imgs/mondey_logo_login.png'
import { BsArrowRight } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { GoogleSignIn } from '../cmps/google-sign-in'
import { loginUser } from '../store/actions/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationModal } from '../cmps/mui/notification-modal'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false)
  const [creds, setCreds] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (error) {
      setOpen(true)
    }
    if (user) {
      navigate("/board")
    }
  }, [error, user])

  const handleOnSubmit = (ev) => {
    ev.preventDefault()
    dispatch(loginUser(creds, setError))
  }

  const handleChange = ({ target }) => {
    const name = target.name
    const value = target.value
    setCreds(prevCreds => ({ ...prevCreds, [name]: value }))
  }



  return <section className="flex col login-page">
    <header>
      <Link to="/">
        <img src={logo} alt="mondey-logo" />
      </Link>
    </header>
    {open && <NotificationModal msg={error?.msg} severity={error?.type} open={open} setOpen={setOpen} />}
    <div className="flex justify-center login-section">
      <div className='flex col space-evenly align-center login-form'>
        <h1>Log in to your account</h1>
        <form className='flex col space-evenly' onSubmit={handleOnSubmit}>
          <div className='flex space-between align-center input-form'>
            <label htmlFor='email'>Email</label>
            <input type="text" name='email' id='email' autoComplete='off' placeholder='Email' onChange={handleChange} />
          </div>
          <div className='flex space-between align-center input-form'>
            <label htmlFor='password'>Password</label>
            <input type="password" name='password' id='password' placeholder='Password' onChange={handleChange} />
          </div>
          <Link to="/signup">
            <span>Not have an account yet? Sign up</span>
          </Link>
          <button className='flex justify-center align-center'>
            Log in
            <BsArrowRight />
          </button>
        </form>
        <div>Or Sign in with</div>
        <GoogleSignIn />
      </div>

    </div>
  </section>
}
