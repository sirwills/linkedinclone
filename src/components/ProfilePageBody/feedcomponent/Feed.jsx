import { Avatar } from "@mui/material";
import React from "react";
import Actions from "./Actions";
import {
  FaThumbsUp,
  FaNewspaper,
  FaShareAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./feed.css";

const Feed = ({ name, description, message }) => {
  return (
    <div className="feedWrapper ">
      <div className="avatar-sec d-flex align-items-center">
        <Avatar />
        <div className="name ms-2">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div>
        <p className="message">{message}</p>
      </div>

      <div className="actionArea d-flex justify-content-evenly">
        <Actions icon={<FaThumbsUp className="me-2" />} iconTitle={"Like"} />
        <Actions
          icon={<FaNewspaper className="me-2" />}
          iconTitle={"Comment"}
        />
        <Actions icon={<FaShareAlt className="me-2" />} iconTitle={"Share"} />
        <Actions icon={<FaPaperPlane className="me-2" />} iconTitle={"Send"} />
      </div>
    </div>
  );
};

export default Feed;
