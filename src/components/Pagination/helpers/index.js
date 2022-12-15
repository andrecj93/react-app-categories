//Returns an object to define each pagination number
const returnObj = i => {
  return { text: i, active: false };
};

//Creates the pagination numbers depending on how many numbers we need
export const createPaginationNumbers = howMany => {
  let paginationNumbers = [];
  for (let i = 1; i <= howMany; i++) {
    paginationNumbers.push(returnObj(i));
  }

  return paginationNumbers;
};

//Set one pagination number with active to true
export const setPaginationNumberActive = (paginationNumbers, activePage) => {
  if (!activePage) return [...paginationNumbers];
  return paginationNumbers.map(p =>
    p.text === activePage
      ? { text: p.text, active: true }
      : { text: p.text, active: false }
  );
};

//Gets the active pagination number
export const getActivePaginationNumber = paginationNumbers => {
  return paginationNumbers.find(p => p.active);
};
