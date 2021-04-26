import * as React from "react";

export default function EmailForm() {

  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");


  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Submit");
  }

  return(
        <form className='contact-form' onSubmit={() => handleSubmit}>
          <input
            className='form-email'
            type='text'
            id='email'
            name='email'
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='form-subject'
            type='subject'
            id='subject'
            name='subject'
            value={subject}
            placeholder="subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            className='form-message'
            type='message'
            id='message'
            name='message'
            value={message}
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-form" type='submit'>Send</button>
        </form>
  );
};