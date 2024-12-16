import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import { useDispatch, useSelector } from 'react-redux';
import { success, fail } from '../slices/loginState'
import { useNavigate } from 'react-router-dom';
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
                if(rs.data.authorities!==null){
                    alert("인증 유효")
                    dispatch(success())
                }
                
                console.log(rs.data.authorities)
            }
        }
        catch(error){
            alert("인증실패")
            console.log(error)
        }
    }

    const todoButton=()=>{
        if(userData){
            navigate('/TodoPage')
        }
    }

    return (
        <div>
            <h1>홈</h1>
            <button onClick={todoButton}>todo</button>
            <button onClick={todoButton}>message</button>
            <br></br>
            {/* <Link to="/profiles/non?detail=1"  state={{ username: "john_doe", age: 25 }}>존재하지 않는 사람</Link> */}
            
            <Link to="/message"  >메세지지</Link> 
            <hr></hr>

            {userData ?<h1>로그아웃</h1>:<Link to="/login">로그인</Link> }
            {/* <Link to="/login">로그인</Link> */}
            <hr></hr>
            <button onClick={check}>권환 확인</button>

            
        </div>
    );
};

export default Home;