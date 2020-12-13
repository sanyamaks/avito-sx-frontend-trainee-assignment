import React from 'react';
import ActiveNews from '../ActiveNews/ActiveNews';
import Comments from '../Comments/Comments';
import Notification from '../Notification/Notification';

const ActiveNewsPage = (props) => {
  return (
    <>
      <ActiveNews {...props} />
      <Comments {...props} />
      <Notification />
    </>
  );
};

export default ActiveNewsPage;
