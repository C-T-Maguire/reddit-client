
import React from "react";
import { loadComments , setShowingComments, setCommentsNum } from "../../app/appSlice";
import { useDispatch } from "react-redux";
import { FaComments } from "react-icons/fa";
import { Comment } from '../Comment/Comment';
import './Comments.css';


export const Comments = (props) => {
  const { post, postIndex } = props;
  const dispatch = useDispatch();
  const comments = post.comments.slice(0, post.comments.length - 1);
  const commentsNum = post.commentsNum;

  const handleLoadComments = () => {

    dispatch(setCommentsNum({ index: postIndex, commentsNum: 3}));

    dispatch(setShowingComments({ index: postIndex, showingComments: !post.showingComments}));

    if (!post.showingComments) {
      dispatch(
        loadComments({
          index: postIndex,
          permalink: post.data.permalink,
          showingComments: post.showingComments,
        })
      );
    }
  }

  const createComments = (number) => {
    return (
      <>
        {comments.slice(0, number).map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </>
    );
  };

  const moreComments = () => {
    dispatch(setCommentsNum({ index: postIndex, commentsNum: commentsNum + 3}));
  }

  return (
    <div className="comment-section">
      <span className="comment-button">
        <button id="load-comments" onClick={() => handleLoadComments()}><FaComments /> {post.data.num_comments} Comments</button>
      </span>
      <ul className="comment-list">
        {createComments(commentsNum)}
      </ul>

      {(post.showingComments) && (
        <button onClick={() => moreComments()}>Show More</button>
      )}
    </div>
  )
}