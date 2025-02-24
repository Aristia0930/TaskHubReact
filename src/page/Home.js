import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import { useDispatch, useSelector } from 'react-redux';
import { success, fail,adminsuccess } from '../slices/loginState'
import { useNavigate } from 'react-router-dom';
import '../style/Home.scss'
import MainBanner from '../components/MainBanner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
const Home = () => {
    const userData = useSelector((state) => state.loginState.user); // Redux 상태 가져오기
    const dispatch = useDispatch(); // dispatch 함수 가져오기
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    // useEffect(()=>{
    //     axios.get(`${apiUrl}/api/1`,{
    //         params:{
    //             text:'hello'
    //         }
    //     }).then(rs=>{
    //         alert(rs.data)
    //     }).catch(error=>alert("에러",error))
    // },[])


    const check=async()=>{
        try{
            const rs=await axios.get(`${apiUrl}/check/1`,{ withCredentials: true })

            if (rs.status===200){
                  if(rs.data.authorities==="ROLE_USER"){
                    dispatch(success())
                  }
                  else if(rs.data.authorities==="ROLE_ADMIN"){
                    dispatch(adminsuccess())
                  }
                
                console.log(rs.data.authorities)
            }
        }
        catch(error){
            dispatch(fail())
            console.log("로그아웃 넘어옴옴")
            console.log(error)
        }
    }

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

    useEffect(()=>{
        check()
    },)
    return (
        <div className='home'>


            <MainBanner />
            <AboutSection />
            <ServicesSection />
        </div>
    );
};

export default Home;