import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="signup-page p-5">
        <div>
          <div className="signup-box mt-5 px-4">
            <form>
              <h2 className="text-center fw-bold fs-3 mb-5">Sign Up</h2>
              <div className="mb-3">
                <label className="fw-bold mb-2">UserName:</label>
                <input
                  type="text"
                  placeholder="UserName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-2">Email:</label>
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-1">
                <label className="fw-bold mb-2">Password:</label>
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-between ">
                <Link style={{ textDecoration: "none" }} to="/login">
                  <small>Create an account</small>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/home">
                  <small>Go to back</small>
                </Link>
              </div>
              <button className="signup-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
