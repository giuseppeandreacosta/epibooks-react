import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleBookClick = () => {
    setSelected(!selected);
    
  };

  return (
    <Col xs={4} className='d-flex'>
      <Link
        to={`/book/${book.asin}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
        }}
      >
        <Card
          onClick={handleBookClick}
          style={{
            border: selected ? '2px solid red' : '2px solid transparent',
          }}
        >
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
          {selected && <CommentArea asin={book.asin} />}
        </Card>
      </Link>
    </Col>
  );
};

export default SingleBook;
