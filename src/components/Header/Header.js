import React from 'react';
import './Header.css';
import { ReactComponent as IconBack } from '../../assets/icons/arrow-pointing-to-right.svg';
import { ReactComponent as IconLoader } from '../../assets/icons/update-arrows.svg';

const Header = () => {
  return (
    <header className="header">
      <button className="header__button-icon">
        <IconBack className="header__icon header__icon_back" />
      </button>
      <div className="header__text">
        <h1 className="header__title">Hacker News</h1>
        <p className="header__subtitle">The news we deserve</p>
      </div>
      <button className="header__button-icon">
        <IconLoader className="header__icon header__icon_loader" />
      </button>
    </header>
  );
};

export default Header;
