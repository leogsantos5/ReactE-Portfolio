import PropTypes from 'prop-types';

const Skill = ({ name, image, width, widthMobile, marginTop = 0, isMobile }) => {
  return (
    <div className='skill-div'>
      <span style={{textAlign: 'center', fontSize: isMobile ? 35 : 30}}>{name}</span>
      <img src={image} style={{width: isMobile ? widthMobile : width, marginTop }} alt={`${name} logo`} />
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  widthMobile: PropTypes.number.isRequired,
  marginTop: PropTypes.number,
  isMobile: PropTypes.bool.isRequired
};

export default Skill;