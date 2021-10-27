import React from "react";
import './Subreddit.css';
import { Filter } from '../Filter/Filter';
import { Posts } from '../Posts/Posts';


export const Subreddit = () => {

  return (
    <div className="home">
      <div className="filter">
        <Filter />
      </div>

      <div className="posts">
        <Posts />
      </div>
    </div>
  );
}

export default Subreddit;