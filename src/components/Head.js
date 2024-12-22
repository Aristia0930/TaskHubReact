import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { success, fail } from '../slices/loginState'
import {Link} from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import '../style/Head.scss'
import Footer from './Footer'

const Head = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const isLoggedIn = useSelector((state) => state.loginState.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(()=>{
    const check=async()=>{
        try{
            const rs=await axios.get(`${apiUrl}/check/1`,{ withCredentials: true })

            if (rs.status===200){
                if(rs.data.authorities!==null){
                    dispatch(success())
                }
                
                console.log(rs.data.authorities)
                
            }
        }
        catch(error){
            console.log(error)
            dispatch(fail())
            // navigate('/')
        }
    }
    check()
  },[])

  const handleLogin = () => {
    navigate('/login')
  };

 
    
    const handleLogout=async()=>{
        try{
            const rs=await axios.get(`${apiUrl}/logout`,{ withCredentials: true })

            if (rs.status===200){
                 alert('로그아웃')
                 dispatch(fail());             
            }
        }
        catch(error){
            console.log(error)
        }
  };


  const todoButton=()=>{
    if(isLoggedIn){
        navigate('/TodoPage')
    }
}

const messageButton=()=>{
    if(isLoggedIn){
        navigate('/message')
    }
}


  return (
    <div className='layout'>
      <header className="header">
        <div className="logo">
          <a href="/">TaskHub</a>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li onClick={()=>{navigate("/")}}>Home</li>
            {/* <li><Link to="/">Notices</Link></li> */}
            <li onClick={()=>{navigate("/hisorypage")}}>Update History</li>
            <li onClick={todoButton}>Todo</li>
            <li onClick={messageButton}>Message</li>
            {/* <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li> */}
          </ul>
          <div className="auth-buttons">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="logout-button">Logout</button>
            ) : (
              <button onClick={handleLogin} className="login-button">Login</button>
            )}
          </div>
        </nav>
      </header>
      <main className="maincontent">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Head;
