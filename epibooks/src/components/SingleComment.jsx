import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
      {/* Altri dettagli del commento */}
    </div>
  );
};

export default SingleComment;
