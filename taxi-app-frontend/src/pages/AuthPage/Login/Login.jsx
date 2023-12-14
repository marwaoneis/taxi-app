import React from "react";
import "./style.css";
import { useState } from "react";
import { request } from "../../../core/request_helpers/apicall";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("hello")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  const checkStatus = async (e) => {
    e.preventDefault();
    const response = await request({
      route: "/get-driver-status",
      // method: "GET",
    });
    if (response.status === "success") {
      if (response.driver_status === "pending") {
        console.log("pending");
      } else if (response.driver_status === "accepted") {
        localStorage.setItem(
          "logged-in",
          JSON.stringify(response.authorisation)
        );

        navigate("/driverDashboard");
      } else {
        console.log("rejected");
      }
    } else {
      console.log("12344");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { ...formData };
      const response = await request({
        body: body,
        route: "/login",
        method: "POST",
      });

      if (response.status === "success") {
        if (response.user.user_type_id === 2) {
          localStorage.setItem(
            "logged-in",
            JSON.stringify(response.authorisation)
          );

          navigate("/passengerDashboard");
        } else if (response.success === false) {
          
          try {
            // checkStatus();
          } catch (error) {
            // Log or handle the error as needed
            console.log("login failed:", error.message);
          }
        }
        // localStorage.setItem("logged-in",JSON.stringify(response.authorisation))

        // navigate("/passengerDashboard");
      } else {
        setMessage(response.message)
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      // Log or handle the error as needed
      console.log("login failed:", error.message);
    }
  };
  useEffect(()=>{},[message])
  return (
    <div className="page bg-img flex center">
      <div className="container flex  column">
        <div className="header primary-text">
          <h1>LOG IN</h1>
        </div>
        {message}
        {/* !==''?message:'' */}
        <form
          onSubmit={handleSubmit}
          // method="POST"
          className="login-from flex column center"
        >
          <div className="input-group flex column">
            <label className="input-lable primary-text">Email</label>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group flex column">
            <label className="input-lable primary-text">Passwrod</label>
            <input
              className="login-input"
              type="pasword"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="login-btn white-text">
            Log In
          </button>
        </form>

        <p className="register-redirect primary-text">
          Don't a account?<span className="white-text">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
