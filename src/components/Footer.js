import React from 'react';
import '../style/Footer.scss'

const Fotter = () => {
    return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-info">
      <p class="company-name">© 2024 TaskHub-Project.</p>
      <p class="company-phone">Tel: +1 (123) 456-7890</p>
      <p class="company-email">Email: dkfl093@naver.com</p>
    </div>
    <div class="footer-social">
      <a href="#" class="social-link">GitHub-Front</a>
      <a href="#" class="social-link">GitHub-Back</a>
      <a href="#" class="social-link">Blog</a>
    </div>
  </div>
</footer>

    );
};

export default Fotter;