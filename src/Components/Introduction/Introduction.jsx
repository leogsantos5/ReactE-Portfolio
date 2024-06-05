import './Introduction.css'
import profileImage from '../../assets/LinkedinFoto.jpeg'

const Introduction = () => {
    const title = "I'm Leonardo Santos, a Full-Stack .NET Developer based in Lisbon, Portugal"
        .split('').map((letter, index) => <span key={index} className="letter">{letter}</span>
    );

  return (
      <div className='introduction' style={{ marginBottom: 100}}>
          <img src={profileImage}></img>
          <h1>{title}</h1>
          <p>I have almost 2 years of experience within the .NET stack</p>
          <div className="introduction-action">
              <div className="introduction-connect">Get in touch</div>
              <div className='introduction-resume'>Curriculum Vitae</div>
          </div>
      </div>
  )
}

export default Introduction