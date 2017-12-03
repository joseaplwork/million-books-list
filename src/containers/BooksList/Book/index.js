import React from 'react';

import { formatDate } from 'helpers/dates';
import BookIcon from 'components/Icons/Book';
import MaleIcon from 'components/Icons/Male';
import FemaleIcon from 'components/Icons/Female';

import './styles.css';

const Book = props => {
  const { book, style } = props;
  const date = new Date(book.publishDate);
  const textDate = formatDate(date);
  const genderIcon = book.author.gender === 'male' ? <MaleIcon size={15} /> : <FemaleIcon size={15} />;

  return (
    <div className="BooksListItem" style={style}>
      <div className="BooksListItem-card">
        <div className="BooksListItem-image">
          <BookIcon size="70" />
          <p className="BooksListItem-publish-date"><span>{textDate}</span></p>
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
