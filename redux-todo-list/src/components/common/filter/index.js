import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions/types';
import FilterLink from '../filter-link/';


const Filter = ({ activeFilter, handlerFilter }) => {
  return (
    <div>
      <h4>Show</h4> 
      
      {
        filterItems.map((item) => (
          <FilterLink 
            key={ item.action }
            action={ item.action }
            activeFilter={ activeFilter }
            label={ item.label } 
            onClick={ handlerFilter(item.action) }
          />
        ))
      }
    </div>
  )
}

const filterItems = [
  { label: 'All', action: actions.SHOW_ALL },
  { label: 'Finalized', action: actions.SHOW_COMPLETED },
  { label: 'To do', action: actions.SHOW_ACTIVE }
];

const mapStateToProps = (state) => {
  return {
    activeFilter: state.filter
  }
}

export default connect(mapStateToProps)(Filter);