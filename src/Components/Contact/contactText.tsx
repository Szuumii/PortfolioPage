import * as React from "react";
import Social from "../General/social";

const content = {
  title: "If you have any questions feel free to contact me",
  desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
}

export default function ContactText() {
  return(
    <div className="contact-text">
      <p className="contact-title">{content.title}</p>
      <p className="contact-description">{content.desciption}</p>
      <Social/>
    </div>
  );
};