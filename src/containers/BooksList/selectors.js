import { getSortOptionComparator } from './mapper';

export const selectIsChunkIteration = store => store.booksList.chunkIteration;
export const selectIsDone = store => store.booksList.done;
export const selectIsSorting = store => store.booksList.sorting;
export const selectIsLoading = store => store.booksList.loading;

export const selectFilteredItems = store => {
  if (store.booksList.sorting) {
    return [];
  }

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
