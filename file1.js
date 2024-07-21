// Import express
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page that displays group names
app.get('/', (req, res) => {
    res.send('<h1>Group Members</h1><ul><li>PIYUSH</li><li>AKHIL SABHARBAL</li></ul>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
