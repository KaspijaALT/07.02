// Import necessary modules
import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cors from 'cors';

// Create Express app
const app = express();

// Create MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pilgrimest'
});

// Connect to MySQL database
db.connect((error) => {
  if (error) {
    console.log('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database...');
  }
});

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Registration endpoint
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;

  // Check if user with the provided email already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    if (error) {
      console.error('Error checking for existing user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    try {
      // Hash the password
      const saltRounds = 10; // Number of salt rounds for bcrypt
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Insert user into the database
      db.query('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hashedPassword], (error, results) => {
        if (error) {
          console.error('Error registering user:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (hashError) {
      console.error('Error hashing password:', hashError);
      return res.status(500).json({ message: 'Internal server error while hashing password' });
    }
  });
});

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
