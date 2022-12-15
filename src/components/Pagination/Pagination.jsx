import React, { useEffect } from 'react';
import styles from './Pagination.module.css';
import { usePaginationNumbers } from './hooks';
import {
  getActivePaginationNumber,
  setPaginationNumberActive
} from './helpers';

//Pagination component
const Pagination = ({ numberOfPages, activePage, onPageChange }) => {
  const [paginationNumbers, setPaginationNumbers] = usePaginationNumbers(
    numberOfPages,
    activePage
  );

  useEffect(() => {
    const activePage = getActivePaginationNumber(paginationNumbers);
    activePage && onPageChange && onPageChange(activePage.text);
  }, [paginationNumbers, onPageChange]);

  return (
    <ul className={styles.pagination}>
      <li>
        <a
          onClick={() =>
            setPaginationNumbers(
              setPaginationNumberActive(
                paginationNumbers,
                getActivePaginationNumber(paginationNumbers).text - 1
              )
            )
          }
          href={'#!'}
        >
          &lt;
        </a>
      </li>
      {paginationNumbers.map(number => (
        <li
          className={number.active ? styles.active : 'false'}
          key={number.text}
        >
          <a
            onClick={() =>
              setPaginationNumbers(
                setPaginationNumberActive(paginationNumbers, number.text)
              )
            }
            href={'#!'}
          >
            {number.text}
          </a>
        </li>
      ))}

      <li>
        <a
          onClick={() =>
            activePage === numberOfPages
              ? ''
              : setPaginationNumbers(
                  setPaginationNumberActive(
                    paginationNumbers,
                    getActivePaginationNumber(paginationNumbers).text + 1
                  )
                )
          }
          href={'#!'}
        >
          &gt;
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
