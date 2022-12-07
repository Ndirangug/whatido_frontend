import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './audioChat.module.css';

const SearchBar = ({ children }) => {
  return (
    <div className={`${styles['audiochat-search-container']}`}>
      <BiSearchAlt className="" />
      {children}
    </div>
  );
};

export default SearchBar;
