import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Comments.css';
import Comment from '../Comment/Comment';
import { requestComments, resetAllComments } from '../../store/actions';

const Comments = (props) => {
  const { comments, childCommentIds, showComments, resetComments } = props;

  useEffect(() => {
    if (!!childCommentIds && childCommentIds.length !== 0) {
      showComments(childCommentIds);
    }
    return () => {
      resetComments();
    };
  }, [childCommentIds]);

  return (
    <section className="comments">
      {comments.map((comment) => {
        if (comment.hasOwnProperty('deleted')) {
          return null;
        }
        return <Comment comment={comment} key={comment.id} />;
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  const childCommentIds = (!!state.activeNews
    && state.activeNews.hasOwnProperty('kids'))
      ? state.activeNews.kids
    : null;
  return {
    childCommentIds: childCommentIds,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showComments: (ids) => {
      dispatch(requestComments(ids));
    },
    resetComments: () => {
      dispatch(resetAllComments());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
