import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavLinks = ({ className, activeLink, setActiveLink, toggleNavbarMobile }) => {
  const links = [
    { name: 'Introduction', to: 'home', offset: -80, duration: 200 },
    { name: 'Skills', to: 'skills', offset: -80, duration: 200 },
    { name: 'Experience', to: 'experience', offset: -80, duration: 200 },
    { name: 'Education', to: 'education', offset: -75, duration: 200 },
    { name: 'Projects', to: 'projects', offset: -80, duration: 200 },
  ];

  const handleClick = () => {
    toggleNavbarMobile();
  };

  return (
    <ul className={className}>
      {links.map(link => (
        <Link
          key={link.to}
          className={activeLink === link.to ? 'active' : ''}
          to={link.to}
          spy={true}
          smooth={true}
          duration={link.duration}
          offset={link.offset}
          onSetActive={() => setActiveLink(link.to)}
          onClick={handleClick}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string.isRequired,
  activeLink: PropTypes.string.isRequired,
  setActiveLink: PropTypes.func.isRequired,
  toggleNavbarMobile: PropTypes.func.isRequired
};

export default NavLinks;