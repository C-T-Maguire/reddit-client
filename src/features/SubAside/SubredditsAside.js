import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAsideError,
  selectCurrentSubreddit,
  selectSubredditNames,
  loadSubNames
 } from "./subredditsAsideSlice";
import './SubAside.css';
import { IoLogoReddit } from "react-icons/io5";

export const SubAside = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubredditNames);
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const asideError = useSelector(selectAsideError);

  useEffect(() => {
    dispatch(loadSubNames());
  }, [dispatch]);

  const createSubredditButton = (subreddit) => {
    const subredditName = subreddit.data.display_name_prefixed;
    const subredditIcon = subreddit.data.icon_img;

    return (
      <Link
        to={`/${subredditName}`}
        className={
          currentSubreddit === subredditName ? "subreddit-link selected" : "subreddit-link"
        }
      >
        {subredditIcon ? (
          <img id="subIcon" src={subredditIcon} alt="subreddit avatar" />
        ) : (
          <IoLogoReddit id="subIcon"/>
        )}
        {subredditName}
      </Link>
    );
  };

  return (
    <div className="SubAside-container">
      <div className="home-button">
        <h1>Home</h1>
      </div>
      <div className="subreddits">
        <h2>Subreddits</h2>
        <div className="sub-list">
          <ul id="subreddit-list">
            {subreddits.filter(
              (subreddit) => subreddit.data.display_name_prefixed !== 'r/Home'
            )
            .map((subreddit, index) => {
              return (
                <li key={subreddit + index}>
                  {createSubredditButton(subreddit)}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default SubAside;