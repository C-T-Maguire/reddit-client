import React from "react";
import './Home.css';
import { Filter } from '../Filter/Filter';
import { Posts } from '../Posts/Posts';


export const Home = () => {

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