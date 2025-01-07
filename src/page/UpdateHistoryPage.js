import React from 'react';
import '../style/UpdateHistoryPage.scss';

const UpdateHistoryPage = () => {
    const historyData = [
        { date: '2024.12.11', content: 'todo 프로젝트 시작일' },
        { date: '2024.12.23', content: '프로젝트명 TaskHub 변경' },
        { date: '2024.12.24', content: '사이트 완성' },
        { date: '2025.01.06~~', content: '프로필추가중' },

    ];

    return (
        <div className="history-page">
            <header className="history-header">
                <h1>프로젝트</h1>
                <h2>TaskHub</h2>
                <h3>HISTORY</h3>
            </header>
            <div className="history-list">
                {historyData.map((item, index) => (
                    <div className="history-item" key={index}>
                        <time className="history-date">{item.date}</time>
                        <span className="history-divider">|</span>
                        <p className="history-content">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateHistoryPage;
