import './Introduction.css'
import profileImage from '../../assets/LinkedinFoto.jpeg'
import { FaLinkedin } from 'react-icons/fa';

const Introduction = () => {
    const title = "I'm Leonardo Santos, a Full-Stack .NET Developer based in Lisbon, Portugal"
        .split('').map((letter, index) => <span key={index} className="letter">{letter}</span>
    );

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/leonardo-santos-b6b4a623b/", "_blank");
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CVLeonardoSantos.pdf'
        link.download = 'CV - Leonardo Santos.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
      <div className='introduction'>
          <img src={profileImage}></img>
          <h1>{title}</h1>
          <p>I have 2 years of experience within the .NET stack</p>
          <div className="introduction-action">
              <div className="introduction-connect" onClick={handleLinkedInClick}>
                  <span style={{ marginTop: 3 }}>LinkedIn</span>
                  <FaLinkedin size={30} color="#F7F7F7" />
              </div>
              <div className='introduction-resume' onClick={handleDownloadCV} >Curriculum Vitae</div>
          </div>
      </div>
  )
}

export default Introduction