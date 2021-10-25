import React from "react";
import './Search.css';
import { FiSearch } from 'react-icons/fi';

export const Search = () => {
  return (
    <div className="search-bar">
      <input type="search" placeholder="Search Reddits" results="0"></input>
      <button className="submit" type="submit"><FiSearch className="mag-glass" /></button>
    </div>
  )
};