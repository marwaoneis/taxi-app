import React, { useEffect, useState } from "react";
import profile from "../../assets/images/anonymous.png";
import Dashboard from "../Dashboard/Dashboard";
import "./style.css";
import { request } from "../../core/request_helpers/apicall";

const Profile = () => {
    const [user,setUser]=useState('')

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const responseUser = await request({
          route: "get-user-info",
        });
        setUser(responseUser.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails();
  }, []);
  console.log(user);
  return (
    <div className="comp-container full-width full-height primary-bg">
      <div className="flex row">
        <Dashboard />

        <div className="padding-10 profile-con flex center column full-width ">
          <div className="title-header flex white-text">
            <h1 className="mt-20">My Profile</h1>
          </div>
          <div className="flex profile-bg center column gray-bg">
            <div className="profile-pic flex center">
              <img src={profile} alt="profile pic" />
            </div>
            <div className="rating"></div>

            <div className="user-info flex column full-height">
              <div className="user-name black-text">Name:{user.first_name} {user.last_name} </div>
              <div className="email black-text">Email: {user.email}</div>
              <div className="phone-number black-text">Phone Number: {user.phone_number}</div>
              {/* <div className="date black-text">Date Joined: {user.first_name}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
