import React from 'react';
import '../style/Footer.scss'

const Fotter = () => {

  const frontUrl = process.env.REACT_APP_FRONT_URL;
  const backUrl = process.env.REACT_APP_BACK_URL;
  const blogUrl = process.env.REACT_APP_BLOG_URL;
    return (
<footer className="footer">
  <div className="footer-container">
    <div claclassNamess="footer-info">
      <p className="company-name">© 2024 TaskHub-Project.</p>
      <p className="company-phone">Tel: +1 (123) 456-7890</p>
      <p className="company-email">Email: dkfl093@naver.com</p>
    </div>
    <div class="footer-social">
      <a href={`${frontUrl}`} className="social-link" target="_blank" rel="noopener noreferrer">GitHub-Front</a>
      <a href={`${backUrl}`} className="social-link" target="_blank" rel="noopener noreferrer">GitHub-Back</a>
      <a href={`${blogUrl}`} className="social-link" target="_blank" rel="noopener noreferrer">Blog</a>
    </div>
  </div>
</footer>

    );
};

export default Fotter;