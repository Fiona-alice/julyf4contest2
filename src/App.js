import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import BookDetail from './BookDetail';
import './App.css';
import logo from './Group.png';
import img1 from './bx_bx-book-heart.png';
import img2 from './ic_round-notifications-none.png';
import img3 from './Vector.png';
import img4 from './pic.png';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const imageStyle = {
    width: 30,

  }

  useEffect(() => {
    // Fetch initial book data on app load
    fetchBooks('harry potter');
    fetchBooks('Sherlock Holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = (query) => {
    setBooks([]); // Clear previous search results
    fetchBooks(query);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackToResults = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      {/* Navbar with search bar */}
      <nav>
        <div className='left'>
        <img style={{width:35}} src={logo}/>
        <span>KeazoNBooks</span>
        </div>
        <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." onChange={(e) => handleSearch(e.target.value)} />
        <div className='right'>
        <img style={imageStyle} src={img1}/>
        <img style={imageStyle} src={img2}/>
        <img  style={imageStyle}src={img3}/>
        <img  style={imageStyle}src={img4}/>
        </div>
      </nav>

      {selectedBook ? (
        <BookDetail book={selectedBook} onBack={handleBackToResults} />
      ) : (
        <div className="books-list">
          {/* Display books as BookItem components */}
          {books.map((book) => (
            <BookItem key={book.id} book={book} onClick={() => handleBookClick(book)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
