import React from 'react';
import styles from './Tags.module.css';

//Simple arrow function to format the tags (categories)
const formatValues = (tag, i) => (i ? ` / ${tag}` : tag);

//Tags component
const Tags = ({ values }) => {
  return (
    <div className={styles.tags}>
      {values &&
        values
          .map(formatValues)
          .map((value, i) => <span key={i}>{value}</span>)}
    </div>
  );
};

export default Tags;
