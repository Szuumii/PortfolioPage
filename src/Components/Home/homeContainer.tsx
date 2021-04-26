import * as React from "react";
import HomeContent from "./homeContent";
import ProfilePicture from "./profilePicture";

export default function HomeContainer() {
  return(
    <div className="home-container">
      <HomeContent/>
      <ProfilePicture/>
    </div>
  );
};