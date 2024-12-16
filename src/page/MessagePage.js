import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageItem from '../compents/MessageItem';
import '../style/App.scss'
function MessagePage() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('메시지 가져오기 실패', error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`/api/messages/${id}`);
      setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
      console.error('메시지 삭제 실패', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="message-list">
      {messages.length > 0 ? (
        messages.map((message) => (
          <MessageItem key={message.id} message={message} deleteMessage={deleteMessage} />
        ))
      ) : (
        <p>받은 메시지가 없습니다.</p>
      )}
    </div>
  );
}

export default MessagePage;
