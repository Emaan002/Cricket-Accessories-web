// components/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';  

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com/Emaan002"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a
            href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>

        <p className="footer-text">&copy; {new Date().getFullYear()} Cricket Accessories. All rights reserved.</p>
      </div>
    </footer>
  );
}
