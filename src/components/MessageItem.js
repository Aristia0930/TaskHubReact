import React from 'react';


function MessageItem({ message, deleteMessage ,send}) {
  return (
    <article className="message-item">
      <header className="message-header">
        <div className="sender-info">
          {send ? `작성자 : ${message.senderId}` : `받는사람 : ${message.receiverId}`}
        </div>
        <time className="sent-date">{message.sent_at}</time>
      </header>
      <section className="message-content">
        <p>{message.content}</p>
      </section>
      <footer className="message-actions">
        <button className="delete-button" onClick={() => deleteMessage(message.message_id)}>
          삭제
        </button>
      </footer>
    </article>
  );
}

export default MessageItem;
