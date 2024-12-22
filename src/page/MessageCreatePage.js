import React, { useState } from 'react';
import axios from 'axios';
import '../style/Message.scss'
import { useNavigate } from 'react-router-dom';

function MessageCreatePage() {
    const [newMessage, setNewMessage] = useState('');
    const [recipientId, setRecipientId] = useState('');
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();


    const sendMessage = async () => {
      if (newMessage.trim() && recipientId.trim()) {
        if (newMessage.length > 500) {
          alert('메시지는 최대 500자까지 입력할 수 있습니다.');
          return;
        }

        const message = {
          receiverId : recipientId,
          content : newMessage
        }
  
        try {
          const rs=await axios.post(`${apiUrl}/message/send`, message,{ withCredentials: true });
          setNewMessage('');
          setRecipientId('');
     
            alert('메시지가 성공적으로 전송되었습니다!');
          
        } catch (error) {
          if (error.status===999){
            alert("상대방 ID를 확인해주세요 ")
          }

          // console.error('메시지 전송 실패', error.status);
          if(error.status===401){
            alert("로그인해주세요")
            navigate('/')
          }
          else{
          alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');}
        }
      } else {
        alert('모든 필드를 입력해주세요.');
      }
    };
  
    return (
      <div className="message-create">
        <h2>메시지 작성</h2>
        <div className="input-group">
          <label htmlFor="recipient">받는 사람 ID</label>
          <input
            type="text"
            id="recipient"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
            placeholder="받는 사람 ID를 입력하세요"
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">메시지 내용</label>
          <textarea
            id="message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="메시지를 입력하세요 (최대 500자자)"
            maxLength={500}
          />
          <p className="char-count">{newMessage.length}/500</p>
        </div>
        <button onClick={sendMessage}>보내기</button>
      </div>
    );
  }
  
  export default MessageCreatePage;
