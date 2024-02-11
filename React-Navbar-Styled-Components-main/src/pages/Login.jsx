import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: "url('https://ogroup.com/wp-content/uploads/2023/10/22-Old-Ranch-Road-115-1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/login', {
        email, // Assuming your backend expects email
        username, // Assuming your backend expects username
        password
      });
      // If the server response includes success
      console.log(response.data); // Log the server response
      navigate('/dashboard'); // Navigate to dashboard on success
    } catch (error) {
      if (error.response) {
        // Handle errors from server response
        alert(`Login failed: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Login failed: No response received', error.request);
      } else {
        // Something else caused the request to fail
        console.log('Login error:', error.message);
      }
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', margin: '0 0 20px' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', margin: '20px 0' }}
          >
            Login
          </button>
        </form>
        <div style={{ textAlign: 'center' }}>
          {/* Use Link from react-router-dom instead of <a href> for internal routing */}
          <Link to="/signup" style={{ textDecoration: 'none', color: 'blue' }}>Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
