import { useState } from 'react'
import './Navbar.css'
import fotoPerfil from '../../assets/DotNetLogo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbarMobile = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
        <nav className='navbar'>
            <img src={fotoPerfil} className='netLogo' alt="netLogo" />
            <NavLinks className="nav-menu" activeLink={activeLink} setActiveLink={setActiveLink} toggleNavbarMobile={toggleNavbarMobile}/>
            <button className={`nav-open-btn ${menuOpen ? 'is-open' : ''}`} onClick={toggleNavbarMobile} aria-label="Toggle navigation menu">
               {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
        <div className={`nav-menu-mobile ${menuOpen ? 'is-open' : ''}`}>
            <NavLinks className="mobile-btns" activeLink={activeLink} setActiveLink={setActiveLink} toggleNavbarMobile={toggleNavbarMobile}/>
        </div>
    </header>
  )
}

export default Navbar