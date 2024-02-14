import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        toast.success('Subscribed!');
      } else {
        toast.error('Subscription failed, try again!');
      }
    } catch (error) {
      toast.error('Subscription failed, try again!');
    }
    setFirstName('')
    setLastName('')
    setEmail('')
  };

  return (
    <form onSubmit={subscribe}>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
        <div className='w-[90%] sm:w-[384px]'>
          <div className='flex flex-col gap-3'>
            <label>Name</label>
            <input className='text-black rounded-md p-3 w-full sm:w-96' name="name" type="text" value={firstName} onChange={handleFirstNameChange} />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='mt-3'>Address</label>
            <input className='text-black rounded-md p-3 w-full sm:w-96' name="address" type="text" value={lastName} onChange={handleLastNameChange} />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='mt-3'>Email</label>
            <input className='text-black rounded-md p-3 w-full sm:w-96' name="email" type="email" value={email} onChange={handleEmailChange} />
          </div>
          <button className='mt-4 bg-[#1d23ee] p-3 rounded-md text-xl font-semibold hover:bg-white hover:text-blue-950' type="submit">Subscribe</button>

        </div>
        <div className=''>
          <iframe className='w-80 md:w-96 h-72 rounded-md' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8991.868223120673!2d9.5180556!3d55.7069444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c825c06efa945%3A0xbea002bd0b4e2a96!2sDGI%20Huset%20Vejle!5e0!3m2!1sen!2sbd!4v1693902257627!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </form>
  );
};

export default NewsLetter;
