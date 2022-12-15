import { useState, useEffect } from 'react';
import data from '../../../data/apps.json';

//Custom hook for using categories
export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  //use effect hook to set categories
  useEffect(() => {
    setCategories(
      data
        //Maps to each category [["Optimization"] , ["Productivity", "Dialer"], ["Dialer"]]
        .map(item => item.categories)
        //reduce it to single array
        .reduce((prev, curr) => [...prev, ...curr])
        //Filter the unique element in each item array based on the index
        .filter((item, i, arr) => arr.indexOf(item) === i)
        //Sorted Ascendent as asked in the exercise
        .sort()
    );
  }, []);
  return [categories];
};
