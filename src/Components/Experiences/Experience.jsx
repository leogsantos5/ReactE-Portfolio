import './Experience.css'
import PropTypes from 'prop-types';

const Experience = ({ title, company, date, tech, summary, paragraphs, logo, borderColor, logoBorderRadius, logoPadding, logoWidth }) => {
  return (
    <div className="experience-card" style={{ borderColor: borderColor, backgroundColor: borderColor }}>
      <div className='experience-card-top'>
        <div className="job-section">
            <div className="job-summary-item">
            <div className="job-title">{title} | {company}</div>
            <div className="summary-phrase">{summary}</div>
            </div>
            <div className="job-summary-item">
            <div className="job-date">{date}</div>
            <div className="job-tech">{tech}</div>
            </div>
        </div>
        <img className='company-logo' style={{borderRadius: logoBorderRadius, padding: logoPadding, width: logoWidth}} src={logo} alt={`${company} logo`} />
      </div>
      <div className="normal-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  logoBorderRadius: PropTypes.string,
  logoPadding: PropTypes.string,
  logoWidth: PropTypes.string,
};

export default Experience;
