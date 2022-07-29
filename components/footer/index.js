import { FaHome, FaMapMarkerAlt, FaSearch, FaUserCircle } from 'react-icons/fa';
import { RiMic2Fill } from 'react-icons/ri';
import { FooterContainer } from '../../styles/footer';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContainer>
      <div className="inner-foot-container">
        <div className="footer-content">
          <FaHome className="icons-btn" />

          <p className="btn-text">home</p>
        </div>
        <div className="footer-content">
          <FaSearch className="icons-btn" />

          <p className="btn-text">search</p>
        </div>
        <div className="footer-content">
          <FaMapMarkerAlt className="icons-btn" />

          <p className="btn-text">map</p>
        </div>
        <div className="footer-content">
          <RiMic2Fill className="icons-btn" />

          <p className="btn-text">rooms</p>
        </div>
        <div className="footer-content">
          <FaUserCircle className="icons-btn" />
          <p className="btn-text">profile</p>
        </div>
      </div>
      <div className="footer-low-text">
        © {year}-{year + 1} the global network, llc. / whatido
      </div>
    </FooterContainer>
  );
};

export default Footer;
