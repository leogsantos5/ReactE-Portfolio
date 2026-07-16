import PropTypes from 'prop-types';

const Skill = ({ name, image, icon: Icon, iconColor }) => {
  return (
    <div className='skill-div'>
      <span>{name}</span>
      {Icon
        ? <Icon className='skill-icon' color={iconColor} />
        : <img src={image} alt={`${name} logo`} />}
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
};

export default Skill;
