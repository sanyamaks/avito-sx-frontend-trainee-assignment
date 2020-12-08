import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './ActiveNews.css';
import { ReactComponent as IconStar } from '../../assets/icons/comments-icon.svg';

const ActiveNews = (props) => {
  const { activeNews } = props;
  const history = useHistory();

  useEffect(() => {
    if (!activeNews) {
      history.push('/');
    }
  }, []);


  if (!activeNews) {
    return null;
  }
  return (
    <div className="active-news">
      <p className="active-news__author">{activeNews.by}</p>
      <p className="active-news__title">{activeNews.title}</p>
      <a href={activeNews.url} target="_black" className="active-news__url">
        {activeNews.url}
      </a>
      <div className="active-news__wrapper">
        <p className="active-news__time">{activeNews.time}</p>
        <div className="active-news__comments">
          <IconStar className="active-news__comments-icon" />
          <p className="active-news__comments-count">
            {activeNews.descendants}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeNews: state.activeNews };
};

export default connect(mapStateToProps)(ActiveNews);
