import React from 'react';


function MessageItem({ message, deleteMessage ,send}) {
  return (
    
    <div>
      {send ? (
              <div className="message-item">
              <div className="message-header">
              <div className="sender-info">작성자 : {message.senderId}</div>
              <div className="sent-date">{message.sent_at}</div>
            </div>
            <div className="message-content">
              <p>{message.content}</p>
            </div>
            <div className="message-actions">
              <button className="delete-button" onClick={() => deleteMessage(message.message_id)}>
                삭제
              </button>
            </div>
            </div>
      ):(              
      <div className="message-item">
        <div className="message-header">
        <div className="sender-info">받는사람람 : {message.receiverId}</div>
        <div className="sent-date">{message.sent_at}</div>
      </div>
      <div className="message-content">
        <p>{message.content}</p>
      </div>
      <div className="message-actions">
        <button className="delete-button" onClick={() => deleteMessage(message.message_id)}>
          삭제
        </button>
      </div>
      </div>

      )}
      </div>

  );
}

export default MessageItem;
