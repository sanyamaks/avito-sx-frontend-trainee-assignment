import React from 'react';
import './Comments.css';
import Comment from '../Comment/Comment';

const comments = [
  {
    by: 'norvig',
    id: 2921983,
    kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
    parent: 2921506,
    text:
      "Aw shucks, guys ... you make me blush with your compliments. Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
    time: 1314211127,
    type: 'comment',
    orderOfPriority: 1,
  },
  {
    by: 'norvig',
    id: 2921984,
    kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
    parent: 2921506,
    text:
      "Aw shucks, guys ... you make me blush with your compliments. Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
    time: 1314211127,
    type: 'comment',
    orderOfPriority: 1,
  },
];

const Comments = () => {
  return (
    <section className="comments">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </section>
  );
};

export default Comments;
