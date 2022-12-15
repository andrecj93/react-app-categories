import React from 'react';
import styles from './Box.module.css';
import Tags from '../Tags/Tags';
import Subscription from '../Subscription/Subscription';

//Box to render each app item
const Box = ({ title, description, tags, subscriptions }) => {
  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <div className={styles.content}>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <Tags values={tags} />
        </div>
        <div className={styles.footer}>
          <ul>
            {subscriptions &&
              subscriptions.map((subscription, i) => (
                <Subscription
                  key={i}
                  name={subscription.name}
                  price={subscription.price}
                ></Subscription>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Box;
