import React, { useEffect, useState } from 'react';
import "../style/Notice.scss";
import axios from '../../node_modules/axios/index';
import { Link } from 'react-router-dom';
const Notice = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const [notices, setNotices] = useState([]);
    
    const convertToKST=(data)=>{
      const date=new Date(data)
      return date.toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" })
    }

    const dummyNotices = (array) =>
      array.map((item, index) => ({
        id: index + 1, // 서버 데이터에 id가 없으면 인덱스 사용
        title: item.title,
        author: "관리자",
        date: convertToKST(item.created_date),
        content : item.content,
        num:item.num
      }));

    //게시글 가져오기
    const bords=async()=>{
      try{
      const rs=await axios.get(`${apiUrl}/notice/list`,{ withCredentials: true })

      if(rs.status===200){
        console.log("데이터 받아오기 성공")
        console.log(rs.data)
        setNotices(dummyNotices(rs.data))
      }


      }catch(error){
        console.log(error)
      }

    } 

    useEffect(()=>{
      bords()
    },[])
  
    const getCurrentItems = () => {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      return notices.slice(indexOfFirstItem, indexOfLastItem);
    };
  
    const totalPages = Math.ceil(notices.length / itemsPerPage);
  
    return (
      <div className="notice-board">
        <h1 className="notice-board__title">공지사항</h1>
        
        <div className="notice-board__container">
          {/* 게시판 헤더 */}
          <div className="notice-board__header">
            <div className="notice-board__header-item notice-board__number">번호</div>
            <div className="notice-board__header-item notice-board__title-col">제목</div>
            <div className="notice-board__header-item notice-board__author">작성자</div>
            <div className="notice-board__header-item notice-board__date">날짜</div>
          </div>
  
          {/* 게시글 목록 */}
          {getCurrentItems().map((notice) => (
            
              <Link 
              to={`/notice/view/${notice.num}`} 
              key={notice.id}
              state={{notice}} 
              className="link_line"
              
            >
            <div key={notice.id} className="notice-board__row">
              <div className="notice-board__cell notice-board__number">{notice.id}</div>
              <div className="notice-board__cell notice-board__title-col">{notice.title}</div>
              <div className="notice-board__cell notice-board__author">{notice.author}</div>
              <div className="notice-board__cell notice-board__date">{notice.date}</div>
            </div>
            </Link>
          ))
          
          }
        </div>
  
        {/* 페이지네이션 */}
        <div className="notice-board__pagination">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="pagination__button"
          >
            이전
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`pagination__button ${currentPage === page ? 'pagination__button--active' : ''}`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="pagination__button"
          >
            다음
          </button>
        </div>
      </div>
    );
  };

export default Notice;