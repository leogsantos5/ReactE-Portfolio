import { useState, useEffect } from 'react'
import './Navbar.css'
import fotoPerfil from '../../assets/DotNetLogo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleNavbarMobile = () => {
    setMenuOpen(!menuOpen);
  }

   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
    
  return (
    <header>
        <nav className='navbar'>
            <img src={fotoPerfil} className='netLogo' alt="netLogo" />
            <NavLinks className="nav-menu" activeLink={activeLink} setActiveLink={setActiveLink} toggleNavbarMobile={toggleNavbarMobile}/>
            <button className='nav-open-btn' onClick={toggleNavbarMobile}>
               {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
        <div className='nav-menu-mobile' style={{ visibility: menuOpen && isMobile ? 'visible' : 'hidden', opacity: menuOpen && isMobile ? 1 : 0 }}>
            <NavLinks className="mobile-btns" activeLink={activeLink} setActiveLink={setActiveLink} toggleNavbarMobile={toggleNavbarMobile}/>
        </div>
    </header>
  )
}

export default Navbar