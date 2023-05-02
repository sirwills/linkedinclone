import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid d-flex flex-column justify-content-center bg-secondary w-100">
      <div className=" w-100 d-flex justify-content-center container  py-5 ">
        <div className="row d-flex justify-content-start  w-100">
          <div className="col-3  d-flex justify-content-start  ">
            <div className="d-flex justify-content-start  ">
              <a className="navbar-brand fw-bold fs-5 d-flex" href="/">
                Linked
                <img src="linkedinlogo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex flex-column">
              <p>General</p>
              <a className="nav-link" href="/singup">
                Sign Up
              </a>
              <a className="nav-link" href="/singup">
                Help Center
              </a>
              <a className="nav-link" href="/singup">
                About
              </a>
              <a className="nav-link" href="/singup">
                Press
              </a>
              <a className="nav-link" href="/singup">
                Blog
              </a>
              <a className="nav-link" href="/singup">
                Careers
              </a>
              <a className="nav-link" href="/singup">
                Developers
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex flex-column">
              <p>Browse LinkedIn</p>
              <a className="nav-link" href="/singup">
                Learning
              </a>
              <a className="nav-link" href="/singup">
                Jobs
              </a>
              <a className="nav-link" href="/singup">
                Salary
              </a>
              <a className="nav-link" href="/singup">
                Mobile
              </a>
              <a className="nav-link" href="/singup">
                Service
              </a>
              <a className="nav-link" href="/singup">
                Products
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex flex-column">
              <p>Business Solutions</p>
              <a className="nav-link" href="/singup">
                Talent
              </a>
              <a className="nav-link" href="/singup">
                Marketing
              </a>
              <a className="nav-link" href="/singup">
                Sales
              </a>
              <a className="nav-link" href="/singup">
                Learning
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-column">
              <p>Directories</p>
              <a className="nav-link" href="/singup">
                Members
              </a>
              <a className="nav-link" href="/singup">
                Jobs
              </a>
              <a className="nav-link" href="/singup">
                Companies
              </a>
              <a className="nav-link" href="/singup">
                Featured
              </a>
              <a className="nav-link" href="/singup">
                Learning
              </a>
              <a className="nav-link" href="/singup">
                Posts
              </a>
              <a className="nav-link" href="/singup">
                Articles
              </a>
              <a className="nav-link" href="/singup">
                Schools
              </a>
              <a className="nav-link" href="/singup">
                News
              </a>
              <a className="nav-link" href="/singup">
                News Letters
              </a>
              <a className="nav-link" href="/singup">
                Services
              </a>
              <a className="nav-link" href="/singup">
                Products
              </a>
              <a className="nav-link" href="/singup">
                Advice
              </a>
              <a className="nav-link" href="/singup">
                People Search
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex copyright-area mt-3">
        <p>
          linked <img src="linkedinlogo.png" alt="" />
        </p>
        <p> &copy; 2023</p>
        <p>About</p>
        <p>Accessibilty</p>
        <p>User Agreement</p>
        <p>Private Policy</p>
        <p>Cookie Ploicy</p>
        <p>Copyright Policy</p>
        <p>Brand Policy</p>
        <p>Guest Controls</p>
        <p>Community Guidlines</p>
        <p
          className="nav-link dropdown-toggle"
          href="a"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Languages
          <span>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="n">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="n">
                  Another action
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="h">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
