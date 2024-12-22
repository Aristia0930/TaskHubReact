import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageItem from '../components/MessageItem';
import '../style/Message.scss'
import { useNavigate } from 'react-router-dom';

function MessagePage() {

  const [messages, setMessages] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
   const navigate = useNavigate();

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${apiUrl}/message/box`,{ withCredentials: true });
      setMessages(response.data);
    } catch (error) {
      console.error('메시지 가져오기 실패', error);
      navigate('/')
    }
  };


  const deleteMessage = async (id) => {
    try{
      const rs=await axios.delete(`${apiUrl}/message/remove/${id}`,{ withCredentials: true })
      if(rs.status===200){
        console.log("todo삭제완료")
      }
    }catch(error){
      console.log(error)
      navigate('/')
    }

    fetchMessages()
  };

  useEffect(() => {

    fetchMessages();

  }, [apiUrl]);

  return (
    <div className="message-list">
      {messages.length > 0 ? (
        messages.map((message) => (
          <MessageItem key={message.id} message={message} deleteMessage={deleteMessage} send={true} />
        ))
      ) : (
        <p>받은 메시지가 없습니다.</p>
      )}
    </div>
  );
}

export default MessagePage;
