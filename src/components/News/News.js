import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { getAllNewsId } from '../../api/NewsAPI';
import { connect } from 'react-redux';
import { requestNews } from '../../actions/index';

const News = (props) => {
  console.log(props);
  const { news, dispatch } = props;

  useEffect(() => {
    dispatch(requestNews());
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

export default connect(mapStateToProps)(React.memo(News));
