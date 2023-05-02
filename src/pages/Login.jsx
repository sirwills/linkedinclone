import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <Nav />
      <main className="container-fluid overflow-hidden ">
        <div className="wrapper container">
          <div className="row">
            <div className="col-6">
              <h1 className="my-5">Welcome to your professional community</h1>
              <form className="">
                <div className="details d-flex flex-column w-75">
                  <label htmlFor="Email or phone">Email or phone</label>
                  <input
                    className="py-3 rounded border"
                    type="text"
                    value=""
                    required
                  />
                  <label className="mb-3" htmlFor="password" required>
                    Password
                  </label>
                  <input className="py-3 rounded border" type="password" />
                  <a className="my-3 nav-link" href="forgot-password">
                    Forgot password
                  </a>
                  <input
                    className="py-3 bg-primary rounded-pill border"
                    type="button"
                    value={"Sign in"}
                  />
                  <div className="d-flex flex-column align-items-center">
                    <hr className="h-100 bg-dark" />
                    <p className="p5">or</p>
                  </div>
                  <button className="py-3  rounded-pill border">
                    <FcGoogle className="pe-2 fs-2" />
                    Sign in with Google
                  </button>
                  <button className="py-3 my-4 rounded-pill border">
                    New to Linkedin? Join now
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6 right-side">
              <img src="right.svg" className="" alt="" />
            </div>
          </div>
        </div>
      </main>

      <section className="container-fluid">
        <div className="div container my-5">
          <div className="row">
            <div className="col-5">
              <h1>Find the right job or internship for you</h1>
            </div>
            <div className="col-7">
              <div>
                <h2 className="text-uppercase fs-5">suggested searches</h2>
              </div>
              <div className="">
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Engineering
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Business Development
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Finance
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Administrative Assistant
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Retail Associate
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Customer Service
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Opoerations
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Information Technology
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Marketing
                </button>
                <button className="px-4 py-3 rounded-pill m-2 border border-1 border-dark">
                  Human Resources
                </button>
              </div>
              <button className="px-4 py-2 rounded-pill m-2 border border-1 border-dark">
                Show more
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
