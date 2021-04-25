import * as React from "react";
import Landing from "./landing";
import Navbar from "./navbar";

export default function Home() {
  return(
    <div className="home">
      <Navbar/>
      <Landing/>
    </div>
  );
};