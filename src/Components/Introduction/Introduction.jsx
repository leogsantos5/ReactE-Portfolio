import './Introduction.css'
import profileImage from '../../assets/ProfilePhoto.jpg'
import { FaLinkedin } from 'react-icons/fa';
import { downloadCV } from '../../utils/downloadCV';

const TITLE = "I'm Leonardo Santos, a Full-Stack .NET Developer based in Lisbon, Portugal";

const Introduction = () => {
    let letterIndex = 0;
    const words = TITLE.split(' ');
    const title = [];
    words.forEach((word, wordIndex) => {
        title.push(
            <span key={`word-${wordIndex}`} className="word">
                {word.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ '--i': letterIndex++ }}>{letter}</span>
                ))}
            </span>
        );
        if (wordIndex < words.length - 1) title.push(' ');
    });

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/leonardo-santos-b6b4a623b/", "_blank");
    };

  return (
      <div className='introduction'>
          <div className="profile-photo-wrapper">
              <div className="profile-photo-frame">
                  <img src={profileImage} alt="Leonardo Santos" />
              </div>
          </div>
          <h1>{title}</h1>
          <p>I have 4 years of experience within the .NET stack, more backend-focused.</p>
          <div className="introduction-action">
              <div className="introduction-connect" onClick={handleLinkedInClick}>
                  <span style={{ marginTop: 3 }}>LinkedIn</span>
                  <FaLinkedin size={30} color="#F7F7F7" />
              </div>
              <div className='introduction-resume' onClick={downloadCV} >Curriculum Vitae</div>
          </div>
      </div>
  )
}

export default Introduction