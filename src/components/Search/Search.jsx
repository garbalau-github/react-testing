import React from 'react';

import classes from './Search.module.css';
import cn from 'classnames';

const Search = (props) => {
  const {
    value,
    onChange,
    children = 'Search',
    placeholder = 'Search...',
  } = props;

  const inputClass = cn({
    [classes.input]: true,
    [classes.filled]: value.length,
  });

  return (
    <label className={classes.label}>
      {children}
      <input
        className={inputClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type='text'
      />
    </label>
  );
};

export default Search;
