import './Experience.css'
import PropTypes from 'prop-types';

const Experience = ({ title, company, date, paragraphs, logo, borderColor, logoBorderRadius, logoPadding, logoWidth }) => {
  return (
    <div className="experience-card" style={{ borderColor: borderColor, backgroundColor: borderColor }}>
      <div className='experience-card-header'>
        <div className="job-title">{title} at {company}</div>
        <div className="job-date">{date}</div>
      </div>
      <div className="experience-card-content">
        <div className="experience-text">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <img className='company-logo' style={{borderRadius: logoBorderRadius, padding: logoPadding, width: logoWidth}} src={logo} alt={`${company} logo`} />
      </div>
    </div>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  logoBorderRadius: PropTypes.string,
  logoPadding: PropTypes.string,
  logoWidth: PropTypes.string,
};

export default Experience;
