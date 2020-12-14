import React from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import './NewsItem.css';
import { ReactComponent as IconStar } from '../../assets/icons/star.svg';

const NewsItem = (props) => {
  const { newsItem, className } = props;

  const history = useHistory();

  const handleClick = () => {
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

export default React.memo(NewsItem);
