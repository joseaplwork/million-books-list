import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InfiniteLoader, List } from 'react-virtualized';
import { env } from 'config';

import FloatingLoading from 'components/FloatingLoading';
import BooksFilters from 'containers/BooksFilters';

import BookClosure from './Book';
import Placeholder from './Book/Placeholder';
import { ROW_HEIGHT } from './constants';
import { fetchBooks, triggerFilter } from './actions';
import {
  selectFilteredItems, selectIsLoading,
  selectIsSorting, selectIsChunkIteration,
  selectIsDone
} from './selectors';
import './styles.css';

class BooksList extends Component {
  state = {
    booksLimit: env.booksLimit
  }

  componentWillMount() {
    this.dispatchOnFetchBooks();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isSorting && this.props.isSorting) {
      setTimeout(() => this.props.onTriggerFilter(), 500);
    }
  }

  dispatchOnFetchBooks() {
    const { onFetchBooks, iteration } = this.props;

    onFetchBooks(iteration);
  }

  isRowLoaded = ({ index }) => {
    const { books, isDone } = this.props;

    return (books.length === 0 || !!books[index] || isDone);
  }

  loadMoreRows = (data) => {
    if (!this.props.isLoading) {
      this.dispatchOnFetchBooks();
    }
  }

  render() {
    const { books, width, height, isLoading, isSorting, iteration } = this.props;
    const isFirstLoadingOrSorting = (isLoading && iteration === 1) || isSorting;
    const isFetchingChunk = isLoading && iteration > 1;
    let index = parseInt(localStorage.getItem('index') || 0, 10);
    const component = isFirstLoadingOrSorting ? Placeholder : BookClosure(books);
    const threshold = Math.max(Math.round((env.booksLimit / env.chunkParts) / 10), 1);
    let placeholderCount;

    if (isFirstLoadingOrSorting) {
      localStorage.removeItem('index');
      index = 0;
      placeholderCount = 50;
    }

    return (
      <div>
        <BooksFilters />
        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          loadMoreRows={this.loadMoreRows}
          rowCount={this.state.booksLimit}
          threshold={threshold}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              className="BooksList"
              width={width}
              height={height}
              onRowsRendered={onRowsRendered}
              ref={registerChild}
              isSorting={isSorting}
              isLoading={isLoading}
              scrollToIndex={index}
              rowCount={placeholderCount || books.length}
              rowHeight={ROW_HEIGHT}
              rowRenderer={component}
              books={books}
            />
          )}
        </InfiniteLoader>
        <FloatingLoading show={isFetchingChunk}/>
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    iteration: selectIsChunkIteration(store),
    books: selectFilteredItems(store),
    isDone: selectIsDone(store),
    isLoading: selectIsLoading(store),
    isSorting: selectIsSorting(store)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onFetchBooks: (iteration) => dispatch(fetchBooks(iteration)),
    onTriggerFilter: () => dispatch(triggerFilter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
