import React from 'react';
import { Container, Form } from 'react-bootstrap';
import '../assets/style/SearchBar.css';

const SearchBar = ({ location, setLocation, onSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(event);
    }
  };

  return (
    <Container className='mt-4'>
      <Form.Control
        className='text-center'
        type='text'
        placeholder='Cerca una località'
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
};

export default SearchBar;
