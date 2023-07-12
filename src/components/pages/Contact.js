import React, { useState } from 'react';
import './contact-form.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    // Send form data to the backend server for email processing
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    const emailUrl = `mailto:jmac3292@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      JSON.stringify(formData, null, 2)
    )}`;

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>If you would like to connect or reach me, feel free to fill out the form below to send me an email.</p>
        <p>You can also email me directly at: johnathanmmcgown@gmail.com or you can call me at 913-314-6722.</p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;