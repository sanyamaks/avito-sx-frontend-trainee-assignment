import React, { useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { requestNews } from '../../store/actions/index';
import './News.css';

const News = (props) => {
  const { news, showNews } = props;

  useEffect(() => {
    showNews();
  }, []);
  return (
    <div className="news">
      {news.map((newsItem) => (
        <NewsItem className="news__news-item" newsItem={newsItem} key={newsItem.id} />
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
