import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignIn = () => {
  return (
    <>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-white container-fluid">
          <div class="container wrapper">
            <div className="logo d-flex justify-content-center">
              <h1 className="text-primary">Linked</h1>
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
                <button className="py-3 my-2 rounded-pill border d-flex align-items-center justify-content-center">
                  Sign in
                </button>
                <div className="d-flex flex-column align-items-center">
                  <p className="p">or</p>
                </div>
                <button className="py-1  rounded-pill border">
                  <FcGoogle className="pe-2 fs-2" />
                  Sign in with Google
                </button>
                <button className="py-1 my-4 rounded-pill border d-flex align-items-center justify-content-center">
                  <FaApple className="m-2 fs-4" />
                  Sign in with Apple
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
