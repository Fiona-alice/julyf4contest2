import React from 'react';

const BookDetail = ({ book, onBack }) => {
  return (
    <div className="book-detail">
      {/* Display detailed information about the book */}
      <button onClick={onBack}>Back to Results</button>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
      <p>{book.volumeInfo.description}</p>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
};

export default BookDetail;
