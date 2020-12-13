import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './ActiveNews.css';
import { ReactComponent as IconStar } from '../../assets/icons/comments-icon.svg';
import {
  removeActiveNews,
  requestActiveNews,
} from '../../store/actions';

const ActiveNews = (props) => {
  const { id, activeNews, showActiveNews, resetActiveNews } = props;

  useEffect(() => {
    if (!activeNews) {
      showActiveNews(id);
    }
    return () => {
      resetActiveNews();
    };
  }, []);

  if (!activeNews) {
    return null;
  }
  return (
    <section className="active-news">
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
    </section>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    id: id,
    activeNews: state.activeNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showActiveNews: (id) => {
      dispatch(requestActiveNews(id));
    },
    resetActiveNews: () => {
      dispatch(removeActiveNews());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveNews);
