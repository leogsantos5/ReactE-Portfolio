import './Experience.css'
import PropTypes from 'prop-types';
import { useInView } from '../../hooks/useInView';

const Experience = ({ index, title, company, date, paragraphs, logo, borderColor, logoBorderRadius, logoPadding, logoWidth }) => {
  const [ref, isInView] = useInView();

  return (
    <div className="experience-item" ref={ref}>
      <div className="experience-dot" style={{ background: borderColor }} />
      <div
        className={`experience-card ${isInView ? 'is-visible' : ''}`}
        style={{ '--accent': borderColor, transitionDelay: `${Math.min(index, 5) * 80}ms` }}
      >
        <div className='experience-card-header'>
          <div className="job-title">{title} at {company}</div>
          <div className="job-date">{date}</div>
        </div>
        <div className="experience-card-content">
          <div className="experience-text">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <img className='company-logo' style={{ borderRadius: logoBorderRadius, padding: logoPadding, width: logoWidth }} src={logo} alt={`${company} logo`} />
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  index: PropTypes.number.isRequired,
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
