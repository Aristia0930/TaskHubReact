import React from 'react';

function MessageItem({ message, deleteMessage }) {
  return (
    <div className="message-item">
      <p>{message.text}</p>
      <button onClick={() => deleteMessage(message.id)}>삭제</button>
    </div>
  );
}

export default MessageItem;