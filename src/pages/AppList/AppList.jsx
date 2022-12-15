import React, { useState } from 'react';
import styles from './AppList.module.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import Box from '../../components/Box/Box';
import Pagination from '../../components/Pagination/Pagination';
import NavLink from '../../components/NavLink/NavLink';
import { useApps, useCategories } from './hooks';

const AppList = () => {
  //Using custom hook for categories
  const [categories] = useCategories();

  //Current Category is set to null the first time to render all categories first
  const [currentCategory, setCurrentCategory] = useState(null);
  
  //Hook for the search filter
  const [searchFilter, setSearchFilter] = useState('');
  
  //Hook for the current page
  const [currentPage, setCurrentPage] = useState(1);
  
  //Using the custom hook for all apps
  const [apps, total] = useApps(currentCategory, searchFilter, 3, currentPage);

  return (
    <div className={styles.container}>
      <NavBar title='Categories'>
        <NavLink
          onClick={() => {
            setCurrentCategory(null);
          }}
          name='All Categories'
          active={!currentCategory}
        ></NavLink>
        {categories &&
          categories.map((category, i) => (
            <NavLink
              key={i}
              onClick={() => {
                setCurrentCategory(category);
              }}
              name={category}
              active={currentCategory === category}
            ></NavLink>
          ))}
      </NavBar>

      <section className={styles.appList}>
        <header>
          <SearchBar onValueChange={setSearchFilter} />
        </header>
        {total > 0 ? (
          <React.Fragment>
            <ul>
              {apps.map(app => (
                <li key={app.id}>
                  <Box
                    title={app.name}
                    description={app.description}
                    tags={app.categories}
                    subscriptions={app.subscriptions}
                  ></Box>
                </li>
              ))}
            </ul>
            <Pagination
              numberOfPages={total === 0 ? 1 : Math.ceil(total / 3)}
              activePage={currentPage}
              onPageChange={setCurrentPage}
            />
          </React.Fragment>
        ) : (
          <h1>No results were found!</h1>
        )}
      </section>
    </div>
  );
};

export default AppList;
