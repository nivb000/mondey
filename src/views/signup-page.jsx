import logo from '../assets/imgs/mondey_logo_login.png'
import { BsArrowRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { signupUser } from '../store/actions/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationModal } from '../cmps/mui/notification-modal'
import { Link, useNavigate } from 'react-router-dom'

export const SignUpPage = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false)
  const [creds, setCreds] = useState({
    email: '',
    password: '',
    fullname: '',
    imgUrl: '',
    isGoogleUser: false
  })

  useEffect(() => {
    if(user){
      navigate("/board")
    }
  }, [user])
  
  

  const handleOnSubmit = (ev) => {
    ev.preventDefault()
    dispatch(signupUser(creds, setError))
  }

  const handleChange = ({ target }) => {
    const name = target.name
    const value = target.value
    setCreds(prevCreds => ({ ...prevCreds, [name]: value }))
  }



  return <section className="flex col signup-page">
    <header>
      <Link to="/">
        <img src={logo} alt="mondey-logo" />
      </Link>
    </header>
    {open && <NotificationModal msg={error?.msg} severity={error?.type} open={open} setOpen={setOpen} />}
    <div className="flex justify-center login-section">
      <div className='flex col space-between align-center login-form'>
        <h1>Sign up</h1>
        <form className='flex col space-evenly' onSubmit={handleOnSubmit}>
          <div className='flex space-between align-center input-form'>
            <label htmlFor='email'>Email</label>
            <input required type="text" name='email' id='email' autoComplete='off' onChange={handleChange} />
          </div>
          <div className='flex space-between align-center input-form'>
            <label htmlFor='fullname'>Full Name</label>
            <input required type="text" name='fullname' id='fullname' autoComplete='off' onChange={handleChange} />
          </div>
          <div className='flex space-between align-center input-form'>
            <label htmlFor='imgUrl'>Image url</label>
            <input required type="text" name='imgUrl' id='imgUrl' autoComplete='off' onChange={handleChange} />
          </div>
          <div className='flex space-between align-center input-form'>
            <label htmlFor='password'>Password</label>
            <input required type="password" name='password' id='password' onChange={handleChange} />
          </div>
          <button className='flex justify-center align-center'>
            Sign up
            <BsArrowRight />
          </button>
        </form>
      </div>

    </div>
  </section>
}
