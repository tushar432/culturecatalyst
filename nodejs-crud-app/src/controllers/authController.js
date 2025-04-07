const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

const users = [
    {
        id: 1,
        username: 'test_user_1'
    },
    {
        id: 2,
        username: 'test_user_2'
    }
];

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ 
        id: user.id,
        role: "user"
    }, 
    config.secret, 
    {
        expiresIn: '1h', 
    });
};

// 1. Register Controller
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username or email already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const savedUser = {
        id: users.length + 1,
        username,
        password: hashedPassword,
    };
    users.push(savedUser);

    // Generate a JWT token
    const token = generateToken(savedUser);

    res.status(201).json({ message: 'User registered successfully!', token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Failed to register user.' });
  }
};

// 2. Login Controller
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body; 

    // Find the user by username 
    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate a new JWT token
    const token = generateToken(user);

    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Failed to login.' });
  }
};

// 3. Logout Controller
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully (client-side action required).' });
};