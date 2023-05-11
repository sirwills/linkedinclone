import React from "react";
import ProfilePageHeader from "../components/profilePageHeader/ProfilePageHeader";
import SideBar from "../components/ProfilePageBody/SideBar";
import MainSection from "../components/ProfilePageBody/MainSection";
import Widget from "../components/ProfilePageBody/Widget";
import "./profilehome.css";

const ProfileHome = () => {
  return (
    <div className="body">
      <ProfilePageHeader />
      <div className="body d-flex justify-content-between container mt-4">
        <SideBar />
        <MainSection />
        <Widget />
      </div>
    </div>
  );
};

export default ProfileHome;
