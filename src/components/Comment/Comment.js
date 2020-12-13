import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import './Comment.css';
import { requestAllChildComments } from '../../store/actions';

const Comment = (props) => {
  const { comment, showChildComments } = props;

  const hasChildComments = !!comment.kids;
  const isMainComment = comment.orderOfPriority === 0;
  const areChildCommentsReceived =
    comment.hasOwnProperty('childComments') && comment.childComments.length > 0;
  const areChildCommentsRemoved =
    comment.hasOwnProperty('deleted') && !!comment.deleted;

  const renderOrder = (orderOfPriority) => {
    const arr = [];
    for (let i = 0; i < orderOfPriority; i++) {
      arr.push(i);
    }
    return arr.map((item) => <div className="comment__order" key={item} />);
  };

  const renderChildComments = () => {
    if (areChildCommentsReceived) {
      return comment.childComments.map((childComment) => {
        if (areChildCommentsRemoved) {
          return null;
        }
        return <Comment comment={childComment} key={childComment.id} />;
      });
    }
  };

  const renderPrompt = () => {
    if (!hasChildComments || !isMainComment || areChildCommentsReceived) {
      return null;
    }
    return <p className="comment__show-more">Показать ещё ...</p>;
  };

  const handleClick = () => {
    if (!hasChildComments || !isMainComment || areChildCommentsReceived) {
      return null;
    }
    showChildComments(comment.id, comment.orderOfPriority, comment.kids);
  };

  return (
    <>
      <div className="comment" onClick={handleClick}>
        {renderOrder(comment.orderOfPriority)}
        <div
          className={cn(
            'comment__wrapper',
            {
              comment__wrapper_hover:
                hasChildComments && isMainComment && !areChildCommentsReceived,
            },
            {
              comment__wrapper_main: isMainComment,
            }
          )}
        >
          <div className="comment__headline">
            <p className="comment__author">{comment.by}</p>
            <p className="comment__time">{comment.time}</p>
          </div>
          <p
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          />
          {renderPrompt()}
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
        requestAllChildComments(parentId, orderOfPriority, childCommentsIds)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
