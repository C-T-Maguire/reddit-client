import React from "react";
import './Posts.css';
import Card from "../Card/Card";
import { FaComments } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { loadHotPosts } from "../../app/appSlice";

// things I need to get from APi

//need to import filter info?

//PostsSubReddit, PostsUsername, HowLongAgoPosted, PostTitle, PostsContent, PostsComments


export const Posts = () => {
  const dispatch = useDispatch();
  

  //logic
  //getcurrentSub
  //getPostInfo


  return (

    <Card className="post-tile">
      <div className="post-header">
        <span className="subR-name">
          <p>r/CalIsAwesome</p>
        </span>
        <span className="username">
          <p>BigHeadedGinger</p>
        </span>
        <span className="time-posted">
          <p>3 Hours ago</p>
        </span>
      </div>
      <div className="title">
        <span className="post-title">
          <h1>Cal Tries To Code Stuff</h1>
        </span>
      </div>
      <div className="post-content">
        <div className="post-image">

        </div>
        <div className="comments">
          <span className="comment-num">
            <a href="/"><FaComments /> 100 Comments</a>
          </span>
        </div>
      </div>
    </Card>

  )
}

export default Posts;