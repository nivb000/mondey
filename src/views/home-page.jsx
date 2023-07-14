import { useEffect } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/imgs/mondey_logo_login.png'
import { useState } from "react"
import { BsLinkedin, BsGithub, BsGlobe } from 'react-icons/bs'
import { IoMdMenu } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'

export const HomePage = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setIsScrolled((window.scrollY > 0) ? true : false)
  }

  const links = [
    { id: 0, href: "https://nivb.netlify.app", icon: BsGlobe },
    { id: 1, href: "https://www.linkedin.com/in/niv-booskila-8095781ba/", icon: BsLinkedin },
    { id: 2, href: "https://github.com/nivb000", icon: BsGithub },
  ]


  return <section className="home-page">
    <div className={`flex space-between align-center home-nav ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="logo" />
      <div className={isMobileNavOpen ? 'mobile-nav-links' : 'nav-links'}>
        <Link to="/login" className="nav-link">Log in</Link>
        <Link to="/board">
          <button className="get-started-btn" style={{ padding: '0.5rem 1.2rem 0.5rem 0.7rem', fontSize: '14px', width: '100px' }}>
            Get Started
            <span>→</span>
          </button>
        </Link>
      </div>
      {isMobileNavOpen ?
        <GrClose className="mobile-menu-btn" onClick={() => setIsMobileNavOpen(false)} />
        :
        <IoMdMenu className="mobile-menu-btn" onClick={() => setIsMobileNavOpen(true)} />
      }
    </div>
    <section className="home-layout home-content">
      <div className="title-text">
        <h1>Run every aspect <br />of your work</h1>
        <p>The platform where all your processes, tools, and teams work together,<br />
          powered by monday products.</p>
      </div>
      <div className="flex col align-center lower-text">
        <Link to="board">
          <button className="get-started-btn" style={{ padding: '0.7rem 2rem', width: '110px' }}>
            Get Started
            <span>→</span>
          </button>
        </Link>
        <p>No credit card needed   ✦   Unlimited time on Free plan</p>
      </div>
    </section>
    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP_tests/HP_asset_white_bg.png" alt="main-image" />
    <footer className="flex space-between align-center home-layout">
      <div className="project-creator">
        <p>Project Created By <a href="https://nivb.netlify.app" target="_blank">Niv</a></p>
        {links.map(link => <a key={link.id} href={link.href} target="_blank">
          <link.icon />
        </a>)}
      </div>
      <span>Not Intended for real use</span>
      <div className="copyright">
        <p>All Right Reserved To </p>
        <a href="http://www.monday.com" target="_blank" rel="noopener noreferrer">Monday &copy;</a>
      </div>
    </footer>

  </section >

}