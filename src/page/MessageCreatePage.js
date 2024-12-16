import React, { useState } from 'react';
import axios from 'axios';
import '../style/App.scss'
function MessageCreatePage() {
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async () => {
    if (newMessage.trim()) {
      try {
        await axios.post('/api/messages', { text: newMessage });
        setNewMessage('');
      } catch (error) {
        console.error('메시지 전송 실패', error);
      }
    }
  };

  return (
    <div className="message-create">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={sendMessage}>보내기</button>
    </div>
  );
}

export default MessageCreatePage;
