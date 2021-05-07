import React, {useEffect, useState} from "react";
import {SectionHeader} from "../General/SectionHeader"
import {ContactText} from "./ContactText";
import {Footer} from "./Footer"
import {ContactForm} from "./ContactForm";
import { Popup } from "./Popup";

export const ContactSection = () => {
  

  const [showPopup, setShowPopup] = useState(false);

  const toggle = () => {
    setShowPopup(!showPopup);
  }

  useEffect(() => {
    setTimeout(() => { setShowPopup(false)}, 3000);
  }, [showPopup])


  return(
    <div className="contact-section">
      <SectionHeader sectionName="Contact Me"/>
      <div className="contact">
        <ContactText/>
        <ContactForm showPopup={showPopup} toggle={toggle}/>
        {showPopup && <Popup/>}
      </div>
      <Footer/>
    </div>
  );
};