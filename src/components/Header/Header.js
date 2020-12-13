import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './Header.css';
import { ReactComponent as IconBack } from '../../assets/icons/arrow-pointing-to-right.svg';
import { ReactComponent as IconLoader } from '../../assets/icons/update-arrows.svg';
import { connect } from 'react-redux';
import cn from 'classnames';
import { requestActiveNews, requestNews } from '../../store/actions';

const Header = (props) => {
  const { isLoading, showNews, showActiveNews } = props;
  const history = useHistory();
  const match = useRouteMatch();

  const handleClickBack = () => {
    history.push('/');
  };

  const handleClickRefresh = () => {
    if (match.path === '/') {
      showNews();
    } else if (match.path === '/news/:id') {
      showActiveNews(match.params.id);
    }
  };

  const renderButtonBack = () => {
    if (match.path !== '/') {
      return (
        <button className="header__button-icon" onClick={handleClickBack}>
          <IconBack className="header__icon header__icon_back" />
        </button>
      );
    }
  };
  return (
    <header className="header">
      <div className="header__wrapper">{renderButtonBack()}</div>

      <div className="header__text">
        <h1 className="header__title">Hacker News</h1>
        <p className="header__subtitle">The news we deserve</p>
      </div>
      <div className="header__wrapper">
        <button className="header__button-icon" onClick={handleClickRefresh}>
          <IconLoader
            className={cn('header__icon', { header__icon_loader: isLoading })}
          />
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showNews: () => {
      dispatch(requestNews());
    },
    showActiveNews: (id) => {
      dispatch(requestActiveNews(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
