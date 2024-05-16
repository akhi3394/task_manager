
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter,setSort } from './actions';

const FilterSortControls = () => {
  const dispatch = useDispatch();

  return (
    <div className='filter' style={{display:'flex',gap:'1rem',margin:'20px'}}>
      <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
      <button onClick={() => dispatch(setFilter('COMPLETED'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('PENDING'))}>Pending</button>
      <select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="PRIORITY">Sort by Priority</option>
        <option value="DUEDATE">Sort by Due Date</option>
      </select>
    </div>
  );
};

export default FilterSortControls;
