import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetError } from '../../store/actions';
import './Notification.css';

const Notification = (props) => {
  const { statusError, resetError } = props;
  const [text, setText] = useState('Ошибка');

  useEffect(() => {
    if (statusError === 404) {
      setText('Not Found');
    }
    return () => {
      resetError();
    };
  }, [statusError]);

  if (!statusError) {
    return null;
  }

  return (
    <section className="notification">
      <p className="notification__text">{text}</p>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    statusError: state.statusError,
  };
};

const mapDispatchToProps = () => {
  return {
    resetError: () => {
      resetError();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
