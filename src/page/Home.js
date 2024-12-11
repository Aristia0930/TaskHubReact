import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../node_modules/axios/index';

const Home = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(()=>{
        axios.get(`${apiUrl}/api/1`,{
            params:{
                text:'hello'
            }
        }).then(rs=>{
            alert(rs.data)
        }).catch(error=>alert("에러",error))
    },[])

    const check=async()=>{
        try{
            const rs=await axios.get(`${apiUrl}/check/1`,{ withCredentials: true })

            if (rs.status===200){
                if(rs.data.authorities!==null){
                    alert("인증 유효")
                }
                
                console.log(rs.data.authorities)
            }
        }
        catch(error){
            alert("인증실패")
            console.log(error)
        }
    }

    return (
        <div>
            <h1>홈</h1>
            <Link to="/TodoPage">todo</Link>
            <Link to="/profiles/velopert">김민준</Link>
            <br></br>
            <Link to="/profiles/non?detail=1"  state={{ username: "john_doe", age: 25 }}>존재하지 않는 사람</Link>
            
            
            <hr></hr>

            
            <Link to="/login">로그인</Link>
            <hr></hr>
            <button onClick={check}>권환 확인</button>

            
        </div>
    );
};

export default Home;