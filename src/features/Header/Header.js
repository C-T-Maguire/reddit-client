import React from "react";
import { Search } from '../Search/Search';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

export const Header = () => {

  return (
    <header>
      <div className="left-header">
        <a href="/">
          <div className="logo-container">
            <FaReddit className="logo"/>
            <h1>Reddit</h1>
          </div>
          </a>
      </div>
      <div className="middle-header">
        <Search />
      </div>
      <div className="right-header">
        <h1> CM </h1>
      </div>
    </header>
  )
}

export default Header;