import React from "react";
import './Filter.css';
import Card from "../Card/Card";
import capitalizeFirstLetter from "../../utils/capFirstLetter";
import { VscFlame } from 'react-icons/vsc';
import { TiStarburstOutline } from 'react-icons/ti';
import { BsGraphUp } from 'react-icons/bs';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotPosts, fetchNewPosts, fetchTopPosts } from '../../api/api';
import { selectCurrentSubreddit } from "../SubAside/subredditsAsideSlice";
import { selectFilters, selectCurrentFilter, setCurrentFilter } from "./filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const loadHotPosts = createAsyncThunk('filter/loadHotPosts', async () => {
  return await fetchHotPosts();
});

export const loadNewPosts = createAsyncThunk('filter/loadNewPosts', async () => {
  return await fetchNewPosts();
});

export const loadTopPosts = createAsyncThunk('filter/loadTopPosts', async () => {
  return await fetchTopPosts();
});


export const Filter = () => {
  const filters = useSelector(selectFilters);
  const currentFilter = useSelector(selectCurrentFilter);
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const dispatch = useDispatch(); 

  const icons = {
    hot: <VscFlame/>,
    new: <TiStarburstOutline/>,
    top: <BsGraphUp/>
  }

  const onClickHandler = (event, filter) => {
    event.preventDefault();
    dispatch(setCurrentFilter(filter));
    switch(filter) {
      case 'hot':
        console.log('Hot to show');
        break;
      case 'new':
        console.log('New to show');
        break;
      case 'top':
        console.log('Top to show');
        break;
      default:
        console.log('Not loading');
    }
  }

  const createFilterLink = (filter) => {
    return (
        <li key={filter}>
            <Link 
                className={currentFilter === filter ? "nav-link selected" : "nav-link"}
                to="#"
                onClick={(event) => {onClickHandler(event, filter)}}
            >
                {icons[filter]} {capitalizeFirstLetter(filter)}
            </Link>
        </li>
    )
}

  return (
    <Card className="filters-card">
        <nav>
            <ul className="filters-list" >
                {filters.map(createFilterLink)}
            </ul>  
        </nav>
    </Card> 
  )
}

export default Filter;