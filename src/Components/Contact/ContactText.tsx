import * as React from "react";
import Social from "../General/Social";
import useWindowSize from "../hooks/WindowSize";

export default function ContactText() {
  const [height, width] = useWindowSize();

  return(
    <div className="contact__text">
      <div className="contact__text__title">If you have any questions feel free to contact me</div>
        <Social/>
    </div>
  );
};