import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Search.css';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../app/appSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const [ searchBar, setSearchBar ] = useState('');

  const handleChange = (value) => {
    setSearchBar(value);
  };

  const onClickHandler = (searchBarTerm) => {
    dispatch(setSearchTerm(searchBarTerm));
  }
  
  return (
    <div className="search-bar">
      <input type="text" onChange={e => handleChange(e.target.value)} placeholder="Search Reddits" value={searchBar} ></input>
      <Link 
        onClick={() => onClickHandler(searchBar)}
        to={`/search/${searchBar}`}
      >
      <FiSearch className="mag-glass" />
      </Link>
    </div>
  )
};

export default Search;