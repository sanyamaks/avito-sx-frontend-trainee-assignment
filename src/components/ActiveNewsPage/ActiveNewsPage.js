import React from 'react';
import ActiveNews from '../ActiveNews/ActiveNews';
import Comments from '../Comments/Comments';

const ActiveNewsPage = (props) => {
  return (
    <>
      <ActiveNews {...props} />
      <Comments />
    </>
  );
};

export default ActiveNewsPage;
