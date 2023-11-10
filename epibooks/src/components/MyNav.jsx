import React from 'react';
import { Form, Container, Nav, Navbar } from 'react-bootstrap';
import { useTheme } from './ThemeContext';
import {BrightnessHigh} from 'react-bootstrap-icons'

export default function MyNav({ query, setQuery, onSearch }) {
  const { toggleTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">EpiBooks-React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-grow-1">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit} className="ms-auto">
            <Form.Control
              type="text"
              value={query}
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
          <button className='ms-2 rounded' onClick={toggleTheme}><BrightnessHigh/></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
