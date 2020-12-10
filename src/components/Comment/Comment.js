import React from 'react';

const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment">
      <p className="comment__author">{comment.by}</p>
      <p
        className="comment__text"
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
      <p className="comment__time">{comment.time}</p>
    </div>
  );
};

export default Comment;
