import React, {useState} from "react";
import {ContactInput} from "./ContactInput";

export const ContactForm = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Submit");
  }

  return(
        <form className='contact__form' onSubmit={() => handleSubmit}>
          <ContactInput type={"email"} value={email} onChange={setEmail}/>
          <ContactInput type={"subject"} value={subject} onChange={setSubject}/>
          <ContactInput type={"message"} value={message} onChange={setMessage}/>
          <button className="contact__form__btn" type='submit'>Send</button>
        </form>
  );
};