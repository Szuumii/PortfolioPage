import React, {FC, useState} from "react";
import { db } from "../General/firebase";
import {ContactInput} from "./ContactInput";

interface Props {
  showPopup: boolean,
  toggle: () => void
}

export const ContactForm:FC<Props> = ({toggle, showPopup}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // db.collection("contacts").add({
    //   name,
    //   email,
    //   message
    // })
    // .then(() => {
    //   alert("Your message has been submitted!");
    // })
    // .catch(error => {
    //   alert(error.message);
    // })

    toggle();

    console.log("ELooo");
  }

  return(
        <form className='contact__form' onSubmit={handleSubmit}>
          <ContactInput type={"name"} value={name} onChange={setName}/>
          <ContactInput type={"email"} value={email} onChange={setEmail}/>
          <ContactInput type={"message"} value={message} onChange={setMessage}/>
          <button className="contact__form__btn" disabled={showPopup} type='submit'>Send</button>
        </form>
  );
};