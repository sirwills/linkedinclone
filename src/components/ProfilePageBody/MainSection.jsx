import React, { useEffect, useState } from "react";
import "./mainsection.css";
import StatusOptions from "./StatusOptions";
import {
  FaBriefcase,
  FaImage,
  FaNewspaper,
  FaPaperPlane,
} from "react-icons/fa";
import Feed from "./feedcomponent/Feed";
import { Avatar } from "@mui/material";
import { db } from "./Base";
import firebase from "firebase/compat/app";
// import { firebase } from "firebase";
// import firebase from "firebase/compat/app";
// import { firestore as db } from "./firebase-config";
// import firebase from "./firebase-config";

function MainSection() {
  const [feeds, setFeed] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    db.collection("feeds").add({
      dname: "Wills Odali",
      ddescription: "this is a test",
      dmessage: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    db.collection("feeds").onSnapshot((onSnapshot) =>
      setFeed(
        onSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data,
        }))
      )
    );
  }, []);

  return (
    <div className="main-section  mx-3">
      <div className="status-wrapper d-flex flex-column">
        <div className="input-container d-flex flex-wrap">
          {/* <img
              src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            /> */}
          <Avatar />
          <form action="">
            <input
              type="text"
              placeholder="Start a post"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button className="btn" type="submit" onClick={handleClick}>
              <FaPaperPlane className="paperPlanebg" />
            </button>
          </form>
        </div>
        <div className="stats-option d-flex justify-content-evenly w-100 mt-3">
          <StatusOptions
            icon={<FaImage className="me-3 text-primary fs-4" />}
            text={"Photo"}
            className=""
          />
          <StatusOptions
            icon={
              <i className="fa-solid fa-video me-3 text-success text-opacity-75 fs-4"></i>
            }
            text={"Video"}
          />
          <StatusOptions
            icon={<FaBriefcase className="me-3 fs-4" />}
            text={"Job"}
          />
          <StatusOptions
            icon={
              <FaNewspaper className="me-3 fs-4 text-danger text-opacity-75" />
            }
            text={"Job"}
          />
        </div>
      </div>
      {feeds.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Feed
          key={id}
          name={name}
          description={description}
          dmessage={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default MainSection;
