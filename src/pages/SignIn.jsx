import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./signin.css";
const SignIn = () => {
  return (
    <>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-white container-fluid">
          <div class="container wrapper d-flex align-items-center">
            <div className="logo d-flex justify-content-center align-items-center">
              <h1 className="text-primary fw-bold">Linked</h1>
              <a class="navbar-brand" href="/">
                <img src="linkedinlogo.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <main className=" d-flex align-items-center flex-column justify-content-center container-fluid ">
        <div className=" d-flex flex-column align-items-center justify-content-center w-50 ">
          <div className="shadow d-flex flex-column p-3 w-50 rounded">
            <h1 className="fs-4">Sign in</h1>
            <p>Stay updated on your professional world</p>
            <form className="form-flaoting">
              <div className="details d-flex flex-column">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Password</label>
                </div>
                <a href="k" className="mb-2 nav-link text-primary">
                  Forgot password
                </a>
                <button className="py-3 my-1 rounded-pill border d-flex align-items-center justify-content-center">
                  <a href="/ProfileHome">Sign in</a>
                </button>
                <div className="d-flex flex-column align-items-center">
                  <p className="p">or</p>
                </div>
                <button className="py-1  rounded-pill border">
                  <FcGoogle className="pe-2 fs-2" />
                  Sign in with Google
                </button>
                <button className="py-1 my-2 rounded-pill border d-flex align-items-center        justify-content-center">
                  <FaApple className="m-2 fs-5" />
                  Sign in with Apple
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex my-4">
          <p className="me-2">New to Linkedin?</p>{" "}
          <a href="/singup" className="nav-link text-primary">
            {" "}
            Join now
          </a>
        </div>
      </main>

      <div className="container d-flex copyright-area foot">
        <p className="link-text">
          linked
          <img src="linkedinlogo.png" className="img-fluid image" alt="" />
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
    </>
  );
};

export default SignIn;
