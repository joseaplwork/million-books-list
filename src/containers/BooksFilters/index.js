import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { palette } from 'config';

import filtersState from './filtersState';
import { filterKeys } from './constants';
import { setActiveFilter, buildFiltersData } from './utils';
import { filterChange } from './actions';
import './styles.css';

const { FILTER_AUTHOR_GENDER, SORT_BOOKS } = filterKeys;

class BooksFilters extends PureComponent {
  state = {
    filters: filtersState
  }

  componentWillUpdate(nextProps) {
    if (!this.props.resetFilters && nextProps.resetFilters) {
      this.setState({
        filters: filtersState,
      });
    }
  }

  updateStateAndBuildAction(filter, filterId) {
    const updatedState = setActiveFilter(this.state, filter, filterId);
    const filters = buildFiltersData(updatedState.filters);

    this.setState(updatedState, () => this.props.onFilterChange(filters));
  }

  handleFilterChange = (event) => {
    const target = event.currentTarget;
    const { filter, filterId } = target.dataset;

    this.updateStateAndBuildAction(filter, filterId);
  }

  renderAuthorGenderFilter() {
    const { filterAuthorGender } = this.state.filters;

    return (
      <div className="BooksFilters-icon-filters">
        {filterAuthorGender.values.map(({ Icon, selected, value, id }, index) => (
          <div key={index} className="BooksFilters-icon-filter">
            <input
              type="checkbox"
              data-filter={FILTER_AUTHOR_GENDER}
              data-filter-id={id}
              checked={selected}
              onChange={this.handleFilterChange}
            />
            <Icon color={selected ? palette.white : palette.echoBlue } />
          </div>
        ))}
      </div>
    );
  }

  renderSortFilter() {
    const { sortBooks } = this.state.filters;
    const selected = sortBooks.values.find(item => item.selected) || {};

    return sortBooks.values.map(({ id, Arrow, value, asc }, index) => [
      <div className="BooksFilters-sort-filter" key={id}>
        <span style={{ color: typeof asc !== 'boolean' ? palette.echoBlue : palette.white }}>{value}</span>
        <input
          type="checkbox"
          data-filter={SORT_BOOKS}
          data-filter-id={id}
          checked={selected}
          onChange={this.handleFilterChange}
        />
        {<Arrow
          inverted={!asc && typeof asc === 'boolean'}
          color={typeof asc !== 'boolean' ? palette.echoBlue : palette.white}
          size="10"
        />}
      </div>,
      <div key={index} className="BooksFilters-separator" />
    ]);
  }

  render() {
    return (
      <div className="BooksFilters-wrapper">
        <div className="BooksFilters-main">
          <div className="BooksFilters-filter-group">
            <h3 className="BooksFilters-title">Filter: </h3>
            <div className="BooksFilters-filters">
              {this.renderAuthorGenderFilter()}
            </div>
          </div>
          <div className="BooksFilters-filter-group">
            <h3 className="BooksFilters-title">Sort: </h3>
            <div className="BooksFilters-filters">
              {this.renderSortFilter()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    resetFilters: store.booksFilters.resetFilters
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: (type, value) => dispatch(filterChange(type, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksFilters);
