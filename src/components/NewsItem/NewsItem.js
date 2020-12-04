import React from 'react';

const NewsItem = (props) => {
  const {newsItem} = props;
  return (
    <div className="article">
      <p>{newsItem}</p>
    </div>
  )
};

export default React.memo(NewsItem);
