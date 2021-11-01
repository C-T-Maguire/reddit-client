import React, { useEffect, useState } from "react";
import './Comment.css';
import { IoPersonCircleOutline } from "react-icons/io5";
import { fetchUserAvatar } from '../../api/api';
import { timeAgo } from "../../utils/timeAgo";

export const Comment = (props) => {
  const { comment } = props;
  const [ userIcon, setUserIcon ] = useState('');

  useEffect(() => {
    try {
        fetchUserAvatar(comment.author).then(response => {
            if (response !== undefined) {
                setUserIcon(response.snoovatar_img);
            }
        });
    } catch (error) {
        console.log(error)
    }
    
    return () => setUserIcon('');
  }, [comment])

  const createAvatar = (url) => {
    if ( url ) {
        return <img src={url} alt="avatar" className="comment-avatar" />
    } else {
        return <IoPersonCircleOutline className="comment-avatar" />
    }
}

  return (
    <li className="comment">
      <div className="comment-header">
        <div className="avatar">
          {createAvatar(userIcon)}
          <p id="username">u/{comment.author}</p>
        </div>
          <p>{timeAgo(comment.created_utc)}</p>
      </div>
      <div className="comment-text">
        {comment.body}
      </div>
    </li>
  )
}