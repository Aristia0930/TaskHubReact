import React from 'react';
import '../style/Footer.scss'

const Fotter = () => {
    return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-info">
      <p class="company-name">© 2024 Your Company Name. All rights reserved.</p>
      <p class="company-address">1234 Elm Street, Suite 567, Your City, Your Country</p>
      <p class="company-phone">Tel: +1 (123) 456-7890</p>
      <p class="company-email">Email: contact@yourcompany.com</p>
    </div>
    <div class="footer-social">
      <a href="#" class="social-link">Facebook</a>
      <a href="#" class="social-link">Twitter</a>
      <a href="#" class="social-link">Instagram</a>
      <a href="#" class="social-link">LinkedIn</a>
    </div>
  </div>
</footer>

    );
};

export default Fotter;