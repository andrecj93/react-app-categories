import { useState, useEffect } from 'react';
import data from '../../../data/apps.json';

//Sort the app items by ascending sum of price
const sortBySumPriceAsc = (a, b) => {
  let sumPriceA = 0;
  let sumPriceB = 0;
  a.subscriptions.map(subscription => (sumPriceA += subscription.price));
  b.subscriptions.map(subscription => (sumPriceB += subscription.price));
  return (sumPriceA > sumPriceB && 1) || sumPriceA === sumPriceB ? 0 : -1;
};

//Filter the list of app items by app name
const filterByAppName = (app, name) => {
  if (app.name.length > 0) {
    return app.name.toLowerCase().includes(name.toLowerCase());
  } else return 1;
};

//Custom hook for using apps
export const useApps = (category, name, appsPerPage, currentPage) => {
  const [apps, setApps] = useState([]);
  const indexOfLastAppItem = currentPage * appsPerPage;
  const indexOfFirstAppItem = indexOfLastAppItem - appsPerPage;
  const [total, setTotal] = useState(0);

  //Conditional filter to handle
  const conditionalFilter = (arr, condition, condition1) => {
    if (condition) return [...arr.filter(condition1)];
    else return [...arr];
  };

  /**
   * Effect hook for making changes to the array of app items if needed
   * Optimized perfomance:
   * Skips the effect if [category, name, indexOfFirstAppItem, indexOfLastAppItem, total] have not been changed
   */
  useEffect(() => {
    //Filtered apps by app name and category, uses the conditional filter to check if a category has been given in the parent component
    const filteredApps = conditionalFilter(
      data.sort(sortBySumPriceAsc).filter(app => filterByAppName(app, name)),
      category,
      app => app.categories.includes(category)
    );

    //Sets total length of filtered apps - useful to know the total pages we might need before slicing it
    setTotal(filteredApps.length);

    //Slices the array by the apps per page needed. Default is 3.
    const sliced = filteredApps.slice(indexOfFirstAppItem, indexOfLastAppItem);
    setApps(sliced);
  }, [category, name, indexOfFirstAppItem, indexOfLastAppItem, total]);

  return [apps, total];
};
