import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import cn from 'classnames';
import './NewsItem.css';
import { ReactComponent as IconStar } from '../../assets/icons/star.svg';
import { findActiveNewsById } from '../../store/actions';

const NewsItem = (props) => {
  const { newsItem, className, showActiveNews } = props;

  const history = useHistory();

  const handleClick = () => {
    showActiveNews(newsItem.id);
    history.push(`/news/${newsItem.id}`);
  };

  return (
    <article className={cn('news-item', className)} onClick={handleClick}>
      <p className="news-item__author">{newsItem.by}</p>
      <div className="news-item__wrapper">
        <p className="news-item__title">{newsItem.title}</p>
        <p className="news-item__time">{newsItem.time}</p>
      </div>
      <div className="news-item__score">
        <IconStar className="news-item__score-icon" />
        <p className="news-item__score-count">{newsItem.score}</p>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    showActiveNews: (id) => {
      dispatch(findActiveNewsById(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
