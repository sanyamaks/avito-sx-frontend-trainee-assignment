import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ActiveNews.css';
import { ReactComponent as IconStar } from '../../assets/icons/comments-icon.svg';

const ActiveNews = () => {
  const history = useHistory();
  const newsItem = {
    by: 'Александр',
    title: 'Крутой длинный и умный заголовок Apple',
    time: '5.12.2020',
    score: '56',
    url: 'https://google.com',
    descendants: '546'
  };

  // useEffect(() => {
  //   history.push('/');
  // }, []);

  return (
    <div className="active-news">
      <p className="active-news__author">{newsItem.by}</p>
      <p className="active-news__title">{newsItem.title}</p>
      <a href={newsItem.url} target="_black" className="active-news__url">
        {newsItem.url}
      </a>
      <div className="active-news__wrapper">
        <p className="active-news__time">{newsItem.time}</p>
        <div className="active-news__comments">
          <IconStar className="active-news__comments-icon" />
          <p className="active-news__comments-count">{newsItem.descendants}</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveNews;
