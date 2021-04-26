import * as React from "react";
import HomeContainer from "./homeContainer";
import Navbar from "./navbar";

export default function Home() {
  return(
    <div className="home">
      <Navbar/>
      <HomeContainer/>
    </div>
  );
};