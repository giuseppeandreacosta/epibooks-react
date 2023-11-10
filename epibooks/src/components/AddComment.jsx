import React, { useState } from 'react';
import {Bearer} from '../token/bearer';
const AddComment = ({ asin, onAddComment }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleAddComment = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Bearer,
        },
        body: JSON.stringify({
          comment: comment,
          rate: rating,
          elementId: asin,
        }),
      });

      if (response.ok) {
        alert('Recensione aggiunta con successo!');
        setComment('');
        setRating(1);
        onAddComment();
      } else {
        console.error('Errore durante l\'aggiunta della recensione');
      }
    } catch (error) {
      console.error('Errore di rete durante l\'aggiunta della recensione', error);
    }
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Aggiungi un commento..."
      />
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <button onClick={handleAddComment}>Aggiungi Commento</button>
    </div>
  );
};

export default AddComment;
