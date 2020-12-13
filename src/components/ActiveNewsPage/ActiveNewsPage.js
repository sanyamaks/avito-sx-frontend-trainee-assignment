import React from 'react';
import ActiveNews from '../ActiveNews/ActiveNews';
import Comments from '../Comments/Comments';
import Notification from '../Notification/Notification';
import Header from "../Header/Header";

const ActiveNewsPage = (props) => {
  return (
    <>
      <Header />
      <ActiveNews {...props} />
      <Comments {...props} />
      <Notification />
    </>
  );
};

export default ActiveNewsPage;
