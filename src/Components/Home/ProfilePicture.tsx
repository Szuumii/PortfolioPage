import React from "react";
import profilePicture from "../../static/images/profilePicture.jpg"

export const ProfilePicture = () => {
  return(
    <div className="profile-picture">
        <img src={profilePicture} alt="Profile Picutre" width="100%" height="auto"/>
    </div>
  );
};