import React from 'react';
import '../style/AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>서비스 소개</h2>
      <p>
        우리의 서비스는 <strong>Todo 관리 기능</strong>과 <strong>메시지
        보내기 기능</strong>을 제공합니다.
      </p>
    </section>
  );
};

export default AboutSection;
