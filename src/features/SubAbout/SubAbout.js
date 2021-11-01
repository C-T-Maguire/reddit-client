import React, { useEffect } from "react";
import './SubAbout.css';
import { useSelector, useDispatch } from "react-redux";
import {loadSubredditAbout} from '../../app/appSlice';
import { selectAbout } from "../../app/appSlice";
import Card from "../Card/Card";

export const SubAbout = (props) => {
  const {currentSubreddit} = props;
  const dispatch = useDispatch();
  const about  = useSelector(selectAbout);


  useEffect(() => {
    dispatch(loadSubredditAbout(currentSubreddit));
    console.log('loading subinfo');
  }, [dispatch, currentSubreddit])

  return (
    <Card className="about-tile" >
      <div className="about-head">
        {(about.icon_img) && (
          <img id="sub-img" src={about.icon_img} alt="About Img" />
        )}
        <div className="sub-name">
          <h1>{about.title}</h1>
          <h3>{about.display_name_prefixed}</h3>
        </div>
      </div>
      <div className="description">
        <p>{about.public_description}</p>
      </div>
    </Card>
  )
}