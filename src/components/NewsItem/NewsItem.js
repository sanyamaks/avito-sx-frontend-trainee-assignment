import React from 'react';

const NewsItem = (props) => {
  const {newsItem} = props;
  return (
    <div className="article" style={{display: 'flex'}}>
      <p>Author: {newsItem.by}</p> <p>Title: {newsItem.title}</p> <p>Time: {newsItem.time}</p> <p>Score {newsItem.score}</p>
    </div>
  )
};

export default React.memo(NewsItem);
