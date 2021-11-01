import React, { useEffect } from "react";
import './SearchResults.css';
import Post from '../Post/Post';
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  loadSearchResults,
  selectPosts,
  selectSearchTerm,
  selectIsLoading,
  // selectError,
} from "../../app/appSlice";
import { setCurrentSubreddit } from "../SubAside/subredditsAsideSlice";
import { setCurrentFilter } from "../Filter/filterSlice";

export const SearchResults = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const searchTerm = useSelector(selectSearchTerm);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setCurrentSubreddit(''));
    dispatch(setCurrentFilter(''));
    dispatch(loadSearchResults(searchTerm));
  }, [dispatch, searchTerm])

  return (

      <div className="posts">
        {isLoading && (
          <Card className="loading-tile">
            <h1> Loading...</h1>
          </Card>
        )}
        {!isLoading && (
          <div className="search-results">
            <Card className="search-tile">
              <h1>{`Search results for: ${searchTerm}`}</h1>
            </Card>

            <div className="posts">
              {posts.map((post, index) => {
                return (
                <Post key={index} post={post} postIndex={index} />
                )
              })}
            </div>
          </div>
        )}
      </div>


      /* <div className="search-term">
        <Card >
          <h1>{`Search results for: ${searchTerm}`}</h1>
        </Card>
      </div>

      <div className="posts">
        {posts.map((post, index) => {
          return (
          <Post key={index} post={post} postIndex={index} />
          )
        })}
      </div> */
  );
}

export default SearchResults;