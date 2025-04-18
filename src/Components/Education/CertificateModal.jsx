import PropTypes from 'prop-types';
import './CertificateModal.css';

const CertificateModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="certificate-modal-overlay" onClick={onClose}>
            <div className="certificate-modal-content" onClick={e => e.stopPropagation()}>
                <button className="certificate-modal-close" onClick={onClose}>×</button>
                <iframe src="/DegreeCertificate.pdf" title="Degree Certificate" className="certificate-pdf-viewer" />
            </div>
        </div>
    );
};

CertificateModal.propTypes = { isOpen: PropTypes.bool.isRequired, onClose: PropTypes.func.isRequired };

export default CertificateModal; 