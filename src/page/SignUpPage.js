import React, { useState } from 'react';
import '../style/SignUpPage.scss';
import axios from '../../node_modules/axios/index';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    
    const navite=useNavigate()


    const handleSignUp = async(e) => {
        e.preventDefault();
        const data=new FormData()
        data.append('name',name)
        data.append('userId',userId)
        data.append('password',password)
        try{
            const rs =await axios.post(`${apiUrl}/join`,data)

        if (rs.status===200){
            alert("회원가입 성공")
            navite('/login')

        }
        
 
    } catch(error){
        if (error.response.data.custom_code===12){
            alert("아이디 중복입니다 다시 작성해주세요")
            
        }
        console.log(error)
    }

    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSignUp} className="signup-form">
                <div className="input-group">
                    <label htmlFor="name">이름</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="username">아이디</label>
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
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUpPage;
