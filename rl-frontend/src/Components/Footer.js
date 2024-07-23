import React from 'react';
import '../CSS/footer.css'; // Ensure you create this CSS file for styling

function Footer() {
  return (
    <footer id='footer'>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Running Logistics. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
