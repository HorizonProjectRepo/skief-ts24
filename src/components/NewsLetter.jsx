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
      const response = await axios.post(
        'https://us14.api.mailchimp.com/3.0/lists/6b37acabd9/members',
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        },
        {
          auth: {
            username: 'anystring',
            password: '40917d6d977e92b107929bed942d3001-us14',
          },
        }
      );
      if (response && response.data) {
        console.log('Subscribed successfully:', response.data);
      } else {
        console.error('Subscription failed. No response data.');
      }
    } catch (error) {
      console.error('Subscription failed:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <form onSubmit={subscribe}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsLetter;
