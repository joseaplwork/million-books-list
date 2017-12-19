export const filterKeys = {
  FILTER_AUTHOR_GENDER: 'filterAuthorGender',
  SORT_BOOKS: 'sortBooks',
}

export const filterOptions = {
  filterAuthorGender: {
    AUTHOR_GENDER_MALE: 'authorGenderMale',
    AUTHOR_GENDER_FEMALE: 'authorGenderFemale',
  },
  sortBooks: {
    BOOKS_BY_BOOK_NAME: 'booksByBookName',
    BOOKS_BY_AUTHOR_NAME: 'booksByAuthorName',
  }
}

export const actionTypes = {
  FILTER_BOOKS: 'BOOKSFILTERS/FILTER_BOOKS',
  RESET_FILTERS: 'BOOKSFILTERS/RESET_FILTERS',
};
