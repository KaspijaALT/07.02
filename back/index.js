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

app.post('/login', async (req, res) => {
  const { email, username, password } = req.body;

  // Using prepared statements to prevent SQL injection
  const query = 'SELECT * FROM users WHERE email = ? AND username = ?';
  try {
    const [rows] = await db.promise().execute(query, [email, username]);
    const user = rows[0];
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Assuming 'password' is the column where you store the hashed passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      // Passwords match
      res.json({ message: 'Login successful' });
      // Here, handle the creation of session or token as per your auth strategy
    } else {
      // Passwords don't match
      res.status(401).json({ message: 'Incorrect username or password' });
    }
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



