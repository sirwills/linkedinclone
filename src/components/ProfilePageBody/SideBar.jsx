import React from "react";
import "./sidebar.css";
import { FaIdBadge } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt=""
      />
      <div className="sideBarTop">
        <img
          src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <h2 className="username">Odali Wills</h2>
        <p className="user-info">
          FULLSTACK DEVELOPER | HTML | CSS | SASS | BOOTSTRAP | JAVASCRIPT |
          REACT JS | NODE JS #webdeveloper #responsivewebdeveloper
        </p>
      </div>

      <div className="connections-stat align-items-start">
        <div className="connection d-flex">
          <div className="connect-numb">
            <p className="connection-text">Connections</p>
            <p className="grow-network-text">Grow your network</p>
          </div>
          <p className="numb"> 18</p>
        </div>
      </div>

      <div className="insight">
        <p className="access-text">Access exclusive tools and insights</p>
        <a href="/">
          <FaIdBadge /> Get hired fater, try premium free
        </a>
      </div>
    </div>
  );
};

export default SideBar;
