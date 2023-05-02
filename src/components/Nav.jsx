import React from "react";
import "./nav.css";
import { FaCompass, FaUsers, FaPlay, FaBriefcase } from "react-icons/fa";
// import { IoMdPeople } from "react-icons/im";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid">
      <div class="container wrapper">
        <div className="logo d-flex">
          <h1>Linked</h1>
          <a class="navbar-brand" href="/">
            <img src="linkedinlogo.png" alt="" />
          </a>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav ms-auto  my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-center align-items-center">
            <li class="nav-item mx-2">
              <a
                class="nav-link d-flex flex-column justify-content-center align-items-center"
                aria-current="page"
                href="/"
              >
                <FaCompass className="fs-4" />
                Discover
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link d-flex flex-column justify-content-center align-items-center"
                href="/"
              >
                <FaUsers className="fs-4" />
                People
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link d-flex flex-column justify-content-center align-items-center"
                href="/"
              >
                <FaPlay className="fs-4" />
                Learning
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link d-flex flex-column justify-content-center align-items-center"
                href="/"
              >
                <FaBriefcase className="fs-4" />
                Job
              </a>
            </li>
          </ul>

          {/* <div className="hr h-100 d-flex w-100 ">
            <hr className="d-flex " />
          </div> */}
          <p className="fw-semi-bold mx-3">Join now</p>
          <button className="sign-in-btn " type="submit">
            <a href="/SignIn" className="nav-link">
              Sign in
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
