import React from 'react';

const BookItem = ({ book, onClick }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://placehold.it/128x192';

  return (
    <div className="book-item" onClick={onClick}>
      {/* Display book details like title, author, etc. */}
      <img src={thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
    </div>
  );
};

export default BookItem;
