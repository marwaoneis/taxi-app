import React from "react";
import profile from "../../assets/images/anonymous.png";
import "./style.css";

const Profile = () => {
  return (
    <div className="flex profile-container center column">
      <div className="title-header white-text">
        <h1>My Profile</h1>
      </div>
      <div className="flex">
        <div className="profile-pic">
          <img src={profile} alt="profile pic" />
        </div>
        <div className="rating"></div>
      </div>
      <div className="user-info flex column gray-bg full-width full-height">
        <div className="user-name black-text">Name: </div>
        <div className="email black-text">Email: </div>
        <div className="phone-number black-text">Phone Number: </div>
        <div className="date black-text">Date Joined: </div>
      </div>
    </div>
  );
};

export default Profile;
