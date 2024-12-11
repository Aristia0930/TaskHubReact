import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.scss'
import axios from '../../node_modules/axios/index';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const joinPage=()=>{
        navigate('/join')
    }

    
    const handleLogin =async (e) => {
        e.preventDefault();
        // 로그인 처리 로직 추가 (API 호출 등)
        const data=new FormData()
        data.append('userId',userId)
        data.append('password',password)
        try {
            // 로그인 요청
            const response = await axios.post('http://localhost:8080/login',data, { withCredentials: true });
      

            if (response.status===200){
                alert("로그인성공")
                console.log(response.data.authorities)
                navigate('/')

            }
            // 로그인 성공 시 처리 (예: 대시보드로 리다이렉트)
          } catch (error) {
            console.error("로그인 실패:", error);
          }
        };
        
  

    
    return (
        <div className="login-container">
            <h2>로그인</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="input-group">
                    <label htmlFor="userId">아이디</label>
                    <input 
                        type="text" 
                        id="userId" 
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">로그인</button>
                <button className='join' onClick={joinPage}>회원가입</button>
            </form>
        </div>
    );
};

export default LoginPage;
