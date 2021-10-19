import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-page p-5">
      <div>
        <div className="login-box mt-5 px-4">
          <form>
            <h2 className="text-center fw-bold fs-3 mb-5">Login</h2>
            <div className="mb-3">
              <label className="fw-bold mb-2">Email:</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-1">
              <label className="fw-bold mb-2">Password:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="d-flex justify-content-between ">
              <Link style={{ textDecoration: "none" }} to="/signup">
                <small>Already have an account</small>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/home">
                <small>Go to back</small>
              </Link>
            </div>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
