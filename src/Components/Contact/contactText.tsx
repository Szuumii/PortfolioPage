import * as React from "react";
import Social from "../General/social";
import useWindowSize from "../hooks/windowSize";

export default function ContactText() {
  const [height, width] = useWindowSize();

  return(
    <div className="contact-text">
      <div className="contact-title">If you have any questions feel free to contact me</div>
      <div className="social-wrapper">
        <Social/>
      </div>
    </div>
  );
};