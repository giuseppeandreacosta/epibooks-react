import React, { useState, useEffect, useMemo } from 'react';
import {Container , Tabs, Tab, Row} from 'react-bootstrap';
import SingleBook from './SingleBook';
import fantasy from "../Books/fantasy.json";
import history from "../Books/history.json";
import horror from "../Books/horror.json";
import romance from "../Books/romance.json";
import scifi from "../Books/scifi.json";



const AllTheBooks = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('horror');

  const BooksByGenre = useMemo(() => ({
    fantasy,
    history,
    horror,
    romance,
    scifi,
  }), []);

  useEffect(() => {
    // Carica i dati dai tuoi file JSON  e imposta lo stato di 'books'
    setBooks(BooksByGenre[selectedGenre] || []);
  }, [selectedGenre, BooksByGenre]);
  

  useEffect(() => {
    // Filtra i libri in base al termine di ricerca
    const filtered = (books || []).filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, books]);



  return (
    <Container>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="my-3"
      justify
      onSelect={(genre) => setSelectedGenre(genre)}
    >
      {Object.keys(BooksByGenre).map((genre) => (
        <Tab eventKey={genre} title={genre} />
      ))}
    </Tabs>
   
    <Row className="row-gap-3">
      {filteredBooks.map((book) => (
        <SingleBook book={book} key={book.asin} />
      ))}
    </Row>
  </Container>
  );
};

export default AllTheBooks;
