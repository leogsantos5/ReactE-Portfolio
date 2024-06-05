import { useState } from 'react'
import './Navbar.css'
import fotoPerfil from '../../assets/DotNetLogo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
    
  return (
      <div className='navbar'>
          <img src={fotoPerfil} className='netLogo' alt="netLogo" />
          <ul className="nav-menu">
            <Link className={activeLink === 'home' ? 'active' : ''} to="home" spy={true} smooth={true} duration={200} offset={-100} onSetActive={() => setActiveLink('home')}>Introduction</Link>
            <Link className={activeLink === 'skills' ? 'active' : ''} to="skills" spy={true} smooth={true} duration={200} offset={-20} onSetActive={() => setActiveLink('skills')}>Skills</Link>
            <Link className={activeLink === 'experience' ? 'active' : ''} to="experience" spy={true} smooth={true} duration={200} offset={+0} onSetActive={() => setActiveLink('experience')}>Experience</Link>
            <Link className={activeLink === 'education' ? 'active' : ''} to="education" spy={true} smooth={true} duration={200} offset={-70} onSetActive={() => setActiveLink('education')}>Education</Link>
            <Link className={activeLink === 'projects' ? 'active' : ''} to="projects" spy={true} smooth={true} duration={200} offset={+25} onSetActive={() => setActiveLink('projects')}>Projects</Link>
          </ul>
          <div className='nav-connect'></div>
      </div>
  )
}

export default Navbar