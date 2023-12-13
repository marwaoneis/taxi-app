import React from "react";
import profile from "../../assets/images/anonymous.png";
import "./style.css";

const Profile = () => {
  return (
    <div className="flex profile-container full-width full-height column">
      <div className="profile-header white-text">
        <h1>My Profile</h1>
      </div>
      <div className="flex profile-bg center column gray-bg ">
        <div className="profile-pic flex center">
          <img src={profile} alt="profile pic" />
        </div>
        <div className="rating"></div>

        <div className="user-info flex column full-height">
          <div className="user-name black-text">Name: </div>
          <div className="email black-text">Email: </div>
          <div className="phone-number black-text">Phone Number: </div>
          <div className="date black-text">Date Joined: </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
