import React from "react";
import './Card.css';

export const Card = (props) => {
  return(
    <div className={`card ${props.className}`} id="card">{props.children}</div>
  )
}

export default Card;