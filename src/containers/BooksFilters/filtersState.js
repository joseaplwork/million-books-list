import MaleIcon from 'components/Icons/Male';
import FemaleIcon from 'components/Icons/Female';
import ArrowDownIcon from 'components/Icons/ArrowDown';

import { filterOptions, filterKeys } from './constants';

const { FILTER_AUTHOR_GENDER, SORT_BOOKS } = filterKeys;
const { filterAuthorGender: fag, sortBooks: sb } = filterOptions;

export const filtersState = {
  [FILTER_AUTHOR_GENDER]: {
    values: [{
      id: fag.AUTHOR_GENDER_MALE,
      selected: true,
      Icon: MaleIcon,
      value: 'Male'
    }, {
      id: fag.AUTHOR_GENDER_FEMALE,
      selected: true,
      Icon: FemaleIcon,
      value: 'Female'
    }]
  },
  [SORT_BOOKS]: {
    values: [{
      id: sb.BOOKS_BY_BOOK_NAME,
      asc: null,
      Arrow: ArrowDownIcon,
      selected: false,
      value: 'Book name',
    }, {
      id: sb.BOOKS_BY_AUTHOR_NAME,
      asc: null,
      Arrow: ArrowDownIcon,
      selected: false,
      value: 'Author name',
    }]
  }
}

export default filtersState;
