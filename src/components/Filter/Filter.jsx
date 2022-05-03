import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/slices';

import s from './Filter.module.css';

function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  
  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          type="text"
          placeholder="search by name"
          value={filterValue}
          onChange={e => {
            dispatch(addFilter(e.target.value));
          }}
        />

      </label>
    </div>
  );
}

export default Filter;
