import React, { useEffect } from "react";
import './Home.css';
import Filter from '../Filter/Filter';
import Post from '../Post/Post';
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostsHot,
  selectPosts,
  selectIsLoading,
  // selectError,
} from "../../app/appSlice";
import { setCurrentSubreddit } from "../SubAside/subredditsAsideSlice";
import { setCurrentFilter } from "../Filter/filterSlice";


export const Home = ( { match } ) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const currentSubreddit = match.params.id;

  useEffect(() => {
    dispatch(setCurrentSubreddit(''));
    dispatch(setCurrentFilter('hot'));
    dispatch(loadPostsHot());

  }, [dispatch, currentSubreddit])

  return (
    <div className="home">
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
    </div>
  );
}

export default Home;