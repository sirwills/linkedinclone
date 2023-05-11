import React from "react";
import { FaBell, FaBriefcase, FaHome, FaSearch } from "react-icons/fa";
import "./profilePageHeader.css";
import HearderRightSide from "./HearderRightSide";
import { FiMessageSquare, FiUsers } from "react-icons/fi";

const ProfilePageHeader = () => {
  return (
    <div className="header container-fluid d-flex align-itmes-center justify-content-evenly">
      <div className="leftSide d-flex align-items-center">
        <img src="linkedinlogo.png" alt="" />
        <div className="searchInputContainer d-flex align-items-center">
          <FaSearch />
          <input type="search" placeholder="Search" />
        </div>
      </div>

      <div className="rightSide d-flex align-items-center">
        <HearderRightSide icon={<FaHome className="fs-4" />} title={"Home"} />
        <HearderRightSide
          icon={<FiUsers className="fs-4" />}
          title={"My Network"}
        />
        <HearderRightSide
          icon={<FaBriefcase className="fs-4" />}
          title={"Jobs"}
        />
        <HearderRightSide
          icon={<FiMessageSquare className="fs-4" />}
          title={"Messaging"}
        />
        <HearderRightSide
          icon={<FaBell className="fs-4" />}
          title={"Notification"}
        />
        <HearderRightSide avatar={""} title={"Me"} />
      </div>
    </div>
  );
};

export default ProfilePageHeader;
