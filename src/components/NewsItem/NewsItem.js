import React from 'react';

const NewsItem = (props) => {
  const { newsItem } = props;
  return (
    <div
      className="article"
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 200px 200px 200px',
      }}
    >
      <p style={{ marginRight: '10px' }}>{newsItem.by}</p>{' '}
      <p style={{ marginRight: '10px' }}>{newsItem.title}</p>{' '}
      <p style={{ marginRight: '10px' }}>{newsItem.time}</p>{' '}
      <p>{newsItem.score}</p>
    </div>
  );
};

export default React.memo(NewsItem);
