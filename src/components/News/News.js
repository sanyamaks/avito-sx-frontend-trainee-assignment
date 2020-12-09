import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { requestNews } from '../../store/actions/index';
import './News.css';
import NewsItem from '../NewsItem/NewsItem';

const News = (props) => {
  const { news, showNews } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    showNews();
    const interval = setInterval(() => setCount(count + 1), 1000 * 60);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="news">
      {news.map((newsItem) => (
        <NewsItem
          className="news__news-item"
          newsItem={newsItem}
          key={newsItem.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { news: state.news };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showNews: () => {
      dispatch(requestNews());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
