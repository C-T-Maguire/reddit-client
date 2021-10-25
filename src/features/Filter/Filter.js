import React from "react";
import './Filter.css';
import { VscFlame } from 'react-icons/vsc';
import { TiStarburstOutline } from 'react-icons/ti';
import { BsGraphUp } from 'react-icons/bs';

export const Filter = () => {
  return (
    <div className="filter-posts">
      <span className="filter"><VscFlame id="filter-icon" />Hot</span>
      <span className="filter"><TiStarburstOutline id="filter-icon" />New</span>
      <span className="filter"><BsGraphUp id="filter-icon" />Top</span>
    </div>
  )
}

export default Filter;