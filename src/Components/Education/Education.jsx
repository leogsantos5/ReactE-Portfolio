import './Education.css'
import ISTLogo from '../../assets/ISTLogo.jpeg'


const Education = () => {
  return (
      <div className='education-section' style={{ marginBottom: 90 }}>
        <hr style={{borderTop: '1px solid white', width: '95%'}}/>
        <h2 style={{ marginBottom: 30, fontSize: 60, marginTop: 90 }}>Education</h2>
        <div className='university-degree-section'>
            <h2 style={{ marginBottom: 30, fontSize: 28}}>Bsc Computer and Telecommunications Engineering - Instituto Superior Técnico, University of Lisbon</h2>
            <div className='ist-logo-section'>
                <img src={ISTLogo} style={{ width: 400, marginBottom: 40 }} />
                <div className="education-certificate">Download Certificate</div>
            </div>
        </div>
        <div className='courses-section'>
            <span style={{fontWeight: 700, fontSize: 25}}>Relevant courses</span>
            <div className="courses-list" style={{ fontWeight: 500, fontSize: 20, marginTop: 30 }}>
                <div className="course">Object Oriented Programming</div>
                <div className="course">Algorithms and Data Structures</div>
                <div className="course">Databases</div>
                <div className="course">Distributed Systems</div>
                <div className="course">Software Engineering</div>
                <div className="course">Programming Fundamentals</div>
                <div className="course">Security of Networks and Systems</div>
                <div className="course">Networks Architecture</div>
                <div className="course">Operating Systems</div>
            </div>
        </div>
    </div>
  )
}

export default Education