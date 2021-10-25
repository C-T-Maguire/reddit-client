import React from "react";
import './SubAside.css';

//need to import from API
//subreddits

export const SubAside = () => {
  return (
    <div className="SubAside-container">
      <div className="home-button">
        <h1>Home</h1>
      </div>
      <div className="subreddits">
        <h2>Subreddits</h2>
        <div className="sub-list">
          <ul id="subreddit-list">
            <li>r/AskReddit</li>
            <li>r/AntiWork</li>
          </ul>
        </div>
      </div>
    </div>
  )
};