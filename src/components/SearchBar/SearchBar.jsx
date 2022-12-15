import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import { getEventValue } from '../../utilities';

//Search bar component
const SearchBar = ({ onValueChange }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onValueChange && onValueChange(value);
  });
  return (
    <input
      className={styles.SearchBar}
      value={value}
      onChange={e => setValue(getEventValue(e))}
      type='text'
      placeholder='Search by App'
    />
  );
};

export default SearchBar;
