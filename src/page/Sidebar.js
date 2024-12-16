import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../style/App.scss'
function Sidebar() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Link to="/create">
          <button>메세지 작성</button>
        </Link>
        <Link to="/create">
          <button>보낸 메세지</button>
        </Link>
        <Link to="/create">
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
