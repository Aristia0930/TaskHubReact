import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { success, fail,adminsuccess } from '../slices/loginState'
import {Link} from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import '../style/Head.scss'
import Footer from './Footer'
import Profile from './Profile';


const Head = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const isLoggedIn = useSelector((state) => state.loginState.user);
    const isRole = useSelector((state) => state.loginState.role);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(()=>{
    const check=async()=>{
        try{
            const rs=await axios.get(`${apiUrl}/check/1`,{ withCredentials: true })

            if (rs.status===200){
                if(rs.data.authorities!==null){
                  if(rs.data.authorities==="ROLE_USER"){
                    dispatch(success())
                  }
                  else if(rs.data.authorities==="ROLE_ADMIN"){
                    dispatch(adminsuccess())
                  }
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
              // isRole==="admin" ? (<button onClick={handleLogout} className="logout-button">어드민</button>) :
              //   (<button onClick={handleLogout} className="logout-button">Logout</button>)
                // <img src='/profile_40x40.png'/>
                <Profile role={isRole} imageSrc="/profile_40x40.png" />

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
