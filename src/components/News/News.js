import React, { useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { requestNews } from '../../actions/index';

const News = (props) => {
  const { news, showNews } = props;

  useEffect(() => {
    showNews();
  }, []);
  return (
    <div className="articles">
      {news.map((newsItem) => (
        <NewsItem newsItem={newsItem} key={newsItem.id} />
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
