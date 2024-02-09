import React, { useState } from 'react';
import Axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // Assuming you have a username field in your database.
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Update the URL to match the endpoint provided by your Express server.
      const response = await Axios.post('http://localhost:5000/register', {
        email,
        username, // Make sure your backend handles the username as well.
        password
      });
      // Handle response here. E.g., set user context, redirect, etc.
      alert('Registration successful!');
    } catch (error) {
      // Handle error here. E.g., show error message to user.
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="signupForm">
        <h4>Register Here</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            className="textInput"
            type="text"
            name="email"
            placeholder="Enter your Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            className="textInput"
            type="text"
            name="username"
            placeholder="Enter your Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="textInput"
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="button"
            type="submit"
            value="Create an account"
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
