import React from "react";
import './Filter.css';
import Card from "../Card/Card";
import capitalizeFirstLetter from "../../utils/capFirstLetter";
import { VscFlame } from 'react-icons/vsc';
import { TiStarburstOutline } from 'react-icons/ti';
import { BsGraphUp } from 'react-icons/bs';
import { selectCurrentSubreddit } from "../SubAside/subredditsAsideSlice";
import { loadPostsHot, loadPostsNew, loadPostsTop } from '../../app/appSlice';
import { selectFilters, selectCurrentFilter, setCurrentFilter } from "./filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
        if(currentSubreddit) {
          dispatch(loadPostsHot(currentSubreddit));
        } else {
          dispatch(loadPostsHot());
        }
        break;
      case 'new':
        if(currentSubreddit) {
          dispatch(loadPostsNew(currentSubreddit));
        } else {
          dispatch(loadPostsNew());
        }
        break;
      case 'top':
        if(currentSubreddit) {
          dispatch(loadPostsTop(currentSubreddit));
        } else {
          dispatch(loadPostsTop());
        }
        break;
      default:
        console.log('ERROR in filter');
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