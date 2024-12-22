import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../style/Message.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const userData = useSelector((state) => state.loginState.user);
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!userData){
  //     alert("로그인해주세요")
  //     navigate('/')
  //   }
  // })
  return (
    <div className="app-container">
      <div className="sidebar">
        <Link to="/message/send">
          <button>메세지 작성</button>
        </Link>
        <Link to="/message/mysend" >
          <button>보낸 메세지</button>
        </Link>
        <Link to="/message">
          <button>받은 메세지</button>
        </Link>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
