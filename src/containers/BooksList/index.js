import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';

import BooksFilters from 'containers/BooksFilters';

import BookClosure from './Book';
import Placeholder from './Book/Placeholder';
import { ROW_HEIGHT } from './constants';
import { fetchBooks, triggerFilter } from './actions';
import {
  selectFilteredItems, selectIsLoading,
  selectIsSorting
} from './selectors';
import './styles.css';

class BooksList extends Component {
  componentWillMount() {
    this.props.onWillMount();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isSorting && this.props.isSorting) {
      setTimeout(() => this.props.onTriggerFilter(), 500);
    }
  }

  render() {
    const { books, width, height, isLoading, isSorting } = this.props;
    const component = isLoading || isSorting ? Placeholder : BookClosure(books);
    let index = parseInt(localStorage.getItem('index') || 0, 10);
    let placeholderCount;

    if (isLoading || isSorting) {
      localStorage.removeItem('index');
      index = 0;
      placeholderCount = 50;
    }

    return (
      <div>
        <BooksFilters />
        <List
          className="BooksList"
          width={width}
          height={height}
          rowCount={placeholderCount || books.length}
          rowHeight={ROW_HEIGHT}
          isSorting={isSorting}
          isLoading={isLoading}
          scrollToIndex={index}
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
    isLoading: selectIsLoading(store),
    isSorting: selectIsSorting(store)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onWillMount: () => dispatch(fetchBooks()),
    onTriggerFilter: () => dispatch(triggerFilter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
