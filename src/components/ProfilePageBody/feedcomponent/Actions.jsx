import React from "react";
// import { FaThumbsUp } from "react-icons/fa";

const Actions = ({ icon, iconTitle }) => {
  return (
    <div className="d-flex align-items-center">
      {icon}
      {iconTitle}
    </div>
  );
};

export default Actions;
