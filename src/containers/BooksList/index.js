import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';

import BooksFilters from 'containers/BooksFilters';

import BookClosure from './Book';
import { ROW_HEIGHT } from './constants';
import { fetchBooks } from './actions';
import { selectFilteredItems } from './selectors';
import './styles.css';

class BooksList extends Component {
  componentWillMount() {
    this.props.onWillMount();
  }

  render() {
    const { books, width, height } = this.props;

    return (
      <div>
        <BooksFilters></BooksFilters>
        <List
          className="BooksList"
          width={width}
          height={height}
          rowCount={books.length}
          rowHeight={ROW_HEIGHT}
          rowRenderer={BookClosure(books)}
          books={books}
        />
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    books: selectFilteredItems(store)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onWillMount: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
