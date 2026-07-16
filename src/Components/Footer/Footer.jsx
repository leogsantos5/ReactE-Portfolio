import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { downloadCV } from '../../utils/downloadCV';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-links'>
                <a href="https://github.com/leogsantos5" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/leonardo-santos-b6b4a623b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:leogsantos5@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
                <button className='footer-cv-btn' onClick={downloadCV}>Curriculum Vitae</button>
            </div>
            <p className='footer-copyright'>© {year} Leonardo Santos</p>
        </footer>
    )
}

export default Footer
