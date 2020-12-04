import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { getAllNewsId } from '../../api/NewsAPI';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getAllNewsId().then((data) => setNews(data));
  }, []);
  return (
    <div className="articles">
      {news.map((newsItem) => (
        <NewsItem newsItem={newsItem} key={newsItem} />
      ))}
    </div>
  );
};

export default React.memo(News);
