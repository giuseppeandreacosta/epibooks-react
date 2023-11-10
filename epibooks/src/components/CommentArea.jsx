import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import {Bearer} from '../token/bearer';


const CommentArea = ({ asin }) => {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Errore nel recupero dei commenti');
      
      }
    } catch (error) {
      console.error('Errore di rete nel recupero dei commenti', error);
      setError('Errore')
    } finally{
        setLoading(false);
    }
  };


useEffect(() => {
  const fetchData = async () => {
    await fetchComments();
  };

  fetchData();
}, [asin]);



  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: Bearer
          },
        }
      );

      if (response.ok) {
        const updatedComments = comments.filter((comment) => comment._id !== commentId);
        setComments(updatedComments);
      } else {
        console.error('Errore nella cancellazione del commento');
      }
    } catch (error) {
      console.error('Errore durante la cancellazione del commento', error);
    }
  };

  return (
    <div>
    {loading && <p>Caricamento...</p>}
    {error && <p>Errore: {error}</p>}
    {!loading && !error && (
      <>
        <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
        <AddComment asin={asin} onAddComment={fetchComments} />
      </>
    )}
  </div>
  );
};

export default CommentArea;

