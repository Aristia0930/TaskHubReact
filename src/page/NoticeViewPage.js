import React, { useEffect, useState } from 'react';
import '../style/NoticeView.scss';
import { useLocation, useParams } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
const NoticeViewPage = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const location = useLocation();
    // const notice=location.state?.notice
    const convertToKST=(data)=>{
        const date=new Date(data)
        return date.toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" })
      }
    const [notice,setNotice]=useState(location.state?.notice)

    const {id} = useParams()


    useEffect(()=>{
        console.log(id,"url")
        if(notice===undefined){
        const rs=axios.get(`${apiUrl}/notice/view/${id}`,{ withCredentials: true })
        rs.then((response)=>{
            console.log(response)
            setNotice(
                {title:response.data.title,
                    author:"관리자",
                   date:convertToKST(response.data.created_date),
                   content:response.data.content
                    
                }
            )


        })
        }
    },[id,notice])

    if (!notice) {
        return <div>Loading...</div>;
    }

    return (
      
        <div className="notice-detail">
          <h1 className="notice-detail__title">공지사항</h1>
          
          <div className="notice-detail__container">
            {/* 게시글 헤더 */}
            <div className="notice-detail__header">
              <h2 className="notice-detail__post-title">{notice.title}</h2>
              <div className="notice-detail__meta">
                <span className="notice-detail__author">
                  <strong>작성자: {notice.author}</strong> 
                </span>
                <span className="notice-detail__date">
                  <strong>작성일: {notice.date}</strong>
                </span>
              </div>
            </div>
            
            {/* 게시글 내용 */}
            <div className="notice-detail__content">
                {notice.content}

            </div>
            
            
            {/* 버튼 영역 */}
            <div className="notice-detail__buttons">
              <button className="notice-detail__button notice-detail__button--list">목록</button>
              <button className="notice-detail__button notice-detail__button--prev">이전글</button>
              <button className="notice-detail__button notice-detail__button--next">다음글</button>
            </div>
          </div>
        </div>
      );
    };

export default NoticeViewPage;