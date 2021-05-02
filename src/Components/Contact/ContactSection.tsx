import * as React from "react";
import SectionHeader from "../General/SectionHeader"
import {ContactText} from "./ContactText";
import {Footer} from "./Footer"
import {ContactForm} from "./ContactForm";

export const ContactSection = () => {
  return(
    <div className="contact-section">
      <SectionHeader sectionName="Contact Me"/>
      <div className="contact">
        <ContactText/>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
};