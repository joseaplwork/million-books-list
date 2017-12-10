import { getMapActiveFunction, getMapBuilderFunction } from './mapper';

export const setActiveFilter = (state, filterKey, filterId) => {
  const mapFunction = getMapActiveFunction(filterKey, filterId);
  const currentFilter = state.filters[filterKey];
  const { values } = currentFilter;
  const updateValues = values.map(mapFunction);
  const filters = Object.assign({}, state.filters, {
    [filterKey] : {
      values: updateValues
    }
  });

  return Object.assign({}, state, { filters });
}

export const buildFiltersData = (filters) => {
  const finalFilters = {};

  Object.keys(filters).forEach(filterKey => {
    finalFilters[filterKey] = filters[filterKey].values.reduce(getMapBuilderFunction(filterKey), []);
  });

  return finalFilters;
}
