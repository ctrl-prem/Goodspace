const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Define routes (example)
app.get('/', (req, res) => {
  res.send('Hello, this is your Express backend!');
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
