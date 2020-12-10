import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Comments.css';
import Comment from '../Comment/Comment';
import { requestComments } from '../../store/actions';

const Comments = (props) => {
  const { comments, ids, showComments } = props;
  useEffect(() => {
    showComments(ids);
  }, []);

  return (
    <section className="comments">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </section>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  const ids = state.news.find((item) => item.id === parseInt(id)).kids;
  return {
    ids: ids,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showComments: (ids) => {
      dispatch(requestComments(ids));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
