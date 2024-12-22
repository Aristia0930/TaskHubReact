import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ServicesSection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { success, fail } from '../slices/loginState'
import { useNavigate } from 'react-router-dom';
const ServicesSection = () => {
    const userData = useSelector((state) => state.loginState.user); // Redux 상태 가져오기
    const dispatch = useDispatch(); // dispatch 함수 가져오기
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
  
    const todoButton=()=>{
      if(userData){
          navigate('/TodoPage')
      }
  }

  const messageButton=()=>{
      if(userData){
          navigate('/message')
      }
  }
  return (
    <section className="services-section">
      <h2>우리의 서비스</h2>
      <div className="services">
        <div onClick={todoButton} className="service-card">
          <h3>Todo 관리</h3>
          <p>효율적으로 할 일을 관리하세요!</p>
        </div>
        <div onClick={messageButton} className="service-card">
          <h3>메시지 보내기</h3>
          <p>쉽고 빠르게 메시지를 주고받으세요!</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
