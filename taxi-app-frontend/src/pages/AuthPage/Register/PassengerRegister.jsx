import React from "react";
import "./style.css";
import logo from "../../../assets/images/logo.svg";
import { useState , useEffect } from "react";
import { request } from "../../../core/request_helpers/apicall";


const PassengerRegister = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
   phone_number: '',
   user_type_id: 2
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


 
  const handleSubmit = async () => { 
    try{
      const body = { ...formData };
    const response = await request({
      body: body,
      route: "/register",
      method: "POST",
    });
    
    if (response.data.status === "true") {
      console.log(response.data);
      // navigate("/auth/login");
    } else {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        user_type_id: 2
      });
    }
    }catch (error) {
      // Log or handle the error as needed
      console.error('Registration failed:', error.message);
    }
    
  };

 

  return (
    <div className="passenger-register-page page flex center column black-bg">
      <div className="container flex  column">
        <div className="passenger-headings flex center column">
          <h1 className="primary-text">REGISTER</h1>

          <img src={logo} alt="logo" className="logo" />
        </div>
        <form method="POST" className="register-form flex center wrapper ">
          <div className="input-group flex column ">
            <label className="primary-text">First Name*</label>
            <input type="text" placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleInputChange} required/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Last Name*</label>
            <input type="text" placeholder="Last Name" name="last_name" value={formData.last_name} onChange={handleInputChange} required/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Email*</label>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Password</label>
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} required/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">Phone Number*</label>
            <input type="tel" placeholder="Phone Number" name="phone_number" value={formData.phone_number} onChange={handleInputChange} required/>
          </div>

          <div className="input-group flex column">
            <label className="primary-text">*</label>
            <button className="primary-bg white-text reg-button" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="login-redirect primary-text">
            Already have an account? <span className="white-text">Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassengerRegister;
