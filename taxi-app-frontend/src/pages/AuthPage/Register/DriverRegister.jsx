import React from "react";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";
import { request } from "../../../core/request_helpers/apicall";

const DriverRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    user_type_id: 3,
    profile_picture: "",
    driving_license: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...formData };
      const response = await request({
        body: body,
        route: "/register",
        method: "POST",
      });

      if (response.status === "success") {
        localStorage.setItem("logged-in",JSON.stringify(response.authorisation))
      } else {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone_number: "",
          user_type_id: 3,
          profile_picture: "",
          driving_license: "",
        });
      }
    } catch (error) {
      // Log or handle the error as needed
      console.log("Registration failed:", error.message);
    }
  };

  return (
    <div>
      <div className="driver-register-page page flex center column black-bg">
        <div className="container flex  column">
          <div className="headings flex center column">
            <h1 className="primary-text">REGISTER</h1>

            <img src={logo} alt="logo" className="logo" />
          </div>
          <form encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="register-form flex center wrapper "
          >
            <div className="input-group flex column ">
              <label className="primary-text">First Name*</label>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Last Name*</label>
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Email*</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group upload flex column white-bg">
              <label className="primary-text">
                Upload Profile Picture*
                <input
                  className="pp-input"
                  type="file"
                  name="profile_picture"
                  value={formData.profile_picture}
                  onChange={handleInputChange}
                  // required
                />
              </label>
            </div>

            <div className="input-group upload flex column white-bg">
              <label className="primary-text">Upload Driving License*</label>
              <input
                type="file"
                placeholder="file"
                name="driving_license"
                value={formData.driving_license}
                onChange={handleInputChange}
                // required
              />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">Phone Number*</label>
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group flex column">
              <label className="primary-text">*</label>
              <button
                className="primary-bg white-text reg-button"
                type="submit"
              >
                Register
              </button>
            </div>

            <p className="login-redirect primary-text">
              Already have an account?{" "}
              <span className="white-text">Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriverRegister;
