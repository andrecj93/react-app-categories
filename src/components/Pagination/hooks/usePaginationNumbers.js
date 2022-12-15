import { useState, useEffect } from 'react';
import { createPaginationNumbers, setPaginationNumberActive } from '../helpers';

//Custom hook for using pagination numbers
export const usePaginationNumbers = (numPages, activePage) => {
  const [paginationNumbers, setPaginationNumbers] = useState([]);
  useEffect(() => {
    setPaginationNumbers(
      setPaginationNumberActive(
        createPaginationNumbers(numPages),
        activePage > numPages ? numPages : activePage
      )
    );
  }, [numPages, activePage]);

  return [paginationNumbers, setPaginationNumbers];
};
