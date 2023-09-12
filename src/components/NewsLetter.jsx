import axios from 'axios';
import React, { useState } from 'react';

const NewLetter = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const subscribeToMailchimp = async (email, firstName, lastName) => {
    const API_KEY = '7f35a93617657836059c4f6bf0465da7-us14';
    const LIST_ID = '6b37acabd9';
  
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    };
  
    try {
      const response = await axios.post(
        `https://us14.api.mailchimp.com/3.0/lists/6b37acabd9/members`,
        data,
        {
          headers: {
            Authorization: `apikey ${API_KEY}`,
          },
        }
      );
  
      console.log('Successfully subscribed', response.data);
      // Handle success
    } catch (error) {
      console.error('Error subscribing', error);
      // Handle error
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  subscribeToMailchimp(email, firstName, lastName);
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewLetter;
