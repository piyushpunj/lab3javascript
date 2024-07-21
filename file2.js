// Import express
const express = require('express');
const app = express();
const port = 3000;

// Import file system module to read data.json
const fs = require('fs');

// Define a route to display the JSON content
app.get('/data', (req, res) => {
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
