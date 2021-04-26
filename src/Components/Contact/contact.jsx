import * as React from "react";
import SectionHeader from "../General/sectionHeader"
import ContactText from "./contactText";
import EmailForm from "./emailForm";
import Footer from "./footer"

export default function Contact() {
  return(
    <div className="contact">
      <SectionHeader sectionName="Contact Me"/>
      <div className="contact-container">
        <ContactText/>
        <EmailForm/>
      </div>
      <Footer/>
    </div>
  );
};