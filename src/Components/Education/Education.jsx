import './Education.css'
import ISTLogo from '../../assets/ISTLogo.jpeg'
import CertificateModal from './CertificateModal'
import { useState } from 'react'

const Education = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewCertificate = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='education-section'>
            <h2 className='education-section-title'>Education</h2>
            <div className='university-degree-section'>
                <h2 className="centered-heading">Bachelor&apos;s Degree in Computer Science and Telecommunications Engineering </h2>
                <h2 className="centered-heading">Instituto Superior Técnico, University of Lisbon</h2>
                <div className='ist-logo-section'>
                    <img src={ISTLogo} className='ist-logo' alt="IST Logo"/>
                </div>
                <div className='education-certificate' onClick={handleViewCertificate}>
                    View Degree Certificate
                </div>
            </div>
            <div className='courses-section'>
                <span>Relevant courses</span>
                <div className="courses-list">
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
            <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>   
    )
}

export default Education