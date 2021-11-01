import React from "react";
import './Post.css';
import Card from "../Card/Card";
import { Comments } from "../Comments/Comments";
import { timeAgo } from "../../utils/timeAgo";

export const Post = (props) => {
  const { post, postIndex } = props;

  return (

    <Card key={postIndex} className="post-tile">
      <div className="post-header">
        <span className="post-subheader">
          <p>{post.data.subreddit_name_prefixed}</p>
        </span>
        <span className="post-subheader">
          <p>Posted by: {post.data.author}</p>
        </span>
        <span className="post-timeAgo">
          <p>{timeAgo(post.data.created_utc)}</p>
        </span>
      </div>
      <div className="title">
        <span className="post-title">
          <h1>{post.data.title} </h1>
        </span>
      </div>
      <div className="post-content">
        {post.data.post_hint === "image" && (
          <div className="post-image">
            <img id="post-img" src={post.data.url_overridden_by_dest} alt="media"></img>
          </div>
        )}
        <div className="comments">
          <Comments key={postIndex} postIndex={postIndex} post={post} />
        </div>
      </div>
    </Card>

  )
}

export default Post;