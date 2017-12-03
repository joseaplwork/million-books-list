import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { palette } from 'config';
import MaleIcon from 'components/Icons/Male';
import FemaleIcon from 'components/Icons/Female';

import { actionTypes as at, MALE, FEMALE } from './constants';
import { filterChange } from './actions';
import './styles.css';

class BooksFilters extends PureComponent {
  state = {
    authorGender: {
      actionType: at.FILTER_BY_AUTHOR_GENDER,
      values: [{
        active: true,
        Icon: MaleIcon,
        value: MALE
      }, {
        active: true,
        Icon: FemaleIcon,
        value: FEMALE
      }]
    }
  }

  handleIconChange = (event) => {
    const target = event.currentTarget;
    const actionData = [];
    const { actionType, values } = this.state.authorGender;
    const { onFilterChange } = this.props;
    const { gender } = target.dataset;
    const updatedValues = values.map(item => {
      const isActive = item.value === gender ? !item.active : item.active;
      if (isActive) actionData.push(item.value);

      return Object.assign({}, item, {
        active: item.value === gender ? !item.active : item.active
      });
    });

    this.setState({ authorGender: {
      actionType,
      values: updatedValues
    }}, () => onFilterChange(actionType, actionData));
  }

  renderAuthorGenderFilter() {
    const { authorGender } = this.state;

    return (
      <div className="BooksFilters-icon-filters">
        {authorGender.values.map(({ Icon, active, value }, index) => (
          <div key={index} className="BooksFilters-icon-filter">
            <input
              type="checkbox"
              data-gender={value}
              checked={active}
              onChange={this.handleIconChange}
            />
            <Icon color={active ? palette.gulfBlue : palette.echoBlue } />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="BooksFilters-wrapper">
        <div className="BooksFilters-main">
          <div className="BooksFilters-filters">
            {this.renderAuthorGenderFilter()}
            <div className="BooksFilters-separator" />
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: (type, value) => dispatch(filterChange(type, value))
  };
};

export default connect(null, mapDispatchToProps)(BooksFilters);
