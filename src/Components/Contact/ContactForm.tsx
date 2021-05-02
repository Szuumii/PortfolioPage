import * as React from "react";
import ContactInput from "./ContactInput";

export default function ContactForm() {

  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");


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