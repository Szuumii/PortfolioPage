import * as React from "react";
import Welcome from "./welcome";
import profilePicture from "../../static/images/profilePicture.png"

export default function Landing() {
  return(
    <div className="home-container">
      <Welcome/>
      <div className="profile-picture">
        <img src={profilePicture} className="responsive" alt="Profile Picutre" width="100%" height="auto"/>
      </div>
    </div>
  );
};