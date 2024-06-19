const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Load environment variables
dotenv.config();
const dbConfig= require('./config/dbConfig');

// Initialize Express app
const app = express();
// to destructure json format sent by login, signup
app.use(express.json())
//if api req is coming with api/user go and search in userRoute
app.use('/api/user', require('./routes/UserRoute'))

// Define the port
const port = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
