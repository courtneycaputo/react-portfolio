import React, { useState } from 'react';

function Contact() {  
    const [formState, setFormState] = useState({
      name: "",
      email:"",
      message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const {name, email, message } = formState;

    const handleSubmit = (event) => {
      event.preventDefault();
      if(!errorMessage) {
        alert("Submit Form")
        console.log("submit form", formState)
      }
    }

    const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return re.test(String(email).toLowerCase())
    }

    const handleChange = (event) => { 
      if(event.target.name === "email") {
        const isValid = validateEmail(event.target.value);
        if(!isValid){
          setErrorMessage("Your email is invalid")
        } else {
          setErrorMessage("");
        }
      } else {
          if(!event.target.value.length) {
            setErrorMessage(`${event.target.name} is required.`)
          } else {
            setErrorMessage("")
          }
          if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value});
            console.log("Handle Form", formState);
          }
      }
  }

  return (
    <div className="container">
      <h1>Contact Page</h1>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>

        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
        </div>

        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>

    </div>
  )
  
}

export default Contact;