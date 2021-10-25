import React from "react";
import './Posts.css';
import { FaComments } from "react-icons/fa";

// things I need to get from APi
//PostsSubReddit, PostsUsername, HowLongAgoPosted, PostTitle, PostsContent, PostsComments


export const Posts = () => {
  return (

    <div className="post-tile">
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
    </div>

  )
}

export default Posts;