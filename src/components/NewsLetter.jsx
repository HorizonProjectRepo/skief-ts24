import React, { useState } from 'react';
import axios from 'axios';

const NewsLetter = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://skief-server-main.vercel.app/subscribe', {
        email,
        firstName,
        lastName,
      });

      if (response.data.status === 'subscribed') {
        console.log('Subscribed successfully');
      } else {
        console.error('Mailchimp subscription failed:', response.data);
      }
    } catch (error) {
      console.error('Mailchimp subscription failed:', error);
    }
  };

  return (
    <form onSubmit={subscribe}>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsLetter;
