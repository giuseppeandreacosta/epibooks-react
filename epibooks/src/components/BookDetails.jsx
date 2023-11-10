import React, { useState, useEffect } from 'react';
import CommentArea from './CommentArea';

const BookDetails = ({ match }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
 
    if (match && match.params) {
      const { asin } = match.params;

     
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(`https://api.example.com/books/${asin}`);
          if (response.ok) {
            const data = await response.json();
            setBook(data);
          } else {
            console.error('Errore nel recupero dei dettagli del libro');
          }
        } catch (error) {
          console.error('Errore di rete nel recupero dei dettagli del libro', error);
        }
      };

      fetchBookDetails();
    }
  }, [match]);

  return (
    <div>
      {book && (
        <>
          <h2>{book.title}</h2>
          
          <CommentArea asin={book.asin} />
        </>
      )}
    </div>
  );
};

export default BookDetails;


