import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/NoticeWrite.scss';

const NoticeWrite = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [notice, setNotice] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(notice)  
      const response = await axios.post(`${apiUrl}/admin/write`, notice,{ withCredentials: true });
      if (response.status === 200) {
        alert('공지사항이 성공적으로 등록되었습니다.');
        navigate('/notice'); // 목록 페이지로 이동
      }
    } catch (error) {
      console.error('공지사항 등록 실패:', error);
      alert('공지사항 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCancel = () => {
    if (window.confirm('작성을 취소하시겠습니까?')) {
      navigate('/');
    }
  };

  return (
    <div className="notice-write-container">
      <h2>공지사항 작성</h2>
      <form onSubmit={handleSubmit}>


        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={notice.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            value={notice.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            등록
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoticeWrite;