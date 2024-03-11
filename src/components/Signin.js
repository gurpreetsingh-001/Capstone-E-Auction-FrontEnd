import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import API from "../connection/connection";
import UserContext from "../contexts/UserContext";
export default function Signin() {
  const Uctx = useContext(UserContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [userdetail, setUserDetail] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  useEffect(() => {
    async function fetchdata() {
      const token = localStorage.getItem("token");

      if (!token) {
        return; // Skip redirect if no token
      }

      try {
        const response = await axios.get(`${API}/isloggedin/`, {
          headers: { Authorization: token },
        });

        if (response.status === 200) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchdata();
  }, []);

  function handleChange(event) {
    setUserDetail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(userdetail);
  }
  async function submit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(`${API}/user/login`, userdetail);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.message);
        Uctx.setIsAuthenticated(true);
        
        
        if (state != null && state?.redirecturl !== "") {
          navigate(state.redirecturl);
        } else {
          navigate("/dashboard");
        }
        //  navigate('/dashboard')
      }

      setError(true);
      setErrorMsg(response.data.message);
    } catch (error) {
      console.log(error);
      setError(true);
      setErrorMsg(error.message);
    }
  }
  return (
    <>
      <section className="account-section padding-bottom">
        <div className="container">
          <div className="account-wrapper ">
            <div className="left-side">
              <div className="section-header">
                <h2 className="title">HI, THERE</h2>
                <p>You can log in to your E-Auction account here.</p>
              </div>
              {/* <ul className="login-with">
                        <li>
                            <a href="#0"><i className="fab fa-facebook"></i>Log in with Facebook</a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-google-plus"></i>Log in with Google</a>
                        </li>
                    </ul> */}
              <div className="or">
                <span>Or</span>
              </div>
              <form className="login-form">
                <div className="form-group mb-30">
                  <label>
                    <i className="far fa-envelope"></i>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <span className="pass-type">
                    <i className="fas fa-eye"></i>
                  </span>
                </div>
                <div className="form-group mt-3 mb-3">
                  <a href="#0">Forgot Password?</a>
                </div>
                <div className="form-group mb-0">
                  <button
                    onClick={submit}
                    type="submit"
                    className="custom-button"
                  >
                    LOG IN
                  </button>
                </div>
                {error && <div style={{ color: "red" }}>{errorMsg}</div>}
              </form>
            </div>
            <div className="right-side cl-white">
              <div className="section-header mb-0">
                <h3 className="title mt-0">NEW HERE?</h3>
                <p>Sign up and create your Account</p>
                <Link to="/signup" className="custom-button transparent">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
