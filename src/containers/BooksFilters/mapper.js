import { filterKeys } from './constants';

const { FILTER_AUTHOR_GENDER, SORT_BOOKS } = filterKeys;

export const getMapActiveFunction = (filterKey, filterId) => {
  let mapFunction;

  switch (filterKey) {
    case FILTER_AUTHOR_GENDER: {
      mapFunction = item => item.id !== filterId ? item : Object.assign({}, item, {
        selected: !item.selected
      });
      break;
    }
    case SORT_BOOKS: {
      mapFunction = item => Object.assign({}, item, {
        selected: item.id === filterId || typeof(item.asc) === "boolean",
        asc: item.id === filterId ? !item.asc : null
      });
      break;
    }
    default:
      mapFunction = item => item;
  }

  return mapFunction;
};

export const getMapBuilderFunction = filterKey => {
    let mapFunction;

    switch (filterKey) {
      case FILTER_AUTHOR_GENDER: {
        mapFunction = (item, prevItem) => {
          if (!prevItem.selected) return item;

          item.push(prevItem.id);

          return item;
        };
        break;
      }
      case SORT_BOOKS: {
        mapFunction = (item, prevItem) => {
          if (!prevItem.selected) return item;

          item.push({ id: prevItem.id, asc: prevItem.asc });

          return item;
        };
        break;
      }
      default:
        mapFunction = item => item;
    }

    return mapFunction;
  }
