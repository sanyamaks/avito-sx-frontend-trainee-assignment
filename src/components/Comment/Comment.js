import React from 'react';
import { connect } from 'react-redux';
import './Comment.css';
import { requestChildComments } from '../../store/actions';

const Comment = (props) => {
  const { comment, showChildComments } = props;

  const renderOrder = (orderOfPriority) => {
    const arr = [];
    for (let i = 0; i < orderOfPriority; i++) {
      arr.push(i);
    }
    return arr.map((item) => <div className="comment__order" key={item} />);
  };

  const renderChildComments = () => {
    if (comment.hasOwnProperty('childComments')) {
      return comment.childComments.map((childComment) => (
        <Comment comment={childComment} key={childComment.id} />
      ));
    }
  };

  return (
    <>
      <div
        className="comment"
        onClick={() => {
          showChildComments(comment.id, comment.orderOfPriority, comment.kids);
        }}
      >
        {renderOrder(comment.orderOfPriority)}
        <div className="comment__wrapper">
          <div className="comment__headline">
            <p className="comment__author">{comment.by}</p>
            <p className="comment__time">{comment.time}</p>
          </div>
          <p
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          />
        </div>
      </div>
      {renderChildComments()}
    </>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    showChildComments: (parentId, orderOfPriority, childCommentsIds) => {
      dispatch(
        requestChildComments(parentId, orderOfPriority, childCommentsIds)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
