import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { success, fail,adminsuccess } from '../slices/loginState'
import { useNavigate } from 'react-router-dom';

import '../style/Profile.scss'
import axios from '../../node_modules/axios/index';

const Profile = ({role,imageSrc}) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    const toggle=()=>{
        setMenuVisible(!menuVisible)
        console.log(imageSrc)
    }

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
  const profileModify=()=>{
    setMenuVisible(false)
    navigate("/profile/mypage")
  }



    return (
        <div className="profile-menu">
            {/*프로필 버튼*/}
            <img src={imageSrc}
            alt="프로필"
            className='profile-image'
            onClick={toggle}/>

            {menuVisible &&(
                <div className="dropdown-menu">
                    <ul>
                        <li onClick={profileModify}>프로필 수정</li>
                        <li onClick={handleLogout}>로그아웃</li>
                        {role==="admin" && <li >공지작성</li>}
                    </ul>
                </div>
            )}
            

        </div>
    );
};

export default Profile;