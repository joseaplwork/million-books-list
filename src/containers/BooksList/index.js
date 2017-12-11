import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';

import BooksFilters from 'containers/BooksFilters';

import BookClosure from './Book';
import Placeholder from './Book/Placeholder';
import { ROW_HEIGHT } from './constants';
import { fetchBooks } from './actions';
import { selectFilteredItems, selectIsLoading } from './selectors';
import './styles.css';

class BooksList extends Component {
  componentWillMount() {
    this.props.onWillMount();
  }

  render() {
    const { books, width, height, isLoading } = this.props;
    const component = isLoading ? Placeholder : BookClosure(books);
    let placeholderCount;

    if (isLoading) {
      placeholderCount = 30;
    }

    return (
      <div>
        <BooksFilters></BooksFilters>
        <List
          className="BooksList"
          width={width}
          height={height}
          rowCount={placeholderCount || books.length}
          rowHeight={ROW_HEIGHT}
          rowRenderer={component}
          books={books}
        />
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    books: selectFilteredItems(store),
    isLoading: selectIsLoading(store)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onWillMount: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
