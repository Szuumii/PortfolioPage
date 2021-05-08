import React from "react";
import profilePicture from "../../static/images/profilePicture.png"

export const ProfilePicture = () => {
  return(
    <div className="profile-picture">
        <img src={profilePicture} alt="Profile Picutre" width="auto" height="100%"/>
    </div>
  );
};