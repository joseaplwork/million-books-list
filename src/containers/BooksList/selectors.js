import { getSortOptionComparator } from './mapper';

export const selectIsLoading = store => store.booksList.loading;

export const selectFilteredItems = store => {
  const { books, filters } = store.booksList;
  let filteredBooks;

  if (filters.filterAuthorGender) {
    filteredBooks = books.filter(({ author }) => {
      return filters.filterAuthorGender.includes(author.gender.id);
    });
  }

  if (filters.sortBooks && filters.sortBooks.length) {
    const sorter = filters.sortBooks.slice().pop();
    const comparator = getSortOptionComparator(sorter);

    filteredBooks = filteredBooks.sort(comparator);
  }

  if (!filteredBooks) {
    filteredBooks = books;
  }

  return filteredBooks;
}
