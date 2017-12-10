import { filterOptions } from 'containers/BooksFilters/constants';

const { BOOKS_BY_BOOK_NAME, BOOKS_BY_AUTHOR_NAME } = filterOptions.sortBooks;

export const getSortOptionComparator = sorter => {
  let comparator;

  switch (sorter.id) {
    case BOOKS_BY_BOOK_NAME:
      comparator = (book, prevBook) => {
        const result = book.name.localeCompare(prevBook.name);

        return sorter.asc ? result : -(result);
      }
      break;
    case BOOKS_BY_AUTHOR_NAME:
      comparator = (book, prevBook) => {
        const result = book.author.name.localeCompare(prevBook.author.name);

        return sorter.asc ? result : -(result);
      }
      break;
    default:
      comparator = () => {};
  }

  return comparator;
}
