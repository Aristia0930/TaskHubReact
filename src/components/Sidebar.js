import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { FaPaperPlane, FaInbox, FaPaperclip } from 'react-icons/fa'; // 아이콘 임포트
import '../style/Message.scss';

function Sidebar() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Link to="/message/send">
          <button>
            <FaPaperPlane /> 메세지 작성
          </button>
        </Link>
        <Link to="/message/mysend">
          <button>
            <FaPaperclip /> 보낸 메세지
          </button>
        </Link>
        <Link to="/message">
          <button>
            <FaInbox /> 받은 메세지
          </button>
        </Link>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
