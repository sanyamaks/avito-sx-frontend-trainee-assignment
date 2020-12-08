import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { requestNews } from '../../store/actions/index';
import './News.css';

const News = (props) => {
  const { news, showNews } = props;
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    showNews();
    const interval = setInterval(tick, 1000 * 60);

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
