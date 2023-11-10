import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <SingleComment comment={comment} />
          <button onClick={() => onDeleteComment(comment._id)}>Elimina Commento</button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;

