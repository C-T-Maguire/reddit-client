import React, { useEffect } from "react";
import './Subreddit.css';
import { Filter } from '../Filter/Filter';
import { Post } from '../Post/Post';
import Card from "../Card/Card";
import { SubAbout } from '../SubAbout/SubAbout';
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostsHot,
  selectPosts,
  selectIsLoading,
  // selectError,
} from "../../app/appSlice";
import { setCurrentSubreddit } from "../SubAside/subredditsAsideSlice";


export const Subreddit = ({ match }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const currentSubreddit = match.params.id;

  useEffect(() => {
    dispatch(setCurrentSubreddit(currentSubreddit));
  }, [dispatch, currentSubreddit])

  useEffect(() => {
    dispatch(loadPostsHot(currentSubreddit));
  }, [dispatch, currentSubreddit])

  return (
    <div className="home">
      <div className="subAbout">
        <SubAbout currentSubreddit={currentSubreddit} />
      </div>
      <div className="filter">
        <Filter />
      </div>

      <div className="posts">
        {isLoading && (
          <Card className="loading-tile">
            <h1> Loading...</h1>
          </Card>
        )}
        {!isLoading && (
          posts.map((post, index) => {
            return (
            <Post key={index} post={post} postIndex={index} />
            )
          })
        )}
      </div>


      {/* <div className="posts">
        {posts.map((post, index) => {
          return (
          <Post key={index} post={post} postIndex={index} />
          )
        })}
      </div> */}

    </div>
  );
}

export default Subreddit;