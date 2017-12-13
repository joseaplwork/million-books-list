import React from 'react';

import BookIcon from 'components/Icons/Book';
import MaleIcon from 'components/Icons/Male';
import FemaleIcon from 'components/Icons/Female';

import Placeholder from './Placeholder';
import './styles.css';

let lastVisible = false;
const Book = props => {
  const { book, style, isScrolling, isVisible, index } = props;

  if (!lastVisible && isVisible && isScrolling) {
    lastVisible = isVisible;
    localStorage.setItem('index', index);
  } else {
    lastVisible = isVisible;
  }

  if (isScrolling) {
    return (
      <Placeholder style={style} title={book && book.name} />
    );
  }

  const genderIcon = book.author.gender.value === 'male' ? <MaleIcon size={15} /> : <FemaleIcon size={15} />;

  return (
    <div className="BooksListItem" style={style}>
      <div className="BooksListItem-card">
        <div className="BooksListItem-image">
          <BookIcon size="70" />
          <p className="BooksListItem-publish-date"><span>{book.publishDate}</span></p>
        </div>
        <div className="BooksListItem-info">
          <p className="BooksListItem-title">{book.name}</p>
          <p className="BooksListItem-genre">{book.genre}</p>
          <p className="BooksListItem-aditional-info">
            <span>{genderIcon}</span>
            <span>{book.author.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default books => props => <Book {...props} key={props.key} book={books[props.index]} />;
