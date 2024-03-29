// Path: src/components/Footer.jsx
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Y-GRAM</h3>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Y-GRAM, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
