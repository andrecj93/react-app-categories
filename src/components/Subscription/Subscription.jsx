import React from 'react';

//Subscription component
const Subscription = ({ name, price }) => {
  return (
    <li>
      <span>{name}</span>
      <h3>{price ? price : 'Free'}</h3>
    </li>
  );
};

export default Subscription;
